'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Wallet, 
  CreditCard, 
  Plus, 
  Copy, 
  Check, 
  ArrowRight,
  Flame,
  RefreshCw,
  X,
  Eye,
  EyeOff,
  ExternalLink,
  TrendingUp,
  History,
  Settings,
  Zap,
  Shield,
  BarChart3,
  Home,
  Bell,
  User,
  ArrowDown,
  ArrowLeftRight,
  Repeat,
  Users,
  Gift,
  FileText
} from 'lucide-react';
import { connectPhantom, disconnectPhantom, getBalance, type WalletInfo } from '@/lib/solana';
import { PublicKey } from '@solana/web3.js';

// Platform Icons
const OnlyFansIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#00AFF0"/>
    <path d="M12 6C8.69 6 6 8.69 6 12s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#FFFFFF"/>
    <circle cx="12" cy="12" r="3" fill="#00AFF0"/>
  </svg>
);

const PornHubIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="2" fill="#FF9000"/>
    <path d="M5 7h14v2H5V7zm0 3h14v1.5H5V10zm0 2.5h10v1.5H5v-1.5z" fill="#000000"/>
    <circle cx="18.5" cy="13.5" r="2" fill="#000000"/>
  </svg>
);

const FanslyIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#0099FF"/>
    <path d="M12 4L4 8l8 4 8-4-8-4z" fill="#FFFFFF"/>
    <path d="M4 12l8 4 8-4M4 16l8 4 8-4" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
  </svg>
);

const ChaturbateIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="12" rx="2" fill="#F47321"/>
    <circle cx="9" cy="11" r="1.5" fill="#FFFFFF"/>
    <circle cx="15" cy="11" r="1.5" fill="#FFFFFF"/>
    <path d="M7 17h10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="7" r="2.5" fill="#FF0000"/>
    <circle cx="20" cy="7" r="1.5" fill="#FFFFFF"/>
  </svg>
);

const ManyVidsIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#8B5CF6"/>
    <path d="M9 16l-4-4 1.5-1.5L9 13l6.5-6.5L17 8l-8 8z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.5"/>
  </svg>
);

const OtherIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#666666" strokeWidth="2" fill="none"/>
    <path d="M12 3a9 9 0 0 0 3 6 9 9 0 0 0-3 6M12 3a9 9 0 0 1-3 6 9 9 0 0 1 3 6" stroke="#666666" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="3" r="1.5" fill="#666666"/>
    <circle cx="12" cy="21" r="1.5" fill="#666666"/>
    <circle cx="3" cy="12" r="1.5" fill="#666666"/>
    <circle cx="21" cy="12" r="1.5" fill="#666666"/>
  </svg>
);

const platforms = [
  { id: 'onlyfans', name: 'OnlyFans', Icon: OnlyFansIcon, desc: 'Creator subscriptions', color: '#00AFF0' },
  { id: 'pornhub', name: 'PornHub', Icon: PornHubIcon, desc: 'Premium content', color: '#FF9000' },
  { id: 'fansly', name: 'Fansly', Icon: FanslyIcon, desc: 'Creator content', color: '#0099FF' },
  { id: 'chaturbate', name: 'Chaturbate', Icon: ChaturbateIcon, desc: 'Live shows', color: '#F47321' },
  { id: 'manyvids', name: 'ManyVids', Icon: ManyVidsIcon, desc: 'Custom content', color: '#8B5CF6' },
  { id: 'other', name: 'Other', Icon: OtherIcon, desc: 'Any Visa site', color: '#666666' },
];

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, active: true },
  { id: 'cards', label: 'Virtual cards', icon: CreditCard, active: false },
  { id: 'transactions', label: 'Transactions', icon: History, active: false },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, active: false },
  { id: 'history', label: 'Operation history', icon: FileText, active: false },
  { id: 'users', label: 'Manage users', icon: Users, active: false },
];

