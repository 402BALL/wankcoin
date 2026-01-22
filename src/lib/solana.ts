import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

// Multiple RPC endpoints with fallback (more reliable ones first)
const RPC_ENDPOINTS = [
  'https://rpc.ankr.com/solana',
  'https://solana-api.projectserum.com',
  'https://solana.public-rpc.com',
  'https://api.mainnet-beta.solana.com',
];

// Helper function to add timeout to promises
function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), timeoutMs)
    )
  ]);
}

// Try to get balance from multiple RPC endpoints
// Returns 0 if all endpoints fail (non-blocking)
async function getBalanceWithFallback(publicKey: PublicKey, silent = false): Promise<number> {
  for (const endpoint of RPC_ENDPOINTS) {
    try {
      const connection = new Connection(endpoint, 'confirmed');
      // Add 3 second timeout for each request (reduced from 5)
      const balance = await withTimeout(
        connection.getBalance(publicKey),
        3000
      );
      return balance / LAMPORTS_PER_SOL;
    } catch (err: any) {
      if (!silent) {
        console.warn(`Failed to get balance from ${endpoint}:`, err.message);
      }
      // Continue to next endpoint
      continue;
    }
  }
  
  // If all endpoints failed, return 0 instead of throwing
  // This allows the wallet to connect even if balance fetch fails
  if (!silent) {
    console.warn('Failed to get balance from all RPC endpoints. Returning 0. Balance will be updated when available.');
  }
  return 0;
}

export interface WalletInfo {
  publicKey: PublicKey | null;
  connected: boolean;
  balance: number;
}

export async function connectPhantom(): Promise<WalletInfo> {
  if (typeof window === 'undefined') {
    throw new Error('This function must be called in the browser');
  }

  // Check for Phantom wallet
  const provider = window.solana || (window as any).phantom;
  
  if (!provider || !provider.isPhantom) {
    throw new Error('Phantom wallet not found. Please install Phantom extension from https://phantom.app');
  }

  try {
    // Request connection
    const resp = await provider.connect({ onlyIfTrusted: false });
    
    if (!resp || !resp.publicKey) {
      throw new Error('Connection was rejected or failed');
    }

    const publicKey = new PublicKey(resp.publicKey.toString());
    
    // Get balance with fallback (non-blocking - returns 0 if fails)
    // Balance will be updated later via useEffect
    let solBalance = 0;
    try {
      solBalance = await getBalanceWithFallback(publicKey, true); // Silent mode for initial connection
    } catch (err) {
      // Ignore balance errors during connection - not critical
      console.warn('Could not fetch initial balance, will retry later:', err);
    }

    return {
      publicKey,
      connected: true,
      balance: solBalance
    };
  } catch (err: any) {
    if (err.code === 4001) {
      throw new Error('User rejected the connection request');
    }
    // Don't throw balance errors - only connection errors
    if (err.message && !err.message.includes('balance') && !err.message.includes('fetch')) {
      throw new Error(err.message);
    }
    throw new Error('Failed to connect to Phantom wallet. Please make sure Phantom is installed and unlocked.');
  }
}

export async function disconnectPhantom(): Promise<void> {
  if (typeof window === 'undefined') return;
  
  const provider = window.solana || (window as any).phantom?.solana;
  if (provider) {
    try {
      await provider.disconnect();
    } catch (err) {
      console.error('Error disconnecting:', err);
    }
  }
}

export async function getBalance(publicKey: PublicKey): Promise<number> {
  return await getBalanceWithFallback(publicKey, false);
}

declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean;
      connect: (options?: { onlyIfTrusted?: boolean }) => Promise<{ publicKey: PublicKey }>;
      disconnect: () => Promise<void>;
      on: (event: string, callback: (args: any) => void) => void;
      removeListener: (event: string, callback: (args: any) => void) => void;
      publicKey?: PublicKey | null;
    };
    phantom?: {
      solana?: {
        isPhantom?: boolean;
        connect: (options?: { onlyIfTrusted?: boolean }) => Promise<{ publicKey: PublicKey }>;
        disconnect: () => Promise<void>;
        on: (event: string, callback: (args: any) => void) => void;
        removeListener: (event: string, callback: (args: any) => void) => void;
        publicKey?: PublicKey | null;
      };
    };
  }
}

