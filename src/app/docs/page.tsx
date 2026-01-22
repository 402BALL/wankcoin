'use client';

import Link from 'next/link';
import { ArrowRight, Zap, CreditCard, Shield, Flame } from 'lucide-react';

export default function DocsIntroduction() {
  return (
    <div>
      {/* Hero */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', backgroundColor: '#FFF3E0', color: '#F7931A', borderRadius: 50, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
          📖 Documentation
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Welcome to WankCoin</h1>
        <p style={{ fontSize: 18, color: '#666666', lineHeight: 1.6 }}>
          The privacy-first payment solution for adult content. Pay anonymously with WankCard virtual cards.
        </p>
      </div>

      {/* Quick Links */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 48 }}>
        <Link href="/docs/quick-start" style={{ padding: 24, border: '1px solid #e5e5e5', borderRadius: 16, textDecoration: 'none', transition: 'all 0.2s' }}>
          <div style={{ width: 48, height: 48, backgroundColor: '#FFF3E0', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <Zap style={{ width: 24, height: 24, color: '#F7931A' }} />
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#000000' }}>Quick Start</h3>
          <p style={{ fontSize: 14, color: '#666666', marginBottom: 12 }}>Get started with WankCoin in under 5 minutes.</p>
          <span style={{ color: '#F7931A', fontWeight: 500, fontSize: 14, display: 'flex', alignItems: 'center', gap: 4 }}>
            Read guide <ArrowRight style={{ width: 16, height: 16 }} />
          </span>
        </Link>

        <Link href="/docs/how-it-works" style={{ padding: 24, border: '1px solid #e5e5e5', borderRadius: 16, textDecoration: 'none' }}>
          <div style={{ width: 48, height: 48, backgroundColor: '#DBEAFE', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <CreditCard style={{ width: 24, height: 24, color: '#3B82F6' }} />
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#000000' }}>How WankCard Works</h3>
          <p style={{ fontSize: 14, color: '#666666', marginBottom: 12 }}>Learn about virtual cards and payment flow.</p>
          <span style={{ color: '#F7931A', fontWeight: 500, fontSize: 14, display: 'flex', alignItems: 'center', gap: 4 }}>
            Learn more <ArrowRight style={{ width: 16, height: 16 }} />
          </span>
        </Link>
      </div>

      {/* What is WankCoin */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#000000' }}>What is WankCoin?</h2>
        <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 16 }}>
          WankCoin (WKC) is a cryptocurrency built on Solana, designed specifically for anonymous payments on adult content platforms. Combined with <strong>WankCard</strong> virtual cards, users can pay for premium content without any trace on their bank statement.
        </p>
        <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7 }}>
          The token features a unique <strong>50% burn mechanism</strong> — every time someone pays with WKC, half of the tokens are permanently destroyed. This creates deflationary pressure, making remaining tokens more scarce over time.
        </p>
      </section>

      {/* Key Features */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: '#000000' }}>Key Features</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { icon: <Shield style={{ width: 20, height: 20 }} />, title: "100% Anonymous", description: "No personal information required. No trace on bank statements. Complete privacy.", color: '#10B981', bg: '#D1FAE5' },
            { icon: <CreditCard style={{ width: 20, height: 20 }} />, title: "Instant Cards", description: "Generate one-time Visa cards that work on any adult platform worldwide.", color: '#3B82F6', bg: '#DBEAFE' },
            { icon: <Flame style={{ width: 20, height: 20 }} />, title: "50% Burn", description: "Every WKC payment burns half the tokens. Deflationary by design.", color: '#EF4444', bg: '#FEE2E2' },
            { icon: <Zap style={{ width: 20, height: 20 }} />, title: "Instant & Cheap", description: "Powered by Solana. Sub-second transactions, minimal fees.", color: '#F59E0B', bg: '#FEF3C7' }
          ].map((feature, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, padding: 16, backgroundColor: '#fafafa', borderRadius: 12 }}>
              <div style={{ width: 40, height: 40, backgroundColor: feature.bg, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: feature.color, flexShrink: 0 }}>
                {feature.icon}
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4, color: '#000000' }}>{feature.title}</h3>
                <p style={{ fontSize: 14, color: '#666666' }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: '#000000' }}>How It Works</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, borderLeft: '2px solid #e5e5e5', paddingLeft: 24 }}>
          {[
            { step: 1, title: "Connect Wallet", description: "Connect your Phantom or Solflare wallet to the WankCoin dashboard." },
            { step: 2, title: "Top Up Balance", description: "Add SOL or WKC tokens to your WankCard balance." },
            { step: 3, title: "Generate Card", description: "Create a one-time virtual Visa card for your specific platform and amount." },
            { step: 4, title: "Pay Anonymously", description: "Use the card details on any adult site. No trace, no worries." }
          ].map((item) => (
            <div key={item.step} style={{ display: 'flex', gap: 16, position: 'relative' }}>
              <div style={{ position: 'absolute', left: -33, width: 20, height: 20, backgroundColor: '#F7931A', color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>
                {item.step}
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4, color: '#000000' }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#666666' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supported Platforms */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Supported Platforms</h2>
        <p style={{ fontSize: 16, color: '#666666', marginBottom: 16 }}>
          WankCard works with any platform that accepts Visa cards, including:
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['OnlyFans', 'PornHub Premium', 'Fansly', 'Chaturbate', 'ManyVids', 'Brazzers', 'And 1000+ more...'].map((platform) => (
            <span key={platform} style={{ padding: '8px 16px', backgroundColor: '#f5f5f5', borderRadius: 50, fontSize: 14, fontWeight: 500, color: '#555555' }}>
              {platform}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 24, backgroundColor: '#FFF3E0', borderRadius: 16, border: '1px solid #FFE0B2' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: '#000000' }}>Ready to get started?</h2>
        <p style={{ fontSize: 15, color: '#666666', marginBottom: 16 }}>
          Follow our quick start guide to make your first anonymous payment in minutes.
        </p>
        <Link href="/docs/quick-start" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#F7931A', color: '#ffffff', fontWeight: 600, padding: '12px 24px', borderRadius: 50, textDecoration: 'none' }}>
          Quick Start Guide <ArrowRight style={{ width: 18, height: 18 }} />
        </Link>
      </section>
    </div>
  );
}
