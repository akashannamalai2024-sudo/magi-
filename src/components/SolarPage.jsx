import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Activity, 
  Compass, 
  Award, 
  Globe, 
  Sliders, 
  Settings, 
  Calendar,
  Layers,
  TrendingUp,
  FileText,
  Clock,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Sun,
  Shield,
  BarChart,
  Lightbulb,
  Truck
} from 'lucide-react';

export default function SolarPage({ onNavigate }) {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const statsSectionRef = useRef(null);
  const [stats, setStats] = useState({ cleanEnergy: 0, costSaved: 0, co2: 0, uptime: 0 });



  useEffect(() => {
    window.scrollTo(0, 0);

    let observer;
    let interval;
    if (statsSectionRef.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setStats({ cleanEnergy: 0, costSaved: 0, co2: 0, uptime: 0 });
          
          interval = setInterval(() => {
            setStats(prev => {
              const next = { ...prev };
              let updated = false;
              if (next.cleanEnergy < 120) { next.cleanEnergy += 6; updated = true; }
              if (next.costSaved < 40) { next.costSaved += 2; updated = true; }
              if (next.co2 < 8500) { next.co2 += 425; updated = true; }
              if (next.uptime < 99) { next.uptime += 5; updated = true; }
              else if (next.uptime < 99.9) { next.uptime = 99.9; updated = true; }
              
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



  const solarSolutions = [
    {
      title: "Industrial Rooftop Solar",
      image: "/solar_ind_rooftop.png",
      desc: "Custom-designed high-compliance rooftop solar systems for factories, warehouses, and manufacturing hubs."
    },
    {
      title: "Ground Mounted Solar",
      image: "/solar_ground.png",
      desc: "Utility-scale, structural-grade solar arrays engineered for large corporate land holdings and energy parks."
    },
    {
      title: "Institutional Solar",
      image: "/solar_institutional.png",
      desc: "Clean power infrastructure tailored for universities, medical campuses, and large institutional sites."
    },
    {
      title: "Commercial Solar",
      image: "/solar_commercial.png",
      desc: "Energy-efficient commercial building integrations optimized for green building status and operations savings."
    },
    {
      title: "Solar Street Lighting",
      image: "/solar_street.png",
      desc: "Smart solar illumination systems integrated with automated timers and dimming sensors for long driveways."
    },
    {
      title: "Hybrid Solar Systems",
      image: "/solar_hybrid.png",
      desc: "BESS storage solutions paired with solar arrays for backup security and peak shaving capabilities."
    },
    {
      title: "Operation & Maintenance",
      image: "/solar_om.png",
      desc: "Routine solar array thermal analysis, cleaning, voltage checks, and diagnostics to safeguard output yields."
    },
    {
      title: "Energy Optimization",
      image: "/solar_opt.png",
      desc: "Analytical dashboard integrations providing detailed performance diagnostics and predictive yield calculations."
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
      
      {/* SECTION 1 — HERO */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(10, 25, 15, 0.5), rgba(10, 25, 15, 0.5)), url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80")',
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
              <span style={{ fontSize: '12px', fontWeight: '500', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px' }}>Home / Services / Solar Energy Solutions</span>
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
              RENEWABLE ENERGY ENGINEERING
            </span>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '56px',
              fontWeight: '700',
              lineHeight: '1.15',
              color: '#FFFFFF',
              marginBottom: '24px'
            }}>
              Engineering Intelligent Solar Infrastructure
            </h1>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6',
              marginBottom: '40px',
              maxWidth: '640px'
            }}>
              Delivering customized solar energy systems that reduce operating costs, improve energy independence, and support long-term sustainability across industries, institutions, and commercial facilities.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button 
                onClick={() => onNavigate('contact')} 
                className="btn btn-primary" 
                style={{ cursor: 'pointer', border: 'none' }}
              >
                Contact
              </button>
              <button onClick={() => onNavigate('contact')} className="btn" style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '16px 28px',
                borderRadius: 'var(--radius-button)',
                fontWeight: '600',
                transition: 'var(--transition-fast)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Explore Engineering Solutions
              </button>
            </div>
          </div>

          {/* Floating statistics cards on the right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingLeft: '40px' }}>
            {[
              { label: 'Industrial Solar', desc: 'Sustained thermal-electrical generation.' },
              { label: 'Commercial Rooftop', desc: 'Space-optimized panel alignment.' },
              { label: 'Ground Mounted Systems', desc: 'Utility-scale structural arrays.' },
              { label: '24/7 Engineering Support', desc: 'SCADA integrations and yield tracking.' }
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

      {/* SECTION 2 — OVERVIEW */}
      <section className="section">
        <div className="container grid-2" style={{ gap: '64px', alignItems: 'center' }}>
          <div>
            <img 
              src="/indian_solar_engineers.png" 
              alt="Indian engineers evaluating rooftop solar installation" 
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
              OVERVIEW
            </span>
            <h2 style={{ fontSize: '42px', color: 'var(--text-dark)', marginTop: '12px', marginBottom: '24px' }}>
              Integrated Solar Infrastructure Designed for Every Industry
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.7' }}>
              Magi Renewable Energy Solutions engineers solar energy infrastructure designed for performance, mechanical durability, and grid compatibility. We recognize that commercial rooftop arrays and ground-mounted grids are critical investments. Our team uses computer-aided simulation models to construct solar systems tailored to your site's physical variables and daily electrical demand.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {[
                { title: 'Engineering Design', desc: 'Precision simulation yield analysis.' },
                { title: 'Customized Solutions', desc: 'Built for industrial and institutional loads.' },
                { title: 'High Performance', desc: 'Premium materials matching international specs.' },
                { title: 'Long-Term Maintenance', desc: 'Continuous O&M yield guarantee programs.' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ color: 'var(--primary)', marginTop: '4px' }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SOLAR SOLUTIONS */}
      <section id="solutions" className="section section-secondary">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              CAPABILITIES
            </span>
            <h2 style={{ fontSize: '42px', color: 'var(--text-dark)', marginTop: '12px', marginBottom: '16px' }}>
              Comprehensive Solar Energy Solutions
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto' }}>
              From initial structural assessment to SCADA-integrated microgrids.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {solarSolutions.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-card)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--text-dark)', marginBottom: '12px', fontWeight: '700' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0, flexGrow: 1 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY SOLAR */}
      <section className="section">
        <div className="container grid-2" style={{ gap: '64px', alignItems: 'center' }}>
          <div>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              VALUE PROP
            </span>
            <h2 style={{ fontSize: '42px', color: 'var(--text-dark)', marginTop: '12px', marginBottom: '24px' }}>
              Why Organizations Choose Solar Energy
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.7' }}>
              Transitioning to on-site solar energy is a proven mechanism for commercial enterprises and universities to gain energy pricing predictability while cutting operational greenhouse gas emissions.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              {[
                { title: 'Reduced Electricity Costs', desc: 'Direct savings on corporate power tariffs.', icon: <Sun size={20} /> },
                { title: 'Long-Term Savings', desc: 'Levelized cost of energy protected for 20+ years.', icon: <BarChart size={20} /> },
                { title: 'Lower Carbon Emissions', desc: 'Demonstrable offset metrics toward ESG goals.', icon: <Globe size={20} /> },
                { title: 'Energy Independence', desc: 'Independence from grid surges and power outages.', icon: <Shield size={20} /> },
                { title: 'Reliable Infrastructure', desc: 'Weather-resistant structures built to last.', icon: <Settings size={20} /> },
                { title: 'Sustainable Growth', desc: 'Clean infrastructure scaling with production demands.', icon: <TrendingUp size={20} /> }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ color: 'var(--primary)', marginTop: '4px' }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="/solar_energy_bg.png" 
              alt="Industrial scale solar panels" 
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

      {/* SECTION 5 — INDUSTRIES WE SERVE */}
      <section className="section section-secondary">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              SECTORS
            </span>
            <h2 style={{ fontSize: '42px', color: 'var(--text-dark)', marginTop: '12px', marginBottom: '16px' }}>
              Solar Solutions Across Every Industry
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: "Educational Institutions", image: "/sector_educational.png" },
              { title: "Industrial Manufacturing", image: "/sector_industrial.png" },
              { title: "Commercial Buildings", image: "/sector_commercial.png" },
              { title: "Hospitals & Healthcare", image: "/sector_healthcare.png" },
              { title: "Hotels & Hospitality", image: "/sector_hospitality.png" },
              { title: "Government Offices", image: "/government_infra.png" },
              { title: "Agriculture", image: "/agri_sectors.png" },
              { title: "Residential Communities", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80" }
            ].map((item, idx) => (
              <div 
                key={idx}
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
                    backgroundImage: `url(${item.image})`,
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
                  <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '700', margin: 0 }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — ENGINEERING PROCESS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              OUR PIPELINE
            </span>
            <h2 style={{ fontSize: '42px', color: 'var(--text-dark)', marginTop: '12px', marginBottom: '16px' }}>
              Our Solar Project Delivery Process
            </h2>
          </div>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px', margin: '0 auto' }}>
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
              { title: "Consultation", desc: "Understanding the unique energy, load, and tariff structure of your facility." },
              { title: "Energy Assessment", desc: "Deep load profiling to optimize initial array sizes." },
              { title: "Site Survey", desc: "Inspection of rooftop load limits, ground soil, and shade constraints." },
              { title: "Engineering Design", desc: "Full simulation mapping of grid parameters and string layout designs." },
              { title: "Financial Analysis", desc: "LCOE calculations, investment return, and regulatory solar tariff parameters." },
              { title: "Installation", desc: "Rigorous construction led by certified structural and electrical engineers." },
              { title: "Testing", desc: "String validation, insulation diagnostics, and voltage balancing." },
              { title: "Commissioning", desc: "Local utility integration, final inspection approval, and microgrid turn-on." },
              { title: "Monitoring & Maintenance", desc: "Active real-time SCADA telemetry monitoring and preventive diagnostics." }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '24px', position: 'relative' }}>
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
                  {idx + 1}
                </div>
                <div style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  padding: '24px 32px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-soft)'
                }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>{item.title}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHY MAGI */}
      <section style={{
        backgroundColor: 'var(--bg-dark)',
        color: '#FFFFFF',
        padding: '140px 0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: 'var(--secondary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              OUR ASSURANCES
            </span>
            <h2 style={{ fontSize: '42px', color: '#FFFFFF', marginTop: '12px', marginBottom: '16px' }}>
              Why Choose Magi Renewable Energy Solutions
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Engineering Excellence', desc: 'All designs are verified using CAD and electrical simulation packages before structural fabrication.' },
              { title: 'Customized Infrastructure', desc: 'We align solar tilt angle, string configurations, and structural heights to fit your exact terrain.' },
              { title: 'Experienced Team', desc: 'Delivered by structural and electrical power engineers with decades of combined execution experience.' },
              { title: 'Quality Components', desc: 'We use Tier-1 solar modules and smart telemetry inverters with international certifications.' },
              { title: 'Long-Term Support', desc: 'Dedicated field engineers available to resolve SCADA telemetry or system alerts within hours.' },
              { title: 'Sustainable Innovation', desc: 'Continuous integration of cutting-edge technology like bifacial modules and smart BESS optimization.' }
            ].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderTop: '4px solid var(--accent)',
                  borderRadius: '16px',
                  padding: '36px',
                  color: 'var(--text-dark)'
                }}
              >
                <div style={{ color: 'var(--primary)', marginBottom: '20px' }}>
                  <ShieldCheck size={28} />
                </div>
                <h3 style={{ fontSize: '18px', color: 'var(--text-dark)', marginBottom: '12px', fontWeight: '700' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* SECTION 9 — PROJECT IMPACT */}
      <section ref={statsSectionRef} className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              PROJECT METRICS
            </span>
            <h2 style={{ fontSize: '36px', color: 'var(--text-dark)', marginTop: '12px' }}>
              Corporate Solar Grid Impact
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                {stats.cleanEnergy}k+
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', marginTop: '8px' }}>
                Clean Energy (MWh)
              </div>
            </div>
            <div>
              <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                {stats.costSaved}%
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', marginTop: '8px' }}>
                Tariff Savings
              </div>
            </div>
            <div>
              <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                {stats.co2}+
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', marginTop: '8px' }}>
                CO2 Tons Offset
              </div>
            </div>
            <div>
              <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                {stats.uptime}%
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', marginTop: '8px' }}>
                System Uptime SLA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="section section-secondary">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              SUPPORT
            </span>
            <h2 style={{ fontSize: '36px', color: 'var(--text-dark)', marginTop: '12px' }}>
              Solar Project FAQs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: "How does industrial solar integration work?", a: "Magi designs string configuration solar layouts connected to commercial inverters that synchronize with your local utility grid, automatically priority-routing clean power before drawing grid electricity." },
              { q: "What roof space is required to start?", a: "A basic commercial solar implementation generally requires a minimum of 2,000 sq ft of shade-free structural roof area or ground terrain space." },
              { q: "How long does engineering setup take?", a: "Typically, full structural survey, compliance approval, mechanical structural assembly, and grid hookup takes between 4 to 8 weeks depending on capacity scale." },
              { q: "Do you provide grid telemetry options?", a: "Yes. All solar engineering commission includes full SCADA integration, providing live voltage output statistics and string level telemetry data." },
              { q: "Can institutional campus buildings install solar?", a: "Absolutely. We customize architectural frames for library roofs, solar carport panels, and sports arenas to optimize campus energy footprints." }
            ].map((faq, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '24px 32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'var(--text-dark)'
                  }}
                >
                  <span>{faq.q}</span>
                  {activeFAQ === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeFAQ === idx && (
                  <div style={{
                    padding: '0 32px 28px',
                    fontSize: '15px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '20px'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
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
            Power Your Organization with Intelligent Solar Infrastructure
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', lineHeight: '1.6' }}>
            Partner with Magi Renewable Energy Solutions to design and implement reliable, scalable, and future-ready solar systems tailored to your operational needs.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button 
              onClick={() => onNavigate('contact')} 
              className="btn btn-primary" 
              style={{ cursor: 'pointer', border: 'none' }}
            >
              Contact
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="btn" 
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '16px 28px',
                borderRadius: 'var(--radius-button)',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'var(--transition-fast)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              Talk to an Engineer
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
