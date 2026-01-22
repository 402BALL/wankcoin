import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, CheckCircle } from 'lucide-react';

export default function Security() {
  return (
    <div>
      <Link href="/docs" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#666666', textDecoration: 'none', marginBottom: 32, fontSize: 14 }}>
        <ArrowLeft style={{ width: 16, height: 16 }} /> Back to Docs
      </Link>

      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Security</h1>
      <p style={{ fontSize: 18, color: '#666666', marginBottom: 48, lineHeight: 1.6 }}>
        WankCoin is built with security and privacy as core principles. Learn how we protect your data and transactions.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Shield style={{ width: 24, height: 24, color: '#F7931A' }} />
            <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000' }}>No Personal Information Required</h2>
          </div>
          <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 16 }}>
            WankCoin operates on a completely anonymous basis. We don't collect, store, or require any personal information:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'No email registration',
              'No phone number verification',
              'No KYC (Know Your Customer) checks',
              'No identity documents',
              'No bank account linking'
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <CheckCircle style={{ width: 20, height: 20, color: '#22c55e', flexShrink: 0 }} />
                <span style={{ fontSize: 15, color: '#555555' }}>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Lock style={{ width: 24, height: 24, color: '#F7931A' }} />
            <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000' }}>Blockchain Security</h2>
          </div>
          <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 16 }}>
            All transactions are secured by the Solana blockchain, one of the most secure and fast blockchains in the world:
          </p>
          <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 24, marginBottom: 16 }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Immutable transaction records',
                'Cryptographic security',
                'Decentralized network (no single point of failure)',
                'Fast transaction confirmation (<1 second)',
                'Low transaction fees'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CheckCircle style={{ width: 20, height: 20, color: '#22c55e', flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: '#555555' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Eye style={{ width: 24, height: 24, color: '#F7931A' }} />
            <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000' }}>Privacy Protection</h2>
          </div>
          <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 16 }}>
            Your privacy is our top priority. Here's how we protect it:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#000000' }}>Virtual Cards</h3>
              <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.6 }}>
                Each card is generated with random details. No connection to your identity or wallet address.
              </p>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#000000' }}>One-Time Use</h3>
              <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.6 }}>
                Cards are automatically deactivated after first use, preventing tracking or reuse.
              </p>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#000000' }}>No Data Storage</h3>
              <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.6 }}>
                We don't store your transaction history or card details on our servers.
              </p>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#000000' }}>Wallet Privacy</h3>
              <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.6 }}>
                Your wallet address is never linked to your card usage or platform activity.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000', marginBottom: 16 }}>Best Practices</h2>
          <div style={{ backgroundColor: '#FFF3E0', borderRadius: 12, padding: 24, border: '1px solid #F7931A' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#000000' }}>Keep Your Wallet Secure</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                'Never share your wallet private key or seed phrase',
                'Use a hardware wallet for large amounts',
                'Keep your Phantom wallet updated',
                'Enable all security features in your wallet',
                'Verify transaction details before confirming'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'start', gap: 12 }}>
                  <span style={{ color: '#F7931A', fontWeight: 700, marginTop: 2 }}>•</span>
                  <span style={{ fontSize: 15, color: '#555555' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

