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
  Leaf,
  Layers,
  TrendingUp,
  Flame,
  FileText,
  Clock,
  Building2,
  Trash2,
  Filter,
  DollarSign,
  HeartHandshake
} from 'lucide-react';

export default function BiogasPage({ onNavigate }) {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const statsSectionRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const solutions = [
    {
      title: "Food Waste Biogas Plants",
      image: "/biogas_food_waste.png",
      desc: "Convert commercial and institutional food waste into high-yield renewable fuel."
    },
    {
      title: "Cow Dung Biogas Systems",
      image: "/biogas_cow_dung.png",
      desc: "Reliable, automated renewable energy loops for industrial agriculture and dairy operations."
    },
    {
      title: "Institutional Waste Infrastructure",
      image: "/biogas_institutional.png",
      desc: "High-capacity decentralized waste treatment systems for colleges, hospitals, and corporate campuses."
    },
    {
      title: "Community Biogas Plants",
      image: "/biogas_community.png",
      desc: "Decentralized energy networks engineered for residential townships and urban municipalities."
    },
    {
      title: "Organic Waste Processing Systems",
      image: "/biogas_processing.png",
      desc: "Advanced pre-treatment equipment to optimize feedstock digestion rates and output yield."
    },
    {
      title: "Bio-CNG Concepts",
      image: "/biogas_cng.png",
      desc: "Purified biogas upgraded to commercial grade Bio-CNG for logistics, bottling, and clean thermal fuel."
    },
    {
      title: "Slurry Management Systems",
      image: "/biogas_slurry.png",
      desc: "Engineered solid-liquid separator loops for biological resource recovery and wastewater recycling."
    },
    {
      title: "Organic Fertilizer & By-product",
      image: "/biogas_fertilizer.png",
      desc: "Transform digestate residue into high-nitrogen organic fertilizer to maximize commercial value."
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
        padding: '120px 0 60px',
        background: 'linear-gradient(rgba(15, 29, 20, 0.75), rgba(15, 29, 20, 0.75)), url("/biogas_waste_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>

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
                ENVIRONMENTAL ENGINEERING
              </span>
              
              <h1 style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '24px',
                color: '#FFFFFF'
              }}>
                Transforming Organic Waste <br/>
                <span style={{ color: 'var(--secondary)' }}>into Sustainable Energy</span> <br/>
                Infrastructure
              </h1>
              
              <p style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '40px',
                maxWidth: '620px',
                lineHeight: '1.7'
              }}>
                Engineering intelligent biogas and waste-to-energy systems that convert organic waste into renewable energy, reduce environmental impact, and create long-term operational value.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="btn btn-primary"
                  style={{ cursor: 'pointer', border: 'none' }}
                >
                  Get Project Consultation
                </button>
                <a href="#solutions" className="btn btn-secondary" style={{
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backgroundColor: 'transparent',
                  color: '#FFFFFF'
                }}>
                  Explore Engineering Solutions
                </a>
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
                { title: 'Food Waste Processing', desc: 'Up to 98% efficiency yield loops.' },
                { title: 'Bio-CNG Infrastructure', desc: 'Upgraded clean energy output.' },
                { title: 'Renewable Thermal Fuel', desc: 'Direct replacement for industrial LPG.' },
                { title: 'Environmental Engineering', desc: 'ZLD zero liquid discharge compatible.' }
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

      {/* SECTION 2 — INTRODUCTION */}
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
                  src="/biogas_indian_overview.png" 
                  alt="Industrial Biogas Digester Infrastructure" 
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
                Engineering Waste Into <br/>
                <span style={{ color: 'var(--primary)' }}>Renewable Opportunity</span>
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: 'var(--text-muted)',
                marginBottom: '36px'
              }}>
                At Magi, we design and build complete, integrated waste-to-energy infrastructures. By turning municipal, commercial, and agricultural organic waste streams into clean methane and high-grade organic fertilizers, we help large institutions and industrial campuses eliminate disposal costs while locking in predictable energy resources.
              </p>

              {/* Grid Features */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px'
              }}>
                {[
                  { title: 'Renewable Fuel', desc: 'Displace expensive LPG and diesel with clean, locally generated biogas.', icon: Flame },
                  { title: 'Waste Reduction', desc: 'Divert hundreds of tons of organic waste from polluting local landfills.', icon: Trash2 },
                  { title: 'Environmental Protection', desc: 'Prevent toxic groundwater contamination and reduce methane emissions.', icon: Leaf },
                  { title: 'Operational Efficiency', desc: 'Establish circular utility loops that slash operational waste management fees.', icon: Settings }
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
              Comprehensive Biogas & <br/>
              <span style={{ color: 'var(--primary)' }}>Waste-to-Energy Solutions</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {solutions.map((sol, idx) => (
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

      {/* SECTION 4 — PROCESS */}
      <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', display: 'block', marginBottom: '16px' }}>
              HOW IT WORKS
            </span>
            <h2 style={{ fontSize: '44px', fontWeight: '800' }}>
              Engineering the Circular Economy
            </h2>
          </div>

          {/* Horizontal Process Steps */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '30px',
            position: 'relative'
          }} className="about-hero-grid">
            {[
              { num: '01', title: 'Organic Waste', desc: 'Food waste, cow dung, agricultural biomass residue.' },
              { num: '02', title: 'Collection', desc: 'Secure, clean transport and loading structures.' },
              { num: '03', title: 'Segregation', desc: 'Removal of inorganic debris and contaminants.' },
              { num: '04', title: 'Biogas Digestion', desc: 'Anaerobic breakdown inside sealed thermophilic chambers.' },
              { num: '05', title: 'Gas Purification', desc: 'Scrubbing H2S and moisture to refine clean methane.' },
              { num: '06', title: 'Renewable Fuel', desc: 'Pressurized gas for thermal combustion or power generators.' },
              { num: '07', title: 'Organic Fertilizer', desc: 'High-nutrient liquid/solid digestate recovery.' },
              { num: '08', title: 'Sustainable Ecosystem', desc: 'Complete closed loop minimizing landfill dependency.' }
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
                  color: 'rgba(31, 93, 55, 0.1)',
                  position: 'absolute',
                  top: '12px',
                  right: '16px'
                }}>
                  {step.num}
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '10px', paddingRight: '24px' }}>
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

      {/* SECTION 5 — KEY BENEFITS */}
      <section style={{ padding: '140px 0', backgroundColor: 'var(--bg-dark)', color: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '800', color: '#FFFFFF' }}>
              Why Waste-to-Energy?
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              { title: 'Reduce Organic Waste', desc: 'Eradicates localized landfill heap build-up and limits toxic leachate seepage.', icon: Trash2 },
              { title: 'Generate Renewable Fuel', desc: 'Creates a continuous on-site stream of methane for boilers, ovens, and systems.', icon: Flame },
              { title: 'Lower LPG Dependency', desc: 'Locks in energy pricing predictability by insulating your facility from fuel spikes.', icon: DollarSign },
              { title: 'Reduce Carbon Emissions', desc: 'Mitigates global warming impact by capturing methane that would escape freely.', icon: Leaf },
              { title: 'Lower Operating Costs', desc: 'Dramatically cuts waste transport fees and general organic waste disposal surcharges.', icon: TrendingUp },
              { title: 'Support Circular Economy', desc: 'Recycles chemical nutrients back to agricultural soils through compost digestate.', icon: Globe }
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '40px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: 'var(--shadow-medium)'
                  }}
                >
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(31, 93, 55, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    marginBottom: '28px'
                  }}>
                    <Icon size={26} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '14px' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 6 — APPLICATIONS */}
      <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '800' }}>
              Applications Across Industries
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: 'Hotels & Resorts', img: '/biogas_community.png' },
              { title: 'Industrial Kitchens', img: '/biogas_food_waste.png' },
              { title: 'Hospitals & Healthcare', img: '/biogas_institutional.png' },
              { title: 'Educational Institutions', img: '/biogas_institutional.png' },
              { title: 'Residential Communities', img: '/biogas_community.png' },
              { title: 'Agriculture & Dairy', img: '/biogas_cow_dung.png' },
              { title: 'Municipal Waste Hubs', img: '/biogas_processing.png' },
              { title: 'Commercial Buildings', img: '/biogas_cng.png' }
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

      {/* SECTION 7 — DELIVERY TIMELINE */}
      <section style={{ padding: '140px 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '800' }}>
              Our Delivery Process
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
              { num: '01', title: 'Requirement Study', desc: 'Reviewing operational goals and baseline parameters.' },
              { num: '02', title: 'Waste Assessment', desc: 'Evaluating feed characterization and daily energy demand metrics.' },
              { num: '03', title: 'Site Survey', desc: 'Geotechnical and proximity analysis for installation routing.' },
              { num: '04', title: 'Engineering Design', desc: 'Drafting precise thermal simulation flow diagrams and safety checks.' },
              { num: '05', title: 'Plant Construction', desc: 'Erecting physical digester chambers, piping systems, and control loops.' },
              { num: '06', title: 'Testing', desc: 'Validating seal integrity, valve operation, and gas containment systems.' },
              { num: '07', title: 'Commissioning', desc: 'Feedstock injection, biological stabilization, and grid ignition.' },
              { num: '08', title: 'Maintenance', desc: 'Scheduled parameter tuning, active diagnostics, and troubleshooting support.' }
            ].map((step, idx) => (
              <div 
                key={idx}
                style={{
                  flex: '1 1 200px',
                  backgroundColor: '#FFFFFF',
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

      {/* SECTION 8 — WHY CHOOSE MAGI */}
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
                  src="/biogas_trust_facility.png" 
                  alt="Magi biogas plant installation" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Side */}
            <div>
              <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', display: 'block', marginBottom: '16px' }}>
                TRUST & COMPLIANCE
              </span>
              <h2 style={{ fontSize: '44px', fontWeight: '800', marginBottom: '32px' }}>
                Why Organizations Trust Magi
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px'
              }}>
                {[
                  { title: 'Engineering Expertise', desc: 'Staffed by certified design and structural piping experts.' },
                  { title: 'Customized Design', desc: 'Systems modeled directly around your organic load properties.' },
                  { title: 'Reliable Infrastructure', desc: 'Engineered using industrial-grade materials for multi-decade uptime.' },
                  { title: 'Long-Term Support', desc: 'Responsive SLA teams ensuring routine maintenance calls.' },
                  { title: 'Environmental Compliance', desc: '100% compliant with local zoning and pollution control standards.' },
                  { title: 'Future Ready Solutions', desc: 'Easily scalable setups ready for expansion needs.' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10 — TRUSTED ACROSS MULTIPLE SECTORS */}
      <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '800' }}>
              Trusted Across Multiple Sectors
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }} className="about-hero-grid">
            {[
              { title: 'Educational Institutions', desc: 'Sustainable campus dining loop installations.' },
              { title: 'Hotels & Hospitality', desc: 'Direct replacement for high-volume LPG boilers.' },
              { title: 'Healthcare Facilities', desc: 'Sterile bio-waste loops meeting local guidelines.' },
              { title: 'Commercial Complexes', desc: 'Shared tenant zero-leachate recovery systems.' },
              { title: 'Industrial Kitchens', desc: 'Heavy-duty food pulp extraction and processing.' },
              { title: 'Municipal Waste Hubs', desc: 'Centralized district sorting and biomethane grids.' },
              { title: 'Agriculture & Dairy', desc: 'Animal manure digester storage setups.' },
              { title: 'Residential Townships', desc: 'Eco-conscious township community fuel lines.' }
            ].map((sect, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '20px',
                  padding: '30px',
                  border: '1px solid var(--border-color)'
                }}
              >
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px' }}>
                  {sect.title}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                  {sect.desc}
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
                q: "How does a biogas plant work?",
                a: "A biogas plant utilizes anaerobic digestion, where organic waste is placed in an oxygen-free chamber. Microorganisms break down the matter, producing a methane-rich gas mixture (biogas) and a nutrient-dense residue (digestate) used as high-grade fertilizer."
              },
              {
                q: "Which industries benefit most from waste-to-energy?",
                a: "Industries with massive daily organic waste volumes—such as hotels, hospital kitchens, residential boarding campuses, municipal zones, and dairy farms—benefit most by converting their waste directly into on-site utility savings."
              },
              {
                q: "What waste materials are accepted in these digesters?",
                a: "Magi anaerobic plants process all types of biodegradable organics, including cooked food waste, raw agricultural crop residue, dairy manure, and municipal organic pulp. Non-biodegradables like plastics, metal, glass, and wood must be sorted out beforehand."
              },
              {
                q: "Can food waste reliably generate energy?",
                a: "Yes! Food waste has one of the highest biogas yield potentials of any organic feedstock due to its high caloric content, making it highly efficient for thermal operations."
              },
              {
                q: "Do you provide long-term maintenance?",
                a: "Absolutely. Magi provides comprehensive post-commissioning maintenance plans, including active parameter tuning, structural leak tests, pressure checks, and emergency troubleshooting."
              },
              {
                q: "How long does implementation take?",
                a: "Implementation timeline depends on system scale. Typically, small-scale institutional plants require 6-8 weeks, while large-scale district municipal Bio-CNG projects require 4-6 months."
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '48px', fontWeight: '800', color: '#FFFFFF', marginBottom: '24px' }}>
            Turn Organic Waste into Renewable Energy
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '650px',
            margin: '0 auto 40px',
            lineHeight: '1.7'
          }}>
            Partner with Magi Renewable Energy Solutions to build intelligent waste-to-energy infrastructure that delivers environmental compliance and operational value.
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
              Contact Engineering Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
