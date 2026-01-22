import Link from 'next/link';
import { ArrowLeft, Code, Key, Globe, Zap } from 'lucide-react';

const API_BASE = 'https://api.wankcoin.pro/v1';

export default function APIReference() {
  return (
    <div>
      <Link href="/docs" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#666666', textDecoration: 'none', marginBottom: 32, fontSize: 14 }}>
        <ArrowLeft style={{ width: 16, height: 16 }} /> Back to Docs
      </Link>

      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#000000' }}>API Reference</h1>
      <p style={{ fontSize: 18, color: '#666666', marginBottom: 48, lineHeight: 1.6 }}>
        Integrate WankCoin into your application using our REST API. All endpoints require authentication via API key.
      </p>

      <div style={{ backgroundColor: '#FFF3E0', borderRadius: 12, padding: 24, marginBottom: 32, border: '1px solid #F7931A' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <Globe style={{ width: 20, height: 20, color: '#F7931A' }} />
          <h3 style={{ fontSize: 18, fontWeight: 600, color: '#000000' }}>Base URL</h3>
        </div>
        <code style={{ fontSize: 16, color: '#555555', backgroundColor: '#ffffff', padding: '8px 12px', borderRadius: 6, display: 'inline-block' }}>
          {API_BASE}
        </code>
      </div>

      <section style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <Key style={{ width: 24, height: 24, color: '#F7931A' }} />
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000' }}>Authentication</h2>
        </div>
        <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 16 }}>
          All API requests require an API key in the header:
        </p>
        <div style={{ backgroundColor: '#1a1a1a', borderRadius: 12, padding: 20, marginBottom: 16 }}>
          <code style={{ color: '#ffffff', fontSize: 14, fontFamily: 'monospace' }}>
            <span style={{ color: '#F7931A' }}>Authorization:</span> Bearer <span style={{ color: '#888888' }}>your_api_key_here</span>
          </code>
        </div>
        <p style={{ fontSize: 14, color: '#888888' }}>
          Get your API key from the dashboard at wankcoin.pro/dashboard after connecting your wallet.
        </p>
      </section>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        {/* Generate Card */}
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Code style={{ width: 24, height: 24, color: '#F7931A' }} />
            <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000' }}>Generate Card</h2>
          </div>
          <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 24 }}>
            Create a new virtual Visa card for a specific platform and amount.
          </p>

          <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 24, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ backgroundColor: '#22c55e', color: '#ffffff', padding: '4px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600 }}>POST</span>
              <code style={{ fontSize: 15, color: '#555555' }}>/cards/generate</code>
            </div>
            
            <h4 style={{ fontSize: 16, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#000000' }}>Request Body</h4>
            <div style={{ backgroundColor: '#1a1a1a', borderRadius: 8, padding: 16, marginBottom: 16 }}>
              <pre style={{ color: '#ffffff', fontSize: 13, fontFamily: 'monospace', margin: 0, overflow: 'auto' }}>
{`{
  "platform": "onlyfans",
  "amount": 25,
  "currency": "wkc"
}`}
              </pre>
            </div>

            <h4 style={{ fontSize: 16, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#000000' }}>Response</h4>
            <div style={{ backgroundColor: '#1a1a1a', borderRadius: 8, padding: 16 }}>
              <pre style={{ color: '#ffffff', fontSize: 13, fontFamily: 'monospace', margin: 0, overflow: 'auto' }}>
{`{
  "success": true,
  "card": {
    "id": "card_abc123",
    "number": "4532 1234 5678 9012",
    "expiry": "12/27",
    "cvv": "123",
    "amount": 25,
    "platform": "onlyfans",
    "status": "active",
    "created_at": "2026-01-23T10:30:00Z"
  }
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Get Card Details */}
        <section>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000', marginBottom: 16 }}>Get Card Details</h2>
          <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 24 }}>
            Retrieve details of a specific card by ID.
          </p>

          <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 24, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ backgroundColor: '#3B82F6', color: '#ffffff', padding: '4px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600 }}>GET</span>
              <code style={{ fontSize: 15, color: '#555555' }}>/cards/{'{card_id}'}</code>
            </div>

            <h4 style={{ fontSize: 16, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#000000' }}>Response</h4>
            <div style={{ backgroundColor: '#1a1a1a', borderRadius: 8, padding: 16 }}>
              <pre style={{ color: '#ffffff', fontSize: 13, fontFamily: 'monospace', margin: 0, overflow: 'auto' }}>
{`{
  "success": true,
  "card": {
    "id": "card_abc123",
    "number": "4532 1234 5678 9012",
    "expiry": "12/27",
    "cvv": "123",
    "amount": 25,
    "platform": "onlyfans",
    "status": "used",
    "created_at": "2026-01-23T10:30:00Z",
    "used_at": "2026-01-23T10:35:00Z"
  }
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* List Cards */}
        <section>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000', marginBottom: 16 }}>List Cards</h2>
          <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 24 }}>
            Get a list of all your generated cards with pagination.
          </p>

          <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 24, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ backgroundColor: '#3B82F6', color: '#ffffff', padding: '4px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600 }}>GET</span>
              <code style={{ fontSize: 15, color: '#555555' }}>/cards?page=1&limit=20</code>
            </div>

            <h4 style={{ fontSize: 16, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#000000' }}>Query Parameters</h4>
            <div style={{ backgroundColor: '#ffffff', borderRadius: 8, padding: 16, marginBottom: 16, border: '1px solid #e5e5e5' }}>
              <table style={{ width: '100%', fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
                    <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 600, color: '#000000' }}>Parameter</th>
                    <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 600, color: '#000000' }}>Type</th>
                    <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 600, color: '#000000' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #f5f5f5' }}>
                    <td style={{ padding: '8px 0', color: '#555555' }}>page</td>
                    <td style={{ padding: '8px 0', color: '#555555' }}>integer</td>
                    <td style={{ padding: '8px 0', color: '#555555' }}>Page number (default: 1)</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 0', color: '#555555' }}>limit</td>
                    <td style={{ padding: '8px 0', color: '#555555' }}>integer</td>
                    <td style={{ padding: '8px 0', color: '#555555' }}>Items per page (default: 20, max: 100)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 style={{ fontSize: 16, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#000000' }}>Response</h4>
            <div style={{ backgroundColor: '#1a1a1a', borderRadius: 8, padding: 16 }}>
              <pre style={{ color: '#ffffff', fontSize: 13, fontFamily: 'monospace', margin: 0, overflow: 'auto' }}>
{`{
  "success": true,
  "cards": [
    {
      "id": "card_abc123",
      "amount": 25,
      "platform": "onlyfans",
      "status": "used",
      "created_at": "2026-01-23T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "pages": 3
  }
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Get Balance */}
        <section>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000', marginBottom: 16 }}>Get Balance</h2>
          <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 24 }}>
            Get your current WKC and SOL balance.
          </p>

          <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 24, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ backgroundColor: '#3B82F6', color: '#ffffff', padding: '4px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600 }}>GET</span>
              <code style={{ fontSize: 15, color: '#555555' }}>/wallet/balance</code>
            </div>

            <h4 style={{ fontSize: 16, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#000000' }}>Response</h4>
            <div style={{ backgroundColor: '#1a1a1a', borderRadius: 8, padding: 16 }}>
              <pre style={{ color: '#ffffff', fontSize: 13, fontFamily: 'monospace', margin: 0, overflow: 'auto' }}>
{`{
  "success": true,
  "balance": {
    "wkc": 1250.5,
    "sol": 2.45,
    "usd_equivalent": 367.5
  }
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Get Statistics */}
        <section>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000', marginBottom: 16 }}>Get Statistics</h2>
          <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 24 }}>
            Get your account statistics including total cards generated, total burned, etc.
          </p>

          <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 24, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ backgroundColor: '#3B82F6', color: '#ffffff', padding: '4px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600 }}>GET</span>
              <code style={{ fontSize: 15, color: '#555555' }}>/stats</code>
            </div>

            <h4 style={{ fontSize: 16, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#000000' }}>Response</h4>
            <div style={{ backgroundColor: '#1a1a1a', borderRadius: 8, padding: 16 }}>
              <pre style={{ color: '#ffffff', fontSize: 13, fontFamily: 'monospace', margin: 0, overflow: 'auto' }}>
{`{
  "success": true,
  "stats": {
    "total_cards": 45,
    "total_spent": 1250.5,
    "total_burned": 625.25,
    "active_cards": 3,
    "used_cards": 42
  }
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Error Responses */}
        <section>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000', marginBottom: 16 }}>Error Responses</h2>
          <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 24 }}>
            All errors follow a consistent format:
          </p>

          <div style={{ backgroundColor: '#FEE2E2', borderRadius: 12, padding: 24, border: '1px solid #EF4444' }}>
            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#000000' }}>Error Response Format</h4>
            <div style={{ backgroundColor: '#1a1a1a', borderRadius: 8, padding: 16 }}>
              <pre style={{ color: '#ffffff', fontSize: 13, fontFamily: 'monospace', margin: 0, overflow: 'auto' }}>
{`{
  "success": false,
  "error": {
    "code": "INSUFFICIENT_BALANCE",
    "message": "Insufficient balance to generate card",
    "details": {
      "required": 25,
      "available": 10
    }
  }
}`}
              </pre>
            </div>

            <h4 style={{ fontSize: 16, fontWeight: 600, marginTop: 24, marginBottom: 12, color: '#000000' }}>Common Error Codes</h4>
            <div style={{ backgroundColor: '#ffffff', borderRadius: 8, padding: 16, border: '1px solid #e5e5e5' }}>
              <table style={{ width: '100%', fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
                    <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 600, color: '#000000' }}>Code</th>
                    <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 600, color: '#000000' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: 'UNAUTHORIZED', desc: 'Invalid or missing API key' },
                    { code: 'INSUFFICIENT_BALANCE', desc: 'Not enough balance for operation' },
                    { code: 'INVALID_PLATFORM', desc: 'Platform not supported' },
                    { code: 'INVALID_AMOUNT', desc: 'Amount must be between $5 and $100' },
                    { code: 'CARD_NOT_FOUND', desc: 'Card ID does not exist' },
                    { code: 'RATE_LIMIT_EXCEEDED', desc: 'Too many requests, please wait' }
                  ].map((err, i) => (
                    <tr key={i} style={{ borderBottom: i < 5 ? '1px solid #f5f5f5' : 'none' }}>
                      <td style={{ padding: '8px 0', color: '#EF4444', fontWeight: 600 }}>{err.code}</td>
                      <td style={{ padding: '8px 0', color: '#555555' }}>{err.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Zap style={{ width: 24, height: 24, color: '#F7931A' }} />
            <h2 style={{ fontSize: 24, fontWeight: 600, color: '#000000' }}>Rate Limits</h2>
          </div>
          <div style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 24 }}>
            <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.7, marginBottom: 16 }}>
              API rate limits are applied per API key:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                '100 requests per minute',
                '1000 requests per hour',
                '10,000 requests per day'
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 15, color: '#555555', display: 'flex', alignItems: 'start', gap: 12 }}>
                  <span style={{ color: '#F7931A', fontWeight: 700 }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 14, color: '#888888', marginTop: 16 }}>
              Rate limit headers are included in all responses: <code style={{ backgroundColor: '#ffffff', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>X-RateLimit-Remaining</code>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

