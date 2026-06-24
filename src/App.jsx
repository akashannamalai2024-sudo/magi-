import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X, 
  Star, 
  Calendar, 
  ArrowUpRight, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Compass, 
  HeartHandshake, 
  Users, 
  ArrowUp,
  MessageSquare,
  Sparkles,
  Award,
  Globe,
  Sliders,
  Settings,
  HardHat,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Building2,
  Trees,
  Home
} from 'lucide-react';
import InteractiveWizard from './components/InteractiveWizard';
import AboutPage from './components/AboutPage';
import SolarPage from './components/SolarPage';
import BiogasPage from './components/BiogasPage';
import EVPage from './components/EVPage';
import SanitationPage from './components/SanitationPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';

export default function App() {
  // Navigation & UI States
  const [currentView, setCurrentView] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: "Hello! I am Magi's AI Infrastructure Specialist. How can I assist you with our Solar, Biogas, EV mobility, or Eco-Sanitation services today?" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [aiTyping, setAiTyping] = useState(false);
  const statsSectionRef = useRef(null);
  const chatEndRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, aiTyping, chatbotOpen]);
  
  // Counters Animation State (starts at 0)
  const [stats, setStats] = useState({ projects: 0, capacity: 0, partners: 0, satisfaction: 0 });

  // Testimonials Slider State
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Search overlay state
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header opacity
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Back to top button visibility
      if (window.scrollY > 600) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for stats scroll-into-view counting
    let observer;
    let interval;
    if (statsSectionRef.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // Reset count numbers to 0
          setStats({ projects: 0, capacity: 0, partners: 0, satisfaction: 0 });
          
          // Start interval
          interval = setInterval(() => {
            setStats(prev => {
              const next = { ...prev };
              let updated = false;
              if (next.projects < 500) { next.projects += 25; updated = true; }
              if (next.capacity < 50) { next.capacity += 2.5; updated = true; }
              if (next.partners < 20) { next.partners += 1; updated = true; }
              if (next.satisfaction < 100) { next.satisfaction += 5; updated = true; }
              
              if (!updated) {
                clearInterval(interval);
              }
              return next;
            });
          }, 50);
          
          // Once animated, disconnect observer
          observer.disconnect();
        }
      }, { threshold: 0.15 });
      
      observer.observe(statsSectionRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  const handleNavigate = (view, targetId) => {
    if ((view === 'home' && targetId === 'contact') || view === 'contact') {
      setCurrentView('contact');
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setCurrentView(view);
    setMobileMenuOpen(false);
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSendChatMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setChatInput('');
    setAiTyping(true);

    setTimeout(() => {
      let aiResponse = "I can assist you with Magi's integrated renewable grids. Feel free to ask about Solar, Biogas, EV Mobility, Water treatment, or submit a request in the Consultation form!";
      const lower = userText.toLowerCase();

      if (lower.includes('solar') || lower.includes('panel') || lower.includes('bess') || lower.includes('storage')) {
        aiResponse = "Our customized commercial solar microgrids and battery storage systems (BESS) are engineered for 24/7 business continuity. We handle design, utility coordination, and SCADA monitoring.";
      } else if (lower.includes('biogas') || lower.includes('waste') || lower.includes('biodigester') || lower.includes('thermal')) {
        aiResponse = "Magi engineers anaerobic bio-digester loops that convert organic and municipal solid waste into electrical power, heat, or clean bio-methane for industrial use.";
      } else if (lower.includes('ev') || lower.includes('charge') || lower.includes('mobility') || lower.includes('fleet')) {
        aiResponse = "We scale high-power commercial EV charging depots, integrating dynamic load management and solar-powered carports to reduce peak demand charges.";
      } else if (lower.includes('septic') || lower.includes('water') || lower.includes('sanitation') || lower.includes('greywater')) {
        aiResponse = "Our eco-sanitation systems treat biological waste, greywater, and zero liquid discharge (ZLD) streams to help organizations recycle water safely.";
      } else if (lower.includes('cost') || lower.includes('pricing') || lower.includes('quote') || lower.includes('consult')) {
        aiResponse = "We deliver customized engineering quotes. You can submit your requirements in the 'Find the Right Renewable Solution' form just above the footer!";
      }

      setChatMessages(prev => [...prev, { sender: 'ai', text: aiResponse }]);
      setAiTyping(false);
    }, 1000);
  };

  const testimonials = [
    {
      name: "Marcus Vance",
      role: "VP of Operations",
      company: "Apex Industrial Corp",
      rating: 5,
      review: "Magi transitioned our entire automotive assembly plant to a hybrid solar-biogas grid. Their engineering precision and end-to-end execution exceeded our expectations, delivering 30% operational cost savings within year one."
    },
    {
      name: "Dr. Eleanor Vance",
      role: "Director of Infrastructure",
      company: "St. Jude Regional Hospital",
      rating: 5,
      review: "Clean sanitation and continuous power are critical. Magi designed an eco-septic wastewater recycling system paired with solar back-ups. Their team remains our trusted maintenance partner."
    },
    {
      name: "Hassan Al-Jamil",
      role: "Infrastructure Lead",
      company: "Metropolitan District Authority",
      rating: 5,
      review: "Magi's engineering approach sets them apart. They didn't just sell us solar panels; they delivered a customized municipal waste-to-energy blueprint that scales beautifully."
    }
  ];

  const services = [
    {
      title: "Solar Energy Solutions",
      desc: "High-capacity commercial and industrial rooftop solar arrays, customized solar microgrids, and energy storage systems engineered for uninterrupted business continuity.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
      capabilities: ["Industrial Rooftop Systems", "Solar Microgrids", "Battery Energy Storage (BESS)"]
    },
    {
      title: "Biogas & Waste-to-Energy",
      desc: "Turn organic waste and municipal refuse into reliable electricity, thermal heat, or bio-methane with state-of-the-art bio-digesters and heat reclamation equipment.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80",
      capabilities: ["Organic Bio-digesters", "Heat Recovery Systems", "Cogeneration (CHP) Engineering"]
    },
    {
      title: "EV & Battery Mobility",
      desc: "Scalable commercial EV charging hubs and fleet electrification systems integrated directly with localized renewable resources to minimize peak demand charges.",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
      capabilities: ["Fleet Charging Hubs", "Dynamic Load Management", "Solar-Powered Carports"]
    },
    {
      title: "Bio Septic & Eco Sanitation",
      desc: "Advanced biological treatment and wastewater recycling plants engineered to help heavy industries, commercial spaces, and municipalities reclaim water safely.",
      image: "https://images.unsplash.com/photo-1615100139684-2450b3f27edb?auto=format&fit=crop&w=600&q=80",
      capabilities: ["Greywater Recycling", "Zero Liquid Discharge (ZLD)", "Biological Sewage Systems"]
    }
  ];

  const industries = [
    {
      title: "Manufacturing & Heavy Industry",
      desc: "Ensuring energy security and cost stability for energy-intensive manufacturing lines.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Educational Institutions",
      desc: "Transforming schools and universities into green, self-sustaining campuses.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Healthcare Facilities",
      desc: "Guaranteeing zero-downtime microgrid power coupled with advanced eco-sanitation.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Hospitality & Tourism",
      desc: "Delivering carbon-neutral infrastructure that elevates premium guest experiences.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Commercial Real Estate",
      desc: "Increasing asset valuation through ESG compliance and smart rooftop installations.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Government & Infrastructure",
      desc: "Partnering on large-scale municipal waste-to-energy and regional utilities.",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Agriculture & Farms",
      desc: "Reclaiming crop and animal waste for cogeneration power and local water recycling.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Residential Communities",
      desc: "Designing eco-conscious micro-utilities for modern co-living communities.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const faqs = [
    {
      q: "Does Magi sell standalone solar panels?",
      a: "No. Magi is an integrated engineering procurement and construction (EPC) company. We specialize in planning, engineering, executing, and maintaining complete, hybrid renewable energy systems and environmental infrastructure for enterprise organizations."
    },
    {
      q: "How does the biogas process integrate into commercial spaces?",
      a: "Our team designs custom closed-loop biodigestion plants that consume organic facility waste, convert it to gas, clean the bio-methane, and route it to high-efficiency boilers or micro-turbines, reducing municipal waste costs and gas utility charges simultaneously."
    },
    {
      q: "What does the 24/7 engineering SLA support cover?",
      a: "Magi's Operational Support Agreement ensures real-time remote telemetry tracking of your grids, predictive maintenance scheduling, and dedicated field engineers dispatched immediately if utility disruptions or mechanical alerts occur."
    },
    {
      q: "Are your water treatment solutions compliant with government standards?",
      a: "Absolutely. All bio-septic and eco-sanitation systems engineered by Magi meet or exceed local, national, and international standards, delivering certified non-potable water for manufacturing reuse, cooling towers, and irrigation."
    }
  ];

  const blogs = [
    {
      title: "Decarbonizing Industrial Operations: A 2026 Engineering Guide",
      cat: "Industrial Grid",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80",
      date: "June 10, 2026"
    },
    {
      title: "Why Hybrid Solar-Biogas Infrastructure Outperforms Standalone Systems",
      cat: "Tech & Science",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80",
      date: "May 28, 2026"
    },
    {
      title: "Reclaiming Greywater: Circular Economy in Modern Healthcare Facilities",
      cat: "Eco Sanitation",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      date: "April 15, 2026"
    },
    {
      title: "Microgrids for Remote Communities: Key Technical Challenges",
      cat: "Solar & Storage",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
      date: "March 22, 2026"
    },
    {
      title: "Role of Clean Hydrogen in Future High-Power EV Charging Stations",
      cat: "EV Mobility",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
      date: "February 10, 2026"
    },
    {
      title: "Optimizing Anaerobic Digestion: Variables in Biomethane Yields",
      cat: "Biogas Science",
      image: "https://images.unsplash.com/photo-1532187640685-46c8f3994c16?auto=format&fit=crop&w=600&q=80",
      date: "January 18, 2026"
    }
  ];

  const logoPartners = [
    { name: "Justice Basheer Ahmed Sayed College for Women", img: "/images/logos/jbas_logo.png" },
    { name: "GRT Institute of Engineering & Technology", img: "/images/logos/grt_logo.png" },
    { name: "Rajalakshmi Engineering College", img: "/images/logos/rec_logo.png" },
    { name: "Ethiraj College for Women", img: "/images/logos/ethiraj_logo.png" },
    { name: "Subbulakshmi Lakshmipathy College of Science", img: "/images/logos/slcs_logo.png" },
    { name: "Sri S. Ramaswamy Naidu Memorial College", img: "/images/logos/srnmc_logo.png" },
    { name: "Lord Jeganath College of Engineering & Technology", img: "/images/logos/ljcet_logo.png" },
    { name: "PSN College of Engineering & Technology", img: "/images/logos/psncet_logo.png" },
    { name: "Idhaya College For Women", img: "/images/logos/idhaya_logo.png" },
    { name: "Ultra College of Engineering & Technology", img: "/images/logos/ultra_logo.png" }
  ];

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Sticky Navigation */}
      <nav className={`sticky ${scrolled ? 'scrolled' : 'transparent'}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }} style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/logo.jpeg" 
              alt="Magi Logo" 
              style={{
                height: scrolled ? '62px' : '76px',
                width: 'auto',
                borderRadius: '6px',
                objectFit: 'contain',
                transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </a>

          {/* Central links */}
          <div className="nav-links" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}
              className="nav-item-link" 
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.85)',
                transition: 'var(--transition-fast)'
              }}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); handleNavigate('about'); }}
              className="nav-item-link" 
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.85)',
                transition: 'var(--transition-fast)'
              }}
            >
              About Us
            </a>

            {/* Services Dropdown */}
            <div 
              className="services-dropdown-container"
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); handleNavigate('home', 'services'); }}
                className="nav-item-link" 
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.85)',
                  transition: 'var(--transition-fast)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  paddingBottom: '20px', // Bridges the gap
                  marginBottom: '-20px'  // Resets layout position
                }}
              >
                Services <ChevronDown size={14} />
              </a>

              <div 
                className="services-dropdown-menu"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%) translateY(8px)',
                  width: '320px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow-medium)',
                  border: '1px solid var(--border-color)',
                  padding: '12px 0',
                  zIndex: 2000,
                  display: 'flex',
                  flexDirection: 'column',
                  opacity: 0,
                  visibility: 'hidden',
                  transition: 'opacity 0.15s ease-out, transform 0.15s ease-out, visibility 0.15s',
                  pointerEvents: 'auto'
                }}
              >
                {[
                  { label: 'Solar Energy Solutions', target: 'solar' },
                  { label: 'Biogas & Waste-to-Energy Solutions', target: 'biogas' },
                  { label: 'EV & Battery Mobility Solutions', target: 'ev' },
                  { label: 'Bio Septic Tanks & Eco Sanitation', target: 'sanitation' }
                ].map((subItem, sIdx) => (
                  <a
                    key={sIdx}
                    href={subItem.target === 'solar' ? '#solar' : subItem.target === 'biogas' ? '#biogas' : subItem.target === 'ev' ? '#ev' : subItem.target === 'sanitation' ? '#sanitation' : '#services'}
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (subItem.target === 'solar') {
                        handleNavigate('solar');
                      } else if (subItem.target === 'biogas') {
                        handleNavigate('biogas');
                      } else if (subItem.target === 'ev') {
                        handleNavigate('ev');
                      } else if (subItem.target === 'sanitation') {
                        handleNavigate('sanitation');
                      } else {
                        handleNavigate('home', 'services'); 
                      }
                    }}
                    style={{
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--text-dark)',
                      transition: 'var(--transition-fast)',
                      display: 'block'
                    }}
                    className="dropdown-link-hover"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            </div>

            <a 
              href="#clients" 
              onClick={(e) => { e.preventDefault(); handleNavigate('home', 'clients'); }}
              className="nav-item-link" 
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.85)',
                transition: 'var(--transition-fast)'
              }}
            >
              Our Clients
            </a>
            <a 
              href="#blog" 
              onClick={(e) => { e.preventDefault(); handleNavigate('blog'); }}
              className="nav-item-link" 
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.85)',
                transition: 'var(--transition-fast)'
              }}
            >
              Blog
            </a>
            <a 
              href="#faq" 
              onClick={(e) => { e.preventDefault(); handleNavigate('faq'); }}
              className="nav-item-link" 
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.85)',
                transition: 'var(--transition-fast)'
              }}
            >
              FAQs
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavigate('home', 'contact'); }}
              className="nav-item-link" 
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.85)',
                transition: 'var(--transition-fast)'
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Right Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Mobile menu trigger */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-menu-btn"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: scrolled ? 'var(--text-dark)' : '#FFFFFF',
                padding: '8px'
              }}
            >
              <Menu size={24} />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#FFFFFF',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 24px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <span style={{ fontWeight: '800', fontSize: '24px', color: 'var(--primary)' }}>MAGI</span>
            <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={28} />
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '18px', fontWeight: '600', overflowY: 'auto' }}>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }} style={{ color: 'var(--text-dark)' }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }} style={{ color: 'var(--text-dark)' }}>About Us</a>
            
            {/* Services with sub-items listed for mobile */}
            <div>
              <div style={{ color: 'var(--text-dark)', marginBottom: '8px' }}>Services</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '16px', fontSize: '15px' }}>
                <a href="#solar" onClick={(e) => { e.preventDefault(); handleNavigate('solar'); }} style={{ color: 'var(--text-muted)' }}>Solar Energy Solutions</a>
                <a href="#biogas" onClick={(e) => { e.preventDefault(); handleNavigate('biogas'); }} style={{ color: 'var(--text-muted)' }}>Biogas & Waste-to-Energy Solutions</a>
                <a href="#ev" onClick={(e) => { e.preventDefault(); handleNavigate('ev'); }} style={{ color: 'var(--text-muted)' }}>EV & Battery Mobility Solutions</a>
                <a href="#sanitation" onClick={(e) => { e.preventDefault(); handleNavigate('sanitation'); }} style={{ color: 'var(--text-muted)' }}>Bio Septic Tanks & Eco Sanitation</a>
              </div>
            </div>

            <a href="#clients" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'clients'); }} style={{ color: 'var(--text-dark)' }}>Our Clients</a>
            <a href="#blog" onClick={(e) => { e.preventDefault(); handleNavigate('blog'); }} style={{ color: 'var(--text-dark)' }}>Blog</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); handleNavigate('faq'); }} style={{ color: 'var(--text-dark)' }}>FAQs</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'contact'); }} style={{ color: 'var(--text-dark)' }}>Contact Us</a>
            
          </div>
        </div>
      )}

      {currentView === 'home' ? (
        <>
          {/* HERO SECTION */}
          <header id="home" style={{
        position: 'relative',
        height: '100vh',
        minHeight: '800px',
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}>
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src="/Solar_farms_and_wind_turbines_202606181316.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for text contrast */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(15, 29, 20, 0.4), rgba(15, 29, 20, 0.75))',
          zIndex: 1
        }} />

        {/* Dynamic slow background glow element */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '30%',
          width: '400px',
          height: '400px',
          background: 'rgba(139, 170, 91, 0.15)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          animation: 'glow 12s infinite ease-in-out',
          zIndex: 2
        }} />

        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center', zIndex: 10 }}>
          
          {/* Left Content */}
          <div>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '1px',
              color: 'var(--secondary)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              marginBottom: '28px'
            }}>
              <Sparkles size={12} /> ENGINEERING SUSTAINABLE FUTURES
            </span>
            <h1 style={{
              fontSize: '72px',
              color: '#FFFFFF',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '24px',
              letterSpacing: '-2px'
            }}>
              Integrated Renewable <br /> Infrastructure
            </h1>
            <p style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '40px',
              lineHeight: '1.6',
              maxWidth: '620px'
            }}>
              Delivering customized, high-precision engineering solutions across Solar, Biogas, EV Mobility, and Eco Sanitation for industries, governments, and forward-thinking organizations.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#consultation" className="btn btn-accent" style={{ padding: '16px 36px' }}>
                Contact Us <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Content - Floating Glass Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', position: 'relative' }}>
            <div className="glass-card animate-float-1" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px' }}>500+</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)' }}>Renewable Projects</div>
            </div>
            <div className="glass-card animate-float-2" style={{ padding: '32px', textAlign: 'center', marginTop: '24px' }}>
              <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--accent)', marginBottom: '8px' }}>20+</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)' }}>Industry Partners</div>
            </div>
            <div className="glass-card animate-float-3" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px' }}>100%</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)' }}>Engineering Driven</div>
            </div>
            <div className="glass-card animate-float-4" style={{ padding: '32px', textAlign: 'center', marginTop: '24px' }}>
              <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--secondary)', marginBottom: '8px' }}>24/7</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)' }}>Telemetry SLA</div>
            </div>
          </div>

        </div>
      </header>

      {/* TRUST BAR */}
      <section id="clients" style={{
        backgroundColor: '#FFFFFF',
        padding: '40px 0',
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden'
      }}>
        <div className="container">
          <p style={{
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            color: 'var(--text-muted)',
            marginBottom: '28px'
          }}>
            Trusted by Leading Institutions & Organizations
          </p>
          
          {/* Logo ticker slider */}
          <div style={{ display: 'flex', width: '100%', overflow: 'hidden' }}>
            <div style={{
              display: 'flex',
              gap: '80px',
              animation: 'scroll 20s linear infinite',
              whiteSpace: 'nowrap'
            }}>
              {[...logoPartners, ...logoPartners].map((logo, idx) => (
                <div 
                  key={idx} 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '120px',
                    cursor: 'pointer'
                  }}
                  className="logo-ticker-item"
                >
                  <img 
                    src={logo.img} 
                    alt={logo.name} 
                    style={{ 
                      maxHeight: '100%', 
                      maxWidth: '280px', 
                      objectFit: 'contain'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <div className="container grid-2">
          
          {/* Left Column Image */}
          <div style={{ position: 'relative' }}>
            <img 
              src="/about_engineering_infrastructure.png" 
              alt="Magi Renewable Energy Infrastructure Inspection"
              style={{
                width: '100%',
                borderRadius: 'var(--radius-image)',
                boxShadow: 'var(--shadow-medium)',
                display: 'block'
              }}
            />
            {/* Embedded Mini Badges */}
            <div className="glass-card" style={{
              position: 'absolute',
              bottom: '24px',
              right: '24px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{ color: 'var(--primary)' }}>
                <ShieldCheck size={28} />
              </div>
              <div>
                <div style={{ fontWeight: '700', color: 'var(--text-dark)', fontSize: '15px' }}>ISO 9001:2015</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Certified Precision</div>
              </div>
            </div>
          </div>

          {/* Right Column Text */}
          <div>
            <h2 style={{ fontSize: '48px', color: 'var(--text-dark)', marginBottom: '24px', letterSpacing: '-1px' }}>
              Engineering Smarter Renewable Infrastructure
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.7' }}>
              Magi Renewable Energy Solutions is an engineering corporation focused on bringing systemic sustainability and security to modern organizations. We do not simply sell products. We design, manufacture, and integrate complex energy microgrids, localized biogas ecosystems, and custom eco-sanitation systems built to last.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 32px', marginBottom: '40px' }}>
              {[
                { title: 'Renewable Energy', desc: 'Solar microgrids & smart battery grids.' },
                { title: 'Waste-to-Energy', desc: 'Smarter anaerobic digestion plants.' },
                { title: 'Environmental Engineering', desc: 'Zero Liquid Discharge waste treatment.' },
                { title: 'Green Operational Systems', desc: 'Integrated SCADA smart monitoring.' }
              ].map((feature, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ color: 'var(--primary)', marginTop: '4px' }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>{feature.title}</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section section-secondary">
        <div className="container">
          
          <div className="section-header">
            <h2>Integrated Engineering Solutions</h2>
            <p>Providing end-to-end sustainable infrastructure across renewable energy, circular waste management, and eco-sanitation.</p>
          </div>

          <div className="grid-4" style={{ gap: '24px' }}>
            {services.map((svc, index) => {
              const bgUrl = ['/solar_energy_bg.png', '/biogas_waste_bg.png', '/ev_mobility_bg.png', '/bio_septic_bg.png'][index];
              return (
                <div 
                  key={index}
                  className="card-hover wave-card"
                  style={{
                    backgroundImage: `url(${bgUrl})`,
                    padding: '32px',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative'
                  }}
                >
                  <div className="wave-card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', flexGrow: 1 }}>
                    {/* Number Badge */}
                    <div style={{
                      fontSize: '32px',
                      fontWeight: '800',
                      color: 'rgba(255, 255, 255, 0.25)',
                      fontFamily: 'var(--font-heading)',
                      position: 'absolute',
                      top: '24px',
                      right: '24px'
                    }}>
                      0{index + 1}
                    </div>

                    <div style={{ color: 'var(--secondary)', marginBottom: '20px', display: 'flex' }}>
                      {index === 0 && <Zap size={32} />}
                      {index === 1 && <Sparkles size={32} />}
                      {index === 2 && <Activity size={32} />}
                      {index === 3 && <Compass size={32} />}
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>
                      {svc.title}
                    </h3>
                    
                    <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
                      {svc.desc}
                    </p>

                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '16px', marginBottom: '32px' }}>
                      <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--secondary)', marginBottom: '10px', letterSpacing: '0.5px' }}>
                        Core solutions
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
                        {svc.capabilities.map((cap, cIdx) => (
                          <li key={cIdx} style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.95)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--secondary)' }} />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a 
                      href="#consultation" 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: '#FFFFFF',
                        fontWeight: '700',
                        fontSize: '14px',
                        textDecoration: 'none',
                        transition: 'var(--transition-fast)'
                      }}
                      className="explore-wave-link"
                    >
                      Explore Solutions <ArrowRight size={14} style={{ transition: 'transform 0.2s ease' }} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE MAGI */}
      <section className="section section-dark">
        <div className="container">
          
          <div className="grid-2" style={{ marginBottom: '64px' }}>
            <div>
              <span style={{ color: 'var(--secondary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                OUR EDGE
              </span>
              <h2 style={{ fontSize: '48px', color: '#FFFFFF', marginTop: '12px' }}>
                Why Leading Organizations Partner with Magi
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.7' }}>
                Our corporate partners choose Magi because we combine rigorous civil, electrical, and chemical engineering standards with real-time operational guarantees. We manage the complexity so your facilities run clean, reliable energy effortlessly.
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '24px'
          }}>
            {[
              { icon: HardHat, title: 'Engineering Excellence', desc: 'Rigorous pre-feasibility, structural analysis, and bespoke mechanical design.' },
              { icon: Sliders, title: 'Customized Solutions', desc: 'Zero off-the-shelf templates; every grid or digestor fits your plant specifications.' },
              { icon: Zap, title: 'End-to-End Execution', desc: 'Full EPC services: site licensing, utility coordination, grid sync, and testing.' },
              { icon: Settings, title: 'SLA Maintenance Agreements', desc: 'Continuous performance optimization, field visits, and proactive telemetry.' },
              { icon: Globe, title: 'ESG Compliance Target', desc: 'Documented offsets for scope-1, scope-2, and scope-3 corporate sustainability reporting.' },
              { icon: Users, title: 'Experienced Engineering Team', desc: 'A multidisciplinary roster of energy, waste management, and hydraulic specialists.' }
            ].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-card)',
                  padding: '32px',
                  transition: 'var(--transition-smooth)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="why-choose-card"
              >
                {/* Accent Gold Line on Hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  backgroundColor: 'var(--accent)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'var(--transition-fast)'
                }} className="gold-accent-hover-line" />

                <div style={{ color: 'var(--secondary)', marginBottom: '20px' }}>
                  <item.icon size={36} />
                </div>
                <h3 style={{ fontSize: '20px', color: '#FFFFFF', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECT CONSULTANT SECTION (WIZARD) */}
      <section id="consultation" className="section" style={{
        background: 'linear-gradient(rgba(248, 250, 249, 0.9), rgba(248, 250, 249, 0.9)), url("https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          
          <div className="section-header" style={{ marginBottom: '48px' }}>
            <h2>Find the Right Renewable Solution</h2>
            <p>Tell us about your organization's energy goals and environmental constraints to receive a custom system design recommendation.</p>
          </div>

          <InteractiveWizard />

        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section id="industries" className="section">
        <div className="container">
          
          <div className="section-header">
            <h2>Solutions Across Every Industry</h2>
            <p>Custom-engineered renewable energy and environmental utility grids operating reliably in high-compliance sectors.</p>
          </div>

          <div className="grid-4" style={{ gap: '24px' }}>
            {industries.map((ind, idx) => {
              const Icon = [
                Factory,
                GraduationCap,
                HeartPulse,
                Hotel,
                Building2,
                Globe,
                Trees,
                Home
              ][idx];
              
              return (
                <div 
                  key={idx}
                  className="card-hover"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '28px',
                    boxShadow: 'var(--shadow-soft)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <div style={{ color: 'var(--primary)', marginBottom: '16px' }}>
                    {Icon && <Icon size={28} />}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '10px' }}>
                    {ind.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5', flexGrow: 1 }}>
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ENGINEERING IMPACT (COUNTERS) */}
      <section ref={statsSectionRef} style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px' }}>
                {Math.round(stats.projects)}+
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-dark)' }}>Completed Engineering Designs</div>
            </div>
            <div>
              <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px' }}>
                {stats.capacity.toFixed(0)} MW+
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-dark)' }}>Installed Renewable Power</div>
            </div>
            <div>
              <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px' }}>
                {Math.round(stats.partners)}+
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-dark)' }}>Corporate & Municipal Partners</div>
            </div>
            <div>
              <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px' }}>
                {Math.round(stats.satisfaction)}%
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-dark)' }}>Client Retainer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}
      <section id="process" className="section">
        <div className="container">
          
          <div className="section-header">
            <h2>Our Project Execution Workflow</h2>
            <p>A rigorous, multi-stage engineering timeline ensuring seamless handoff from design phase to full commissioning.</p>
          </div>

          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px'
          }}>
            {/* Horizontal Timeline Connector */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              height: '4px',
              backgroundColor: 'var(--border-color)',
              zIndex: 1,
              display: 'block'
            }} className="timeline-connector-bar">
              <div style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'var(--primary)',
                transition: 'width 2s ease-in-out'
              }} />
            </div>

            {[
              { num: '01', title: 'Consultation', desc: 'Understanding thermal, electricity, and waste baseline metrics.' },
              { num: '02', title: 'Site Assessment', desc: 'Rigorous geological, solar radiance, and hydrological surveys.' },
              { num: '03', title: 'Engineering Design', desc: 'Full custom blueprints, simulation outputs, and regulatory approvals.' },
              { num: '04', title: 'Project Execution', desc: 'Procurement of premium grade steel, PV arrays, and digesters.' },
              { num: '05', title: 'Commissioning', desc: 'System synchronization tests, safety compliance, and power-up.' },
              { num: '06', title: 'SLA Maintenance', desc: 'Real-time SCADA tracking, scheduled servicing, 24/7 SLA dispatch.' }
            ].map((step, idx) => (
              <div 
                key={idx} 
                style={{
                  flex: '1 1 150px',
                  zIndex: 2,
                  textAlign: 'center',
                  minWidth: '160px'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  color: '#FFFFFF',
                  border: '4px solid #FFFFFF',
                  boxShadow: 'var(--shadow-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: '800',
                  margin: '0 auto 20px',
                  transition: 'var(--transition-smooth)'
                }}>
                  {step.num}
                </div>
                <h4 style={{ fontSize: '18px', color: 'var(--text-dark)', marginBottom: '8px' }}>{step.title}</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', padding: '0 8px' }}>{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="section section-secondary">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          
          <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            CLIENT FEEDBACK
          </span>
          <h2 style={{ fontSize: '48px', color: 'var(--text-dark)', marginTop: '12px', marginBottom: '48px' }}>
            What Partners Say
          </h2>

          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-card)',
            padding: '48px',
            boxShadow: 'var(--shadow-medium)',
            border: '1px solid var(--border-color)',
            position: 'relative'
          }}>
            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', color: 'var(--accent)', marginBottom: '24px' }}>
              {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>

            <p style={{
              fontSize: '22px',
              fontStyle: 'italic',
              color: 'var(--text-dark)',
              lineHeight: '1.6',
              marginBottom: '32px'
            }}>
              "{testimonials[testimonialIndex].review}"
            </p>

            <h4 style={{ fontSize: '18px', color: 'var(--text-dark)', marginBottom: '4px' }}>{testimonials[testimonialIndex].name}</h4>
            <p style={{ fontSize: '15px', color: 'var(--primary)', fontWeight: '600' }}>{testimonials[testimonialIndex].role}, {testimonials[testimonialIndex].company}</p>

            {/* Selector dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setTestimonialIndex(idx)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: testimonialIndex === idx ? 'var(--primary)' : 'var(--border-color)',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="section">
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
            <div>
              <span style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                KNOWLEDGE CENTRE
              </span>
              <h2 style={{ fontSize: '48px', color: 'var(--text-dark)', marginTop: '12px' }}>
                Insights & Sustainability Updates
              </h2>
            </div>
            <a href="#blog" className="btn btn-secondary">
              View All Articles <ArrowRight size={16} />
            </a>
          </div>

          {/* Infinite Blog Ticker Container */}
          <div className="blog-ticker-container">
            <div className="blog-ticker-track">
              {[...blogs, ...blogs].map((post, idx) => (
                <div 
                  key={idx}
                  className="blog-ticker-card"
                >
                  <div className="blog-ticker-img-wrapper">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{
                        backgroundColor: 'rgba(31, 93, 55, 0.08)',
                        color: 'var(--primary)',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '700'
                      }}>{post.cat}</span>
                      <span style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={14} /> {post.date}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '20px', color: 'var(--text-dark)', marginBottom: '20px', flexGrow: 1, lineHeight: '1.4' }}>
                      {post.title}
                    </h3>
                    <a href="#blog" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--primary)',
                      fontWeight: '700',
                      fontSize: '15px'
                    }}>
                      Read Article <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="section section-secondary">
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Clear, direct answers regarding Magi's infrastructure integration and contract specifications.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
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
                    fontWeight: '700',
                    fontSize: '18px',
                    color: 'var(--text-dark)'
                  }}
                >
                  <span>{faq.q}</span>
                  {activeFAQ === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {activeFAQ === idx && (
                  <div style={{
                    padding: '0 24px 24px',
                    fontSize: '16px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '16px'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="contact" style={{
        position: 'relative',
        padding: '160px 0',
        background: 'linear-gradient(rgba(15, 29, 20, 0.4), rgba(15, 29, 20, 0.8)), url("https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ zIndex: 10, position: 'relative', maxWidth: '800px' }}>
          
          <h2 style={{ fontSize: '56px', color: '#FFFFFF', fontWeight: '800', marginBottom: '20px', letterSpacing: '-1.5px' }}>
            Let's Engineer a Sustainable Future Together
          </h2>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '40px',
            maxWidth: '640px',
            marginInline: 'auto',
            lineHeight: '1.7'
          }}>
            Partner with Magi Renewable Energy Solutions to deploy commercial infrastructure that yields lasting operational independence and ecological value.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="#consultation" className="btn btn-accent" style={{ padding: '16px 36px' }}>
              Contact Us <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>
        </>
      ) : currentView === 'about' ? (
        <AboutPage onNavigate={handleNavigate} />
      ) : currentView === 'solar' ? (
        <SolarPage onNavigate={handleNavigate} />
      ) : currentView === 'biogas' ? (
        <BiogasPage onNavigate={handleNavigate} />
      ) : currentView === 'ev' ? (
        <EVPage onNavigate={handleNavigate} />
      ) : currentView === 'sanitation' ? (
        <SanitationPage onNavigate={handleNavigate} />
      ) : currentView === 'contact' ? (
        <ContactPage onNavigate={handleNavigate} />
      ) : currentView === 'faq' ? (
        <FAQPage onNavigate={handleNavigate} />
      ) : (
        <BlogPage onNavigate={handleNavigate} />
      )}

      {/* FOOTER */}
      <footer id="footer" style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'rgba(255,255,255,0.7)',
        padding: '80px 0 40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr',
            gap: '64px',
            marginBottom: '64px'
          }}>
            
            {/* Col 1 */}
            <div>
              <h3 style={{ color: '#FFFFFF', fontSize: '24px', marginBottom: '20px' }}>MAGI</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '24px', lineHeight: '1.6' }}>
                Delivering premium-grade integrated renewable energy and waste infrastructure engineered for high compliance.
              </p>
              <div style={{ fontSize: '13px' }}>
                <strong>Office:</strong> Suite 400, Industrial Plaza, LA
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '16px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Services
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px' }}>
                <li><a href="#solar" onClick={(e) => { e.preventDefault(); handleNavigate('solar'); }} style={{ color: 'rgba(255,255,255,0.6)' }}>Solar Solutions</a></li>
                <li><a href="#biogas" onClick={(e) => { e.preventDefault(); handleNavigate('biogas'); }} style={{ color: 'rgba(255,255,255,0.6)' }}>Biogas & Waste</a></li>
                <li><a href="#ev" onClick={(e) => { e.preventDefault(); handleNavigate('ev'); }} style={{ color: 'rgba(255,255,255,0.6)' }}>EV & Battery Mobility</a></li>
                <li><a href="#sanitation" onClick={(e) => { e.preventDefault(); handleNavigate('sanitation'); }} style={{ color: 'rgba(255,255,255,0.6)' }}>Bio Septic Treatment</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '16px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px' }}>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }} style={{ color: 'rgba(255,255,255,0.6)' }}>About Us</a></li>
                <li><a href="#blog" onClick={(e) => { e.preventDefault(); handleNavigate('blog'); }} style={{ color: 'rgba(255,255,255,0.6)' }}>Blog & Insights</a></li>
                <li><a href="#industries" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'industries'); }} style={{ color: 'rgba(255,255,255,0.6)' }}>Industries Served</a></li>
                <li><a href="#process" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'timeline'); }} style={{ color: 'rgba(255,255,255,0.6)' }}>Process Timeline</a></li>
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); handleNavigate('faq'); }} style={{ color: 'rgba(255,255,255,0.6)' }}>Support FAQs</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '16px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Newsletter
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
                Subscribe to our engineering papers & sustainability briefs.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }} style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="email" 
                  placeholder="name@organization.com"
                  required
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#FFFFFF',
                    flexGrow: 1,
                    outline: 'none'
                  }}
                />
                <button type="submit" className="btn btn-accent" style={{ padding: '12px 18px', borderRadius: '8px' }}>
                  Join
                </button>
              </form>
            </div>

          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '14px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              &copy; {new Date().getFullYear()} Magi Renewable Energy Solutions. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="#privacy" style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy Policy</a>
              <a href="#terms" style={{ color: 'rgba(255,255,255,0.5)' }}>Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOAT UTILITIES */}

      {/* WhatsApp Floating CTA (Right Side, Stacked) */}
      <a 
        href="https://wa.me/15550000000" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '104px',
          right: '24px',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          zIndex: 1000,
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        aria-label="Chat with Engineer on WhatsApp"
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.039 2.875 1.184 3.074.145.198 2.037 3.111 4.933 4.36.688.296 1.225.473 1.64.607.69.22 1.319.19 1.815.116.552-.083 1.758-.718 2.006-1.412.247-.694.247-1.289.173-1.411-.074-.122-.272-.196-.57-.346zm-5.421 7.412c-2.135 0-4.23-.571-6.064-1.65l-.435-.258-4.5 1.18 1.2-4.385-.283-.45C1.302 14.12 1.3 9.96 3.207 6.84 5.113 3.72 8.647 1.83 12.051 1.83c5.54 0 10.05 4.51 10.05 10.05 0 5.54-4.51 10.05-10.05 10.05zM12 .002C5.385.002.01 5.378.01 12.002c0 2.112.55 4.17 1.6 6.002L0 24l6.17-1.62c1.77.96 3.76 1.46 5.83 1.46 6.61 0 11.99-5.37 11.99-11.99a12 12 0 0 0-11.99-11.99z"/>
        </svg>
      </a>

      {/* AI Chatbot Panel */}
      {chatbotOpen && (
        <div style={{
          position: 'fixed',
          bottom: '176px',
          right: '24px',
          width: '380px',
          height: '500px',
          maxWidth: 'calc(100vw - 48px)',
          maxHeight: 'calc(100vh - 200px)',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1001,
          overflow: 'hidden',
          border: '1px solid rgba(0,0,0,0.08)',
          animation: 'slideUp 0.3s ease'
        }}>
          {/* Header */}
          <div style={{
            backgroundColor: 'var(--primary)',
            color: '#FFFFFF',
            padding: '16px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                position: 'relative',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img src="/engineer_avatar.png" alt="Magi AI Specialist" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '15px', lineHeight: '1.2' }}>Magi Energy AI</div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', backgroundColor: '#4ADE80', borderRadius: '50%', display: 'inline-block' }}></span>
                  Infrastructure Assistant
                </div>
              </div>
            </div>
            <button 
              onClick={() => setChatbotOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.8,
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            backgroundColor: '#F8F9FA',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {chatMessages.map((msg, index) => (
              <div 
                key={index}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  padding: '12px 16px',
                  borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                  backgroundColor: msg.sender === 'user' ? 'var(--primary)' : '#FFFFFF',
                  color: msg.sender === 'user' ? '#FFFFFF' : '#333333',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  boxShadow: msg.sender === 'user' ? 'none' : '0 2px 8px rgba(0,0,0,0.04)',
                  border: msg.sender === 'user' ? 'none' : '1px solid rgba(0,0,0,0.05)',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {msg.text}
              </div>
            ))}
            {aiTyping && (
              <div style={{
                alignSelf: 'flex-start',
                backgroundColor: '#FFFFFF',
                padding: '12px 16px',
                borderRadius: '16px 16px 16px 2px',
                border: '1px solid rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span style={{ width: '6px', height: '6px', backgroundColor: '#888', borderRadius: '50%', display: 'inline-block', animation: 'bounce 1s infinite' }}></span>
                <span style={{ width: '6px', height: '6px', backgroundColor: '#888', borderRadius: '50%', display: 'inline-block', animation: 'bounce 1s infinite 0.2s' }}></span>
                <span style={{ width: '6px', height: '6px', backgroundColor: '#888', borderRadius: '50%', display: 'inline-block', animation: 'bounce 1s infinite 0.4s' }}></span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div style={{
            padding: '10px 16px',
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #EEEEEE',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
          }} className="hide-scrollbar">
            {['Solar Grids', 'Biogas Loops', 'EV Fleets', 'Eco-Sanitation'].map((topic) => (
              <button
                key={topic}
                onClick={() => {
                  setChatInput(topic);
                }}
                style={{
                  fontSize: '12px',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  border: '1px solid rgba(31, 93, 55, 0.2)',
                  backgroundColor: 'rgba(31, 93, 55, 0.05)',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form 
            onSubmit={handleSendChatMessage}
            style={{
              padding: '16px',
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid #EEEEEE',
              display: 'flex',
              gap: '10px'
            }}
          >
            <input 
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask about our green energy systems..."
              style={{
                flex: 1,
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                padding: '10px 14px',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
            />
            <button 
              type="submit"
              style={{
                backgroundColor: 'var(--primary)',
                color: '#FFFFFF',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      )}

      {/* AI Chatbot Toggle Button */}
      <button 
        onClick={() => setChatbotOpen(!chatbotOpen)}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '24px',
          backgroundColor: 'var(--primary)',
          color: '#FFFFFF',
          border: 'none',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(31, 93, 55, 0.4)',
          zIndex: 1000,
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        aria-label="Toggle AI Chatbot"
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {chatbotOpen ? (
          <X size={24} />
        ) : (
          <div style={{ position: 'relative', width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden' }}>
            <img src="/engineer_avatar.png" alt="Engineer avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              bottom: '4px',
              right: '4px',
              width: '10px',
              height: '10px',
              backgroundColor: '#4ADE80',
              border: '2px solid #FFFFFF',
              borderRadius: '50%'
            }}></div>
          </div>
        )}
      </button>
    </>
  );
}
