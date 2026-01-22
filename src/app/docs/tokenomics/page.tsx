'use client';

import Link from 'next/link';
import { ArrowLeft, Flame, TrendingUp } from 'lucide-react';

export default function Tokenomics() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <Link href="/docs" style={{ color: '#888888', fontSize: 14, display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16, textDecoration: 'none' }}>
          <ArrowLeft style={{ width: 16, height: 16 }} /> Back
        </Link>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Tokenomics & Burn</h1>
        <p style={{ fontSize: 18, color: '#666666' }}>
          Understanding WKC token economics and the deflationary burn system.
        </p>
      </div>

      {/* Overview */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Token Overview</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            { label: 'Name', value: 'WankCoin' },
            { label: 'Symbol', value: 'WKC' },
            { label: 'Chain', value: 'Solana' },
            { label: 'Supply', value: '1B' }
          ].map((item, i) => (
            <div key={i} style={{ padding: 16, backgroundColor: '#fafafa', borderRadius: 12 }}>
              <p style={{ fontSize: 13, color: '#888888', marginBottom: 4 }}>{item.label}</p>
              <p style={{ fontSize: 18, fontWeight: 700, color: '#000000' }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Burn */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#000000' }}>🔥 The Burn Mechanism</h2>
        <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 24 }}>
          WankCoin features an automatic burn mechanism that permanently destroys tokens with every WKC payment.
        </p>
        
        <div style={{ background: 'linear-gradient(135deg, #EF4444 0%, #F97316 100%)', borderRadius: 16, padding: 32, color: '#ffffff', textAlign: 'center', marginBottom: 24 }}>
          <Flame style={{ width: 48, height: 48, margin: '0 auto 12px' }} />
          <div style={{ fontSize: 48, fontWeight: 700, marginBottom: 8 }}>50%</div>
          <p style={{ fontSize: 18 }}>of every WKC payment is permanently burned</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ padding: 20, backgroundColor: '#FEE2E2', borderRadius: 12, border: '1px solid #FECACA' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <Flame style={{ width: 20, height: 20, color: '#EF4444' }} />
              <span style={{ fontWeight: 700, color: '#000000' }}>50% Burned</span>
            </div>
            <p style={{ fontSize: 14, color: '#666666' }}>Permanently destroyed every transaction</p>
          </div>
          <div style={{ padding: 20, backgroundColor: '#DBEAFE', borderRadius: 12, border: '1px solid #BFDBFE' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <TrendingUp style={{ width: 20, height: 20, color: '#3B82F6' }} />
              <span style={{ fontWeight: 700, color: '#000000' }}>50% Treasury</span>
            </div>
            <p style={{ fontSize: 14, color: '#666666' }}>Funds development and growth</p>
          </div>
        </div>
      </section>

      {/* Example */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Example Transaction</h2>
        <div style={{ padding: 24, backgroundColor: '#fafafa', borderRadius: 12 }}>
          <p style={{ marginBottom: 16, color: '#555555' }}>Generate a $10 WankCard using 100 WKC:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 12, backgroundColor: '#ffffff', borderRadius: 8 }}>
              <span style={{ color: '#555555' }}>You pay:</span>
              <span style={{ fontWeight: 700, color: '#000000' }}>100 WKC</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 12, backgroundColor: '#FEE2E2', borderRadius: 8 }}>
              <span style={{ color: '#DC2626' }}>🔥 Burned:</span>
              <span style={{ fontWeight: 700, color: '#DC2626' }}>50 WKC</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 12, backgroundColor: '#DBEAFE', borderRadius: 8 }}>
              <span style={{ color: '#2563EB' }}>Treasury:</span>
              <span style={{ fontWeight: 700, color: '#2563EB' }}>50 WKC</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 12, backgroundColor: '#D1FAE5', borderRadius: 8 }}>
              <span style={{ color: '#059669' }}>You receive:</span>
              <span style={{ fontWeight: 700, color: '#059669' }}>$10 Card</span>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Distribution</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { label: 'Public Sale (Pump.fun)', pct: 80, color: '#F7931A' },
            { label: 'Team', pct: 10, color: '#3B82F6' },
            { label: 'Marketing', pct: 5, color: '#8B5CF6' },
            { label: 'Partnerships', pct: 5, color: '#10B981' }
          ].map((item, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 14, color: '#555555' }}>{item.label}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#000000' }}>{item.pct}%</span>
              </div>
              <div style={{ height: 8, backgroundColor: '#e5e5e5', borderRadius: 4 }}>
                <div style={{ height: '100%', width: `${item.pct}%`, backgroundColor: item.color, borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
