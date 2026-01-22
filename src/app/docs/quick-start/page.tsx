'use client';

import Link from 'next/link';
import { ArrowRight, ArrowLeft, Check, ExternalLink } from 'lucide-react';

export default function QuickStart() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <Link href="/docs" style={{ color: '#888888', fontSize: 14, display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16, textDecoration: 'none' }}>
          <ArrowLeft style={{ width: 16, height: 16 }} /> Back to Introduction
        </Link>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Quick Start Guide</h1>
        <p style={{ fontSize: 18, color: '#666666' }}>
          Get started with WankCoin and generate your first anonymous card in under 5 minutes.
        </p>
      </div>

      {/* Prerequisites */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Prerequisites</h2>
        <div style={{ padding: 16, backgroundColor: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: 12, marginBottom: 16 }}>
          <p style={{ color: '#92400E' }}>
            <strong>Before you begin:</strong> You'll need a Solana wallet (Phantom recommended) with some SOL for transactions.
          </p>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'A Solana wallet (Phantom, Solflare, etc.)',
            'Some SOL for gas fees (~0.01 SOL)',
            'WKC tokens or SOL for card purchases'
          ].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#333333' }}>
              <Check style={{ width: 20, height: 20, color: '#22c55e' }} />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Steps */}
      {[
        { num: 1, title: 'Install Phantom Wallet', content: 'If you don\'t have a Solana wallet yet, we recommend Phantom. Go to phantom.app, download the extension, create a wallet, and fund it with SOL.' },
        { num: 2, title: 'Get WKC Tokens', content: 'Purchase WKC on Jupiter (jup.ag) or Raydium by swapping SOL for WKC using the official contract address.' },
        { num: 3, title: 'Connect to Dashboard', content: 'Go to the WankCoin Dashboard, click "Connect Wallet", select Phantom, and approve the connection.' },
        { num: 4, title: 'Generate Your First Card', content: 'Select a platform (e.g., OnlyFans), choose amount ($5-$100), select payment method, and click "Generate Card".' },
        { num: 5, title: 'Use Your Card', content: 'Copy the card details (number, expiry, CVV) and use them on your chosen platform. Cards are one-time use.' }
      ].map((step, i) => (
        <section key={i} style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 40, height: 40, backgroundColor: '#F7931A', color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
              {step.num}
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#000000' }}>{step.title}</h2>
          </div>
          <div style={{ marginLeft: 52, paddingLeft: 24, borderLeft: '2px solid #e5e5e5' }}>
            <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7 }}>{step.content}</p>
          </div>
        </section>
      ))}

      {/* Next */}
      <div style={{ display: 'flex', gap: 16 }}>
        <Link href="/docs/how-it-works" style={{ flex: 1, padding: 20, border: '1px solid #e5e5e5', borderRadius: 12, textDecoration: 'none' }}>
          <span style={{ fontSize: 12, color: '#888888', display: 'block', marginBottom: 4 }}>Next</span>
          <span style={{ fontWeight: 600, color: '#000000', display: 'flex', alignItems: 'center', gap: 4 }}>
            How WankCard Works <ArrowRight style={{ width: 16, height: 16 }} />
          </span>
        </Link>
      </div>
    </div>
  );
}
