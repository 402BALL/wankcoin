import Link from 'next/link';
import { ArrowLeft, CreditCard, DollarSign, Zap, Shield } from 'lucide-react';

export default function GeneratingCards() {
  return (
    <div>
      <Link href="/docs" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#666666', textDecoration: 'none', marginBottom: 32, fontSize: 14 }}>
        <ArrowLeft style={{ width: 16, height: 16 }} /> Back to Docs
      </Link>

      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Generating Cards</h1>
      <p style={{ fontSize: 18, color: '#666666', marginBottom: 48, lineHeight: 1.6 }}>
        Learn how to generate and use WankCard virtual Visa cards for anonymous payments.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <section>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000', marginBottom: 16 }}>Quick Start</h2>
          <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 24, marginBottom: 24 }}>
            <ol style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Connect your Phantom wallet at wankcoin.pro/dashboard',
                'Select a platform (OnlyFans, PornHub, etc.)',
                'Choose card amount ($5 - $100)',
                'Click "Generate Card"',
                'Copy card details and use immediately'
              ].map((step, i) => (
                <li key={i} style={{ fontSize: 16, color: '#555555', lineHeight: 1.7 }}>
                  <strong style={{ color: '#F7931A' }}>Step {i + 1}:</strong> {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <DollarSign style={{ width: 24, height: 24, color: '#F7931A' }} />
            <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000' }}>Card Amounts</h2>
          </div>
          <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 24 }}>
            You can generate cards with any amount between $5 and $100:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { amount: '$5', use: 'Single video purchase' },
              { amount: '$10', use: 'Monthly subscription' },
              { amount: '$25', use: 'Premium content bundle' },
              { amount: '$50', use: 'Multi-month access' },
              { amount: '$100', use: 'Maximum single card' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: 12, padding: 20, textAlign: 'center' }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: '#F7931A', marginBottom: 8 }}>{item.amount}</div>
                <div style={{ fontSize: 13, color: '#888888' }}>{item.use}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Zap style={{ width: 24, height: 24, color: '#F7931A' }} />
            <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000' }}>Payment Options</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            <div style={{ backgroundColor: '#FFF3E0', borderRadius: 12, padding: 24, border: '1px solid #F7931A' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#000000' }}>Pay with WKC</h3>
              <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.6, marginBottom: 12 }}>
                Use WankCoin tokens to generate cards. 50% of WKC used will be permanently burned.
              </p>
              <div style={{ fontSize: 12, color: '#F7931A', fontWeight: 600 }}>🔥 50% Burn Applied</div>
            </div>
            <div style={{ backgroundColor: '#F3E8FF', borderRadius: 12, padding: 24, border: '1px solid #8B5CF6' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#000000' }}>Pay with SOL</h3>
              <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.6, marginBottom: 12 }}>
                Use Solana (SOL) directly. No burn mechanism, but you'll need to convert to WKC first.
              </p>
              <div style={{ fontSize: 12, color: '#8B5CF6', fontWeight: 600 }}>⚡ Instant Processing</div>
            </div>
          </div>
        </section>

        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Shield style={{ width: 24, height: 24, color: '#F7931A' }} />
            <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000' }}>Card Security</h2>
          </div>
          <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 24 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#000000' }}>One-Time Use</h3>
            <p style={{ fontSize: 15, color: '#555555', lineHeight: 1.7, marginBottom: 16 }}>
              Each WankCard is designed for single use only. After the first transaction, the card is automatically deactivated 
              and cannot be used again. This ensures maximum security and prevents unauthorized reuse.
            </p>
            
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#000000', marginTop: 24 }}>Random Details</h3>
            <p style={{ fontSize: 15, color: '#555555', lineHeight: 1.7 }}>
              Every card is generated with completely random card numbers, expiry dates, and CVV codes. 
              There's no connection between your wallet address and the card details, ensuring complete anonymity.
            </p>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000', marginBottom: 16 }}>Using Your Card</h2>
          <div style={{ backgroundColor: '#FFF3E0', borderRadius: 12, padding: 24, border: '1px solid #F7931A' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: '#000000' }}>Step-by-Step Guide</h3>
            <ol style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Generate your card in the dashboard',
                'Click "Show Details" to reveal card number, expiry, and CVV',
                'Copy all three details (you can click to copy each field)',
                'Go to your chosen platform and select "Credit Card" payment',
                'Enter the card details exactly as shown',
                'Complete your purchase - the card works like any Visa card',
                'Card is automatically deactivated after first use'
              ].map((step, i) => (
                <li key={i} style={{ fontSize: 15, color: '#555555', lineHeight: 1.6 }}>
                  <strong style={{ color: '#F7931A' }}>{i + 1}.</strong> {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000', marginBottom: 16 }}>Troubleshooting</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#000000' }}>Card Declined?</h3>
              <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.6 }}>
                Make sure you entered all details correctly. Check for typos in card number, expiry date, and CVV. 
                Ensure the card hasn't been used before (one-time use only).
              </p>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#000000' }}>Insufficient Balance?</h3>
              <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.6 }}>
                Top up your wallet with SOL or WKC before generating cards. Each card requires the full amount 
                to be available in your wallet.
              </p>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#000000' }}>Card Not Working?</h3>
              <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.6 }}>
                Generate a new card if the previous one was used or expired. Each card is unique and can only be used once.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

