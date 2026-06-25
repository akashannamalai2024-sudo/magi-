import React, { useState, useEffect } from 'react';
import { 
  Search, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sun, 
  Flame, 
  Truck, 
  Droplet, 
  Settings,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function FAQPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'All', name: 'All Categories', icon: HelpCircle },
    { id: 'General', name: 'General & Compliance', icon: ShieldCheck },
    { id: 'Solar', name: 'Solar & Battery Storage', icon: Sun },
    { id: 'Biogas', name: 'Biogas & Waste-to-Energy', icon: Flame },
    { id: 'EV', name: 'EV Charging & Mobility', icon: Truck },
    { id: 'Water', name: 'Bio Septic Tanks & Mobile Toilets', icon: Droplet }
  ];

  const faqsList = [
    // Category: General & Compliance
    {
      category: 'General',
      q: "What type of contracts does Magi support?",
      a: "Magi offers fully integrated EPC (Engineering, Procurement, Construction) and O&M (Operations & Maintenance) contracts, as well as customized PPA (Power Purchase Agreements) and RESCO models for industrial and commercial projects."
    },
    {
      category: 'General',
      q: "Do you provide support for government subsidies and net-metering approvals?",
      a: "Yes, our regulatory compliance division handles all licensing, net-metering approvals with state discoms, CEIG approvals, and municipal clearances."
    },
    {
      category: 'General',
      q: "How does Magi monitor installed infrastructure?",
      a: "Every system is backed by our Annual Maintenance Contracts (AMCs), providing regular inspections, system optimization, and preventative service."
    },
    {
      category: 'General',
      q: "What is your standard SLA for maintenance and emergency calls?",
      a: "We offer a 4-hour on-site response time for critical utility disruptions under our Operations Support Agreement, and 24/7 remote diagnostic support."
    },
    {
      category: 'General',
      q: "Are Magi's systems certified for international sustainability frameworks?",
      a: "Yes, our installations help clients achieve points for LEED certification, IGBC ratings, and carbon offset reporting aligned with Scope 1 and Scope 2 accounting protocols."
    },
    {
      category: 'General',
      q: "Can MAGI retrofit existing infrastructure or do you only execute greenfield projects?",
      a: "We execute both. Our engineers specialize in retrofitting old commercial electrical layouts and septic tanks with zero downtime to ongoing operations."
    },
    {
      category: 'General',
      q: "Where are MAGI's engineering teams located?",
      a: "Our primary engineering offices are based in Tamil Nadu and LA, with active field deployment teams across major industrial corridors."
    },
    {
      category: 'General',
      q: "How do we track our project's development phase?",
      a: "Clients get access to our Digital Twin portal, showing live CAD progress, procurement tracking, and milestone completions."
    },
    {
      category: 'General',
      q: "Does MAGI offer performance guarantees?",
      a: "Yes, we offer guaranteed Generation Ratio (PR) for Solar plants and specific output metrics for biogas systems."
    },
    {
      category: 'General',
      q: "What safety standards do you adhere to during construction?",
      a: "We comply with OHSAS 18001 / ISO 45001 safety management, ensuring strict double-isolation, height safety, and chemical containment protocols."
    },

    // Category: Solar & Battery Storage
    {
      category: 'Solar',
      q: "What components are used in MAGI Solar installations?",
      a: "We use Tier-1 Monoperc/Bifacial panels, smart micro-inverters or string inverters from leading manufacturers, and customized aluminum/HDG mounting structures."
    },
    {
      category: 'Solar',
      q: "What is BESS and do we need it?",
      a: "Battery Energy Storage Systems (BESS) store excess solar energy for use during peak tariff hours or power outages, stabilizing the local microgrid."
    },
    {
      category: 'Solar',
      q: "How long do solar panels and inverters last?",
      a: "Solar panels carry a 25-year performance warranty (degradation <0.5% annually). Inverters typically carry a 5 to 10-year warranty, extendable to 20 years."
    },
    {
      category: 'Solar',
      q: "What is the difference between On-Grid, Off-Grid, and Hybrid Solar?",
      a: "On-Grid feeds power back to the public utility; Off-Grid is entirely independent; Hybrid combines utility grid access with battery storage for peak-shaving."
    },
    {
      category: 'Solar',
      q: "How often do solar panels require cleaning?",
      a: "Depending on dust levels, panels should be cleaned every 10–15 days. We install pressurized water lines and auto-wash nozzles for large rooftops."
    },
    {
      category: 'Solar',
      q: "How does shadow analysis affect system layout?",
      a: "Our engineers run 3D LIDAR shadow simulation to design array structures that maximize solar gain and eliminate inter-row shading losses."
    },
    {
      category: 'Solar',
      q: "Can our rooftop handle the weight of a commercial solar plant?",
      a: "We perform full structural load calculations (kg/sqm) prior to installation, using light-weight ballasted structures if penetrative anchoring isn't feasible."
    },
    {
      category: 'Solar',
      q: "What happens to the solar plant during grid failure?",
      a: "Grid-tied plants shut down automatically to prevent islanding (safety hazard for utility workers). Hybrid systems decouple instantly to run in island mode."
    },
    {
      category: 'Solar',
      q: "How do high ambient temperatures affect solar efficiency?",
      a: "Solar panels experience a power drop based on their temperature coefficient (usually -0.35% per °C above 25°C). We design optimal air-gap spacing under arrays to cool them."
    },
    {
      category: 'Solar',
      q: "Can solar energy power heavy industrial motors?",
      a: "Yes, hybrid systems manage transient inrush currents by drawing from battery storage or the grid simultaneously with solar generation."
    },

    // Category: Biogas & Waste-to-Energy
    {
      category: 'Biogas',
      q: "What feedstocks are suitable for MAGI anaerobic digesters?",
      a: "Food waste, agricultural residue, animal manure, STP sludge, and biodegradable industrial process waste are ideal."
    },
    {
      category: 'Biogas',
      q: "How long does the digestion process take to produce biogas?",
      a: "Hydraulic Retention Time (HRT) varies from 15 to 30 days depending on temperature, feed composition, and digester style (Mesophilic/Thermophilic)."
    },
    {
      category: 'Biogas',
      q: "How is the raw biogas purified?",
      a: "We install desulfurizers (iron sponge or biological filters) to remove Hydrogen Sulfide (H2S), and moisture separators to prevent pipe corrosion."
    },
    {
      category: 'Biogas',
      q: "What is Bio-CNG or CBG?",
      a: "Compressed Bio-Gas (CBG) is purified biogas containing >90% methane. It behaves exactly like commercial CNG and can run vehicles or industrial burners."
    },
    {
      category: 'Biogas',
      q: "What is done with the residual solid/liquid digestate?",
      a: "Digestate is a highly nutrient-rich organic bio-fertilizer. We install decanter centrifuges to separate solids (for compost) and liquids (for liquid fertilizer)."
    },
    {
      category: 'Biogas',
      q: "Does a biogas plant release foul odors?",
      a: "No. Our digesters are completely airtight closed systems. Odors are controlled during loading using bio-filters and negative-pressure sorting zones."
    },
    {
      category: 'Biogas',
      q: "Can biogas be converted to electricity?",
      a: "Yes, purified biogas is routed to combined heat and power (CHP) gas engines, generating electricity and hot water simultaneously."
    },
    {
      category: 'Biogas',
      q: "How is biogas production kept stable during winter?",
      a: "We install thermal insulation jackets and internal hot water heating loops fed by waste heat from the CHP unit to maintain stable digestion temperatures."
    },
    {
      category: 'Biogas',
      q: "What safety mechanisms prevent digester over-pressurization?",
      a: "Every digester features dual-action hydraulic safety valves, automatic gas flares, and explosion-proof electrical fittings inside zones."
    },
    {
      category: 'Biogas',
      q: "What is the processing capacity of your digesters?",
      a: "We design and engineer custom biogas and waste-to-energy systems with capacities ranging precisely from 10 kg/day to 1000 kg/day."
    },

    // Category: EV Charging & Mobility
    {
      category: 'EV',
      q: "What types of EV chargers does MAGI install?",
      a: "We deploy AC Type-2 chargers (7.4kW–22kW) for long parking intervals, and DC Fast Chargers (CCS2, 30kW–240kW) for rapid fleet turnaround."
    },
    {
      category: 'EV',
      q: "How does dynamic load management work?",
      a: "It reads real-time building power draw and automatically reduces EV charger speeds to prevent overloading the main substation transformer."
    },
    {
      category: 'EV',
      q: "Can EV chargers run on solar and battery storage directly?",
      a: "Yes, our microgrid controllers route solar power and battery discharge directly to EV chargers, bypassing grid peak tariff rates."
    },
    {
      category: 'EV',
      q: "How do we track usage and bill employees or visitors?",
      a: "Every charger is equipped with OCPP (Open Charge Point Protocol) firmware, linking to RFID readers, mobile apps, and payment gateways."
    },
    {
      category: 'EV',
      q: "What are the electrical connection requirements for a 120kW DC charger?",
      a: "It requires a dedicated 3-phase 415V input, circuit breaker protection, type-B RCD ground fault protection, and a robust earth pit."
    },
    {
      category: 'EV',
      q: "How do temperature fluctuations affect EV charging speeds?",
      a: "Chargers feature thermal throttling to protect components. Our outdoor stations include active liquid cooling and sun-shielding structures."
    },
    {
      category: 'EV',
      q: "What is the life expectancy of a commercial EV charging station?",
      a: "Typically 8–10 years. We use dust/waterproof enclosures (IP54/IP65 minimum) and replace wear-and-tear charging cables periodically."
    },
    {
      category: 'EV',
      q: "Do MAGI chargers support vehicle-to-grid (V2G) tech?",
      a: "Yes, our bidirectional DC chargers support V2G protocols, allowing parked fleet batteries to supply backup power to buildings."
    },
    {
      category: 'EV',
      q: "Is earthing critical for EV chargers?",
      a: "Absolutely. Chargers check ground loop resistance before starting. We construct maintenance-free chemical copper earthing for stable connections."
    },
    {
      category: 'EV',
      q: "Can we monitor EV chargers remotely?",
      a: "Yes, the central dashboard allows operators to start/stop sessions, schedule charges, adjust power limits, and check active errors."
    },

    // Category: Bio Septic Tanks & Mobile Toilets
    {
      category: 'Water',
      q: "What is a bio-septic tank and how is it different from a concrete septic tank?",
      a: "A bio-septic tank uses multi-chamber anaerobic bacteria culture to digest waste, outputting clear, odor-free water instead of thick sludge."
    },
    {
      category: 'Water',
      q: "How often does a bio-septic tank need vacuum pumping?",
      a: "Because bacteria digest organic solids into liquid and gases, desludging is only required every 5 to 8 years, compared to yearly for concrete tanks."
    },
    {
      category: 'Water',
      q: "Can we use normal household toilet cleaners in a bio-septic system?",
      a: "Harsh acids and bleach kill the beneficial bacterial culture. We recommend eco-friendly, biodegradable cleaning agents."
    },
    {
      category: 'Water',
      q: "What are the daily maintenance requirements for a bio-septic tank?",
      a: "Bio-septic tanks require zero daily maintenance."
    },
    {
      category: 'Water',
      q: "What makes your FRP Toilets suitable for commercial use?",
      a: "Our FRP (Fiber Reinforced Plastic) Toilets are built with highly durable, UV-resistant composites. They are lightweight, completely waterproof, and designed to withstand heavy public or commercial use with minimal maintenance."
    }
  ];

  const filteredFaqs = faqsList.filter(faq => {
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ backgroundColor: '#FAFBFC', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        backgroundColor: '#0F1D14',
        backgroundImage: 'linear-gradient(135deg, rgba(15,29,20,0.95) 0%, rgba(20,45,30,0.9) 100%)',
        color: '#FFFFFF',
        padding: '160px 0 100px',
        textAlign: 'center'
      }}>
        {/* Subtle grid pattern overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.7
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(74, 222, 128, 0.1)',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            padding: '8px 16px',
            borderRadius: '100px',
            color: '#4ADE80',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            <HelpCircle size={16} /> Help & Resource Center
          </div>

          <h1 style={{
            fontSize: '56px',
            fontWeight: '800',
            lineHeight: '1.1',
            letterSpacing: '-1.5px',
            marginBottom: '24px',
            color: '#FFFFFF'
          }}>
            Technical Support & FAQs
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Deep engineering insights, compliance details, and integration specs for MAGI utility platforms.
          </p>

          {/* Search Box */}
          <div style={{
            position: 'relative',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <Search size={22} style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'rgba(255,255,255,0.4)'
            }} />
            <input 
              type="text" 
              placeholder="Search questions, keywords, or systems..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '20px 24px 20px 56px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.15)',
                backgroundColor: 'rgba(255,255,255,0.06)',
                color: '#FFFFFF',
                fontSize: '17px',
                outline: 'none',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
              onFocus={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.12)';
                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.06)';
                e.target.style.borderColor = 'rgba(255,255,255,0.15)';
              }}
            />
          </div>
        </div>
      </section>

      {/* CATEGORY BAR */}
      <section style={{
        padding: '30px 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E9EB',
        position: 'sticky',
        top: '72px',
        zIndex: 100,
        boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
      }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '4px 0',
            justifyContent: 'center'
          }}>
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setActiveFAQ(null);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    borderRadius: '50px',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--brand-primary, #0D7E40)' : '#E5E9EB',
                    backgroundColor: isSelected ? 'var(--brand-primary, #0D7E40)' : 'transparent',
                    color: isSelected ? '#FFFFFF' : '#4E5E55',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <Icon size={16} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACCORDION CONTENT */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {filteredFaqs.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {filteredFaqs.map((faq, idx) => {
                const isOpen = activeFAQ === idx;
                return (
                  <div 
                    key={idx}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid #E5E9EB',
                      boxShadow: isOpen ? '0 12px 24px rgba(15,29,20,0.04)' : '0 2px 4px rgba(15,29,20,0.01)',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <button
                      onClick={() => setActiveFAQ(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '24px 30px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontWeight: '700',
                        fontSize: '18px',
                        color: '#0F1D14',
                        lineHeight: '1.4'
                      }}
                    >
                      <span style={{ paddingRight: '20px' }}>{faq.q}</span>
                      <span style={{
                        flexShrink: 0,
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? 'rgba(13,126,64,0.1)' : '#F0F4F2',
                        color: isOpen ? '#0D7E40' : '#4E5E55',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.25s ease'
                      }}>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: '0 30px 30px',
                        fontSize: '16px',
                        color: '#4E5E55',
                        lineHeight: '1.7',
                        borderTop: '1px solid #F0F4F2',
                        paddingTop: '20px',
                        backgroundColor: '#FCFDFD'
                      }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '60px 40px',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E5E9EB'
            }}>
              <HelpCircle size={48} style={{ color: '#BAC2C6', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0F1D14', marginBottom: '8px' }}>No matches found</h3>
              <p style={{ color: '#4E5E55', marginBottom: '24px' }}>We couldn't find any FAQs matching "{searchQuery}". Try selecting a different category or search term.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                style={{
                  padding: '12px 24px',
                  borderRadius: '50px',
                  backgroundColor: '#0F1D14',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* CONTACT CTA */}
          <div style={{
            marginTop: '80px',
            backgroundColor: '#0F1D14',
            borderRadius: '24px',
            padding: '48px',
            color: '#FFFFFF',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              opacity: 0.5
            }}></div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '12px' }}>Still Have Questions?</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', maxWidth: '580px', margin: '0 auto 30px' }}>
                Our infrastructure consultants and technical engineers are available to review your project requirement parameters.
              </p>
              <button 
                onClick={() => onNavigate('contact')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  backgroundColor: '#4ADE80',
                  color: '#0F1D14',
                  border: 'none',
                  fontWeight: '700',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#62E392'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4ADE80'}
              >
                Contact Engineering Team <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
