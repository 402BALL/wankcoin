import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const platforms = [
  { name: 'OnlyFans', category: 'Creator Subscriptions', status: 'Supported' },
  { name: 'PornHub Premium', category: 'Premium Content', status: 'Supported' },
  { name: 'Fansly', category: 'Creator Content', status: 'Supported' },
  { name: 'Chaturbate', category: 'Live Shows', status: 'Supported' },
  { name: 'ManyVids', category: 'Custom Content', status: 'Supported' },
  { name: 'Brazzers', category: 'Premium Content', status: 'Supported' },
  { name: 'Reality Kings', category: 'Premium Content', status: 'Supported' },
  { name: 'Bang Bros', category: 'Premium Content', status: 'Supported' },
  { name: 'Naughty America', category: 'Premium Content', status: 'Supported' },
  { name: 'xHamster Premium', category: 'Premium Content', status: 'Supported' },
  { name: 'XVideos Premium', category: 'Premium Content', status: 'Supported' },
  { name: 'RedTube Premium', category: 'Premium Content', status: 'Supported' },
];

export default function Platforms() {
  return (
    <div>
      <Link href="/docs" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#666666', textDecoration: 'none', marginBottom: 32, fontSize: 14 }}>
        <ArrowLeft style={{ width: 16, height: 16 }} /> Back to Docs
      </Link>

      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#000000' }}>Supported Platforms</h1>
      <p style={{ fontSize: 18, color: '#666666', marginBottom: 48, lineHeight: 1.6 }}>
        WankCard works on any platform that accepts Visa cards. Here are some of the most popular platforms we support.
      </p>

      <div style={{ backgroundColor: '#f9f9f9', borderRadius: 16, padding: 24, marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#000000' }}>Universal Compatibility</h2>
        <p style={{ fontSize: 15, color: '#555555', lineHeight: 1.7 }}>
          WankCard generates real Visa virtual cards that work anywhere Visa is accepted. If a platform accepts Visa payments, 
          WankCard will work there. This includes over 10,000+ adult content platforms worldwide.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
        {platforms.map((platform, i) => (
          <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: 12, padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: '#000000' }}>{platform.name}</h3>
              <CheckCircle style={{ width: 20, height: 20, color: '#22c55e', flexShrink: 0 }} />
            </div>
            <p style={{ fontSize: 13, color: '#888888' }}>{platform.category}</p>
            <span style={{ display: 'inline-block', marginTop: 8, padding: '4px 8px', backgroundColor: '#D1FAE5', color: '#065F46', borderRadius: 6, fontSize: 11, fontWeight: 600 }}>
              {platform.status}
            </span>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: '#FFF3E0', borderRadius: 16, padding: 24, border: '1px solid #F7931A' }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#000000' }}>How to Use</h2>
        <ol style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Generate a WankCard with your desired amount ($5 - $100)',
            'Copy the card number, expiry date, and CVV',
            'Go to your chosen platform and select "Credit Card" payment',
            'Enter the WankCard details exactly as shown',
            'Complete your purchase - the card will be automatically deactivated after use'
          ].map((step, i) => (
            <li key={i} style={{ fontSize: 15, color: '#555555', lineHeight: 1.6 }}>
              <strong style={{ color: '#F7931A' }}>Step {i + 1}:</strong> {step}
            </li>
          ))}
        </ol>
      </div>

      <div style={{ marginTop: 32, padding: 24, backgroundColor: '#f9f9f9', borderRadius: 12 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#000000' }}>Platform Not Listed?</h2>
        <p style={{ fontSize: 15, color: '#555555', lineHeight: 1.7 }}>
          If a platform accepts Visa cards, WankCard will work there. Our cards are standard Visa virtual cards 
          that are accepted at millions of merchants worldwide. Simply generate a card and use it like any other Visa card.
        </p>
      </div>
    </div>
  );
}

