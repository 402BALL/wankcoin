'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Wallet, CreditCard, ShoppingCart, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <Link href="/docs" style={{ color: '#888888', fontSize: 14, display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16, textDecoration: 'none' }}>
          <ArrowLeft style={{ width: 16, height: 16 }} /> Back
        </Link>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#000000' }}>How WankCard Works</h1>
        <p style={{ fontSize: 18, color: '#666666' }}>
          Understanding the technology behind anonymous adult payments.
        </p>
      </div>

      {/* Flow */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Payment Flow</h2>
        <div style={{ backgroundColor: '#fafafa', borderRadius: 16, padding: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            {[
              { icon: <Wallet style={{ width: 32, height: 32 }} />, label: 'Your Wallet', sub: 'WKC/SOL' },
              { icon: <CreditCard style={{ width: 32, height: 32 }} />, label: 'WankCard', sub: 'Virtual Visa' },
              { icon: <ShoppingCart style={{ width: 32, height: 32 }} />, label: 'Platform', sub: 'OnlyFans etc.' },
              { icon: <CheckCircle style={{ width: 32, height: 32 }} />, label: 'Access', sub: 'Unlocked!' }
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: 64, height: 64, backgroundColor: '#ffffff', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F7931A', marginBottom: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    {step.icon}
                  </div>
                  <p style={{ fontWeight: 600, fontSize: 14, color: '#000000' }}>{step.label}</p>
                  <p style={{ fontSize: 12, color: '#888888' }}>{step.sub}</p>
                </div>
                {i < 3 && <ArrowRight style={{ width: 24, height: 24, color: '#cccccc' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Card */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Virtual Card Technology</h2>
        <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 16 }}>
          WankCard uses the same technology as prepaid Visa gift cards. Each generated card has:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            'A valid 16-digit card number',
            'Expiration date (1 year)',
            'CVV security code',
            'Pre-loaded balance'
          ].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, backgroundColor: '#F7931A', borderRadius: '50%' }} />
              <span style={{ color: '#555555' }}>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Privacy */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Privacy Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { title: 'No Personal Data', desc: 'Cards not linked to your name or address.' },
            { title: 'No Bank Statement', desc: 'Transactions appear as crypto, not adult sites.' },
            { title: 'Non-Custodial', desc: 'We never hold your funds.' },
            { title: 'One-Time Use', desc: 'Each card is unique and disposable.' }
          ].map((feature, i) => (
            <div key={i} style={{ padding: 16, backgroundColor: '#fafafa', borderRadius: 12 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 4, color: '#000000' }}>{feature.title}</h3>
              <p style={{ fontSize: 14, color: '#666666' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next */}
      <div style={{ display: 'flex', gap: 16 }}>
        <Link href="/docs/tokenomics" style={{ flex: 1, padding: 20, border: '1px solid #e5e5e5', borderRadius: 12, textDecoration: 'none' }}>
          <span style={{ fontSize: 12, color: '#888888', display: 'block', marginBottom: 4 }}>Next</span>
          <span style={{ fontWeight: 600, color: '#000000', display: 'flex', alignItems: 'center', gap: 4 }}>
            Tokenomics & Burn <ArrowRight style={{ width: 16, height: 16 }} />
          </span>
        </Link>
      </div>
    </div>
  );
}
