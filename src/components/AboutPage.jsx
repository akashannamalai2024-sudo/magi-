import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Activity, 
  Compass, 
  Users, 
  Award, 
  Globe, 
  Sliders, 
  Settings, 
  HardHat, 
  Calendar,
  Layers,
  TrendingUp,
  FileText,
  Clock,
  Briefcase
} from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  // Intersection Observer for counting numbers
  const statsSectionRef = useRef(null);
  const [stats, setStats] = useState({ projects: 0, partners: 0, commitment: 0, support: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);

    let observer;
    let interval;
    if (statsSectionRef.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setStats({ projects: 0, partners: 0, commitment: 0, support: 0 });
          
          interval = setInterval(() => {
            setStats(prev => {
              const next = { ...prev };
              let updated = false;
              if (next.projects < 500) { next.projects += 25; updated = true; }
              if (next.partners < 20) { next.partners += 1; updated = true; }
              if (next.commitment < 100) { next.commitment += 5; updated = true; }
              // support displays 24, we count up to 24
              if (next.support < 24) { next.support += 1; updated = true; }
              
              if (!updated) {
                clearInterval(interval);
              }
              return next;
            });
          }, 50);
          observer.disconnect();
        }
      }, { threshold: 0.15 });
      
      observer.observe(statsSectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
      
      {/* SECTION 1 — HERO */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(10, 25, 15, 0.45), rgba(10, 25, 15, 0.45)), url("https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFFFFF',
        paddingTop: '160px',
        paddingBottom: '80px',
        boxSizing: 'border-box'
      }}>
        <div className="container about-hero-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '12px', fontWeight: '500', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px' }}>Home / About</span>
            </div>
            <span style={{
              backgroundColor: 'rgba(139, 170, 91, 0.2)',
              border: '1px solid rgba(139, 170, 91, 0.4)',
              color: 'var(--secondary)',
              padding: '6px 16px',
              borderRadius: '30px',
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '1px',
              display: 'inline-block',
              marginBottom: '24px'
            }}>
              WHO WE ARE
            </span>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '56px',
              fontWeight: '700',
              lineHeight: '1.15',
              color: '#FFFFFF',
              marginBottom: '24px'
            }}>
              Engineering Sustainable Infrastructure <br/>for a Smarter Tomorrow
            </h1>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6',
              marginBottom: '40px',
              maxWidth: '640px'
            }}>
              Magi Renewable Energy Solutions delivers integrated renewable energy, environmental engineering, waste-to-energy, EV mobility, and sustainable infrastructure solutions for industries, institutions, commercial facilities, and communities.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>

              <button 
                onClick={() => onNavigate('contact')} 
                className="btn btn-primary" 
                style={{
                  border: 'none',
                  padding: '16px 28px',
                  borderRadius: 'var(--radius-button)',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Contact Our Team
              </button>
            </div>
          </div>

          {/* Floating statistics cards on the right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingLeft: '40px' }}>
            {[
              { label: 'Renewable Infrastructure', desc: 'Custom integrated grid systems.' },
              { label: 'Sustainable Engineering', desc: 'ISO certified design precision.' },
              { label: 'Future Ready Solutions', desc: 'Long-term reliability and support.' },
              { label: 'Long-Term Partnership', desc: 'Decade-long operations support.' }
            ].map((card, i) => (
              <div 
                key={i}
                className="glass-card" 
                style={{
                  padding: '20px 24px',
                  borderRadius: '16px',
                  animation: `float 8s ease-in-out infinite ${i * 0.8}s`,
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.1)'
                }}
              >
                <h4 style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>{card.label}</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '13px', margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — COMPANY STORY */}
      <section className="section">
        <div className="container grid-2" style={{ gap: '64px', alignItems: 'center' }}>
          <div>
            <img 
              src="/tamilnadu_engineers_solar.png" 
              alt="Magi Engineers with Solar Panels and Wind Turbines" 
              style={{
                width: '100%',
                borderRadius: 'var(--radius-image)',
                boxShadow: 'var(--shadow-medium)',
                display: 'block'
              }}
            />
          </div>
          <div>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              OUR STORY
            </span>
            <h2 style={{ fontSize: '42px', color: 'var(--text-dark)', marginTop: '12px', marginBottom: '24px' }}>
              Building a Cleaner Future Through Intelligent Engineering
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.7' }}>
              Magi Renewable Energy Solutions was founded on the belief that modern industries and institutions need robust, long-term engineering partners to transition toward carbon-neutral operations. We do not look at sustainability as an ad-hoc green checklist, but as a critical infrastructure requirement.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.7' }}>
              Our design ethos focuses on system-level integration. We merge multi-source renewable microgrids with advanced environmental systems like circular anaerobic loops and highly durable bio septic sanitation systems. This ensures complete reliability and commercial viability for our clients.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.7' }}>
              Today, Magi stands as a trusted contractor for Fortune 500 industrial lines, leading educational institutions, hospitality centers, and communities across Tamil Nadu. We design and deliver operational plants built to withstand the demands of the future.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {[
                { title: 'Engineering Excellence', icon: <Sliders size={20} />, desc: 'Systemic design compliance.' },
                { title: 'Sustainable Innovation', icon: <Sparkles size={20} />, desc: 'Continuous circular energy integration.' },
                { title: 'Environmental Responsibility', icon: <Globe size={20} />, desc: 'Bio septic and waste-to-energy loops.' },
                { title: 'Long-Term Value', icon: <Award size={20} />, desc: '15+ year operational guarantee.' }
              ].map((card, idx) => (
                <div 
                  key={idx}
                  style={{
                    padding: '20px',
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-color)',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ color: 'var(--primary)', marginBottom: '12px' }}>{card.icon}</div>
                  <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>{card.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR FOCUS AREAS */}
      <section id="focus-areas" className="section section-secondary">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              OUR CAPABILITIES
            </span>
            <h2 style={{ fontSize: '42px', color: 'var(--text-dark)', marginTop: '12px', marginBottom: '16px' }}>
              Integrated Renewable Infrastructure Solutions
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto' }}>
              Delivering engineering-driven sustainable infrastructure across multiple critical sectors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Renewable Energy Infrastructure', icon: <Zap size={24} />, desc: 'Custom commercial solar microgrids integrated with high-capacity Battery Energy Storage Systems (BESS) for grid independence.' },
              { title: 'Waste-to-Energy Systems', icon: <Sparkles size={24} />, desc: 'Industrial anaerobic digestion loops converting organic and agricultural waste streams into clean methane or electric power.' },
              { title: 'Sustainable Mobility', icon: <Activity size={24} />, desc: 'High-power commercial EV fleet charging depots powered by intelligent load-distribution algorithms and solar carports.' },
              { title: 'Bio Septic Tanks & Mobile Toilets', icon: <Compass size={24} />, desc: 'High-compliance portable sanitation, FRP cabins, and advanced bio septic tanks for reliable off-grid usage.' },
              { title: 'Environmental Engineering', icon: <Globe size={24} />, desc: 'Advanced air scrubbing, bio-filtration, and soil carbon capture systems designed to maintain strict environmental standards.' },
              { title: 'System Operations & Maintenance', icon: <Settings size={24} />, desc: 'Comprehensive preventative maintenance and service agreements to maximize long-term energy yields.' }
            ].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-card)',
                  padding: '40px',
                  border: '1px solid var(--border-color)',
                  borderTop: '4px solid transparent',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderTopColor = 'var(--primary)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderTopColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(31, 93, 55, 0.06)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '28px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-dark)', marginBottom: '16px', fontWeight: '700' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — VISION & MISSION */}
      <section className="section">
        <div className="container grid-2" style={{ gap: '48px' }}>
          
          {/* Vision Card */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            height: '450px',
            display: 'flex',
            alignItems: 'flex-end',
            background: 'linear-gradient(to top, rgba(10, 25, 15, 0.95), rgba(10, 25, 15, 0.4)), url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'var(--shadow-medium)',
            padding: '48px'
          }}>
            <div>
              <span style={{
                backgroundColor: 'rgba(216, 155, 29, 0.2)',
                border: '1px solid rgba(216, 155, 29, 0.4)',
                color: 'var(--accent)',
                padding: '6px 14px',
                borderRadius: '30px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '1px',
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                VISION
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '32px', marginBottom: '16px' }}>Our Vision</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                To become a trusted leader in renewable and environmental infrastructure by enabling cleaner, smarter, and more sustainable ecosystems for generations to come.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            height: '450px',
            display: 'flex',
            alignItems: 'flex-end',
            background: 'linear-gradient(to top, rgba(10, 25, 15, 0.95), rgba(10, 25, 15, 0.4)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'var(--shadow-medium)',
            padding: '48px'
          }}>
            <div>
              <span style={{
                backgroundColor: 'rgba(139, 170, 91, 0.2)',
                border: '1px solid rgba(139, 170, 91, 0.4)',
                color: 'var(--secondary)',
                padding: '6px 14px',
                borderRadius: '30px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '1px',
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                MISSION
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '32px', marginBottom: '16px' }}>Our Mission</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                Provide reliable renewable energy and sustainable infrastructure solutions that help industries and institutions move toward a cleaner future through practical engineering.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — WHY MAGI */}
      <section style={{
        backgroundColor: 'var(--bg-dark)',
        color: '#FFFFFF',
        padding: '140px 0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: 'var(--secondary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              THE MAGI EDGE
            </span>
            <h2 style={{ fontSize: '42px', color: '#FFFFFF', marginTop: '12px', marginBottom: '16px' }}>
              Why Organizations Trust Magi
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '640px', margin: '0 auto' }}>
              Engineering expertise combined with long-term operational value.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Engineering Precision', desc: 'Every line we build is guided by high-spec thermodynamic, physical, and electrical system simulations.' },
              { title: 'Customized Infrastructure', desc: 'No cookie-cutter kits. We tailor solar arrays, digestion chambers, and bio septic systems to local environments.' },
              { title: 'Reliable Execution', desc: 'On-time delivery backed by modular fabrication processes and deep local utilities compliance.' },
              { title: 'Future Ready Solutions', desc: 'Robust engineering standards ensure your infrastructure is scalable and adaptable over decades of use.' },
              { title: 'Dedicated Support', desc: 'Decade-long Operation & Maintenance (O&M) SLA options ensure uptime remains close to 100%.' },
              { title: 'Sustainability First', desc: 'Every BTU of thermal output or kWh of solar power is designed to permanently replace fossil fuels.' }
            ].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '36px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'var(--secondary)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(139, 170, 91, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '36px',
                  width: '60px',
                  height: '4px',
                  backgroundColor: 'var(--accent)'
                }} />

                <div style={{ color: 'var(--secondary)', marginBottom: '20px' }}>
                  <ShieldCheck size={28} />
                </div>
                <h3 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '12px', fontWeight: '700' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — OUR APPROACH */}
      <section className="section section-secondary">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              PROJECT WORKFLOW
            </span>
            <h2 style={{ fontSize: '42px', color: 'var(--text-dark)', marginTop: '12px', marginBottom: '16px' }}>
              Our Engineering Approach
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto' }}>
              Rigorous, transparent steps ensuring seamless project transition from drawing board to live operations.
            </p>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px', margin: '0 auto' }}>
            {/* Vertical Line */}
            <div style={{
              position: 'absolute',
              left: '20px',
              top: '10px',
              bottom: '10px',
              width: '2px',
              backgroundColor: 'var(--primary)',
              opacity: 0.2
            }} />

            {[
              { step: "Step 1", title: "Consultation", desc: "Understanding the unique thermal, electrical, and water load profiles of your campus." },
              { step: "Step 2", title: "Site Assessment", desc: "Geographic, solar yield, soil strength, and organic waste availability inspections." },
              { step: "Step 3", title: "Engineering Design", desc: "Custom thermodynamic layouts, CAD drafts, and computational microgrid modelling." },
              { step: "Step 4", title: "Project Planning", desc: "Procurement mapping, regulatory local approvals, and grid connection parameters." },
              { step: "Step 5", title: "Implementation", desc: "Civil excavation, mechanical structural assembly, and plant components installation." },
              { step: "Step 6", title: "Testing & Commissioning", desc: "Component diagnostics, fluid testing, voltage validation, and utility grid handoff." },
              { step: "Step 7", title: "Long-Term Maintenance", desc: "Regular field inspections, preventative maintenance, and long-term support." }
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '24px', position: 'relative' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '14px',
                  zIndex: 2,
                  boxShadow: '0 4px 10px rgba(31,93,55,0.2)'
                }}>
                  {index + 1}
                </div>
                <div style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  padding: '24px 32px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-soft)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)' }}>{item.title}</h4>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--secondary)' }}>{item.step}</span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6.5 — CERTIFICATIONS */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
            ACCREDITATIONS & COMPLIANCE
          </span>
          <h2 style={{ fontSize: '36px', color: 'var(--text-dark)', marginBottom: '48px', fontWeight: '800' }}>
            Internationally Certified Organization
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { text: 'ISO 9001:2015', desc: 'Quality Management System' },
              { text: 'ISO 14001:2015', desc: 'Environmental Management' },
              { text: 'ISO 45001:2018', desc: 'Occupational Health & Safety' }
            ].map((cert) => (
              <div key={cert.text} style={{ 
                backgroundColor: '#FFFFFF', 
                border: '1px solid var(--border-color)', 
                borderRadius: '16px', 
                padding: '32px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '12px',
                minWidth: '240px',
                boxShadow: 'var(--shadow-soft)'
              }}>
                <div style={{ 
                  backgroundColor: 'var(--primary)', 
                  borderRadius: '50%', 
                  width: '56px', 
                  height: '56px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  marginBottom: '8px'
                }}>
                  <Award size={28} />
                </div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)' }}>{cert.text}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — INDUSTRIES WE SERVE */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              MARKET SECTORS
            </span>
            <h2 style={{ fontSize: '42px', color: 'var(--text-dark)', marginTop: '12px', marginBottom: '16px' }}>
              Serving Diverse Industries
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto' }}>
              Delivering specialized engineering infrastructure customized to operational requirements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: "Educational Institutions", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=80" },
              { title: "Industrial Manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" },
              { title: "Healthcare Facilities", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=400&q=80" },
              { title: "Hospitality & Resorts", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80" },
              { title: "Commercial Buildings", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80" },
              { title: "Government Infrastructure", image: "/government_infra.png" },
              { title: "Agriculture Sectors", image: "/agri_sectors.png" },
              { title: "Residential Communities", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80" }
            ].map((ind, i) => (
              <div 
                key={i}
                style={{
                  position: 'relative',
                  height: '240px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-soft)'
                }}
                className="industry-card"
              >
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${ind.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.5s ease'
                  }}
                  className="industry-bg"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,25,15,0.9) 20%, rgba(10,25,15,0.2) 80%)',
                  zIndex: 2
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  zIndex: 3
                }}>
                  <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '700', margin: 0 }}>{ind.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — OUR IMPACT (STATISTICS COUNTERS) */}
      <section ref={statsSectionRef} style={{
        padding: '100px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
              {stats.projects}+
            </div>
            <div style={{ fontSize: '15px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '8px' }}>
              Projects Delivered
            </div>
          </div>
          <div>
            <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
              {stats.partners}+
            </div>
            <div style={{ fontSize: '15px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '8px' }}>
              Industry Partners
            </div>
          </div>
          <div>
            <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
              {stats.commitment}%
            </div>
            <div style={{ fontSize: '15px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '8px' }}>
              Engineering Commitment
            </div>
          </div>
          <div>
            <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
              {stats.support}/7
            </div>
            <div style={{ fontSize: '15px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '8px' }}>
              Technical Support
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — OUR CLIENTS */}
      <section className="section section-secondary">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              OUR NETWORK
            </span>
            <h2 style={{ fontSize: '36px', color: 'var(--text-dark)', marginTop: '12px' }}>
              Trusted by Leading Institutions
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}>
            {[
              "Schneider Electric", "Siemens Energy", "ABB Group", "GE Vernova", 
              "Tesla Energy", "Hitachi Energy", "L&T Infrastructure", "TATA Power"
            ].map((client, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '32px 24px',
                  border: '1px solid var(--border-color)',
                  textAlign: 'center',
                  fontWeight: '800',
                  fontSize: '18px',
                  color: '#9CA3AF',
                  fontFamily: 'var(--font-heading)',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.color = 'var(--primary)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.color = '#9CA3AF';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — SUSTAINABILITY COMMITMENT */}
      <section className="section">
        <div className="container grid-2" style={{ gap: '64px', alignItems: 'center' }}>
          <div>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              OUR POLICY
            </span>
            <h2 style={{ fontSize: '42px', color: 'var(--text-dark)', marginTop: '12px', marginBottom: '24px' }}>
              Engineering a Sustainable Future
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.7' }}>
              At Magi, environmental responsibility is not an afterthought—it is the baseline of our design equations. Every solar grid we lay, every biogas digestion chamber we scale, and every bio-septic node we assemble is modeled to minimize ecological footprints and maximize long-term sustainability.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { title: 'Clean Energy Priority', desc: 'Advocating and building systems that directly displace thermal coal grid reliance.' },
                { title: 'Circular Economy Loop', desc: 'Ensuring municipal organic waste and greywater are returned to safe reuse pathways.' },
                { title: 'Future-Proof Materials', desc: 'Using non-toxic, highly recyclable components in solar mounts and sanitation cells.' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(31, 93, 55, 0.08)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="/biogas_waste_bg.png" 
              alt="Magi Environmental Systems" 
              style={{
                width: '100%',
                borderRadius: 'var(--radius-image)',
                boxShadow: 'var(--shadow-medium)',
                display: 'block'
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 11 — CALL TO ACTION */}
      <section id="cta" style={{
        position: 'relative',
        padding: '140px 0',
        background: 'linear-gradient(rgba(15, 29, 20, 0.9), rgba(15, 29, 20, 0.9)), url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{
            backgroundColor: 'rgba(216, 155, 29, 0.2)',
            border: '1px solid rgba(216, 155, 29, 0.4)',
            color: 'var(--accent)',
            padding: '6px 14px',
            borderRadius: '30px',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '1.5px',
            display: 'inline-block',
            marginBottom: '28px',
            textTransform: 'uppercase'
          }}>
            COMMISSION OUR SERVICES
          </span>
          <h2 style={{ fontSize: '48px', color: '#FFFFFF', marginBottom: '24px', fontWeight: '700', lineHeight: '1.2' }}>
            Partner With an Engineering Team That Builds Sustainable Infrastructure
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', lineHeight: '1.6' }}>
            Whether you're planning a renewable energy project, waste-to-energy facility, EV charging station infrastructure, or mobile toilet network, our engineering team is ready to deliver.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button onClick={() => onNavigate('contact')} className="btn btn-primary">
              Get Consultation
            </button>
            <button onClick={() => onNavigate('contact')} className="btn" style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '16px 28px',
              borderRadius: 'var(--radius-button)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
