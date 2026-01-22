'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Flame, 
  CreditCard,
  EyeOff,
  Globe,
  ChevronDown,
  Copy,
  Check,
  Wallet,
  Lock,
  BarChart3,
  Zap,
  Shield,
  TrendingUp,
  Users,
  DollarSign,
  RefreshCw,
  Eye
} from 'lucide-react';

const CONTRACT_ADDRESS = "WKC...coming soon";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [burnCount, setBurnCount] = useState(0);
  const [cardBalance, setCardBalance] = useState(1250);
  const [showCardDetails, setShowCardDetails] = useState(false);

  // Animated burn counter
  useEffect(() => {
    const interval = setInterval(() => {
      setBurnCount(prev => prev + Math.floor(Math.random() * 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { 
      id: 'anonymous', 
      icon: <EyeOff style={{width: 20, height: 20}} />, 
      label: '100% Anonymous',
      title: 'Complete privacy for every purchase',
      description: 'Your identity stays hidden. No personal information required, no KYC, no registration. Just connect your wallet and pay.',
      features: ['No KYC required', 'No personal data stored', 'Untraceable transactions', 'No bank statement traces']
    },
    { 
      id: 'instant', 
      icon: <CreditCard style={{width: 20, height: 20}} />, 
      label: 'Instant Cards',
      title: 'Generate virtual cards in seconds',
      description: 'Create one-time use Visa cards instantly. Each card is unique, disposable, and works on any platform accepting Visa.',
      features: ['One-time use cards', 'Valid Visa numbers', '$5 - $100 per card', 'Works on 10,000+ sites']
    },
    { 
      id: 'burn', 
      icon: <Flame style={{width: 20, height: 20}} />, 
      label: '50% Burn',
      title: 'Deflationary tokenomics',
      description: 'Every WKC payment burns half the tokens permanently. As adoption grows, supply shrinks, creating scarcity.',
      features: ['50% burned per tx', '50% to treasury', 'Decreasing supply', 'Increasing scarcity']
    },
    { 
      id: 'global', 
      icon: <Globe style={{width: 20, height: 20}} />, 
      label: 'Global Access',
      title: 'Works anywhere in the world',
      description: 'No geographic restrictions. Pay for content from any country without limitations or censorship.',
      features: ['No geo-restrictions', 'All countries supported', 'Multiple currencies', '24/7 availability']
    }
  ];

  const faqs = [
    { q: "What is WankCoin?", a: "WankCoin (WKC) is a Solana-based cryptocurrency designed for anonymous payments on adult content platforms. With WankCard virtual cards, you can pay without any trace on your bank statement." },
    { q: "How does WankCard work?", a: "Connect your wallet, top up with SOL or WKC, generate a one-time virtual Visa card, and use it on any adult platform. Cards work like regular prepaid Visa cards." },
    { q: "What is the burn mechanism?", a: "Every time you pay with WKC, 50% of the tokens are permanently burned (destroyed). This reduces the total supply over time, creating deflationary pressure." },
    { q: "Which platforms are supported?", a: "WankCard works on any platform that accepts Visa cards: OnlyFans, PornHub Premium, Fansly, Chaturbate, ManyVids, Brazzers, and thousands more." },
    { q: "What's the card limit?", a: "Each virtual card has a $100 maximum limit. For larger purchases, simply generate multiple cards." },
    { q: "Is this legal?", a: "Yes. WankCoin provides a payment method for legal adult content. We don't host or sell any content ourselves." }
  ];

  const platforms = ['OnlyFans', 'PornHub', 'Fansly', 'Chaturbate', 'ManyVids', 'Brazzers', 'xHamster', 'Stripchat'];

  return (
    <main style={{minHeight: '100vh', backgroundColor: '#ffffff', overflow: 'hidden'}}>
      {/* Navigation */}
      <header style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #f0f0f0'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Link href="/" style={{display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none'}}>
            <div style={{width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #F7931A 0%, #FFD93D 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(247, 147, 26, 0.3)'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="white"/>
                <path d="M12 6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2z" fill="white"/>
                <circle cx="12" cy="17" r="1.5" fill="white"/>
              </svg>
            </div>
            <span style={{fontWeight: 700, fontSize: 20, color: '#000000', letterSpacing: '-0.5px'}}>WankCoin</span>
          </Link>
          
          <nav style={{display: 'flex', alignItems: 'center', gap: 32}}>
            <a href="#features" style={{fontSize: 14, fontWeight: 500, color: '#666666', textDecoration: 'none'}}>Features</a>
            <a href="#how-it-works" style={{fontSize: 14, fontWeight: 500, color: '#666666', textDecoration: 'none'}}>How it works</a>
            <a href="#tokenomics" style={{fontSize: 14, fontWeight: 500, color: '#666666', textDecoration: 'none'}}>Tokenomics</a>
            <Link href="/docs" style={{fontSize: 14, fontWeight: 500, color: '#666666', textDecoration: 'none'}}>Docs</Link>
          </nav>

          <Link href="/dashboard" style={{backgroundColor: '#000000', color: '#ffffff', fontSize: 14, fontWeight: 600, padding: '10px 24px', borderRadius: 50, display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none'}}>
            Launch App <ArrowRight style={{width: 16, height: 16}} />
          </Link>
        </div>
      </header>

      {/* Hero - Grovia Style */}
      <section className="section hero" style={{paddingTop: 140, paddingBottom: 120, paddingLeft: 24, paddingRight: 24, position: 'relative', overflow: 'hidden', backgroundColor: '#faf9f6'}}>
        {/* Background Stripes - Grovia Style */}
        <div className="header-bg" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none'}}>
          {/* Left Stripes */}
          <div className="stripe-left" style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: '40%', overflow: 'hidden'}}>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="stripe"
                style={{
                  position: 'absolute',
                  left: `${i * 8}%`,
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  backgroundColor: 'rgba(0,0,0,0.03)',
                  transform: `rotate(${i * 2}deg)`
                }}
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: i * 0.1, duration: 0.8}}
              />
            ))}
            <div className="stripe-left-gradient" style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: '30%', background: 'linear-gradient(90deg, #faf9f6 0%, transparent 100%)'}} />
          </div>
          
          {/* Right Stripes */}
          <div className="stripe-right" style={{position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%', overflow: 'hidden'}}>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="stripe"
                style={{
                  position: 'absolute',
                  right: `${i * 8}%`,
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  backgroundColor: 'rgba(0,0,0,0.03)',
                  transform: `rotate(${-i * 2}deg)`
                }}
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: i * 0.1, duration: 0.8}}
              />
            ))}
            <div className="stripe-right-gradient" style={{position: 'absolute', right: 0, top: 0, bottom: 0, width: '30%', background: 'linear-gradient(270deg, #faf9f6 0%, transparent 100%)'}} />
          </div>
          
          <div className="stripe-gradient" style={{position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'radial-gradient(ellipse at center, transparent 0%, rgba(247, 147, 26, 0.02) 100%)'}} />
        </div>
        
        <div className="container" style={{maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1}}>
          <div className="hero-wrap" style={{display: 'flex', flexDirection: 'column', gap: 80}}>
            {/* Hero Text */}
            <div className="hero" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center'}}>
              <div className="hero-text" style={{position: 'relative'}}>
                <motion.div 
                  className="hero-heading"
                  initial={{opacity: 0, y: 30}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.8}}
                >
                  <motion.h1 
                    className="display-h1"
                    style={{fontSize: 64, fontWeight: 700, lineHeight: 1.1, marginBottom: 24, color: '#1a1a1a', letterSpacing: '-2px'}}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.1}}
                  >
                    Private payments for{' '}
                    <span style={{color: '#F7931A'}}>adult content</span>
                  </motion.h1>
                  
                  <motion.p 
                    className="large-paragraph"
                    style={{fontSize: 20, color: '#666666', lineHeight: 1.6, maxWidth: 500}}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.2}}
                  >
                    WankCoin enables anonymous payments for premium adult content through virtual Visa cards. No bank traces, no KYC, complete privacy.
                  </motion.p>
                </motion.div>
                
                <motion.div 
                  className="hero-buttons"
                  style={{display: 'flex', alignItems: 'center', gap: 16, marginTop: 40}}
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.3}}
                >
                  <Link 
                    href="/dashboard" 
                    className="primary-button"
                    style={{
                      backgroundColor: '#1a1a1a', 
                      color: '#ffffff', 
                      fontWeight: 600, 
                      padding: '16px 32px', 
                      borderRadius: 50, 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 10, 
                      textDecoration: 'none', 
                      fontSize: 16,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <span>Get started</span>
                    <motion.div
                      style={{display: 'flex', alignItems: 'center'}}
                      whileHover={{x: 4}}
                    >
                      <ArrowRight style={{width: 20, height: 20}} />
                    </motion.div>
                  </Link>
                  
                  <Link 
                    href="/docs" 
                    className="outline-button"
                    style={{
                      border: '2px solid #e5e5e5', 
                      color: '#1a1a1a', 
                      fontWeight: 600, 
                      padding: '14px 32px', 
                      borderRadius: 50, 
                      textDecoration: 'none', 
                      fontSize: 16,
                      backgroundColor: 'transparent'
                    }}
                  >
                    Contact us
                  </Link>
                </motion.div>
              </div>
              
              {/* Hero UI Cards - Grovia Style with Rotation */}
              <div className="hero-ui" style={{position: 'relative', height: 600, width: '100%', minHeight: 600}}>
                {/* Main Dashboard Card */}
                <motion.div
                  className="hero-ui-card"
                  style={{
                    position: 'absolute',
                    top: 40,
                    right: 40,
                    width: 360,
                    height: 240,
                    backgroundColor: '#ffffff',
                    borderRadius: 24,
                    padding: 24,
                    boxShadow: '0 40px 100px rgba(0,0,0,0.15)',
                    transform: 'rotate(2deg)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    zIndex: 2,
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                  initial={{opacity: 0, y: 50, rotate: 5}}
                  animate={{opacity: 1, y: 0, rotate: 2}}
                  transition={{delay: 0.4, type: 'spring', stiffness: 100}}
                  whileHover={{
                    rotate: 0,
                    scale: 1.05,
                    y: -10,
                    boxShadow: '0 60px 140px rgba(0,0,0,0.25)',
                    transition: {duration: 0.3, type: 'spring', stiffness: 300}
                  }}
                >
                  {/* Background Image */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '65%',
                    height: '100%',
                    borderRadius: '0 24px 24px 0',
                    zIndex: 0,
                    overflow: 'hidden',
                    backgroundImage: 'url(/images/hero-girl.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.5
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 100%)'
                    }} />
                  </div>
                  
                  <div style={{position: 'relative', zIndex: 1}}>
                    <motion.div 
                      style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}
                      whileHover={{scale: 1.02}}
                    >
                      <span style={{fontSize: 14, fontWeight: 600, color: '#1a1a1a'}}>WankCard Dashboard</span>
                      <motion.div 
                        style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e'}}
                        animate={{scale: [1, 1.2, 1], opacity: [1, 0.7, 1]}}
                        transition={{duration: 2, repeat: Infinity}}
                      />
                    </motion.div>
                    <motion.div 
                      style={{marginBottom: 16}}
                      whileHover={{scale: 1.02}}
                    >
                      <motion.div 
                        style={{fontSize: 32, fontWeight: 700, color: '#1a1a1a', marginBottom: 4}}
                        whileHover={{color: '#F7931A'}}
                      >
                        {cardBalance.toLocaleString('en-US')} WKC
                      </motion.div>
                      <div style={{fontSize: 14, color: '#888888'}}>≈ ${(cardBalance * 0.1).toFixed(2)} USD</div>
                    </motion.div>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16}}>
                      <motion.div 
                        style={{padding: 12, backgroundColor: '#f5f5f5', borderRadius: 12}}
                        whileHover={{backgroundColor: '#F7931A15', scale: 1.05}}
                      >
                        <div style={{fontSize: 11, color: '#888888', marginBottom: 4}}>Cards</div>
                        <div style={{fontSize: 18, fontWeight: 700, color: '#1a1a1a'}}>12</div>
                      </motion.div>
                      <motion.div 
                        style={{padding: 12, backgroundColor: '#f5f5f5', borderRadius: 12}}
                        whileHover={{backgroundColor: '#EF444415', scale: 1.05}}
                      >
                        <div style={{fontSize: 11, color: '#888888', marginBottom: 4}}>Burned</div>
                        <div style={{fontSize: 18, fontWeight: 700, color: '#EF4444'}}>{burnCount.toLocaleString('en-US')}</div>
                      </motion.div>
                    </div>
                    <div style={{display: 'flex', gap: 8}}>
                      <motion.div 
                        style={{flex: 1, padding: '10px', backgroundColor: '#F7931A', color: '#ffffff', borderRadius: 10, textAlign: 'center', fontSize: 13, fontWeight: 600}}
                        whileHover={{scale: 1.05, backgroundColor: '#E8851A', boxShadow: '0 4px 12px rgba(247, 147, 26, 0.4)'}}
                      >
                        Top Up
                      </motion.div>
                      <motion.div 
                        style={{flex: 1, padding: '10px', backgroundColor: '#f5f5f5', color: '#1a1a1a', borderRadius: 10, textAlign: 'center', fontSize: 13, fontWeight: 600}}
                        whileHover={{scale: 1.05, backgroundColor: '#e5e5e5', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                      >
                        History
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Secondary Chart Card */}
                <motion.div
                  className="hero-ui-card-2"
                  style={{
                    position: 'absolute',
                    bottom: 60,
                    left: 60,
                    width: 320,
                    height: 200,
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                    borderRadius: 24,
                    padding: 20,
                    boxShadow: '0 40px 100px rgba(0,0,0,0.15)',
                    transform: 'rotate(-3deg)',
                    color: '#ffffff',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    zIndex: 1
                  }}
                  initial={{opacity: 0, y: 50, rotate: -5}}
                  animate={{opacity: 1, y: 0, rotate: -3}}
                  transition={{delay: 0.5, type: 'spring', stiffness: 100}}
                  whileHover={{
                    rotate: 0,
                    scale: 1.05,
                    y: -10,
                    boxShadow: '0 60px 140px rgba(247, 147, 26, 0.3)',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
                    transition: {duration: 0.3, type: 'spring', stiffness: 300}
                  }}
                >
                  {/* Shine effect on hover */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      pointerEvents: 'none'
                    }}
                    initial={{left: '-100%'}}
                    whileHover={{left: '200%'}}
                    transition={{duration: 0.6}}
                  />
                  
                  <motion.div 
                    style={{display: 'flex', justifyContent: 'space-between', marginBottom: 20, position: 'relative', zIndex: 1}}
                    whileHover={{scale: 1.02}}
                  >
                    <span style={{fontSize: 12, opacity: 0.6}}>WankCard</span>
                    <motion.span 
                      style={{fontWeight: 800, fontSize: 14, letterSpacing: 1}}
                      whileHover={{scale: 1.1}}
                    >
                      VISA
                    </motion.span>
                  </motion.div>
                  <motion.div 
                    style={{fontSize: 20, fontFamily: 'monospace', letterSpacing: 2, marginBottom: 16, position: 'relative', zIndex: 1}}
                    whileHover={{letterSpacing: 3, scale: 1.02}}
                  >
                    4532 •••• •••• 7821
                  </motion.div>
                  <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 11, position: 'relative', zIndex: 1}}>
                    <motion.div
                      whileHover={{scale: 1.05, x: 5}}
                    >
                      <div style={{opacity: 0.4, marginBottom: 4}}>EXP</div>
                      <div style={{fontFamily: 'monospace'}}>12/27</div>
                    </motion.div>
                    <motion.div
                      whileHover={{scale: 1.1}}
                    >
                      <div style={{opacity: 0.4, marginBottom: 4}}>LIMIT</div>
                      <motion.div 
                        style={{fontWeight: 700, color: '#F7931A'}}
                        whileHover={{color: '#FFD93D', scale: 1.1}}
                      >
                        $100
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Ticker - Grovia Style */}
            <motion.div 
              className="hero-ticker"
              style={{paddingTop: 60, borderTop: '1px solid rgba(0,0,0,0.08)'}}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.6}}
            >
              <div className="ticker-h" style={{position: 'relative', overflow: 'hidden', height: 60}}>
                <div className="ticker-gradient-h" style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 200, background: 'linear-gradient(90deg, #faf9f6 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none'}} />
                <div className="ticker-content-h" style={{display: 'flex', alignItems: 'center', gap: 60, height: '100%', width: 'fit-content'}}>
                  {[...Array(3)].map((_, loop) => (
                    <div key={loop} style={{display: 'flex', alignItems: 'center', gap: 60, flexShrink: 0}}>
                      {platforms.map((platform, i) => (
                        <motion.div
                          key={`${loop}-${i}`}
                          className="customer-logo"
                          style={{fontSize: 18, fontWeight: 600, color: '#999999', whiteSpace: 'nowrap', cursor: 'default'}}
                          whileHover={{color: '#F7931A', scale: 1.1}}
                        >
                          {platform}
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="ticker-gradient-h _2" style={{position: 'absolute', right: 0, top: 0, bottom: 0, width: 200, background: 'linear-gradient(270deg, #faf9f6 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none'}} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section - BitcoinTalk Origin */}
      <section style={{padding: '120px 24px', backgroundColor: '#ffffff'}}>
        <div style={{maxWidth: 1200, margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center'}}>
            {/* Left - Image/Visual */}
            <motion.div
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.8}}
              style={{position: 'relative'}}
            >
              <div style={{
                width: '100%',
                maxWidth: 500,
                height: 400,
                borderRadius: 24,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
              }}>
                {/* Background Image */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url(/images/story-origin.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
              </div>
            </motion.div>

            {/* Right - Text Content */}
            <motion.div
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.8, delay: 0.2}}
            >
              <span style={{
                display: 'inline-block',
                padding: '8px 16px',
                backgroundColor: '#FFF3E0',
                color: '#F7931A',
                borderRadius: 50,
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 24,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                THE STORY
              </span>
              
              <h2 style={{
                fontSize: 48,
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 24,
                color: '#1a1a1a',
                letterSpacing: '-1.5px'
              }}>
                From BitcoinTalk to{' '}
                <span style={{color: '#F7931A'}}>reality</span>
              </h2>
              
              <p style={{
                fontSize: 18,
                color: '#666666',
                lineHeight: 1.7,
                marginBottom: 32
              }}>
                WankCoin was born in <strong>2014</strong> on BitcoinTalk as a SHA-256 proof-of-work cryptocurrency designed for anonymous adult content purchases. The original vision was simple: enable private payments without credit card traces.
              </p>
              
              <p style={{
                fontSize: 18,
                color: '#666666',
                lineHeight: 1.7,
                marginBottom: 40
              }}>
                A decade later, we're <strong>reviving the token</strong> on Solana and finally implementing its intended utility: <strong>virtual Visa cards</strong> that work on any adult platform. The original dream, now realized.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20,
                marginTop: 40
              }}>
                <motion.div
                  style={{
                    padding: 24,
                    backgroundColor: '#fafafa',
                    borderRadius: 16,
                    border: '1px solid #e5e5e5'
                  }}
                  whileHover={{y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.08)'}}
                >
                  <div style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: '#F7931A',
                    marginBottom: 8
                  }}>
                    2014
                  </div>
                  <div style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: 4
                  }}>
                    Original Launch
                  </div>
                  <div style={{
                    fontSize: 13,
                    color: '#666666',
                    lineHeight: 1.5
                  }}>
                    SHA-256 PoW coin on BitcoinTalk for anonymous adult content payments
                  </div>
                </motion.div>

                <motion.div
                  style={{
                    padding: 24,
                    backgroundColor: '#fafafa',
                    borderRadius: 16,
                    border: '1px solid #e5e5e5'
                  }}
                  whileHover={{y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.08)'}}
                >
                  <div style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: '#F7931A',
                    marginBottom: 8
                  }}>
                    2026
                  </div>
                  <div style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: 4
                  }}>
                    Utility Realized
                  </div>
                  <div style={{
                    fontSize: 13,
                    color: '#666666',
                    lineHeight: 1.5
                  }}>
                    Solana-based token with virtual Visa cards - the original vision, finally working
                  </div>
                </motion.div>
              </div>

              <motion.div
                style={{marginTop: 40}}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.4}}
              >
                <a
                  href="https://bitcointalk.org/index.php?topic=625934.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '14px 28px',
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                    borderRadius: 50,
                    textDecoration: 'none',
                    fontSize: 15,
                    fontWeight: 600,
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F7931A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1a1a1a';
                  }}
                >
                  <span>View Original Thread</span>
                  <ArrowRight style={{width: 18, height: 18}} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Grovia Style with UI Widgets */}
      <section id="how-it-works" style={{padding: '100px 24px', backgroundColor: '#f8f6f3'}}>
        <div style={{maxWidth: 1200, margin: '0 auto'}}>
          {/* Process Cards Grid */}
          <div style={{display: 'flex', gap: 16}}>
            
            {/* Card 1 - Connect Wallet (50% width) */}
            <motion.div 
              style={{flex: '0 0 50%', backgroundColor: '#f0ede8', borderRadius: 24, padding: 32, minHeight: 380, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden'}}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
            >
              <div style={{marginBottom: 'auto'}}>
                <div style={{fontSize: 18, color: '#999999', marginBottom: 16}}>01</div>
                <h3 style={{fontSize: 28, fontWeight: 600, color: '#1a1a1a', marginBottom: 12}}>Connect wallet</h3>
                <p style={{fontSize: 15, color: '#666666', lineHeight: 1.6, maxWidth: 220}}>Link your Phantom or Solflare. No registration needed.</p>
              </div>
              
              {/* Embedded UI Widget - Wallet Connect */}
              <motion.div 
                style={{position: 'absolute', top: 30, right: 20, width: 270, background: 'linear-gradient(145deg, #F7931A 0%, #FFD93D 50%, #F7931A 100%)', borderRadius: 20, padding: 3, boxShadow: '0 20px 60px rgba(247, 147, 26, 0.3)'}}
                initial={{rotate: 3, y: 20, opacity: 0}}
                whileInView={{rotate: 3, y: 0, opacity: 1}}
                viewport={{once: true}}
                whileHover={{rotate: 0, scale: 1.03, boxShadow: '0 30px 80px rgba(247, 147, 26, 0.4)'}}
                transition={{type: 'spring', stiffness: 200}}
              >
                <div style={{backgroundColor: '#ffffff', borderRadius: 17, padding: 20}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18}}>
                    <div style={{width: 28, height: 28, background: 'linear-gradient(135deg, #F7931A 0%, #FFD93D 100%)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <Wallet style={{width: 14, height: 14, color: '#ffffff'}} />
                    </div>
                    <span style={{fontSize: 14, fontWeight: 600, color: '#1a1a1a'}}>Connect Wallet</span>
                  </div>
                  
                  <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18}}>
                    <span style={{fontSize: 12, color: '#888888'}}>Choose wallet</span>
                    <div style={{display: 'flex', marginLeft: 'auto'}}>
                      {[
                        { bg: 'linear-gradient(135deg, #AB9FF2 0%, #6B5CE7 100%)', icon: <Lock style={{width: 12, height: 12, color: '#fff'}} /> },
                        { bg: 'linear-gradient(135deg, #14F195 0%, #9945FF 100%)', icon: <Zap style={{width: 12, height: 12, color: '#fff'}} /> },
                        { bg: 'linear-gradient(135deg, #00D1FF 0%, #0052FF 100%)', icon: <Globe style={{width: 12, height: 12, color: '#fff'}} /> }
                      ].map((wallet, i) => (
                        <motion.div 
                          key={i} 
                          style={{width: 30, height: 30, borderRadius: '50%', background: wallet.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: i > 0 ? -8 : 0, border: '2px solid white', boxShadow: '0 2px 8px rgba(0,0,0,0.15)'}}
                          whileHover={{scale: 1.15, zIndex: 10}}
                        >
                          {wallet.icon}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div style={{marginBottom: 14}}>
                    <div style={{fontSize: 11, color: '#888888', marginBottom: 6}}>Wallet Address</div>
                    <motion.div 
                      style={{padding: '10px 12px', backgroundColor: '#f5f5f5', borderRadius: 10, fontSize: 13, color: '#666666', fontFamily: 'monospace', border: '1px solid #e5e5e5'}}
                      animate={{borderColor: ['#e5e5e5', '#F7931A', '#e5e5e5']}}
                      transition={{duration: 3, repeat: Infinity}}
                    >
                      7xKX...4nPq
                    </motion.div>
                  </div>
                  
                  <motion.button 
                    style={{width: '100%', padding: '12px', background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)', color: '#ffffff', border: 'none', borderRadius: 10, fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8}}
                    whileHover={{background: 'linear-gradient(135deg, #F7931A 0%, #FFD93D 100%)'}}
                  >
                    <Wallet style={{width: 14, height: 14}} />
                    Connect Phantom
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 2 - Top Up (25% width) */}
            <motion.div 
              style={{flex: '0 0 calc(25% - 8px)', backgroundColor: '#f0ede8', borderRadius: 24, padding: 32, minHeight: 380, display: 'flex', flexDirection: 'column'}}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.1}}
            >
              <div style={{fontSize: 18, color: '#999999', marginBottom: 16}}>02</div>
              <h3 style={{fontSize: 24, fontWeight: 600, color: '#1a1a1a', marginBottom: 12}}>Top up</h3>
              <p style={{fontSize: 14, color: '#666666', lineHeight: 1.6}}>Add SOL or WKC tokens. Swap on Jupiter if needed.</p>
              
              {/* Mini Balance Widget */}
              <motion.div 
                style={{marginTop: 'auto', backgroundColor: '#ffffff', borderRadius: 16, padding: 18, boxShadow: '0 8px 30px rgba(0,0,0,0.06)'}}
                whileHover={{scale: 1.03, boxShadow: '0 12px 40px rgba(0,0,0,0.1)'}}
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{delay: 0.2, type: 'spring'}}
              >
                <div style={{marginBottom: 8}}>
                  <span style={{fontSize: 12, color: '#888888'}}>Balance</span>
                </div>
                <motion.div 
                  style={{fontSize: 26, fontWeight: 700, color: '#1a1a1a'}}
                  animate={{opacity: [1, 0.7, 1]}}
                  transition={{duration: 3, repeat: Infinity}}
                >
                  1,250 WKC
                </motion.div>
                <div style={{fontSize: 12, color: '#888888'}}>≈ $125.00</div>
                <motion.div 
                  style={{marginTop: 12, height: 4, backgroundColor: '#f0f0f0', borderRadius: 2, overflow: 'hidden'}}
                >
                  <motion.div 
                    style={{height: '100%', background: 'linear-gradient(90deg, #F7931A 0%, #FFD93D 100%)', borderRadius: 2}}
                    initial={{width: '0%'}}
                    whileInView={{width: '65%'}}
                    viewport={{once: true}}
                    transition={{duration: 1, delay: 0.5}}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Card 3 - Generate Card (25% width) */}
            <motion.div 
              style={{flex: '0 0 calc(25% - 8px)', backgroundColor: '#f0ede8', borderRadius: 24, padding: 32, minHeight: 380, display: 'flex', flexDirection: 'column'}}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
            >
              <div style={{fontSize: 18, color: '#999999', marginBottom: 16}}>03</div>
              <h3 style={{fontSize: 24, fontWeight: 600, color: '#1a1a1a', marginBottom: 12}}>Get card</h3>
              <p style={{fontSize: 14, color: '#666666', lineHeight: 1.6}}>Generate instant virtual Visa card for any platform.</p>
              
              {/* Mini Card Widget */}
              <motion.div 
                style={{marginTop: 'auto', background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)', borderRadius: 14, padding: 16, color: '#ffffff', position: 'relative', overflow: 'hidden'}}
                whileHover={{scale: 1.03, rotateY: 5}}
                initial={{y: 20, opacity: 0, rotateX: 10}}
                whileInView={{y: 0, opacity: 1, rotateX: 0}}
                viewport={{once: true}}
                transition={{delay: 0.3, type: 'spring'}}
              >
                {/* Shine effect */}
                <motion.div 
                  style={{position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', pointerEvents: 'none'}}
                  animate={{left: ['−100%', '200%']}}
                  transition={{duration: 3, repeat: Infinity, repeatDelay: 2}}
                />
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 18, position: 'relative'}}>
                  <span style={{fontSize: 11, opacity: 0.6, display: 'flex', alignItems: 'center', gap: 4}}>
                    <CreditCard style={{width: 12, height: 12}} /> WankCard
                  </span>
                  <span style={{fontSize: 12, fontWeight: 800, letterSpacing: 1}}>VISA</span>
                </div>
                <motion.div 
                  style={{fontSize: 13, fontFamily: 'monospace', letterSpacing: 2, marginBottom: 12}}
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  viewport={{once: true}}
                  transition={{delay: 0.5}}
                >
                  4532 •••• •••• 7821
                </motion.div>
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 10}}>
                  <div>
                    <div style={{opacity: 0.4, marginBottom: 2}}>EXP</div>
                    <div style={{fontFamily: 'monospace'}}>12/27</div>
                  </div>
                  <div style={{textAlign: 'right'}}>
                    <div style={{opacity: 0.4, marginBottom: 2}}>LIMIT</div>
                    <div style={{fontWeight: 700, color: '#F7931A'}}>$50.00</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Second Row */}
          <div style={{display: 'flex', gap: 16, marginTop: 16}}>
            
            {/* Card 4 - Pay Privately */}
            <motion.div 
              style={{flex: '0 0 calc(33.333% - 11px)', backgroundColor: '#f0ede8', borderRadius: 24, padding: 32, minHeight: 320}}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.3}}
            >
              <div style={{fontSize: 18, color: '#999999', marginBottom: 16}}>04</div>
              <h3 style={{fontSize: 24, fontWeight: 600, color: '#1a1a1a', marginBottom: 12}}>Pay privately</h3>
              <p style={{fontSize: 14, color: '#666666', lineHeight: 1.6, marginBottom: 24}}>Use your card on any site. Zero traces on bank statement.</p>
              
              {/* Platform Icons */}
              <div style={{display: 'flex', gap: 10}}>
                {[
                  { name: 'OF', bg: 'linear-gradient(135deg, #00AFF0 0%, #0095D9 100%)' },
                  { name: 'PH', bg: 'linear-gradient(135deg, #FF9000 0%, #F77F00 100%)' },
                  { name: 'CB', bg: 'linear-gradient(135deg, #F47321 0%, #E85D04 100%)' },
                  { name: 'FS', bg: 'linear-gradient(135deg, #0099FF 0%, #0066CC 100%)' }
                ].map((p, i) => (
                  <motion.div 
                    key={i}
                    style={{width: 44, height: 44, background: p.bg, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}}
                    whileHover={{scale: 1.1, y: -4}}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.4 + i * 0.1}}
                  >
                    {p.name}
                  </motion.div>
                ))}
                <motion.div 
                  style={{width: 44, height: 44, backgroundColor: '#ffffff', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#666666', border: '2px dashed #ddd'}}
                  whileHover={{borderColor: '#F7931A', color: '#F7931A'}}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: 0.8}}
                >
                  +99
                </motion.div>
              </div>
            </motion.div>

            {/* Card 5 - Burn Mechanism */}
            <motion.div 
              style={{flex: '0 0 calc(33.333% - 11px)', background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)', borderRadius: 24, padding: 32, minHeight: 320, color: '#ffffff', position: 'relative', overflow: 'hidden'}}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.4}}
            >
              {/* Animated fire particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{position: 'absolute', bottom: 0, left: `${20 + i * 15}%`, width: 4, height: 4, borderRadius: '50%', backgroundColor: '#F7931A'}}
                  animate={{y: [0, -100, -200], opacity: [0, 1, 0], scale: [0, 1.5, 0]}}
                  transition={{duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.4}}
                />
              ))}
              
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24}}>
                <motion.div
                  style={{width: 36, height: 36, background: 'linear-gradient(135deg, #EF4444 0%, #F97316 100%)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                  animate={{scale: [1, 1.1, 1], boxShadow: ['0 0 0 0 rgba(239, 68, 68, 0)', '0 0 20px 5px rgba(239, 68, 68, 0.3)', '0 0 0 0 rgba(239, 68, 68, 0)']}}
                  transition={{duration: 1.5, repeat: Infinity}}
                >
                  <Flame style={{width: 20, height: 20, color: '#fff'}} />
                </motion.div>
                <span style={{fontSize: 14, opacity: 0.7}}>Burn Mechanism</span>
              </div>
              
              <div style={{display: 'flex', gap: 24, marginBottom: 24}}>
                <motion.div
                  initial={{scale: 0}}
                  whileInView={{scale: 1}}
                  viewport={{once: true}}
                  transition={{delay: 0.5, type: 'spring'}}
                >
                  <div style={{fontSize: 40, fontWeight: 800, background: 'linear-gradient(135deg, #EF4444 0%, #F97316 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>50%</div>
                  <div style={{fontSize: 12, opacity: 0.5}}>Burned</div>
                </motion.div>
                <motion.div
                  initial={{scale: 0}}
                  whileInView={{scale: 1}}
                  viewport={{once: true}}
                  transition={{delay: 0.6, type: 'spring'}}
                >
                  <div style={{fontSize: 40, fontWeight: 800, background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>50%</div>
                  <div style={{fontSize: 12, opacity: 0.5}}>Treasury</div>
                </motion.div>
              </div>
              
              <p style={{fontSize: 13, opacity: 0.6, lineHeight: 1.6}}>Every WKC payment permanently burns half the tokens, creating scarcity.</p>
            </motion.div>

            {/* Card 6 - Stats */}
            <motion.div 
              style={{flex: '0 0 calc(33.333% - 11px)', backgroundColor: '#f0ede8', borderRadius: 24, padding: 32, minHeight: 320}}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.5}}
            >
              <div style={{fontSize: 18, color: '#999999', marginBottom: 20}}>05</div>
              <h3 style={{fontSize: 24, fontWeight: 600, color: '#1a1a1a', marginBottom: 20}}>Statistics</h3>
              
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
                {[
                  { label: 'Total Burned', value: burnCount.toLocaleString('en-US'), suffix: ' WKC', icon: <Flame style={{width: 14, height: 14, color: '#EF4444'}} />, delay: 0.6 },
                  { label: 'Transactions', value: '12.5K', suffix: '+', icon: <TrendingUp style={{width: 14, height: 14, color: '#22c55e'}} />, delay: 0.7 },
                  { label: 'Holders', value: '3,200', suffix: '+', icon: <Users style={{width: 14, height: 14, color: '#3B82F6'}} />, delay: 0.8 },
                  { label: 'Cards Generated', value: '8,400', suffix: '', icon: <CreditCard style={{width: 14, height: 14, color: '#8B5CF6'}} />, delay: 0.9 }
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    style={{backgroundColor: '#ffffff', borderRadius: 14, padding: 16, boxShadow: '0 4px 15px rgba(0,0,0,0.04)'}}
                    whileHover={{scale: 1.03, boxShadow: '0 8px 25px rgba(0,0,0,0.08)'}}
                    initial={{opacity: 0, y: 15}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: stat.delay}}
                  >
                    <div style={{display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6}}>
                      {stat.icon}
                      <span style={{fontSize: 11, color: '#888888'}}>{stat.label}</span>
                    </div>
                    <div style={{fontSize: 20, fontWeight: 700, color: '#1a1a1a'}}>{stat.value}<span style={{fontSize: 12, color: '#888888'}}>{stat.suffix}</span></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - Interactive Tabs */}
      <section id="features" style={{padding: '100px 24px'}}>
        <div style={{maxWidth: 1200, margin: '0 auto'}}>
          <motion.div 
            style={{textAlign: 'center', marginBottom: 64}}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
          >
            <span style={{display: 'inline-block', padding: '8px 16px', backgroundColor: '#FFF3E0', color: '#F7931A', borderRadius: 50, fontSize: 13, fontWeight: 600, marginBottom: 16}}>FEATURES</span>
            <h2 style={{fontSize: 44, fontWeight: 700, marginBottom: 16, color: '#000000', letterSpacing: '-1px'}}>Built for privacy</h2>
            <p style={{fontSize: 18, color: '#666666', maxWidth: 500, margin: '0 auto'}}>Everything you need to pay anonymously without compromises</p>
          </motion.div>

          {/* Tabs */}
          <div style={{display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 48, flexWrap: 'wrap'}}>
            {tabs.map((tab, i) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '14px 24px', borderRadius: 50, fontSize: 15, fontWeight: 600, border: 'none', cursor: 'pointer',
                  backgroundColor: activeTab === i ? '#000000' : '#f5f5f5',
                  color: activeTab === i ? '#ffffff' : '#666666',
                  boxShadow: activeTab === i ? '0 4px 20px rgba(0,0,0,0.15)' : 'none'
                }}
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              style={{backgroundColor: '#fafafa', borderRadius: 24, overflow: 'hidden', border: '1px solid #e5e5e5'}}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -20}}
              transition={{duration: 0.3}}
            >
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                {/* Visual Side */}
                <div style={{backgroundColor: '#f0f0f0', padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400}}>
                  {activeTab === 0 ? (
                    // Image for 100% Anonymous tab
                    <motion.div 
                      style={{
                        width: '100%',
                        maxWidth: 400,
                        backgroundColor: '#ffffff',
                        borderRadius: 24,
                        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      initial={{opacity: 0, scale: 0.9}}
                      animate={{opacity: 1, scale: 1}}
                      transition={{duration: 0.5}}
                      whileHover={{scale: 1.02, boxShadow: '0 30px 80px rgba(0,0,0,0.15)'}}
                    >
                      <img
                        src="/images/anonymous-feature.jpg"
                        alt="Anonymous"
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          objectFit: 'contain'
                        }}
                      />
                    </motion.div>
                  ) : activeTab === 1 ? (
                    // Image for Instant Cards tab
                    <motion.div 
                      style={{
                        width: '100%',
                        maxWidth: 400,
                        backgroundColor: '#ffffff',
                        borderRadius: 24,
                        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      initial={{opacity: 0, scale: 0.9}}
                      animate={{opacity: 1, scale: 1}}
                      transition={{duration: 0.5}}
                      whileHover={{scale: 1.02, boxShadow: '0 30px 80px rgba(0,0,0,0.15)'}}
                    >
                      <img
                        src="/images/card-feature.jpg"
                        alt="WankCard"
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          objectFit: 'contain'
                        }}
                      />
                    </motion.div>
                  ) : activeTab === 2 ? (
                    // Image for 50% Burn tab
                    <motion.div 
                      style={{
                        width: '100%',
                        maxWidth: 400,
                        backgroundColor: '#ffffff',
                        borderRadius: 24,
                        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      initial={{opacity: 0, scale: 0.9}}
                      animate={{opacity: 1, scale: 1}}
                      transition={{duration: 0.5}}
                      whileHover={{scale: 1.02, boxShadow: '0 30px 80px rgba(0,0,0,0.15)'}}
                    >
                      <img
                        src="/images/burn-feature.jpg"
                        alt="Burn Mechanism"
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          objectFit: 'contain'
                        }}
                      />
                    </motion.div>
                  ) : activeTab === 3 ? (
                    // Image for Global Access tab
                    <motion.div 
                      style={{
                        width: '100%',
                        maxWidth: 400,
                        backgroundColor: '#ffffff',
                        borderRadius: 24,
                        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      initial={{opacity: 0, scale: 0.9}}
                      animate={{opacity: 1, scale: 1}}
                      transition={{duration: 0.5}}
                      whileHover={{scale: 1.02, boxShadow: '0 30px 80px rgba(0,0,0,0.15)'}}
                    >
                      <img
                        src="/images/global-feature.jpg"
                        alt="Global Access"
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          objectFit: 'contain'
                        }}
                      />
                    </motion.div>
                  ) : (
                    // Icon for other tabs
                    <motion.div 
                      style={{width: 120, height: 120, backgroundColor: '#ffffff', borderRadius: 24, boxShadow: '0 20px 60px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                      animate={{rotate: [0, 5, 0, -5, 0], scale: [1, 1.05, 1]}}
                      transition={{duration: 4, repeat: Infinity}}
                    >
                      <div style={{color: '#F7931A', transform: 'scale(2.5)'}}>
                        {tabs[activeTab].icon}
                      </div>
                    </motion.div>
                  )}
                </div>
                
                {/* Content Side */}
                <div style={{padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <span style={{display: 'inline-block', padding: '6px 14px', backgroundColor: '#FFF3E0', color: '#F7931A', fontSize: 12, fontWeight: 600, borderRadius: 50, marginBottom: 20, width: 'fit-content', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                    {tabs[activeTab].label}
                  </span>
                  <h3 style={{fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#000000', lineHeight: 1.2}}>{tabs[activeTab].title}</h3>
                  <p style={{fontSize: 16, color: '#666666', lineHeight: 1.7, marginBottom: 24}}>{tabs[activeTab].description}</p>
                  
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
                    {tabs[activeTab].features.map((feature, i) => (
                      <motion.div 
                        key={i} 
                        style={{display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', backgroundColor: '#ffffff', borderRadius: 10, border: '1px solid #e5e5e5'}}
                        initial={{opacity: 0, x: -10}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: i * 0.1}}
                      >
                        <Check style={{width: 16, height: 16, color: '#22c55e'}} />
                        <span style={{fontSize: 13, fontWeight: 500, color: '#333333'}}>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Tokenomics - Detailed */}
      <section id="tokenomics" style={{padding: '100px 24px', backgroundColor: '#0a0a0a', color: '#ffffff'}}>
        <div style={{maxWidth: 1200, margin: '0 auto'}}>
          <motion.div 
            style={{textAlign: 'center', marginBottom: 64}}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
          >
            <span style={{display: 'inline-block', padding: '8px 16px', backgroundColor: 'rgba(247, 147, 26, 0.2)', color: '#F7931A', borderRadius: 50, fontSize: 13, fontWeight: 600, marginBottom: 16}}>TOKENOMICS</span>
            <h2 style={{fontSize: 44, fontWeight: 700, marginBottom: 16, letterSpacing: '-1px'}}>Deflationary by design</h2>
            <p style={{fontSize: 18, color: '#888888', maxWidth: 500, margin: '0 auto'}}>Every payment reduces supply. More usage = more scarcity.</p>
          </motion.div>

          <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48}}>
            {/* Left - Burn Explanation */}
            <div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 48}}>
                <motion.div 
                  style={{background: 'linear-gradient(135deg, #EF4444 0%, #F97316 100%)', borderRadius: 20, padding: 32}}
                  whileHover={{scale: 1.02}}
                >
                  <Flame style={{width: 40, height: 40, marginBottom: 16}} />
                  <div style={{fontSize: 48, fontWeight: 800, marginBottom: 8}}>50%</div>
                  <div style={{fontSize: 16, opacity: 0.9}}>Permanently Burned</div>
                  <p style={{fontSize: 14, opacity: 0.7, marginTop: 12}}>Every WKC payment destroys half the tokens forever. They can never be recovered.</p>
                </motion.div>
                <motion.div 
                  style={{background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)', borderRadius: 20, padding: 32}}
                  whileHover={{scale: 1.02}}
                >
                  <BarChart3 style={{width: 40, height: 40, marginBottom: 16}} />
                  <div style={{fontSize: 48, fontWeight: 800, marginBottom: 8}}>50%</div>
                  <div style={{fontSize: 16, opacity: 0.9}}>Treasury</div>
                  <p style={{fontSize: 14, opacity: 0.7, marginTop: 12}}>Funds development, marketing, partnerships, and ecosystem growth.</p>
                </motion.div>
              </div>

              {/* Example Transaction */}
              <div style={{backgroundColor: '#1a1a1a', borderRadius: 20, padding: 32, border: '1px solid #333333'}}>
                <h4 style={{fontSize: 18, fontWeight: 600, marginBottom: 20}}>Example: Buy $10 card with 100 WKC</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                  {[
                    { label: 'You pay', value: '100 WKC', color: '#ffffff', bg: '#2a2a2a' },
                    { label: '🔥 Burned', value: '50 WKC', color: '#EF4444', bg: 'rgba(239, 68, 68, 0.1)' },
                    { label: 'Treasury', value: '50 WKC', color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.1)' },
                    { label: 'You receive', value: '$10 Card', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      style={{display: 'flex', justifyContent: 'space-between', padding: '14px 18px', backgroundColor: item.bg, borderRadius: 12}}
                      initial={{opacity: 0, x: -20}}
                      whileInView={{opacity: 1, x: 0}}
                      viewport={{once: true}}
                      transition={{delay: i * 0.1}}
                    >
                      <span style={{color: '#888888'}}>{item.label}</span>
                      <span style={{fontWeight: 700, color: item.color}}>{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Live Stats */}
            <div>
              <motion.div 
                style={{backgroundColor: '#1a1a1a', borderRadius: 20, padding: 32, border: '1px solid #333333', textAlign: 'center', marginBottom: 24}}
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
              >
                <motion.div
                  animate={{scale: [1, 1.1, 1], color: ['#EF4444', '#F97316', '#EF4444']}}
                  transition={{duration: 2, repeat: Infinity}}
                >
                  <Flame style={{width: 48, height: 48, margin: '0 auto 16px'}} />
                </motion.div>
                <div style={{fontSize: 14, color: '#888888', marginBottom: 8}}>Total Burned</div>
                <motion.div 
                  style={{fontSize: 40, fontWeight: 800}}
                  key={burnCount}
                  animate={{scale: [1, 1.05, 1]}}
                >
                  {burnCount.toLocaleString('en-US')} WKC
                </motion.div>
              </motion.div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
                {[
                  { label: 'Total Supply', value: '1B' },
                  { label: 'Circulating', value: '~800M' },
                  { label: 'Transactions', value: '12.5K+' },
                  { label: 'Holders', value: '3.2K+' }
                ].map((stat, i) => (
                  <div key={i} style={{backgroundColor: '#1a1a1a', borderRadius: 16, padding: 20, textAlign: 'center', border: '1px solid #333333'}}>
                    <div style={{fontSize: 12, color: '#888888', marginBottom: 4}}>{stat.label}</div>
                    <div style={{fontSize: 24, fontWeight: 700}}>{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Stats */}
      <section style={{padding: '80px 24px', backgroundColor: '#ffffff'}}>
        <div style={{maxWidth: 1200, margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32}}>
            {[
              { value: '$100B+', label: 'Adult industry size', icon: <TrendingUp style={{width: 24, height: 24}} /> },
              { value: '10,000+', label: 'Supported platforms', icon: <Globe style={{width: 24, height: 24}} /> },
              { value: '100%', label: 'Anonymous', icon: <Shield style={{width: 24, height: 24}} /> },
              { value: '<0.01s', label: 'Transaction speed', icon: <Zap style={{width: 24, height: 24}} /> }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                style={{textAlign: 'center', padding: 24}}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.1}}
              >
                <div style={{width: 48, height: 48, backgroundColor: '#FFF3E0', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F7931A', margin: '0 auto 16px'}}>
                  {stat.icon}
                </div>
                <div style={{fontSize: 36, fontWeight: 700, color: '#000000', marginBottom: 4}}>{stat.value}</div>
                <div style={{color: '#888888'}}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{padding: '100px 24px', backgroundColor: '#fafafa'}}>
        <div style={{maxWidth: 800, margin: '0 auto'}}>
          <motion.div 
            style={{textAlign: 'center', marginBottom: 64}}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
          >
            <span style={{display: 'inline-block', padding: '8px 16px', backgroundColor: '#FFF3E0', color: '#F7931A', borderRadius: 50, fontSize: 13, fontWeight: 600, marginBottom: 16}}>FAQ</span>
            <h2 style={{fontSize: 44, fontWeight: 700, marginBottom: 16, color: '#000000', letterSpacing: '-1px'}}>Common questions</h2>
          </motion.div>

          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                style={{backgroundColor: '#ffffff', borderRadius: 16, border: '1px solid #e5e5e5', overflow: 'hidden'}}
                initial={{opacity: 0, y: 10}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.05}}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', fontWeight: 600, fontSize: 16, backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#000000'}}
                >
                  {faq.q}
                  <motion.div animate={{rotate: openFaq === i ? 180 : 0}}>
                    <ChevronDown style={{width: 20, height: 20, color: '#888888'}} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      style={{padding: '0 24px 20px', color: '#666666', lineHeight: 1.6}}
                      initial={{height: 0, opacity: 0}}
                      animate={{height: 'auto', opacity: 1}}
                      exit={{height: 0, opacity: 0}}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding: '120px 24px', background: 'linear-gradient(135deg, #F7931A 0%, #FFD93D 100%)'}}>
        <div style={{maxWidth: 800, margin: '0 auto', textAlign: 'center'}}>
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
          >
            <h2 style={{fontSize: 48, fontWeight: 700, marginBottom: 16, color: '#ffffff', letterSpacing: '-1px'}}>Ready to pay privately?</h2>
            <p style={{fontSize: 18, color: 'rgba(255,255,255,0.8)', marginBottom: 40}}>Join thousands who value their privacy. Get your WankCard in minutes.</p>
            <div style={{display: 'flex', justifyContent: 'center', gap: 16}}>
              <Link href="/dashboard" style={{backgroundColor: '#000000', color: '#ffffff', fontWeight: 600, padding: '18px 40px', borderRadius: 50, display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', fontSize: 17, boxShadow: '0 4px 20px rgba(0,0,0,0.2)'}}>
                Launch App <ArrowRight style={{width: 20, height: 20}} />
              </Link>
              <Link href="/docs" style={{backgroundColor: 'rgba(255,255,255,0.2)', color: '#ffffff', fontWeight: 600, padding: '18px 40px', borderRadius: 50, textDecoration: 'none', fontSize: 17, backdropFilter: 'blur(10px)'}}>
                Read Docs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{padding: '48px 24px', backgroundColor: '#0a0a0a', color: '#ffffff'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Link href="/" style={{display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none'}}>
            <div style={{width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #F7931A 0%, #FFD93D 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="white"/>
                <path d="M12 6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2z" fill="white"/>
                <circle cx="12" cy="17" r="1.5" fill="white"/>
              </svg>
            </div>
            <span style={{fontWeight: 700, fontSize: 18, color: '#ffffff'}}>WankCoin</span>
          </Link>
          <div style={{display: 'flex', gap: 32}}>
            <Link href="/docs" style={{fontSize: 14, color: '#888888', textDecoration: 'none'}}>Docs</Link>
            <a href="#" style={{fontSize: 14, color: '#888888', textDecoration: 'none'}}>Twitter</a>
            <a href="#" style={{fontSize: 14, color: '#888888', textDecoration: 'none'}}>Telegram</a>
            <a href="#" style={{fontSize: 14, color: '#888888', textDecoration: 'none'}}>Discord</a>
          </div>
          <p style={{fontSize: 14, color: '#666666'}}>© 2026 WankCoin. All rights reserved.</p>
        </div>
      </footer>
      </main>
  );
}
