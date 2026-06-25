import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function OtherServices({ currentService, onNavigate }) {
  const services = [
    { id: 'solar', title: 'Solar Energy', desc: 'Commercial & Industrial Solar Solutions' },
    { id: 'biogas', title: 'Biogas & Waste', desc: 'Waste-to-Energy & Organic Bio-digesters' },
    { id: 'ev', title: 'EV Mobility', desc: 'Commercial EV Charging Hubs' },
    { id: 'sanitation', title: 'Bio Septic Tanks', desc: 'Bio Septic Tanks & Mobile Toilets' },
  ].filter(s => s.id !== currentService);

  return (
    <section className="section" style={{ backgroundColor: '#F9FAFB', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 style={{ fontSize: '28px', color: 'var(--text-dark)', marginBottom: '32px', textAlign: 'center', fontWeight: '800' }}>
          Explore Our Other Services
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {services.map(s => (
            <div 
              key={s.id}
              onClick={() => onNavigate(s.id)}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '24px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'none'; }}
            >
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px', color: 'var(--text-dark)' }}>{s.title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>{s.desc}</p>
              </div>
              <ArrowRight size={20} color="var(--primary)" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
