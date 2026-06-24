import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Search, 
  BookOpen, 
  Clock, 
  Download, 
  CheckCircle2, 
  ArrowUpRight, 
  Flame, 
  Sun, 
  Truck, 
  Droplet, 
  Leaf, 
  Settings,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function BlogPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'All', 
    'Solar Energy', 
    'Biogas', 
    'EV Mobility', 
    'Eco Sanitation', 
    'Sustainability', 
    'Engineering', 
    'Technology'
  ];

  const latestArticles = [
    {
      title: "The Future of Industrial Solar Energy and BESS Storage",
      category: "Solar Energy",
      date: "June 15, 2026",
      readTime: "6 min read",
      desc: "An in-depth review of how high-compliance battery energy storage systems shield factories from utility pricing surges.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Waste-to-Energy Digester Loops for Smart City Ecosystems",
      category: "Biogas",
      date: "June 10, 2026",
      readTime: "7 min read",
      desc: "Analyzing pre-cast anaerobic digester capacities configured to convert urban food pulp into clean thermal fuel.",
      image: "https://images.unsplash.com/photo-1532996127610-5e3181ec8211?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "EV Charging Infrastructure: Sizing Substation Transformers",
      category: "EV Mobility",
      date: "June 05, 2026",
      readTime: "5 min read",
      desc: "Technical guidance on scaling DC fast-charging grids for commercial passenger fleets without compromising main panels.",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Sustainable Water Management: Greywater and ZLD Loop Routing",
      category: "Eco Sanitation",
      date: "May 28, 2026",
      readTime: "6 min read",
      desc: "Environmental sanitation layouts ensuring Zero Liquid Discharge compliance across hospital and educational estates.",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Net Zero Infrastructure: Structuring Carbon Compliance Plans",
      category: "Sustainability",
      date: "May 22, 2026",
      readTime: "8 min read",
      desc: "Practical frameworks for sustainability directors to audit and report Scope 1 and Scope 2 environmental parameters.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Green Engineering Innovations: Composite Piping Alignments",
      category: "Engineering",
      date: "May 15, 2026",
      readTime: "6 min read",
      desc: "Analyzing pre-cast biological tank seal structural tolerances and flow pressures in high water table locations.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80"
    }
  ];

  const trendingArticles = [
    {
      title: "Decentralized Microgrid Architectures for Remote Areas",
      desc: "How modular grid sync software coordinates remote solar solar arrays, biogas generators, and backup battery blocks.",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Digestate resource recovery: Solid-Liquid Separator Loops",
      desc: "A chemical overview of transforming residue slurry digestate into dry nitrogen fertilizer compounds.",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  const filteredArticles = latestArticles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
      
      {/* SECTION 1 — HERO */}
      <section style={{
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        padding: '120px 0 60px'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80")',
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
          <div style={{ maxWidth: '800px' }}>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
              Home → Blog
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
              INSIGHTS & KNOWLEDGE
            </span>
            
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '24px',
              color: '#FFFFFF'
            }}>
              Engineering Ideas <br/>
              for a Sustainable Future
            </h1>
            
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '40px',
              lineHeight: '1.7'
            }}>
              Discover expert insights, industry trends, renewable energy innovations, engineering knowledge, and sustainable infrastructure updates.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#featured" className="btn btn-primary">
                Explore Articles
              </a>
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
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SEARCH & FILTER */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            
            {/* Search Bar */}
            <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
              <Search 
                size={20} 
                style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
              />
              <input 
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '18px 24px 18px 56px',
                  borderRadius: '30px',
                  border: '1px solid var(--border-color)',
                  fontSize: '16px',
                  boxShadow: 'var(--shadow-soft)',
                  outline: 'none'
                }}
              />
            </div>

            {/* Category Pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px'
            }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: '30px',
                    border: '1px solid',
                    borderColor: selectedCategory === cat ? 'var(--primary)' : 'var(--border-color)',
                    backgroundColor: selectedCategory === cat ? 'var(--primary)' : '#FFFFFF',
                    color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-muted)',
                    fontWeight: '600',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — LATEST ARTICLES */}
      <section id="featured" style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: '800' }}>
              Latest Insights
            </h2>
          </div>

          {filteredArticles.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '40px'
            }}>
              {filteredArticles.map((art, idx) => (
                <div 
                  key={idx}
                  className="why-choose-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-soft)',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ height: '220px', overflow: 'hidden' }}>
                    <img 
                      src={art.image} 
                      alt={art.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      className="service-card-image"
                    />
                  </div>
                  <div style={{ padding: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ color: 'var(--primary)', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>
                        {art.category}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} /> {art.readTime}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '14px', lineHeight: '1.4' }}>
                      {art.title}
                    </h3>
                    
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
                      {art.desc}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{art.date}</span>
                      <button 
                        onClick={() => onNavigate('home', 'blog')}
                        style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: '700', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                      >
                        Read More <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <BookOpen size={48} style={{ color: 'var(--text-muted)', marginBottom: '16px' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>No articles match your search parameters.</p>
            </div>
          )}

        </div>
      </section>





      {/* SECTION 10 — FINAL CTA */}
      <section style={{
        position: 'relative',
        padding: '120px 0',
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
            Need Expert Guidance?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '650px',
            margin: '0 auto 40px',
            lineHeight: '1.7'
          }}>
            Talk with our engineering experts to discover the right renewable infrastructure solution for your organization.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onNavigate('home', 'contact')} 
              className="btn btn-primary"
            >
              Get Consultation
            </button>
            <button 
              onClick={() => onNavigate('home', 'contact')} 
              className="btn btn-secondary"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: 'transparent',
                color: '#FFFFFF'
              }}
            >
              Contact Experts
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
