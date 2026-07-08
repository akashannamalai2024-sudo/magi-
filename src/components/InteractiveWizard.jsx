import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function InteractiveWizard() {
  const [formData, setFormData] = useState({
    industryType: '',
    requirement: '',
    projectSize: '',
    city: '',
    state: '',
    name: '',
    organization: '',
    email: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    if (!formData.industryType) {
      setError('Please select your Industry Type.');
      return;
    }
    if (!formData.requirement) {
      setError('Please select a Project Requirement.');
      return;
    }
    if (!formData.projectSize) {
      setError('Please select an estimated Project Scale.');
      return;
    }
    if (!formData.city.trim() || !formData.state.trim()) {
      setError('Please enter both City and State.');
      return;
    }
    if (!formData.name.trim() || !formData.organization.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('All contact details are required.');
      return;
    }

    setError('');
    setSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '1fd50703-d737-4a10-b8b1-5430fdb6ecf9',
          subject: 'New Consultation Request — Magi Home Page',
          from_name: 'Magi Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          industry_sector: formData.industryType,
          core_requirement: formData.requirement,
          estimated_scale: formData.projectSize,
          location: `${formData.city}, ${formData.state}`
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const updateField = (field, value) => {
    setError('');
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="form-card" style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(16px)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-card)',
        padding: '56px',
        boxShadow: 'var(--shadow-medium)',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <div style={{ display: 'inline-flex', color: 'var(--success)', marginBottom: '24px' }}>
          <CheckCircle2 size={64} />
        </div>
        <h3 style={{ fontSize: '32px', marginBottom: '16px', color: 'var(--text-dark)' }}>Request Received</h3>
        <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '520px', marginInline: 'auto' }}>
          Thank you. Our renewable infrastructure engineers will review your parameters and contact you shortly with a customized recommendation.
        </p>
        <div style={{
          background: 'var(--bg-secondary)',
          borderRadius: '16px',
          padding: '32px',
          textAlign: 'left',
          maxWidth: '560px',
          margin: '0 auto 40px',
          border: '1px solid var(--border-color)'
        }}>
          <h4 style={{ fontSize: '15px', color: 'var(--primary)', marginBottom: '16px', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.5px' }}>
            Submitted Parameters
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '12px 16px', fontSize: '15px' }}>
            <strong style={{ color: 'var(--text-dark)' }}>Sector Type:</strong> <span>{formData.industryType}</span>
            <strong style={{ color: 'var(--text-dark)' }}>Infrastructure Goal:</strong> <span>{formData.requirement}</span>
            <strong style={{ color: 'var(--text-dark)' }}>Estimated Scale:</strong> <span>{formData.projectSize}</span>
            <strong style={{ color: 'var(--text-dark)' }}>Location:</strong> <span>{formData.city}, {formData.state}</span>
            <strong style={{ color: 'var(--text-dark)' }}>Client Representative:</strong> <span>{formData.name} ({formData.organization})</span>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              industryType: '',
              requirement: '',
              projectSize: '',
              city: '',
              state: '',
              name: '',
              organization: '',
              email: '',
              phone: ''
            });
          }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="form-card" style={{
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      border: '1px solid var(--border-color)',
      borderRadius: 'var(--radius-card)',
      padding: '48px',
      boxShadow: 'var(--shadow-medium)',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <form onSubmit={handleSubmit}>
        {error && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 20px',
            backgroundColor: '#FEE4E2',
            color: '#B42318',
            borderRadius: '10px',
            marginBottom: '32px',
            fontSize: '15px',
            fontWeight: '500'
          }}>
            <ShieldAlert size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* 2-Column Responsive Form Layout */}
        <div className="wizard-grid-layout" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Project Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', borderBottom: '2px solid var(--primary)', paddingBottom: '8px', marginBottom: '4px' }}>
              1. Project Scope
            </h3>

            {/* Industry Type Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-dark)' }}>Industry Sector</label>
              <select 
                value={formData.industryType} 
                onChange={(e) => updateField('industryType', e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: '#FFFFFF',
                  fontSize: '15px',
                  color: 'var(--text-dark)',
                  outline: 'none'
                }}
              >
                <option value="">-- Select Sector --</option>
                <option value="Industrial">Industrial & Manufacturing</option>
                <option value="Institution">Academic Institution</option>
                <option value="Commercial">Commercial Real Estate</option>
                <option value="Hospital">Healthcare & Medical</option>
                <option value="Government">Municipal / Government</option>
                <option value="Residential">Residential Community</option>
              </select>
            </div>

            {/* Requirement Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-dark)' }}>Core Requirement</label>
              <select 
                value={formData.requirement} 
                onChange={(e) => updateField('requirement', e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: '#FFFFFF',
                  fontSize: '15px',
                  color: 'var(--text-dark)',
                  outline: 'none'
                }}
              >
                <option value="">-- Select Goal --</option>
                <option value="Solar">Solar Microgrid Installation</option>
                <option value="Biogas">Biogas & Waste-to-Energy Digester</option>
                <option value="EV Mobility">Commercial EV fleet charging infrastructure</option>
                <option value="Sanitation">Bio Septic Tanks and Mobile Toilets</option>
                <option value="Hybrid">Hybrid integrated utility system</option>
              </select>
            </div>

            {/* Project scale */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-dark)' }}>Estimated Scale</label>
              <select 
                value={formData.projectSize} 
                onChange={(e) => updateField('projectSize', e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: '#FFFFFF',
                  fontSize: '15px',
                  color: 'var(--text-dark)',
                  outline: 'none'
                }}
              >
                <option value="">-- Select Scale --</option>
                <option value="Small">Small scale (Local single facility)</option>
                <option value="Medium">Medium scale (Regional site complex)</option>
                <option value="Large">Large scale (Multi-site operations)</option>
                <option value="Enterprise">Enterprise scale (National infrastructure)</option>
              </select>
            </div>

            {/* Location (City & State) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-dark)' }}>City</label>
                <input 
                  type="text" 
                  placeholder="e.g. Dallas"
                  value={formData.city}
                  onChange={(e) => updateField('city', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    fontSize: '15px',
                    color: 'var(--text-dark)',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-dark)' }}>State</label>
                <input 
                  type="text" 
                  placeholder="e.g. Texas"
                  value={formData.state}
                  onChange={(e) => updateField('state', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    fontSize: '15px',
                    color: 'var(--text-dark)',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

          </div>

          {/* Right Column: Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', borderBottom: '2px solid var(--primary)', paddingBottom: '8px', marginBottom: '4px' }}>
              2. Contact Information
            </h3>

            {/* Full Name */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-dark)' }}>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter client representative name"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  fontSize: '15px',
                  color: 'var(--text-dark)',
                  outline: 'none'
                }}
              />
            </div>

            {/* Organization */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-dark)' }}>Organization / Corporation</label>
              <input 
                type="text" 
                placeholder="Enter company name"
                value={formData.organization}
                onChange={(e) => updateField('organization', e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  fontSize: '15px',
                  color: 'var(--text-dark)',
                  outline: 'none'
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-dark)' }}>Email Address</label>
              <input 
                type="email" 
                placeholder="representative@organization.com"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  fontSize: '15px',
                  color: 'var(--text-dark)',
                  outline: 'none'
                }}
              />
            </div>

            {/* Phone */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-dark)' }}>Phone Number</label>
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  fontSize: '15px',
                  color: 'var(--text-dark)',
                  outline: 'none'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn btn-accent"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '14px',
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontWeight: '700',
                opacity: submitting ? 0.7 : 1,
                cursor: submitting ? 'not-allowed' : 'pointer'
              }}
            >
              {submitting ? 'Submitting…' : (<>Submit Consultation Request <ArrowRight size={18} /></>)}
            </button>

          </div>

        </div>
      </form>
    </div>
  );
}