export default function Dashboard() {
  const [walletInfo, setWalletInfo] = useState<WalletInfo>({
    publicKey: null,
    connected: false,
    balance: 0
  });
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [cardAmount, setCardAmount] = useState(25);
  const [generatedCard, setGeneratedCard] = useState<{number: string, exp: string, cvv: string, limit: number} | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showTopUp, setShowTopUp] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [payWith, setPayWith] = useState<'wkc' | 'sol'>('sol');
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [cards, setCards] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hasPhantom, setHasPhantom] = useState(false);

  // User data storage key based on wallet address
  const getUserDataKey = (address: string) => `wankcoin_user_${address}`;

  // Load user data from localStorage
  const loadUserData = (address: string) => {
    if (typeof window === 'undefined') return { cards: [], transactions: [] };
    try {
      const data = localStorage.getItem(getUserDataKey(address));
      if (data) {
        return JSON.parse(data);
      }
    } catch (err) {
      console.error('Failed to load user data:', err);
    }
    return { cards: [], transactions: [] };
  };

  // Save user data to localStorage
  const saveUserData = (address: string, data: { cards: any[], transactions: any[] }) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(getUserDataKey(address), JSON.stringify(data));
    } catch (err) {
      console.error('Failed to save user data:', err);
    }
  };

  // Calculate stats from user's actual data
  const calculateStats = () => {
    const totalCards = cards.reduce((sum, card) => sum + (card.limit || 0), 0);
    const pendingCards = cards.filter(card => card.status === 'pending').reduce((sum, card) => sum + (card.limit || 0), 0);
    const totalBalance = walletInfo.balance * 150; // SOL to USD conversion
    
    return {
      cards: totalCards,
      pending: pendingCards,
      total: totalBalance
    };
  };

  const stats = calculateStats();

  useEffect(() => {
    // Check if Phantom is installed
    if (typeof window !== 'undefined') {
      const checkPhantom = () => {
        const provider = window.solana || (window as any).phantom?.solana;
        const installed = provider && provider.isPhantom;
        setHasPhantom(!!installed);
        
        if (installed) {
          // Check if already connected
          if (provider.publicKey) {
            connectPhantom().then(info => {
              setWalletInfo(info);
            }).catch(() => {
              // Silent fail if already connected check fails
            });
          }

          // Listen for connect/disconnect events
          provider.on('connect', async () => {
            try {
              const info = await connectPhantom();
              setWalletInfo(info);
            } catch (err) {
              console.error('Failed to connect:', err);
            }
          });

          provider.on('disconnect', () => {
            setWalletInfo({ publicKey: null, connected: false, balance: 0 });
            setCards([]);
            setTransactions([]);
          });
        }
      };

      checkPhantom();
      
      // Check periodically in case Phantom is installed after page load
      const interval = setInterval(checkPhantom, 1000);
      
      return () => {
        clearInterval(interval);
        if (typeof window !== 'undefined') {
          const provider = window.solana || (window as any).phantom?.solana;
          if (provider) {
            provider.removeListener('connect', () => {});
            provider.removeListener('disconnect', () => {});
          }
        }
      };
    }
  }, []);

  useEffect(() => {
    // Refresh balance periodically
    if (walletInfo.connected && walletInfo.publicKey) {
      let retryCount = 0;
      const maxRetries = 3;
      
      // Initial balance fetch
      const fetchBalance = async () => {
        try {
          const balance = await getBalance(walletInfo.publicKey!);
          setWalletInfo(prev => ({ ...prev, balance }));
          retryCount = 0; // Reset on success
        } catch (err) {
          // Silent fail - balance will be 0 until RPC is available
          retryCount++;
          if (retryCount <= maxRetries) {
            console.warn(`Could not fetch balance (attempt ${retryCount}/${maxRetries}), will retry:`, err);
          }
        }
      };

      // Fetch immediately
      fetchBalance();

      // Refresh every 10 seconds (more frequent retries if needed)
      const interval = setInterval(fetchBalance, 10000);

      return () => clearInterval(interval);
    }
  }, [walletInfo.connected, walletInfo.publicKey]);

  // Load user data when wallet connects
  useEffect(() => {
    if (walletInfo.connected && walletInfo.publicKey) {
      const address = walletInfo.publicKey.toString();
      const userData = loadUserData(address);
      setCards(userData.cards || []);
      setTransactions(userData.transactions || []);
    } else {
      setCards([]);
      setTransactions([]);
    }
  }, [walletInfo.connected, walletInfo.publicKey]);

  // Save user data when cards or transactions change
  useEffect(() => {
    if (walletInfo.connected && walletInfo.publicKey) {
      const address = walletInfo.publicKey.toString();
      saveUserData(address, { cards, transactions });
    }
  }, [cards, transactions, walletInfo.connected, walletInfo.publicKey]);

  const handleConnect = async () => {
    if (!hasPhantom) {
      window.open('https://phantom.app', '_blank');
      return;
    }

    setIsConnecting(true);
    setError(null);
    try {
      const info = await connectPhantom();
      setWalletInfo(info);
      setShowConnectModal(false);
      setError(null);
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to connect wallet. Please make sure Phantom is unlocked.';
      setError(errorMessage);
      console.error('Connection error:', err);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnectPhantom();
      setWalletInfo({ publicKey: null, connected: false, balance: 0 });
      setCards([]);
      setTransactions([]);
      setGeneratedCard(null);
    } catch (err) {
      console.error('Failed to disconnect:', err);
    }
  };

  const generateCard = async () => {
    if (!selectedPlatform) return;
    if (!walletInfo.connected) {
      setShowConnectModal(true);
      return;
    }
    setIsGenerating(true);
    await new Promise(r => setTimeout(r, 2000));
    const newCard = {
      id: Date.now().toString(),
      number: '4532' + Array.from({length: 12}, () => Math.floor(Math.random() * 10)).join(''),
      exp: '12/27',
      cvv: String(Math.floor(Math.random() * 900) + 100),
      limit: cardAmount,
      platform: selectedPlatform,
      status: 'active',
      createdAt: new Date().toISOString()
    };
    const newTransaction = {
      id: Date.now().toString(),
      type: 'card_generated',
      amount: cardAmount,
      platform: selectedPlatform,
      cardId: newCard.id,
      status: 'completed',
      createdAt: new Date().toISOString()
    };
    setGeneratedCard(newCard);
    setCards(prev => [...prev, newCard]);
    setTransactions(prev => [newTransaction, ...prev]);
    setIsGenerating(false);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const formatCardNumber = (num: string) => {
    const cleaned = num.replace(/\s/g, '');
    return cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
  };

  const formatAddress = (address: string) => {
    if (!address) return '';
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const solToUsd = (sol: number) => sol * 150; // Mock rate

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#faf9f6', display: 'flex'}}>
      {/* Sidebar */}
      <aside style={{
        width: 280,
        backgroundColor: '#f5f5f5',
        borderRight: '1px solid #e5e5e5',
        padding: '24px 0',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto'
      }}>
        <div style={{padding: '0 24px', marginBottom: 32}}>
          <Link href="/" style={{display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none'}}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #F7931A 0%, #FFD93D 100%)'
            }}>
              <img 
                src="/logo.png" 
                alt="WankCoin" 
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                onError={(e) => {
                  // Fallback to text if image not found
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('span');
                  fallback.textContent = 'W';
                  fallback.style.cssText = 'fontSize: 20px; fontWeight: 700; color: #ffffff';
                  e.currentTarget.parentElement!.appendChild(fallback);
                }}
              />
            </div>
            <span style={{fontSize: 20, fontWeight: 700, color: '#1a1a1a'}}>WankCoin</span>
          </Link>
        </div>

        <nav style={{flex: 1}}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  border: 'none',
                  backgroundColor: activeTab === item.id ? '#FFF3E0' : 'transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  borderLeft: activeTab === item.id ? '3px solid #F7931A' : '3px solid transparent'
                }}
              >
                <Icon 
                  style={{
                    width: 20,
                    height: 20,
                    color: activeTab === item.id ? '#F7931A' : '#666666'
                  }} 
                />
                <span style={{
                  fontSize: 15,
                  fontWeight: activeTab === item.id ? 600 : 500,
                  color: activeTab === item.id ? '#F7931A' : '#1a1a1a'
                }}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{marginLeft: 280, flex: 1, minHeight: '100vh'}}>
        {/* Header */}
        <header style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e5e5',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <div>
            <h1 style={{fontSize: 24, fontWeight: 700, color: '#1a1a1a', margin: 0}}>
              {activeTab === 'dashboard' ? 'Dashboard' : 
               activeTab === 'cards' ? 'Virtual Cards' :
               activeTab === 'transactions' ? 'Transactions' :
               navItems.find(n => n.id === activeTab)?.label || 'Dashboard'}
            </h1>
          </div>

          <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
            {/* Balance Display */}
            <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
              <div style={{textAlign: 'right'}}>
                <div style={{fontSize: 14, color: '#666666', marginBottom: 2}}>Account balance</div>
                <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                  <span style={{fontSize: 16, fontWeight: 600, color: '#1a1a1a'}}>
                    {showBalance ? `$${solToUsd(walletInfo.balance).toFixed(2)}` : '••••'}
                  </span>
                  <button
                    onClick={() => setShowBalance(!showBalance)}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                      padding: 4
                    }}
                  >
                    {showBalance ? (
                      <EyeOff style={{width: 16, height: 16, color: '#666666'}} />
                    ) : (
                      <Eye style={{width: 16, height: 16, color: '#666666'}} />
                    )}
                  </button>
                </div>
              </div>
              <div style={{textAlign: 'right'}}>
                <div style={{fontSize: 14, color: '#666666', marginBottom: 2}}>SOL</div>
                <div style={{fontSize: 16, fontWeight: 600, color: '#1a1a1a'}}>
                  {showBalance ? walletInfo.balance.toFixed(4) : '••••'}
                </div>
              </div>
            </div>

            <button style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: '#F7931A',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }}>
              <Plus style={{width: 20, height: 20}} />
            </button>

            <div style={{position: 'relative'}}>
              <button style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                backgroundColor: '#f5f5f5',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Bell style={{width: 20, height: 20, color: '#1a1a1a'}} />
              </button>
              <div style={{
                position: 'absolute',
                top: -2,
                right: -2,
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: '#8B5CF6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 10,
                fontWeight: 600,
                color: '#ffffff'
              }}>
                1
              </div>
            </div>

            {walletInfo.connected ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '8px 16px',
                borderRadius: 10,
                backgroundColor: '#f5f5f5'
              }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  animation: 'pulse 2s infinite'
                }} />
                <span style={{fontSize: 14, fontWeight: 600, color: '#1a1a1a'}}>
                  {formatAddress(walletInfo.publicKey?.toString() || '')}
                </span>
                <button
                  onClick={handleDisconnect}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    padding: 4
                  }}
                >
                  <X style={{width: 16, height: 16, color: '#666666'}} />
                </button>
              </div>
            ) : (
              <motion.button
                onClick={() => setShowConnectModal(true)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 10,
                  backgroundColor: '#F7931A',
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                <Wallet style={{width: 18, height: 18}} />
                <span>Connect Wallet</span>
              </motion.button>
            )}
          </div>
        </header>

        {/* Content Area */}
        <div style={{padding: 32}}>
          {activeTab === 'dashboard' && (
            <div>
              {/* Stats Cards */}
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 32}}>
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 16,
                  padding: 24,
                  border: '1px solid #e5e5e5',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                  <div style={{fontSize: 14, color: '#666666', marginBottom: 8}}>Cards</div>
                  <div style={{fontSize: 28, fontWeight: 700, color: '#1a1a1a'}}>${stats.cards.toFixed(2)}</div>
                </div>
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 16,
                  padding: 24,
                  border: '1px solid #e5e5e5',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                  <div style={{fontSize: 14, color: '#666666', marginBottom: 8}}>Pending</div>
                  <div style={{fontSize: 28, fontWeight: 700, color: '#1a1a1a'}}>${stats.pending.toFixed(2)}</div>
                </div>
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 16,
                  padding: 24,
                  border: '1px solid #e5e5e5',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                  <div style={{fontSize: 14, color: '#666666', marginBottom: 8}}>Total balance</div>
                  <div style={{fontSize: 28, fontWeight: 700, color: '#1a1a1a'}}>${stats.total.toFixed(2)}</div>
                </div>
              </div>

              {/* Balance Card */}
              <div style={{
                backgroundColor: '#262626',
                borderRadius: 24,
                padding: 32,
                marginBottom: 32,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 200,
                  height: 200,
                  background: 'radial-gradient(circle, rgba(247,147,26,0.2) 0%, transparent 70%)',
                  borderRadius: '50%',
                  transform: 'translate(50%, -50%)'
                }} />
                
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24}}>
                  <div>
                    <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16}}>
                      <span style={{fontSize: 14, color: '#a3a3a3'}}>Total Balance</span>
                      <button
                        onClick={() => setShowBalance(!showBalance)}
                        style={{
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer',
                          padding: 4
                        }}
                      >
                        {showBalance ? (
                          <EyeOff style={{width: 16, height: 16, color: '#a3a3a3'}} />
                        ) : (
                          <Eye style={{width: 16, height: 16, color: '#a3a3a3'}} />
                        )}
                      </button>
                    </div>
                    <div style={{fontSize: 36, fontWeight: 700, color: '#ffffff', marginBottom: 8}}>
                      {showBalance ? `${walletInfo.balance.toFixed(4)} SOL` : '•••• SOL'}
                    </div>
                    <div style={{fontSize: 18, color: '#a3a3a3'}}>
                      ≈ ${showBalance ? solToUsd(walletInfo.balance).toFixed(2) : '•••'} USD
                    </div>
                  </div>
                  <div style={{
                    padding: '8px 16px',
                    borderRadius: 12,
                    backgroundColor: 'rgba(220, 38, 38, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  }}>
                    <Flame style={{width: 16, height: 16, color: '#DC2626'}} />
                    <span style={{fontSize: 12, fontWeight: 600, color: '#DC2626'}}>50% Burn</span>
                  </div>
                </div>

                <div style={{display: 'flex', gap: 12}}>
                  <motion.button
                    onClick={() => {
                      if (!walletInfo.connected) {
                        setShowConnectModal(true);
                      } else {
                        setShowTopUp(true);
                      }
                    }}
                    style={{
                      flex: 1,
                      padding: '16px 24px',
                      backgroundColor: '#F7931A',
                      color: '#ffffff',
                      borderRadius: 16,
                      fontSize: 16,
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8
                    }}
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                  >
                    <Plus style={{width: 20, height: 20}} />
                    <span>Top Up</span>
                  </motion.button>
                  <button style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    backgroundColor: '#3F3F46',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <History style={{width: 24, height: 24, color: '#ffffff'}} />
                  </button>
                </div>
              </div>

              {/* Platform Selection */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: 24,
                padding: 32,
                marginBottom: 32,
                border: '1px solid #e5e5e5'
              }}>
                <h3 style={{fontSize: 20, fontWeight: 700, color: '#1a1a1a', marginBottom: 24}}>
                  Create Virtual Card
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24}}>
                  {platforms.map((p) => {
                    const Icon = p.Icon;
                    return (
                      <motion.button
                        key={p.id}
                        onClick={() => { setSelectedPlatform(p.id); setGeneratedCard(null); }}
                        style={{
                          padding: 24,
                          borderRadius: 20,
                          border: selectedPlatform === p.id ? '2px solid #F7931A' : '2px solid #e5e5e5',
                          backgroundColor: selectedPlatform === p.id ? '#FFF3E0' : '#ffffff',
                          textAlign: 'left',
                          cursor: 'pointer',
                          transition: 'all 0.3s'
                        }}
                        whileHover={{y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.08)'}}
                        whileTap={{scale: 0.98}}
                      >
                        <div style={{marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                          <Icon size={40} />
                        </div>
                        <div style={{fontSize: 16, fontWeight: 700, color: '#1a1a1a', marginBottom: 4}}>{p.name}</div>
                        <div style={{fontSize: 13, color: '#888888'}}>{p.desc}</div>
                      </motion.button>
                    );
                  })}
                </div>

                {selectedPlatform && (
                  <motion.div
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: 'auto'}}
                    style={{
                      padding: 24,
                      backgroundColor: '#faf9f6',
                      borderRadius: 16,
                      marginTop: 24
                    }}
                  >
                    <div style={{marginBottom: 24}}>
                      <label style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a1a', marginBottom: 12}}>
                        Amount (max $100)
                      </label>
                      <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                        <input
                          type="range"
                          min="5"
                          max="100"
                          step="5"
                          value={cardAmount}
                          onChange={(e) => setCardAmount(Number(e.target.value))}
                          style={{
                            flex: 1,
                            height: 8,
                            borderRadius: 4,
                            background: '#e5e5e5',
                            outline: 'none',
                            accentColor: '#F7931A'
                          }}
                        />
                        <span style={{fontSize: 18, fontWeight: 700, color: '#1a1a1a', minWidth: 60}}>
                          ${cardAmount}
                        </span>
                      </div>
                    </div>

                    <motion.button
                      onClick={generateCard}
                      disabled={isGenerating}
                      style={{
                        width: '100%',
                        padding: '18px 32px',
                        backgroundColor: '#1a1a1a',
                        color: '#ffffff',
                        borderRadius: 16,
                        fontSize: 16,
                        fontWeight: 600,
                        border: 'none',
                        cursor: isGenerating ? 'not-allowed' : 'pointer',
                        opacity: isGenerating ? 0.5 : 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10
                      }}
                      whileHover={isGenerating ? {} : {scale: 1.02}}
                      whileTap={isGenerating ? {} : {scale: 0.98}}
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw style={{width: 20, height: 20}} className="animate-spin" />
                          <span>Generating...</span>
                        </>
                      ) : (
                        <>
                          <CreditCard style={{width: 20, height: 20}} />
                          <span>Generate Card</span>
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                )}

                {generatedCard && (
                  <motion.div
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    style={{
                      marginTop: 24,
                      padding: 24,
                      backgroundColor: '#1a1a1a',
                      borderRadius: 20,
                      color: '#ffffff',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: -50,
                      right: -50,
                      width: 200,
                      height: 200,
                      background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                      borderRadius: '50%'
                    }} />
                    <div style={{position: 'relative', zIndex: 1}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24}}>
                        <div>
                          <div style={{fontSize: 12, color: '#a3a3a3', marginBottom: 8}}>Card Number</div>
                          <div style={{fontSize: 20, fontWeight: 600, letterSpacing: 2}}>
                            {showCardDetails ? formatCardNumber(generatedCard.number) : '•••• •••• •••• ••••'}
                          </div>
                        </div>
                        <button
                          onClick={() => setShowCardDetails(!showCardDetails)}
                          style={{
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            padding: 8
                          }}
                        >
                          {showCardDetails ? (
                            <EyeOff style={{width: 20, height: 20, color: '#ffffff'}} />
                          ) : (
                            <Eye style={{width: 20, height: 20, color: '#ffffff'}} />
                          )}
                        </button>
                      </div>
                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
                        <div>
                          <div style={{fontSize: 12, color: '#a3a3a3', marginBottom: 4}}>Expires</div>
                          <div style={{fontSize: 16, fontWeight: 600}}>
                            {showCardDetails ? generatedCard.exp : '••/••'}
                          </div>
                        </div>
                        <div>
                          <div style={{fontSize: 12, color: '#a3a3a3', marginBottom: 4}}>CVV</div>
                          <div style={{fontSize: 16, fontWeight: 600}}>
                            {showCardDetails ? generatedCard.cvv : '•••'}
                          </div>
                        </div>
                      </div>
                      <div style={{marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)'}}>
                        <div style={{fontSize: 12, color: '#a3a3a3', marginBottom: 4}}>Limit</div>
                        <div style={{fontSize: 18, fontWeight: 700}}>${generatedCard.limit}</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'cards' && (
            <div>
              <h2 style={{fontSize: 24, fontWeight: 700, color: '#1a1a1a', marginBottom: 24}}>Your Virtual Cards</h2>
              {cards.length === 0 ? (
                <div style={{
                  padding: 48,
                  textAlign: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: 16,
                  border: '1px solid #e5e5e5'
                }}>
                  <CreditCard style={{width: 48, height: 48, color: '#a3a3a3', margin: '0 auto 16px'}} />
                  <div style={{fontSize: 18, fontWeight: 600, color: '#1a1a1a', marginBottom: 8}}>No cards yet</div>
                  <div style={{fontSize: 14, color: '#666666'}}>Generate your first virtual card to get started</div>
                </div>
              ) : (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24}}>
                  {cards.map((card, idx) => (
                    <div key={idx} style={{
                      padding: 24,
                      backgroundColor: '#1a1a1a',
                      borderRadius: 20,
                      color: '#ffffff'
                    }}>
                      <div style={{fontSize: 16, fontWeight: 600, marginBottom: 16}}>
                        {platforms.find(p => p.id === card.platform)?.name}
                      </div>
                      <div style={{fontSize: 20, fontWeight: 600, letterSpacing: 2, marginBottom: 16}}>
                        {formatCardNumber(card.number)}
                      </div>
                      <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                          <div style={{fontSize: 12, color: '#a3a3a3'}}>Expires</div>
                          <div style={{fontSize: 14, fontWeight: 600}}>{card.exp}</div>
                        </div>
                        <div>
                          <div style={{fontSize: 12, color: '#a3a3a3'}}>Limit</div>
                          <div style={{fontSize: 14, fontWeight: 600}}>${card.limit}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'transactions' && (
            <div>
              <h2 style={{fontSize: 24, fontWeight: 700, color: '#1a1a1a', marginBottom: 24}}>Transactions</h2>
              {transactions.length === 0 ? (
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 16,
                  border: '1px solid #e5e5e5',
                  padding: 24
                }}>
                  <div style={{textAlign: 'center', padding: 48}}>
                    <History style={{width: 48, height: 48, color: '#a3a3a3', margin: '0 auto 16px'}} />
                    <div style={{fontSize: 18, fontWeight: 600, color: '#1a1a1a', marginBottom: 8}}>No transactions yet</div>
                    <div style={{fontSize: 14, color: '#666666'}}>Your transaction history will appear here</div>
                  </div>
                </div>
              ) : (
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 16,
                  border: '1px solid #e5e5e5',
                  padding: 24
                }}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                    {transactions.map((tx) => (
                      <div
                        key={tx.id}
                        style={{
                          padding: 16,
                          borderRadius: 12,
                          backgroundColor: '#faf9f6',
                          border: '1px solid #e5e5e5',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <div style={{flex: 1}}>
                          <div style={{fontSize: 16, fontWeight: 600, color: '#1a1a1a', marginBottom: 4}}>
                            {tx.type === 'card_generated' ? 'Card Generated' : tx.type}
                          </div>
                          <div style={{fontSize: 13, color: '#666666'}}>
                            {platforms.find(p => p.id === tx.platform)?.name || 'Unknown'} • {new Date(tx.createdAt).toLocaleString()}
                          </div>
                        </div>
                        <div style={{textAlign: 'right'}}>
                          <div style={{fontSize: 18, fontWeight: 700, color: '#1a1a1a'}}>
                            ${tx.amount?.toFixed(2) || '0.00'}
                          </div>
                          <div style={{
                            fontSize: 12,
                            color: tx.status === 'completed' ? '#10B981' : '#F59E0B',
                            fontWeight: 600
                          }}>
                            {tx.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Top Up Modal */}
      <AnimatePresence>
        {showTopUp && (
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 100,
              padding: 24,
              backdropFilter: 'blur(8px)'
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={() => setShowTopUp(false)}
          >
            <motion.div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 32,
                padding: 40,
                maxWidth: 500,
                width: '100%',
                boxShadow: '0 40px 100px rgba(0,0,0,0.3)'
              }}
              initial={{scale: 0.95, opacity: 0, y: 20}}
              animate={{scale: 1, opacity: 1, y: 0}}
              exit={{scale: 0.95, opacity: 0, y: 20}}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32}}>
                <h3 style={{fontSize: 28, fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.5px'}}>Top Up Balance</h3>
                <button
                  onClick={() => setShowTopUp(false)}
                  style={{
                    padding: '8px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: 10,
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <X style={{width: 20, height: 20, color: '#666666'}} />
                </button>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
                <div>
                  <label style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a1a', marginBottom: 12}}>Token</label>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
                    <motion.button
                      onClick={() => setPayWith('wkc')}
                      style={{
                        padding: '20px',
                        borderRadius: 16,
                        border: payWith === 'wkc' ? '2px solid #F7931A' : '2px solid #e5e5e5',
                        backgroundColor: payWith === 'wkc' ? '#FFF3E0' : '#ffffff',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                      whileHover={{scale: 1.02}}
                      whileTap={{scale: 0.98}}
                    >
                      <div style={{fontSize: 20, fontWeight: 700, color: '#1a1a1a', marginBottom: 4}}>WKC</div>
                      <div style={{fontSize: 13, color: '#666666'}}>WankCoin</div>
                    </motion.button>
                    <motion.button
                      onClick={() => setPayWith('sol')}
                      style={{
                        padding: '20px',
                        borderRadius: 16,
                        border: payWith === 'sol' ? '2px solid #9945FF' : '2px solid #e5e5e5',
                        backgroundColor: payWith === 'sol' ? '#F3E8FF' : '#ffffff',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                      whileHover={{scale: 1.02}}
                      whileTap={{scale: 0.98}}
                    >
                      <div style={{fontSize: 20, fontWeight: 700, color: '#1a1a1a', marginBottom: 4}}>SOL</div>
                      <div style={{fontSize: 13, color: '#666666'}}>Solana</div>
                    </motion.button>
                  </div>
                </div>

                <div>
                  <label style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a1a', marginBottom: 12}}>Amount</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      border: '2px solid #e5e5e5',
                      borderRadius: 16,
                      fontSize: 16,
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#F7931A'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
                  />
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8}}>
                  {[100, 250, 500, 1000].map((amt) => (
                    <motion.button
                      key={amt}
                      style={{
                        padding: '12px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: 12,
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#1a1a1a',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                      whileHover={{backgroundColor: '#F7931A', color: '#ffffff'}}
                      whileTap={{scale: 0.95}}
                    >
                      {amt}
                    </motion.button>
                  ))}
                </div>

                <motion.button
                  style={{
                    width: '100%',
                    padding: '18px 32px',
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                    borderRadius: 16,
                    fontSize: 16,
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                  }}
                  whileHover={{scale: 1.02, boxShadow: '0 6px 24px rgba(0,0,0,0.2)'}}
                  whileTap={{scale: 0.98}}
                >
                  <Plus style={{width: 20, height: 20}} />
                  <span>Top Up</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Connect Wallet Modal */}
      <AnimatePresence>
        {showConnectModal && (
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 100,
              padding: 24,
              backdropFilter: 'blur(8px)'
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={() => {
              setShowConnectModal(false);
              setError(null);
            }}
          >
            <motion.div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 32,
                padding: 40,
                maxWidth: 450,
                width: '100%',
                boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
                textAlign: 'center'
              }}
              initial={{scale: 0.95, opacity: 0, y: 20}}
              animate={{scale: 1, opacity: 1, y: 0}}
              exit={{scale: 0.95, opacity: 0, y: 20}}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: 20}}>
                <button
                  onClick={() => {
                    setShowConnectModal(false);
                    setError(null);
                  }}
                  style={{
                    padding: '8px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: 10,
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <X style={{width: 20, height: 20, color: '#666666'}} />
                </button>
              </div>

              <motion.div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                  background: 'linear-gradient(135deg, #F7931A 0%, #FFD93D 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 20px 60px rgba(247, 147, 26, 0.3)'
                }}
                animate={{scale: [1, 1.05, 1], rotate: [0, 2, -2, 0]}}
                transition={{duration: 3, repeat: Infinity}}
              >
                <Wallet style={{width: 40, height: 40, color: '#ffffff'}} />
              </motion.div>

              <h3 style={{
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 12,
                color: '#1a1a1a',
                letterSpacing: '-0.5px'
              }}>
                Connect Phantom Wallet
              </h3>
              <p style={{
                fontSize: 15,
                color: '#666666',
                marginBottom: 32,
                lineHeight: 1.6
              }}>
                {hasPhantom 
                  ? 'Connect your Phantom wallet to access all features and manage your WankCards'
                  : 'Phantom wallet not found. Please install it from https://phantom.app'}
              </p>

              {error && (
                <div style={{
                  padding: 12,
                  backgroundColor: '#FEE2E2',
                  borderRadius: 12,
                  marginBottom: 24,
                  border: '1px solid #FCA5A5'
                }}>
                  <div style={{fontSize: 14, color: '#DC2626', textAlign: 'left'}}>
                    {error}
                  </div>
                </div>
              )}

              <motion.button
                onClick={handleConnect}
                disabled={isConnecting || !hasPhantom}
                style={{
                  width: '100%',
                  padding: '18px 32px',
                  backgroundColor: hasPhantom ? '#F7931A' : '#9CA3AF',
                  color: '#ffffff',
                  borderRadius: 16,
                  fontSize: 16,
                  fontWeight: 600,
                  border: 'none',
                  cursor: (isConnecting || !hasPhantom) ? 'not-allowed' : 'pointer',
                  opacity: (isConnecting || !hasPhantom) ? 0.6 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  boxShadow: hasPhantom ? '0 8px 24px rgba(247, 147, 26, 0.3)' : 'none'
                }}
                whileHover={(isConnecting || !hasPhantom) ? {} : {scale: 1.02, boxShadow: '0 12px 32px rgba(247, 147, 26, 0.4)'}}
                whileTap={(isConnecting || !hasPhantom) ? {} : {scale: 0.98}}
              >
                {isConnecting ? (
                  <>
                    <RefreshCw style={{width: 20, height: 20}} className="animate-spin" />
                    <span>Connecting...</span>
                  </>
                  ) : !hasPhantom ? (
                    <>
                      <ExternalLink style={{width: 20, height: 20}} />
                      <span>Install Phantom Wallet</span>
                    </>
                  ) : (
                    <>
                      <Wallet style={{width: 20, height: 20}} />
                      <span>Connect Phantom Wallet</span>
                    </>
                  )}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
