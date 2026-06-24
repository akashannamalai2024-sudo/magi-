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
  ChevronDown,
  ChevronUp,
  Battery,
  Truck,
  TrendingUp,
  FileText,
  Clock,
  Building2,
  Trash2,
  DollarSign,
  HeartHandshake,
  Shield,
  Layers,
  Leaf
} from 'lucide-react';

export default function EVPage({ onNavigate }) {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const statsSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Electric Utility Vehicles",
      image: "/ev_utility_vehicle.png",
      desc: "Reliable electric transport custom-outfitted for campus, industrial, and commercial operations."
    },
    {
      title: "Battery Powered Commercial Mobility",
      image: "/ev_comm_shuttle.png",
      desc: "Zero-emission commercial passenger shuttles and utility vehicles for large complexes."
    },
    {
      title: "Campus & Institutional Mobility",
      image: "/ev_campus_mobility.png",
      desc: "Integrated electric transit systems tailored for universities, medical estates, and park environments."
    },
    {
      title: "Industrial Electric Transport Solutions",
      image: "/ev_industrial_transport.png",
      desc: "Efficient electric logistics vehicles and load carriers optimized for indoor warehouse routing."
    },
    {
      title: "EV Charging Infrastructure",
      image: "/ev_charging_infra.png",
      desc: "Enterprise-grade AC/DC charging stations engineered with load balancing and grid sync capacity."
    },
    {
      title: "Fleet Support Solutions",
      image: "/ev_fleet_support.png",
      desc: "Intelligent software monitoring vehicle metrics, state of charge, and dispatch scheduling."
    },
    {
      title: "Energy Efficient Mobility Systems",
      image: "/ev_efficient_mobility.png",
      desc: "Integrating solar carports and localized BESS storage to insulate charging loops from peak grid fees."
    },
    {
      title: "Engineering & Maintenance Support",
      image: "/solar_om.png",
      desc: "Routine battery management tests, mechanical tuning, safety diagnostics, and spare parts management."
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
        color: '#FFFFFF',
        padding: '120px 0 60px'
      }}>
        {/* Background Image / Video alternative */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/ev_mobility_bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }} />
        
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 29, 20, 0.75)',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'center'
          }} className="about-hero-grid">
            
            {/* Left Content */}
            <div>
              <span style={{
                display: 'inline-block',
                padding: '6px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '1px',
                marginBottom: '24px',
                color: 'var(--secondary)'
              }}>
                SUSTAINABLE MOBILITY SOLUTIONS
              </span>
              
              <h1 style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '24px',
                color: '#FFFFFF'
              }}>
                Powering the Future with <br/>
                <span style={{ color: 'var(--secondary)' }}>Intelligent EV &</span> <br/>
                Battery Mobility Solutions
              </h1>
              
              <p style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '40px',
                maxWidth: '620px',
                lineHeight: '1.7'
              }}>
                Delivering integrated electric mobility infrastructure, EV charging ecosystems, battery-powered transportation, and sustainable fleet solutions for industries, institutions, commercial facilities, and smart campuses.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="btn btn-primary"
                  style={{ cursor: 'pointer', border: 'none' }}
                >
                  Get Consultation
                </button>
                <button onClick={() => onNavigate('contact')} className="btn btn-secondary" style={{
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  cursor: 'pointer'
                }}>
                  Explore Engineering Solutions
                </button>
              </div>
            </div>

            {/* Right Side - Floating Glass Cards */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              position: 'relative'
            }}>
              {[
                { title: 'EV Charging Infrastructure', desc: 'Enterprise-grade high-power load balancing.' },
                { title: 'Electric Utility Vehicles', desc: 'Custom structural chassis setups.' },
                { title: 'Battery Mobility Loops', desc: 'Integrated microgrid-supported charge hubs.' },
                { title: 'Fleet Engineering', desc: 'Dynamic software tracking and analytics.' }
              ].map((card, idx) => (
                <div 
                  key={idx}
                  className={`animate-float-${(idx % 4) + 1}`}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    width: '100%',
                    maxWidth: '380px',
                    marginLeft: idx % 2 === 0 ? '0' : '40px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--secondary)'
                    }} />
                    <div>
                      <h4 style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '700', margin: 0 }}>{card.title}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', margin: '4px 0 0' }}>{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT THE SERVICE */}
      <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '80px',
            alignItems: 'center'
          }} className="about-hero-grid">
            
            {/* Left Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--radius-image)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-medium)',
                aspectRatio: '4/3'
              }}>
                <img 
                  src="/ev_overview.png" 
                  alt="Industrial EV Charging Infrastructure" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div>
              <span style={{
                color: 'var(--primary)',
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                display: 'block',
                marginBottom: '16px'
              }}>
                OVERVIEW
              </span>
              <h2 style={{
                fontSize: '44px',
                fontWeight: '800',
                marginBottom: '28px',
                lineHeight: '1.2'
              }}>
                Engineering Complete <br/>
                <span style={{ color: 'var(--primary)' }}>Electric Mobility Ecosystems</span>
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: 'var(--text-muted)',
                marginBottom: '36px'
              }}>
                Magi Renewable Energy Solutions designs, executes, and supports integrated electric mobility infrastructure. By merging advanced battery systems, customized utility transportation fleets, and enterprise-grade smart charging grids, we enable educational hubs, hospital complexes, and industrial sites to secure carbon-free transportation networks with reliable operational warranties.
              </p>

              {/* Grid Features */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px'
              }}>
                {[
                  { title: 'Charging Infrastructure', desc: 'Smart AC/DC fast chargers integrated with local load control loops.', icon: Zap },
                  { title: 'Electric Mobility', desc: 'Commercial utility vehicles configured for multi-shift logistics.', icon: Truck },
                  { title: 'Fleet Solutions', desc: 'Integrated software providing state of charge and routes analytics.', icon: Sliders },
                  { title: 'Engineering Support', desc: 'Certified technical assistance providing site compliance safety audits.', icon: Settings }
                ].map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} style={{ display: 'flex', gap: '16px' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(31, 93, 55, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary)',
                        flexShrink: 0
                      }}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '6px' }}>
                          {feat.title}
                        </h4>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — SOLUTIONS */}
      <section id="solutions" style={{ padding: '140px 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '800' }}>
              Complete EV & <br/>
              <span style={{ color: 'var(--primary)' }}>Battery Mobility Services</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {services.map((sol, idx) => (
              <div 
                key={idx}
                className="why-choose-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-soft)',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={sol.image} 
                    alt={sol.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="service-card-image"
                  />
                </div>
                <div style={{ padding: '30px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>{sol.title}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — WHY EV MOBILITY */}
      <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '80px',
            alignItems: 'center'
          }} className="about-hero-grid">
            
            {/* Left Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--radius-image)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-medium)',
                aspectRatio: '4/3'
              }}>
                <img 
                  src="/ev_efficient_mobility.png" 
                  alt="Solar Charging Station" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Side */}
            <div>
              <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', display: 'block', marginBottom: '16px' }}>
                BENEFITS
              </span>
              <h2 style={{ fontSize: '44px', fontWeight: '800', marginBottom: '32px' }}>
                Benefits of Smart <br/>
                <span style={{ color: 'var(--primary)' }}>Electric Mobility</span>
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px'
              }}>
                {[
                  { title: 'Lower Fuel Costs', desc: 'Displace volatile liquid fuel expenses with highly predictable utility-scale electric rates.', icon: DollarSign },
                  { title: 'Reduced Emissions', desc: 'Achieve scope 1 carbon target compliance by replacing direct tailpipe pollutants.', icon: Leaf },
                  { title: 'Low Maintenance', desc: 'Simplified drivetrain configurations reduce diagnostic checks and routine filter swaps.', icon: Settings },
                  { title: 'Quiet Operations', desc: 'Zero noise disruption ideal for corporate walkways, hospitals, and campus sectors.', icon: Activity },
                  { title: 'Energy Efficient', desc: 'Pair vehicle hubs with solar-integrated carports to recycle sunlight directly.', icon: Zap },
                  { title: 'Future Ready', desc: 'Seamlessly scale power parameters as grid capabilities grow.', icon: ShieldCheck }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderRadius: '16px',
                      padding: '24px',
                      border: '1px solid var(--border-color)'
                    }}>
                      <div style={{ color: 'var(--primary)', marginBottom: '12px' }}>
                        <Icon size={24} />
                      </div>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — INDUSTRIES WE SERVE */}
      <section style={{ padding: '140px 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '800' }}>
              Mobility Solutions Across Industries
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: 'Industrial Manufacturing', img: '/ev_industrial_mfg.png' },
              { title: 'Educational Institutions', img: '/ev_edu_inst.png' },
              { title: 'Healthcare Complexes', img: '/ev_healthcare.png' },
              { title: 'Hotels & Hospitality', img: '/ev_hospitality.png' },
              { title: 'Commercial Campuses', img: '/ev_commercial.png' },
              { title: 'Smart Warehouses', img: '/ev_smart_warehouse.png' },
              { title: 'Government Estates', img: '/ev_gov_estate.png' },
              { title: 'Airports & Terminals', img: '/ev_airport.png' }
            ].map((app, idx) => (
              <div 
                key={idx}
                style={{
                  position: 'relative',
                  height: '240px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                className="why-choose-card"
              >
                <img 
                  src={app.img} 
                  alt={app.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="service-card-image"
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(15, 29, 20, 0.65)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '24px'
                }}>
                  <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '700', margin: 0 }}>
                    {app.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6 — PROCESS */}
      <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '800' }}>
              Our Engineering Process
            </h2>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '30px',
            position: 'relative'
          }} className="about-hero-grid">
            {[
              { num: '01', title: 'Requirement Analysis', desc: 'Understanding fleet logistics duty cycle parameters.' },
              { num: '02', title: 'Site Assessment', desc: 'Reviewing physical space layout and electrical grid headroom.' },
              { num: '03', title: 'Mobility Planning', desc: 'Sizing optimal vehicle chassis parameters and load metrics.' },
              { num: '04', title: 'Charging Design', desc: 'Drafting substation transformers and custom AC/DC distribution lines.' },
              { num: '05', title: 'Infrastructure Development', desc: 'Installing charge points, solar shelter pads, and load balancers.' },
              { num: '06', title: 'Vehicle Integration', desc: 'Outfitting and delivering specific utility logistics chassis.' },
              { num: '07', title: 'Testing', desc: 'Validating safety loop relays and software management sync.' },
              { num: '08', title: 'Maintenance Support', desc: 'Routine battery condition scans, SLA dispatches, and diagnostic updates.' }
            ].map((step, idx) => (
              <div 
                key={idx}
                style={{
                  flex: '1 1 200px',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid var(--border-color)',
                  position: 'relative'
                }}
              >
                <div style={{
                  fontSize: '36px',
                  fontWeight: '800',
                  color: 'rgba(31, 93, 55, 0.08)',
                  position: 'absolute',
                  top: '12px',
                  right: '16px'
                }}>
                  {step.num}
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7 — WHY MAGI */}
      <section style={{ padding: '140px 0', backgroundColor: 'var(--bg-dark)', color: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '800', color: '#FFFFFF' }}>
              Why Organizations Choose Magi
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              { title: 'Engineering Expertise', desc: 'Staffed by certified design and structural piping experts.' },
              { title: 'Customized Infrastructure', desc: 'Electrical charging grids and vehicle payloads adapted directly to target site load constraints.' },
              { title: 'Quality Partnerships', desc: 'Alliances with tier-one suppliers to secure long-term warranty compliance.' },
              { title: 'Reliable Execution', desc: 'Full EPC delivery covering ground preparation, permitting, installation, and commissioning.' },
              { title: 'Long-Term Support', desc: 'Continuous preventive upkeep checkups and real-time support channels.' },
              { title: 'Future Ready Technology', desc: 'Modular charging architecture prepared to integrate high-power megawatt DC chargers.' }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '40px',
                  borderTop: '6px solid var(--accent)',
                  boxShadow: 'var(--shadow-medium)'
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9 — QUALITY PARTNERSHIPS */}
      <section style={{ padding: '140px 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', display: 'block', marginBottom: '16px' }}>
              ALLIANCES
            </span>
            <h2 style={{ fontSize: '40px', fontWeight: '800' }}>
              Trusted Mobility Technology Partners
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px'
          }} className="about-hero-grid">
            {[
              { name: 'Roots Industries', desc: 'OEM structural assembly and composite panel chassis components.' },
              { name: 'Yamaha Corporation', desc: 'Premium quality drive motor loops and steering assemblies.' },
              { name: 'TVS E-Mobility', desc: 'Battery management software systems and cell thermal safety loops.' }
            ].map((partner, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: 'var(--shadow-soft)',
                  border: '1px solid var(--border-color)',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '24px',
                  fontWeight: '800',
                  color: 'var(--primary)',
                  marginBottom: '16px',
                  letterSpacing: '0.5px'
                }}>
                  {partner.name}
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10 — KEY BENEFITS */}
      <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '800' }}>
              Key Infrastructure Metrics
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px'
          }} className="about-hero-grid">
            {[
              { num: '65%', desc: 'Average reduction in fleet operating costs compared to diesel variants.' },
              { num: 'Zero', desc: 'Direct scope 1 tailpipe carbon emission footprint.' },
              { num: '99.9%', desc: 'Scheduled logistics fleet reliability and uptime metrics.' },
              { num: 'Smart', desc: 'Charge scheduling aligned with off-peak commercial energy hours.' }
            ].map((card, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '20px',
                  padding: '40px',
                  textAlign: 'center',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: 'var(--primary)',
                  marginBottom: '16px'
                }}>
                  {card.num}
                </div>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <section style={{ padding: '140px 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '800' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: "What industries benefit most from EV mobility?",
                a: "Large industrial campuses, airports, universities, hospitals, and warehouse zones benefit most by converting internal site transport to low-noise, zero-emission electric vehicles."
              },
              {
                q: "Do you provide physical charging infrastructure?",
                a: "Yes. Magi acts as an engineering partner delivering complete charging setups, including site zoning, AC slow charging posts, high-power DC fast-charging terminals, and software controllers."
              },
              {
                q: "Can campuses deploy automated electric fleets?",
                a: "Yes. We configure dedicated charging loops and passenger vehicle lines to support structured loop routing inside university and healthcare estates."
              },
              {
                q: "How long does the infrastructure installation take?",
                a: "Standard AC charging arrays require 3-4 weeks. Large DC fast-charging hubs or custom vehicle configurations require 8-12 weeks."
              },
              {
                q: "Do you provide long-term fleet maintenance?",
                a: "Yes. We provide active mechanical support agreements covering routine battery checks, safety alignments, parameter diagnostics, and parts management."
              },
              {
                q: "Can the charging grid be expanded in the future?",
                a: "Absolutely. Magi designs all substation interfaces with expansion margin, enabling organizations to deploy initial stations today and add ports as their fleet expands."
              }
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
                    padding: '24px 30px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: 'var(--text-dark)',
                    fontWeight: '700',
                    fontSize: '17px'
                  }}
                >
                  {faq.q}
                  {activeFAQ === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {activeFAQ === idx && (
                  <div style={{
                    padding: '0 30px 24px',
                    color: 'var(--text-muted)',
                    fontSize: '15px',
                    lineHeight: '1.6'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 12 — FINAL CTA */}
      <section style={{
        position: 'relative',
        padding: '140px 0',
        backgroundColor: 'var(--bg-dark)',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        {/* Background Image Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '48px', fontWeight: '800', color: '#FFFFFF', marginBottom: '24px' }}>
            Build the Future of Sustainable Mobility
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '650px',
            margin: '0 auto 40px',
            lineHeight: '1.7'
          }}>
            Partner with Magi Renewable Energy Solutions to develop intelligent EV infrastructure and enterprise mobility ecosystems designed for long-term performance.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onNavigate('contact')} 
              className="btn btn-primary"
              style={{ cursor: 'pointer', border: 'none' }}
            >
              Contact
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="btn btn-secondary"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                cursor: 'pointer'
              }}
            >
              Talk to an Engineer
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
