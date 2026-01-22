import Link from 'next/link';
import { ArrowLeft, Wallet, Download, CheckCircle, ExternalLink } from 'lucide-react';

export default function WalletSetup() {
  return (
    <div>
      <Link href="/docs" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#666666', textDecoration: 'none', marginBottom: 32, fontSize: 14 }}>
        <ArrowLeft style={{ width: 16, height: 16 }} /> Back to Docs
      </Link>

      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Wallet Setup</h1>
      <p style={{ fontSize: 18, color: '#666666', marginBottom: 48, lineHeight: 1.6 }}>
        Connect your Phantom wallet to start using WankCoin. Phantom is the most popular Solana wallet with over 3 million users.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Download style={{ width: 24, height: 24, color: '#F7931A' }} />
            <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000' }}>Install Phantom Wallet</h2>
          </div>
          <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 24 }}>
            Phantom is a secure, user-friendly wallet for Solana. Here's how to get started:
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#000000' }}>Step 1: Download Phantom</h3>
              <p style={{ fontSize: 15, color: '#555555', marginBottom: 16, lineHeight: 1.6 }}>
                Visit the official Phantom website and install the browser extension:
              </p>
              <a 
                href="https://phantom.app" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: 8, 
                  backgroundColor: '#F7931A', 
                  color: '#ffffff', 
                  padding: '12px 24px', 
                  borderRadius: 8, 
                  textDecoration: 'none', 
                  fontWeight: 600,
                  fontSize: 15
                }}
              >
                Download Phantom <ExternalLink style={{ width: 16, height: 16 }} />
              </a>
            </div>

            <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#000000' }}>Step 2: Create Your Wallet</h3>
              <ol style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Click "Create New Wallet" in the Phantom extension',
                  'Write down your seed phrase (12 words) in a secure location',
                  'Never share your seed phrase with anyone',
                  'Set a strong password for your wallet'
                ].map((step, i) => (
                  <li key={i} style={{ fontSize: 15, color: '#555555', lineHeight: 1.6 }}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#000000' }}>Step 3: Fund Your Wallet</h3>
              <p style={{ fontSize: 15, color: '#555555', marginBottom: 12, lineHeight: 1.6 }}>
                You'll need SOL (Solana's native token) to pay for transactions and generate WankCards:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Buy SOL on an exchange (Coinbase, Binance, etc.)',
                  'Send SOL to your Phantom wallet address',
                  'Or use a credit card directly in Phantom (if available in your region)'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'start', gap: 12 }}>
                    <span style={{ color: '#F7931A', fontWeight: 700, marginTop: 2 }}>•</span>
                    <span style={{ fontSize: 15, color: '#555555' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Wallet style={{ width: 24, height: 24, color: '#F7931A' }} />
            <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000' }}>Connect to WankCoin</h2>
          </div>
          <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 24 }}>
            Once your wallet is set up, connecting to WankCoin is simple:
          </p>
          
          <div style={{ backgroundColor: '#FFF3E0', borderRadius: 12, padding: 24, border: '1px solid #F7931A' }}>
            <ol style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Go to wankcoin.pro/dashboard',
                'Click "Connect Wallet" button',
                'Select your Phantom wallet from the popup',
                'Approve the connection request',
                'You\'re ready to generate cards!'
              ].map((step, i) => (
                <li key={i} style={{ fontSize: 15, color: '#555555', lineHeight: 1.6 }}>
                  <strong style={{ color: '#F7931A' }}>Step {i + 1}:</strong> {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000', marginBottom: 16 }}>Security Tips</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#000000' }}>✅ Do</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Store seed phrase offline',
                  'Use hardware wallet for large amounts',
                  'Verify website URL (wankcoin.pro)',
                  'Check transaction details before confirming'
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: 14, color: '#555555', display: 'flex', alignItems: 'start', gap: 8 }}>
                    <CheckCircle style={{ width: 16, height: 16, color: '#22c55e', flexShrink: 0, marginTop: 2 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: '#FEE2E2', borderRadius: 12, padding: 20, border: '1px solid #EF4444' }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#000000' }}>❌ Don't</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Share your seed phrase',
                  'Screenshot your private keys',
                  'Connect to unknown websites',
                  'Approve suspicious transactions'
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: 14, color: '#555555', display: 'flex', alignItems: 'start', gap: 8 }}>
                    <span style={{ color: '#EF4444', fontWeight: 700 }}>✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

