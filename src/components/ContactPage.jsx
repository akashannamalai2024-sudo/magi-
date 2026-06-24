import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  HeartHandshake, 
  HardHat,
  ArrowUpRight
} from 'lucide-react';

export default function ContactPage({ onNavigate }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [activeOffice, setActiveOffice] = useState(0);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    phone: '',
    city: '',
    industryType: 'Industry',
    serviceInterested: 'Solar Energy Solutions',
    projectSize: 'Medium',
    message: '',
    agree: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
      
      {/* SECTION 01 — HERO */}
      <section style={{
        height: '100vh',
        minHeight: '600px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(10, 25, 15, 0.65), rgba(10, 25, 15, 0.85)), url("/about_engineering_infrastructure_new.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFFFFF',
        paddingTop: '80px'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '48px',
            alignItems: 'center'
          }} className="about-hero-grid">
            
            {/* Left Content */}
            <div>
              <div style={{ display: 'flex', gap: '8px', fontSize: '14px', marginBottom: '16px', color: 'rgba(255,255,255,0.6)' }}>
                <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>Home</span>
                <span>→</span>
                <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>Contact</span>
              </div>

              <span style={{
                display: 'inline-block',
                padding: '6px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '30px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                marginBottom: '24px',
                color: 'var(--secondary)'
              }}>
                CONTACT OUR ENGINEERING TEAM
              </span>
              
              <h1 style={{
                fontSize: 'clamp(36px, 4.5vw, 64px)',
                fontWeight: '800',
                lineHeight: '1.15',
                marginBottom: '24px',
                color: '#FFFFFF',
                letterSpacing: '-1px'
              }}>
                Let's Build a<br/>
                <span style={{ color: 'var(--secondary)' }}>Sustainable Future</span><br/>
                Together
              </h1>
              
              <p style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '40px',
                maxWidth: '600px',
                lineHeight: '1.7'
              }}>
                Whether you're planning a renewable energy project, waste-to-energy infrastructure, EV mobility solution, or environmental engineering project, our experts are ready to help.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#form-section" className="btn btn-primary">
                  Schedule Consultation
                </a>
                <a href="tel:+918778740104" className="btn btn-secondary" style={{
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backgroundColor: 'transparent',
                  color: '#FFFFFF'
                }}>
                  Call Our Team
                </a>
              </div>
            </div>

            {/* Right Content - Floating Glass Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
              {[
                { title: 'Engineering Consultation', desc: 'Custom energy models and technical viability checks.' },
                { title: 'Project Planning', desc: 'Grid integration audits and regulatory approvals.' },
                { title: 'Technical Support', desc: '24/7 monitoring, telemetry and SLA-backed response.' },
                { title: 'Enterprise Solutions', desc: 'Large scale corporate ESG compliance models.' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                    transform: `translateX(${idx % 2 === 0 ? '20px' : '-20px'})`,
                    animation: `float-anim ${3 + idx}s ease-in-out infinite alternate`,
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <h4 style={{ color: 'var(--secondary)', margin: '0 0 4px 0', fontSize: '16px', fontWeight: '700' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.75)', margin: 0, fontSize: '13px', lineHeight: '1.4' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Global style injection for floating animation */}
        <style>{`
          @keyframes float-anim {
            0% { transform: translateY(0px) translateX(var(--tx, 0px)); }
            100% { transform: translateY(-10px) translateX(var(--tx, 0px)); }
          }
        `}</style>
      </section>

      {/* SECTION 02 — CONTACT INFORMATION */}
      <section style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '42px', color: 'var(--text-dark)', fontWeight: '700', marginBottom: '16px' }}>
              Get in Touch
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px', marginInline: 'auto' }}>
              Speak with our engineering experts for customized renewable infrastructure solutions.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}>
            {/* Card 01 — Address */}
            <div style={cardStyle} className="contact-info-card">
              <div style={iconContainerStyle}>📍</div>
              <h3 style={cardHeadingStyle}>Office Addresses</h3>
              <div style={{ marginBottom: '20px', width: '100%' }}>
                <h4 style={{ fontSize: '15px', color: 'var(--text-dark)', fontWeight: '600', margin: '0 0 6px 0' }}>Chennai (Regd. Office)</h4>
                <p style={cardBodyStyle}>
                  4/608, G1, V.O.C Street,<br/>
                  Perungudi, Palavakkam,<br/>
                  Chennai, Tamil Nadu - 600041
                </p>
              </div>
              <div style={{ width: '100%' }}>
                <h4 style={{ fontSize: '15px', color: 'var(--text-dark)', fontWeight: '600', margin: '0 0 6px 0' }}>Madurai Office</h4>
                <p style={cardBodyStyle}>
                  P 316, Karpaga Nagar, 11th Street,<br/>
                  K Pudur, Madurai,<br/>
                  Tamil Nadu - 625007
                </p>
              </div>
            </div>

            {/* Card 02 — Phone */}
            <div style={cardStyle} className="contact-info-card">
              <div style={iconContainerStyle}>📞</div>
              <h3 style={cardHeadingStyle}>Phone Number</h3>
              <p style={cardBodyStyle}>
                <strong>Sales & Planning:</strong> +91 87787 40104
              </p>
            </div>

            {/* Card 03 — Email */}
            <div style={cardStyle} className="contact-info-card">
              <div style={iconContainerStyle}>✉️</div>
              <h3 style={cardHeadingStyle}>Email Address</h3>
              <p style={cardBodyStyle}>
                <strong>General Enquiries:</strong> magirenewables@gmail.com
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* SECTION 03 — CONTACT FORM */}
      <section id="form-section" style={{ padding: '48px 0', backgroundColor: '#F8FAF9', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '32px',
            alignItems: 'stretch'
          }} className="about-hero-grid">
            
            {/* Left — Large Engineering Image */}
            <div style={{
              backgroundImage: 'url("/solar_ind_rooftop.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '24px',
              boxShadow: 'var(--shadow-large)',
              minHeight: '400px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '32px',
                left: '32px',
                right: '32px',
                backgroundColor: 'rgba(15, 29, 20, 0.85)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF'
              }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '700', color: 'var(--secondary)' }}>
                  ISO-Certified Engineering SLA
                </h4>
                <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5' }}>
                  Our project development team ensures robust compliance with energy grids and green building sustainability mandates.
                </p>
              </div>
            </div>

            {/* Right — Contact Card / Form */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '28px 36px',
              boxShadow: 'var(--shadow-soft)',
              border: '1px solid var(--border-color)'
            }}>
              <h2 style={{ fontSize: '28px', color: 'var(--text-dark)', fontWeight: '700', marginBottom: '4px' }}>
                Request a Consultation
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '14px' }}>
                Complete the form below and our engineering team will contact you.
              </p>

              {formSubmitted ? (
                <div style={{
                  backgroundColor: 'rgba(31, 93, 55, 0.08)',
                  border: '1px solid var(--primary)',
                  borderRadius: '16px',
                  padding: '32px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '12px' }}>Enquiry Submitted Successfully</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '15px', marginBottom: '0' }}>
                    Thank you for reaching out. An infrastructure design consultant from Magi Chennai Head Office will review your details and contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={labelStyle}>First Name *</label>
                      <input 
                        type="text" 
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        style={inputStyle} 
                        placeholder="John" 
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name *</label>
                      <input 
                        type="text" 
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        style={inputStyle} 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Organization Name *</label>
                    <input 
                      type="text" 
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      style={inputStyle} 
                      placeholder="Enter company/agency name" 
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        style={inputStyle} 
                        placeholder="john.doe@company.com" 
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={inputStyle} 
                        placeholder="+91 XXXXX XXXXX" 
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={labelStyle}>City *</label>
                      <input 
                        type="text" 
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        style={inputStyle} 
                        placeholder="Chennai" 
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Industry Type</label>
                      <select 
                        name="industryType"
                        value={formData.industryType}
                        onChange={handleInputChange}
                        style={inputStyle}
                      >
                        <option value="Industry">Industry</option>
                        <option value="Institution">Institution</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Government">Government</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Residential">Residential</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={labelStyle}>Service Interested In</label>
                      <select 
                        name="serviceInterested"
                        value={formData.serviceInterested}
                        onChange={handleInputChange}
                        style={inputStyle}
                      >
                        <option value="Solar Energy Solutions">Solar Energy Solutions</option>
                        <option value="Biogas & Waste-to-Energy">Biogas & Waste-to-Energy</option>
                        <option value="EV & Battery Mobility">EV & Battery Mobility</option>
                        <option value="Bio Septic & Eco Sanitation">Bio Septic & Eco Sanitation</option>
                        <option value="Multiple Services">Multiple Services</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Project Size</label>
                      <select 
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleInputChange}
                        style={inputStyle}
                      >
                        <option value="Small">Small (&lt; 100 kW / 10 KLD)</option>
                        <option value="Medium">Medium (100 - 500 kW / 50 KLD)</option>
                        <option value="Large">Large (500 kW - 2 MW / 200 KLD)</option>
                        <option value="Enterprise">Enterprise (&gt; 2 MW / 500 KLD)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Message / Project Constraints</label>
                    <textarea 
                      name="message"
                      rows="2"
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{ ...inputStyle, height: 'auto', resize: 'vertical' }}
                      placeholder="Briefly describe your site constraints, timeline requirements, or capacity goals..."
                    ></textarea>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
                    <input 
                      type="checkbox" 
                      name="agree"
                      required
                      checked={formData.agree}
                      onChange={handleInputChange}
                      id="agree-checkbox"
                      style={{ marginTop: '4px', cursor: 'pointer' }}
                    />
                    <label htmlFor="agree-checkbox" style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.4', cursor: 'pointer' }}>
                      I agree to be contacted by Magi's engineering representatives regarding my technical consultation request.
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ 
                      width: '100%', 
                      padding: '16px', 
                      borderRadius: '14px', 
                      fontWeight: '600', 
                      fontSize: '16px',
                      marginTop: '8px'
                    }}
                  >
                    Submit Enquiry
                  </button>

                  <p style={{ margin: '8px 0 0 0', textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)' }}>
                    Our engineering consultant will respond within one business day.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>



      {/* SECTION 06 — OFFICE LOCATION */}
      <section style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '42px', color: 'var(--text-dark)', fontWeight: '700', marginBottom: '16px' }}>
              Visit Our Office
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px', marginInline: 'auto' }}>
              We welcome site planners and procurement officers to visit our engineering hubs.
            </p>
          </div>

          {/* Office Tabs Selector */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
            {offices.map((office, idx) => (
              <button
                key={office.id}
                onClick={() => setActiveOffice(idx)}
                style={{
                  padding: '12px 28px',
                  borderRadius: '30px',
                  border: activeOffice === idx ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: activeOffice === idx ? 'var(--primary)' : '#FFFFFF',
                  color: activeOffice === idx ? '#FFFFFF' : 'var(--text-dark)',
                  fontSize: '15px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: activeOffice === idx ? '0 8px 24px rgba(31, 93, 55, 0.2)' : 'none',
                  outline: 'none'
                }}
              >
                {office.name}
              </button>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 0.7fr',
            gap: '48px',
            alignItems: 'stretch'
          }} className="about-hero-grid">
            
            {/* Left - Interactive Map */}
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-large)',
              height: '480px',
              border: '1px solid var(--border-color)',
              position: 'relative'
            }} className="map-container">
              <iframe 
                src={offices[activeOffice].embedUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`${offices[activeOffice].name} Location Map`}
              ></iframe>
            </div>

            {/* Right - Office Info Card */}
            <div style={{
              backgroundColor: '#F8FAF9',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-soft)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  {offices[activeOffice].type}
                </span>
                <h3 style={{ fontSize: '24px', color: 'var(--text-dark)', fontWeight: '700', marginBottom: '24px' }}>
                  {offices[activeOffice].name}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '14px', color: 'var(--text-muted)', marginBottom: '32px' }}>
                  <div>
                    <strong style={{ color: 'var(--text-dark)' }}>Address:</strong><br/>
                    {offices[activeOffice].address}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-dark)' }}>Phone:</strong> {offices[activeOffice].phone}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-dark)' }}>Email:</strong> {offices[activeOffice].email}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-dark)' }}>Landmark:</strong><br/>
                    {offices[activeOffice].landmark}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-dark)' }}>Parking:</strong><br/>
                    {offices[activeOffice].parking}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a 
                  href={`https://maps.google.com/?q=${offices[activeOffice].searchQuery}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px' }}
                >
                  Get Directions <ArrowUpRight size={16} />
                </a>
                <a 
                  href={`https://maps.google.com/?q=${offices[activeOffice].searchQuery}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                  style={{ 
                    border: '1px solid var(--border-color)', 
                    backgroundColor: '#FFFFFF', 
                    color: 'var(--text-dark)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '8px',
                    padding: '14px'
                  }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 07 — FAQ */}
      <section style={{ padding: '120px 0', backgroundColor: '#F8FAF9', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '42px', color: 'var(--text-dark)', fontWeight: '700', marginBottom: '16px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)' }}>
              Quick answers about partnering with Magi on renewable grid development.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: "How do I request a consultation?",
                a: "Simply submit your organization and energy parameters through our Request a Consultation form above. Our project coordinator will route the request to a localized domain engineer."
              },
              {
                q: "Which industries do you serve?",
                a: "We serve industrial manufacturing, universities and educational institutions, corporate commercial properties, municipal utilities, government bodies, healthcare infrastructure, and large real estate developers."
              },
              {
                q: "Do you provide site visits?",
                a: "Yes. Following our initial discovery call, we dispatch field engineers for comprehensive mechanical load checks, rooftop thermal profiling, or feedstock collection parameters."
              },
              {
                q: "Can I request multiple services?",
                a: "Absolutely. Most modern enterprise layouts use hybrid systems: combining industrial solar arrays with battery backup and biological wastewater recycling systems."
              },
              {
                q: "How long does it take to receive a proposal?",
                a: "For small-to-medium systems, proposal blueprints are delivered within 5-7 business days of completing the physical site audit. Megawatt-level installations may take up to 14 days."
              },
              {
                q: "Do you provide after-sales support?",
                a: "Yes. Magi provides comprehensive O&M (Operation & Maintenance) Service Level Agreements (SLAs) including active SCADA telemetry monitoring, routine panel washing, filter replacement, and rapid dispatch."
              }
            ].map((faq, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)' }}>{faq.q}</span>
                  {activeFAQ === idx ? <ChevronUp size={20} style={{ color: 'var(--primary)' }} /> : <ChevronDown size={20} style={{ color: 'var(--text-muted)' }} />}
                </button>
                {activeFAQ === idx && (
                  <div style={{
                    padding: '0 24px 24px 24px',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                    borderTop: '1px solid #F0F2F5'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08 — FINAL CTA */}
      <section style={{
        padding: '160px 0',
        background: 'linear-gradient(rgba(15, 29, 20, 0.75), rgba(15, 29, 20, 0.85)), url("/solar_ground.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '24px', letterSpacing: '-1.5px', color: '#FFFFFF' }}>
            Ready to Start Your Renewable Infrastructure Project?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '40px',
            maxWidth: '600px',
            marginInline: 'auto',
            lineHeight: '1.7'
          }}>
            Connect with our engineering team today and discover sustainable infrastructure solutions tailored to your organization.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#form-section" className="btn btn-primary">
              Book Consultation
            </a>
            <a href="tel:+918778740104" className="btn btn-secondary" style={{
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backgroundColor: 'transparent',
              color: '#FFFFFF'
            }}>
              Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

// Styling Helper Variables
const cardStyle = {
  backgroundColor: '#FFFFFF',
  borderRadius: '24px',
  padding: '40px 32px',
  boxShadow: 'var(--shadow-soft)',
  border: '1px solid var(--border-color)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  transition: 'all 0.3s ease',
  cursor: 'pointer'
};

const iconContainerStyle = {
  fontSize: '32px',
  marginBottom: '24px',
  width: '64px',
  height: '64px',
  borderRadius: '16px',
  backgroundColor: '#F8FAF9',
  border: '1px solid var(--border-color)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const cardHeadingStyle = {
  fontSize: '20px',
  fontWeight: '700',
  color: 'var(--text-dark)',
  marginBottom: '16px',
  marginTop: 0
};

const cardBodyStyle = {
  fontSize: '14px',
  color: 'var(--text-muted)',
  lineHeight: '1.7',
  margin: 0
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: '600',
  color: 'var(--text-dark)',
  marginBottom: '4px'
};

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '10px',
  border: '1px solid var(--border-color)',
  fontSize: '14px',
  color: 'var(--text-dark)',
  backgroundColor: '#F8FAF9',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box'
};

const offices = [
  {
    id: 'chennai',
    name: 'Magi Chennai Hub',
    type: 'Registered Office',
    address: '4/608, G1, V.O.C Street, Perungudi, Palavakkam, Chennai, Tamil Nadu - 600041',
    phone: '+91 87787 40104',
    email: 'magirenewables@gmail.com',
    landmark: 'Near Palavakkam ECR Road, Perungudi Area.',
    parking: 'Free visitor parking available.',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.915758253164!2d80.2483861!3d12.9649556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d43a5796245%3A0x633515f4eb178b5e!2sV.O.C%20St%2C%20Palavakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600041!5e0!3m2!1sen!2sin!4v1719220000000!5m2!1sen!2sin',
    searchQuery: '4/608,+G1,+V.O.C+Street,+Perungudi,+Palavakkam,+Chennai,+Tamil+Nadu+600041'
  },
  {
    id: 'madurai',
    name: 'Magi Madurai Branch',
    type: 'Regional Office',
    address: 'P 316, Karpaga Nagar, 11th Street, K Pudur, Madurai, Tamil Nadu - 625007',
    phone: '+91 87787 40104',
    email: 'magirenewables@gmail.com',
    landmark: 'Pudur Bazaar Sub Post Office Lane.',
    parking: 'Dedicated campus and street parking available.',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.988118029598!2d78.1388836!3d9.934947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5df600b396b%3A0x334d70b6d2780e8e!2sKarpaga%20Nagar%2011th%20St%2C%20K.Pudur%2C%20Madurai%2C%20Tamil%20Nadu%20625007!5e0!3m2!1sen!2sin!4v1719220100000!5m2!1sen!2sin',
    searchQuery: 'Karpaga+Nagar+11th+St,+K.Pudur,+Madurai,+Tamil+Nadu+625007'
  }
];
