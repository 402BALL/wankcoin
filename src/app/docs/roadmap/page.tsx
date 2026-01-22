'use client';

import Link from 'next/link';
import { ArrowLeft, Check, Clock, Calendar } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    { quarter: 'Q1 2026', title: 'Launch', status: 'current', items: ['Token launch on Pump.fun', 'WankCard MVP', 'Dashboard v1', 'Basic platform support'] },
    { quarter: 'Q2 2026', title: 'Growth', status: 'upcoming', items: ['Direct integrations', 'Creator partnerships', 'Referral system', 'More platforms'] },
    { quarter: 'Q3 2026', title: 'Direct Pay', status: 'upcoming', items: ['Pay directly with WKC', 'Browser extension', 'Lower fees', 'Merchant SDK'] },
    { quarter: 'Q4 2026', title: 'Mobile', status: 'upcoming', items: ['iOS app', 'Android app', 'Biometric security', 'Push notifications'] },
    { quarter: '2027', title: 'Ecosystem', status: 'future', items: ['Creator marketplace', 'P2P payments', 'Staking', 'DAO governance'] }
  ];

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <Link href="/docs" style={{ color: '#888888', fontSize: 14, display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16, textDecoration: 'none' }}>
          <ArrowLeft style={{ width: 16, height: 16 }} /> Back
        </Link>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Roadmap</h1>
        <p style={{ fontSize: 18, color: '#666666' }}>Our vision for the future of private adult payments.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {phases.map((phase, i) => (
          <div key={i} style={{ position: 'relative', paddingLeft: 32, borderLeft: `2px solid ${phase.status === 'current' ? '#F7931A' : '#e5e5e5'}` }}>
            {/* Dot */}
            <div style={{ position: 'absolute', left: -9, width: 16, height: 16, borderRadius: '50%', backgroundColor: phase.status === 'current' ? '#F7931A' : '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {phase.status === 'current' && <Clock style={{ width: 8, height: 8, color: '#ffffff' }} />}
            </div>

            <div style={{ padding: 20, backgroundColor: phase.status === 'current' ? '#FFF3E0' : '#fafafa', borderRadius: 12, border: phase.status === 'current' ? '2px solid #F7931A' : '1px solid #e5e5e5' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ padding: '4px 12px', backgroundColor: phase.status === 'current' ? '#F7931A' : '#e5e5e5', color: phase.status === 'current' ? '#ffffff' : '#666666', borderRadius: 50, fontSize: 12, fontWeight: 600 }}>
                  {phase.quarter}
                </span>
                <h3 style={{ fontWeight: 700, color: '#000000' }}>{phase.title}</h3>
                {phase.status === 'current' && <span style={{ fontSize: 12, color: '#F7931A' }}>← Current</span>}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {phase.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#555555' }}>
                    <div style={{ width: 4, height: 4, backgroundColor: phase.status === 'current' ? '#F7931A' : '#cccccc', borderRadius: '50%' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, padding: 16, backgroundColor: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: 12 }}>
        <p style={{ color: '#92400E', fontSize: 14 }}>
          📝 This roadmap may change based on community feedback and market conditions.
        </p>
      </div>
    </div>
  );
}
