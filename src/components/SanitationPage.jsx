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
  Droplet,
  Shield,
  Layers,
  Leaf,
  HeartPulse,
  Trash2,
  TrendingUp,
  DollarSign
} from 'lucide-react';

export default function SanitationPage({ onNavigate }) {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const statsSectionRef = useRef(null);

  // Interactive Project Consultant State
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardData, setWizardData] = useState({
    orgType: '',
    requirement: '',
    projectSize: '',
    locationType: '',
    name: '',
    company: '',
    phone: '',
    email: '',
    city: ''
  });
  const [wizardCompleted, setWizardCompleted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNextStep = () => {
    setWizardStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setWizardStep(prev => prev - 1);
  };

  const handleWizardSubmit = (e) => {
    e.preventDefault();
    setWizardCompleted(true);
  };

  const services = [
    {
      title: "Bio Septic Tank Systems",
      image: "/sani_septic_tank.png",
      desc: "Environmentally responsible biological wastewater treatment units designed for continuous digestion loops."
    },
    {
      title: "Portable Eco Toilets",
      image: "/sani_portable.png",
      desc: "High-compliance, decentralized mobile sanitation blocks engineered for site logistics and remote infrastructure."
    },
    {
      title: "Institutional Sanitation Infrastructure",
      image: "/sani_institutional.png",
      desc: "Large-scale waste management networks tailored for colleges, universities, and commercial complexes."
    },
    {
      title: "Decentralized Wastewater Management",
      image: "/sani_wastewater.png",
      desc: "Source-separated biological treatment systems reducing transport fees and drainage loading."
    },
    {
      title: "Eco-Friendly Toilet Solutions",
      image: "/sani_ecotoilet.png",
      desc: "Hygienic sanitation facilities configured to utilize minimal water and zero chemical additives."
    },
    {
      title: "Rural & Remote Area Sanitation",
      image: "/sani_rural.png",
      desc: "Reliable environmental engineering bringing hygienic infrastructure to off-grid townships."
    },
    {
      title: "Community Sanitation Facilities",
      image: "/sani_community.png",
      desc: "Scalable utility complexes constructed for high-frequency civic and public usage."
    },
    {
      title: "Sustainable Water & Waste Management Support",
      image: "/sani_zld.png",
      desc: "Consultative engineering ensuring zero liquid discharge (ZLD) compliance and nutrient recycling."
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
      
      {/* SECTION 1 — HERO */}
      <section style={{
        height: '100vh',
        minHeight: '650px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        padding: '80px 0 40px',
        background: 'linear-gradient(rgba(15, 29, 20, 0.75), rgba(15, 29, 20, 0.75)), url("/bio_septic_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxSizing: 'border-box'
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
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
                Home → Services → Bio Septic Tanks & Eco Sanitation
              </div>
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
                ENVIRONMENTAL SANITATION ENGINEERING
              </span>
              
              <h1 style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '24px',
                color: '#FFFFFF'
              }}>
                Engineering Sustainable <br/>
                <span style={{ color: 'var(--secondary)' }}>Sanitation Infrastructure</span> <br/>
                for Healthier Communities
              </h1>
              
              <p style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '40px',
                maxWidth: '620px',
                lineHeight: '1.7'
              }}>
                Delivering advanced bio septic systems, eco sanitation infrastructure, and decentralized wastewater management that create cleaner, healthier, and environmentally responsible communities.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#consultant" className="btn btn-primary">
                  Get Consultation
                </a>
                <a href="#solutions" className="btn btn-secondary" style={{
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backgroundColor: 'transparent',
                  color: '#FFFFFF'
                }}>
                  Explore Solutions
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
                { title: 'Bio Septic Systems', desc: 'Biological waste breakdown chambers.' },
                { title: 'Eco Sanitation Facilities', desc: 'Minimizing environmental footprints.' },
                { title: 'Wastewater Management', desc: 'Decentralized ZLD water cycles.' },
                { title: 'Environmental Engineering', desc: 'High compliance public health audits.' }
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

      {/* SECTION 2 — SERVICE OVERVIEW */}
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
                  src="/bio_septic_bg.png" 
                  alt="Environmental Sanitation Plant" 
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
                Smart Sanitation <br/>
                <span style={{ color: 'var(--primary)' }}>Infrastructure for Modern Communities</span>
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: 'var(--text-muted)',
                marginBottom: '36px'
              }}>
                Magi provides environmentally responsible sanitation infrastructure through advanced bio septic tanks, eco sanitation systems, decentralized wastewater management, and sustainable engineering solutions. We align facility water streams to meet zero-leachate standards, protecting local soils and safeguarding public health.
              </p>

              {/* Grid Features */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px'
              }}>
                {[
                  { title: 'Wastewater Management', desc: 'Efficient organic load degradation inside anaerobic chambers.', icon: Droplet },
                  { title: 'Environmental Protection', desc: 'Eliminates chemical leachate and prevents heavy metal ground seepage.', icon: Leaf },
                  { title: 'Public Health', desc: 'Axiomatic design loops that curb pathogens and protect local zones.', icon: HeartPulse },
                  { title: 'Sustainable Infrastructure', desc: 'Pre-cast, structural-grade setups built for decadal reliability.', icon: ShieldCheck }
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
              Comprehensive <br/>
              <span style={{ color: 'var(--primary)' }}>Eco Sanitation Solutions</span>
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

      {/* SECTION 4 — WHY ECO SANITATION */}
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
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" 
                  alt="Modern sanitation infrastructure" 
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
                Benefits of Sustainable <br/>
                <span style={{ color: 'var(--primary)' }}>Sanitation Systems</span>
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px'
              }}>
                {[
                  { title: 'Cleaner Environment', desc: 'Eliminates open stagnation pools and controls organic odors.', icon: Leaf },
                  { title: 'Improved Public Health', desc: 'Prevents vector breeding zones, reducing disease transmission.', icon: HeartPulse },
                  { title: 'Efficient Treatment', desc: 'Utilizes multi-chamber digestion loops to break down organic loads quickly.', icon: Droplet },
                  { title: 'Reduced Impact', desc: 'Pre-cast concrete panels prevent toxic chemicals leaking into soil.', icon: Trash2 },
                  { title: 'Water Conservation', desc: 'Integrates greywater separation to save water for landscaping.', icon: Droplet },
                  { title: 'Long-Term Sustainability', desc: 'A durable setup built with industrial-grade structural concrete.', icon: ShieldCheck }
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
              Sanitation Solutions Across Every Sector
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: 'Educational Institutions', img: '/sani_edu_inst.png' },
              { title: 'Industrial Facilities', img: '/sani_industrial.png' },
              { title: 'Hospitals & Healthcare', img: '/sani_healthcare.png' },
              { title: 'Hotels & Tourism', img: '/sani_tourism.png' },
              { title: 'Commercial Buildings', img: '/sani_commercial.png' },
              { title: 'Government Projects', img: '/sani_government.png' },
              { title: 'Residential Communities', img: '/sani_community.png' },
              { title: 'Rural Infrastructure', img: '/sani_rural.png' }
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
              { num: '01', title: 'Requirement Analysis', desc: 'Studying daily wastewater volume loads.' },
              { num: '02', title: 'Site Inspection', desc: 'Evaluating water table heights and geological characteristics.' },
              { num: '03', title: 'Engineering Design', desc: 'Determining correct multi-chamber volumes and layout.' },
              { num: '04', title: 'System Planning', desc: 'Drafting plumbing integration paths and backup release systems.' },
              { num: '05', title: 'Installation', desc: 'Excavation and setting pre-cast concrete structural shells.' },
              { num: '06', title: 'Testing', desc: 'Hydraulic leak testing and safety seal verification.' },
              { num: '07', title: 'Commissioning', desc: 'Injecting biological cultures and establishing active flow.' },
              { num: '08', title: 'Maintenance', desc: 'Scheduled checking, biological replenishment, and technical audits.' }
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
              Why Organizations Trust Magi
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              { title: 'Environmental Engineering', desc: 'Staffed by certified design and structural piping experts.' },
              { title: 'Customized Design', desc: 'Chamber capacities adapted directly to target site load constraints.' },
              { title: 'Reliable Infrastructure', desc: 'Erected using heavy-duty pre-cast concrete shells for long-term leakage prevention.' },
              { title: 'Long-Term Maintenance', desc: 'Preventive upkeep checks, biological culture seeding, and technical support.' },
              { title: 'Quality Standards', desc: '100% compliant with local zoning and pollution control regulations.' },
              { title: 'Future Ready Solutions', desc: 'Modularity enabling easy expansion if facility capacity grows.' }
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

      {/* SECTION 8 — PROJECT CONSULTANT */}
      <section id="consultant" style={{ padding: '140px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', display: 'block', marginBottom: '16px' }}>
                INFRASTRUCTURE ESTIMATOR
              </span>
              <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '16px' }}>
                Find the Right Sanitation Solution
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Tell us about your organization's site and waste profile for a customized engineering recommendation.
              </p>
            </div>

            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-medium)',
              overflow: 'hidden'
            }}>
              
              {/* Progress Bar */}
              <div style={{ backgroundColor: 'var(--border-color)', height: '6px', width: '100%' }}>
                <div style={{ 
                  backgroundColor: 'var(--primary)', 
                  height: '100%', 
                  width: `${(wizardStep / 5) * 100}%`,
                  transition: 'width 0.3s ease-in-out'
                }} />
              </div>

              <div style={{ padding: '48px' }}>
                {!wizardCompleted ? (
                  <form onSubmit={handleWizardSubmit}>
                    
                    {/* Step 1: Organization Type */}
                    {wizardStep === 1 && (
                      <div>
                        <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '28px' }}>
                          Select your organization profile:
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                          {['Industrial Facility', 'Educational Institution', 'Hospital Complex', 'Hotel & Resort', 'Government Project', 'Residential Community'].map((ind) => (
                            <button
                              key={ind}
                              type="button"
                              onClick={() => {
                                setWizardData(prev => ({ ...prev, orgType: ind }));
                                handleNextStep();
                              }}
                              style={{
                                padding: '20px',
                                border: wizardData.orgType === ind ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                                backgroundColor: wizardData.orgType === ind ? 'rgba(31, 93, 55, 0.03)' : '#FFFFFF',
                                borderRadius: '14px',
                                color: 'var(--text-dark)',
                                fontWeight: '600',
                                fontSize: '15px',
                                textAlign: 'left',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                              }}
                            >
                              {ind}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Requirement */}
                    {wizardStep === 2 && (
                      <div>
                        <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '28px' }}>
                          What is your primary requirement?
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                          {['Bio Septic Tanks', 'Portable Eco Toilets', 'Decentralized Wastewater Treatment', 'Community Sanitation Block'].map((req) => (
                            <button
                              key={req}
                              type="button"
                              onClick={() => {
                                setWizardData(prev => ({ ...prev, requirement: req }));
                                handleNextStep();
                              }}
                              style={{
                                padding: '20px',
                                border: wizardData.requirement === req ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                                backgroundColor: wizardData.requirement === req ? 'rgba(31, 93, 55, 0.03)' : '#FFFFFF',
                                borderRadius: '14px',
                                color: 'var(--text-dark)',
                                fontWeight: '600',
                                fontSize: '15px',
                                textAlign: 'left',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                              }}
                            >
                              {req}
                            </button>
                          ))}
                        </div>
                        <div style={{ display: 'flex', marginTop: '32px' }}>
                          <button type="button" onClick={handlePrevStep} className="btn btn-secondary" style={{ padding: '12px 24px' }}>
                            Back
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Project Size */}
                    {wizardStep === 3 && (
                      <div>
                        <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '28px' }}>
                          Estimated volume requirement:
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                          {[
                            { label: 'Small (< 2,000 Liters/day)', val: 'Small' },
                            { label: 'Medium (2,000 - 10,000 Liters/day)', val: 'Medium' },
                            { label: 'Large (10,000 - 50,000 Liters/day)', val: 'Large' },
                            { label: 'Enterprise (> 50,000 Liters/day)', val: 'Enterprise' }
                          ].map((qty) => (
                            <button
                              key={qty.val}
                              type="button"
                              onClick={() => {
                                setWizardData(prev => ({ ...prev, projectSize: qty.val }));
                                handleNextStep();
                              }}
                              style={{
                                padding: '20px',
                                border: wizardData.projectSize === qty.val ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                                backgroundColor: wizardData.projectSize === qty.val ? 'rgba(31, 93, 55, 0.03)' : '#FFFFFF',
                                borderRadius: '14px',
                                color: 'var(--text-dark)',
                                fontWeight: '600',
                                fontSize: '15px',
                                textAlign: 'left',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                              }}
                            >
                              {qty.label}
                            </button>
                          ))}
                        </div>
                        <div style={{ display: 'flex', marginTop: '32px' }}>
                          <button type="button" onClick={handlePrevStep} className="btn btn-secondary" style={{ padding: '12px 24px' }}>
                            Back
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Location Type */}
                    {wizardStep === 4 && (
                      <div>
                        <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '28px' }}>
                          Select site location characteristic:
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                          {['Urban / City Complex', 'Rural Township', 'Remote Site Office', 'Commercial High-rise'].map((g) => (
                            <button
                              key={g}
                              type="button"
                              onClick={() => {
                                setWizardData(prev => ({ ...prev, locationType: g }));
                                handleNextStep();
                              }}
                              style={{
                                padding: '20px',
                                border: wizardData.locationType === g ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                                backgroundColor: wizardData.locationType === g ? 'rgba(31, 93, 55, 0.03)' : '#FFFFFF',
                                borderRadius: '14px',
                                color: 'var(--text-dark)',
                                fontWeight: '600',
                                fontSize: '15px',
                                textAlign: 'left',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                              }}
                            >
                              {g}
                            </button>
                          ))}
                        </div>
                        <div style={{ display: 'flex', marginTop: '32px' }}>
                          <button type="button" onClick={handlePrevStep} className="btn btn-secondary" style={{ padding: '12px 24px' }}>
                            Back
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Contact Info */}
                    {wizardStep === 5 && (
                      <div>
                        <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '28px' }}>
                          Submit your contact details to generate recommendations:
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>Name</label>
                            <input 
                              type="text" 
                              required
                              value={wizardData.name}
                              onChange={(e) => setWizardData(prev => ({ ...prev, name: e.target.value }))}
                              placeholder="e.g. John Doe"
                              style={{ width: '100%', padding: '14px', border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '15px' }}
                            />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>Organization</label>
                            <input 
                              type="text" 
                              required
                              value={wizardData.company}
                              onChange={(e) => setWizardData(prev => ({ ...prev, company: e.target.value }))}
                              placeholder="e.g. Acme Infra"
                              style={{ width: '100%', padding: '14px', border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '15px' }}
                            />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>Phone Number</label>
                            <input 
                              type="tel" 
                              required
                              value={wizardData.phone}
                              onChange={(e) => setWizardData(prev => ({ ...prev, phone: e.target.value }))}
                              placeholder="e.g. +91 98765 43210"
                              style={{ width: '100%', padding: '14px', border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '15px' }}
                            />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>Email Address</label>
                            <input 
                              type="email" 
                              required
                              value={wizardData.email}
                              onChange={(e) => setWizardData(prev => ({ ...prev, email: e.target.value }))}
                              placeholder="e.g. john@acme.com"
                              style={{ width: '100%', padding: '14px', border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '15px' }}
                            />
                          </div>
                          <div style={{ gridColumn: 'span 2' }}>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>City / Location</label>
                            <input 
                              type="text" 
                              required
                              value={wizardData.city}
                              onChange={(e) => setWizardData(prev => ({ ...prev, city: e.target.value }))}
                              placeholder="e.g. Madurai, Tamil Nadu"
                              style={{ width: '100%', padding: '14px', border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '15px' }}
                            />
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                          <button type="button" onClick={handlePrevStep} className="btn btn-secondary" style={{ padding: '12px 24px' }}>
                            Back
                          </button>
                          <button type="submit" className="btn btn-primary" style={{ padding: '12px 28px', flex: 1 }}>
                            Get Engineering Recommendation
                          </button>
                        </div>
                      </div>
                    )}

                  </form>
                ) : (
                  <div style={{ textAlign: 'center', padding: '24px 0' }}>
                    <div style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(31, 93, 55, 0.1)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px'
                    }}>
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '16px' }}>
                      Profile Configured Successfully!
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '500px', margin: '0 auto 32px', lineHeight: '1.6' }}>
                      Thank you, <strong>{wizardData.name}</strong>. Our engineering leads are analyzing your sanitation requirements for <strong>{wizardData.company}</strong>. We will send the full estimation sheet to <strong>{wizardData.email}</strong> shortly.
                    </p>
                    
                    <div style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderRadius: '16px',
                      padding: '24px',
                      maxWidth: '560px',
                      margin: '0 auto 32px',
                      textAlign: 'left',
                      border: '1px solid var(--border-color)'
                    }}>
                      <h4 style={{ fontWeight: '700', fontSize: '15px', color: 'var(--text-dark)', marginBottom: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                        SUMMARY OF INPUTS:
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                        <li><strong>Sector Type:</strong> {wizardData.orgType}</li>
                        <li><strong>Core Requirement:</strong> {wizardData.requirement}</li>
                        <li><strong>Estimated Sizing:</strong> {wizardData.projectSize}</li>
                        <li><strong>Location Profile:</strong> {wizardData.locationType}</li>
                        <li><strong>Site Region:</strong> {wizardData.city}</li>
                      </ul>
                    </div>

                    <button 
                      type="button" 
                      onClick={() => {
                        setWizardCompleted(false);
                        setWizardStep(1);
                        setWizardData({ orgType: '', requirement: '', projectSize: '', locationType: '', name: '', company: '', phone: '', email: '', city: '' });
                      }}
                      className="btn btn-secondary"
                      style={{ padding: '12px 24px' }}
                    >
                      Reset Scoper
                    </button>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9 — KEY BENEFITS METRICS */}
      <section style={{ padding: '140px 0', backgroundColor: 'var(--bg-secondary)' }}>
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
              { num: '100%', desc: 'Hygienic containment preventing groundwater contamination.' },
              { num: 'Zero', desc: 'Need for routine chemical additives or toxic scrubbers.' },
              { num: 'ZLD', desc: 'Zero Liquid Discharge compatible configuration pathways.' },
              { num: '30yr', desc: 'Design operational lifespan using pre-cast structural shells.' }
            ].map((card, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
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

      {/* SECTION 10 — APPLICATIONS */}
      <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '800' }}>
              Applications Across Modern Infrastructure
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: 'Universities & Campuses', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=80' },
              { title: 'Hospitals & Medical Centres', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80' },
              { title: 'Hotels & Eco Resorts', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80' },
              { title: 'Factories & Industrial Sites', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80' },
              { title: 'Residential Townships', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80' },
              { title: 'Public Parks & Complexes', img: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=400&q=80' },
              { title: 'Government Office Blocks', img: 'https://images.unsplash.com/photo-1541829019-259276a7f013?auto=format&fit=crop&w=400&q=80' },
              { title: 'Remote Villages & Outposts', img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&q=80' }
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
                q: "What is a bio septic tank?",
                a: "A bio septic tank utilizes anaerobic biological cultures to digest blackwater waste solids, transforming them into clear water effluent and minimal gas by-products. This prevents sludge build-up and groundwater contamination."
              },
              {
                q: "How does eco sanitation work?",
                a: "Eco sanitation focuses on source separation (separating greywater from blackwater) to treat wastewater close to the source with low energy input, enabling high resource recycling rates."
              },
              {
                q: "Where can these systems be installed?",
                a: "Magi septic and eco sanitation systems can be installed across all terrains, including high water table locations, remote construction sites, commercial complex substructures, and municipal campuses."
              },
              {
                q: "Do you provide maintenance?",
                a: "Yes. Magi provides routine preventative checks, biological culture seeding services, leak inspections, and regulatory compliance logging."
              },
              {
                q: "Can these sanitation systems be customized?",
                a: "Yes. All pre-cast concrete chamber modules are sized and configured precisely based on your daily visitor capacity, soil permeability, and water footprint goals."
              },
              {
                q: "How long does the installation take?",
                a: "Standard bio septic tank installation takes 1-2 weeks. Large-scale decentralized institutional wastewater grids require 6-8 weeks."
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
          backgroundImage: 'url("/bio_septic_bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '48px', fontWeight: '800', color: '#FFFFFF', marginBottom: '24px' }}>
            Create Cleaner, Healthier, and Sustainable Communities
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '650px',
            margin: '0 auto 40px',
            lineHeight: '1.7'
          }}>
            Partner with Magi Renewable Energy Solutions to develop intelligent sanitation infrastructure that protects people, preserves the environment, and supports long-term sustainability.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#consultant" className="btn btn-primary">
              Schedule Consultation
            </a>
            <button 
              onClick={() => onNavigate('home', 'contact')} 
              className="btn btn-secondary"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: 'transparent',
                color: '#FFFFFF'
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
