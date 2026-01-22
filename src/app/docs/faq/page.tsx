'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      questions: [
        { q: "What is WankCoin?", a: "WankCoin (WKC) is a Solana-based cryptocurrency for anonymous adult content payments. Combined with WankCard virtual cards, you can pay without any trace on your bank statement." },
        { q: "Is WankCoin legal?", a: "Yes. Paying for legal adult content is legal in most jurisdictions. We simply provide a privacy-focused payment method." },
      ]
    },
    {
      category: "WankCard",
      questions: [
        { q: "What is WankCard?", a: "WankCard is a virtual Visa card that you generate using WKC or SOL tokens. It works on any platform that accepts Visa." },
        { q: "What's the maximum card limit?", a: "Each WankCard has a maximum limit of $100." },
        { q: "Can I reuse a WankCard?", a: "No. WankCards are one-time use for maximum privacy." },
      ]
    },
    {
      category: "Payments",
      questions: [
        { q: "How do I get WKC tokens?", a: "Purchase WKC on Jupiter or Raydium by swapping SOL." },
        { q: "What is the burn mechanism?", a: "When you pay with WKC, 50% of tokens are permanently burned." },
      ]
    }
  ];

  let idx = 0;

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <Link href="/docs" style={{ color: '#888888', fontSize: 14, display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16, textDecoration: 'none' }}>
          <ArrowLeft style={{ width: 16, height: 16 }} /> Back
        </Link>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#000000' }}>FAQ</h1>
        <p style={{ fontSize: 18, color: '#666666' }}>Common questions answered.</p>
      </div>

      {faqs.map((section) => (
        <section key={section.category} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#F7931A' }}>{section.category}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {section.questions.map((faq) => {
              const currentIdx = idx++;
              return (
                <div key={currentIdx} style={{ border: '1px solid #e5e5e5', borderRadius: 12, overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenIndex(openIndex === currentIdx ? null : currentIdx)}
                    style={{ width: '100%', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ffffff', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ fontWeight: 500, color: '#000000' }}>{faq.q}</span>
                    <ChevronDown style={{ width: 20, height: 20, color: '#888888', transform: openIndex === currentIdx ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                  </button>
                  {openIndex === currentIdx && (
                    <div style={{ padding: '0 20px 16px', color: '#666666' }}>{faq.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}

      <div style={{ padding: 24, backgroundColor: '#fafafa', borderRadius: 12, textAlign: 'center' }}>
        <h3 style={{ fontWeight: 700, marginBottom: 8, color: '#000000' }}>Still have questions?</h3>
        <p style={{ color: '#666666', marginBottom: 16 }}>Reach out to our community.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
          <a href="#" style={{ padding: '8px 20px', backgroundColor: '#1DA1F2', color: '#ffffff', borderRadius: 50, textDecoration: 'none', fontWeight: 500 }}>Twitter</a>
          <a href="#" style={{ padding: '8px 20px', backgroundColor: '#0088cc', color: '#ffffff', borderRadius: 50, textDecoration: 'none', fontWeight: 500 }}>Telegram</a>
        </div>
      </div>
    </div>
  );
}
