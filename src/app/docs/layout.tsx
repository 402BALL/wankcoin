'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BookOpen, 
  CreditCard, 
  Flame, 
  Shield, 
  Zap, 
  HelpCircle,
  Menu,
  X,
  Home,
  Code,
  Map,
  Users,
  Wallet
} from 'lucide-react';

const navigation = [
  {
    title: 'GETTING STARTED',
    items: [
      { name: 'Introduction', href: '/docs', icon: BookOpen },
      { name: 'Quick Start', href: '/docs/quick-start', icon: Zap },
    ]
  },
  {
    title: 'CORE CONCEPTS',
    items: [
      { name: 'How WankCard Works', href: '/docs/how-it-works', icon: CreditCard },
      { name: 'Tokenomics & Burn', href: '/docs/tokenomics', icon: Flame },
      { name: 'Security', href: '/docs/security', icon: Shield },
    ]
  },
  {
    title: 'USING WANKCOIN',
    items: [
      { name: 'Supported Platforms', href: '/docs/platforms', icon: Users },
      { name: 'Wallet Setup', href: '/docs/wallet', icon: Wallet },
      { name: 'Generating Cards', href: '/docs/cards', icon: CreditCard },
    ]
  },
  {
    title: 'DEVELOPERS',
    items: [
      { name: 'API Reference', href: '/docs/api', icon: Code },
      { name: 'Roadmap', href: '/docs/roadmap', icon: Map },
    ]
  },
  {
    title: 'SUPPORT',
    items: [
      { name: 'FAQ', href: '/docs/faq', icon: HelpCircle },
    ]
  }
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Header */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', height: 60 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ padding: 8, background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}>
              <Menu style={{ width: 20, height: 20 }} />
            </button>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, background: 'linear-gradient(135deg, #F7931A 0%, #FFD93D 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="white"/>
                  <path d="M12 6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2z" fill="white"/>
                  <circle cx="12" cy="17" r="1.5" fill="white"/>
                </svg>
              </div>
              <span style={{ fontWeight: 600, color: '#000000' }}>WankCoin</span>
              <span style={{ color: '#cccccc', margin: '0 8px' }}>|</span>
              <span style={{ color: '#888888' }}>Docs</span>
            </Link>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Link href="/" style={{ fontSize: 14, color: '#666666', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Home style={{ width: 16, height: 16 }} /> Home
            </Link>
            <Link href="/dashboard" style={{ backgroundColor: '#F7931A', color: '#ffffff', fontSize: 14, fontWeight: 500, padding: '8px 16px', borderRadius: 50, textDecoration: 'none' }}>
              Launch App
            </Link>
          </div>
        </div>
      </header>

      <div style={{ display: 'flex', paddingTop: 60 }}>
        {/* Sidebar */}
        <aside style={{ position: 'fixed', top: 60, left: 0, width: 260, height: 'calc(100vh - 60px)', backgroundColor: '#ffffff', borderRight: '1px solid #e5e5e5', overflowY: 'auto', padding: '24px 0' }}>
          <nav>
            {navigation.map((section) => (
              <div key={section.title} style={{ marginBottom: 24, padding: '0 20px' }}>
                <h4 style={{ fontSize: 11, fontWeight: 600, color: '#999999', letterSpacing: '0.05em', marginBottom: 12 }}>
                  {section.title}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <li key={item.name} style={{ marginBottom: 4 }}>
                        <Link
                          href={item.href}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            padding: '8px 12px',
                            borderRadius: 8,
                            fontSize: 14,
                            fontWeight: 500,
                            textDecoration: 'none',
                            backgroundColor: isActive ? '#FFF3E0' : 'transparent',
                            color: isActive ? '#F7931A' : '#555555',
                          }}
                        >
                          <Icon style={{ width: 16, height: 16 }} />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ marginLeft: 260, flex: 1, minWidth: 0 }}>
          <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 40px' }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
