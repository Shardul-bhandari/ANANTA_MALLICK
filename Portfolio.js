import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [selectedService, setSelectedService] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth movement
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveMouse);
    return () => window.removeEventListener('mousemove', moveMouse);
  }, [mouseX, mouseY]);

  const cursorVariants = {
    default: { height: 12, width: 12, backgroundColor: '#000000', border: '1px solid #000000' },
    project: { height: 80, width: 80, backgroundColor: '#000000' }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      title: 'Digital Narrative (420% ROI)',
      category: 'Digital Strategy',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Social Momentum (310% ROAS)',
      category: 'Content Creation',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Eco-Brand Identity',
      category: 'Brand Marketing',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda546697c?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Conversion Optimization',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const services = [
    { 
      title: 'Brand Storytelling', 
      desc: 'Crafting authentic brand narratives that resonate with modern digital communities.',
      details: 'I blend creative content strategy with market analysis to build a voice that stands out. It is not just about reach; it is about resonance.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    { 
      title: 'Digital Marketing', 
      desc: 'Executing data-driven campaigns across search and display to maximize ROI and conversion.',
      details: 'Utilizing advanced SEO, SEM, and performance marketing techniques, I ensure your brand reaches the right audience at the right time. Every campaign is backed by rigorous data analysis.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Social Media Management', 
      desc: 'Building community and voice through creative content and active engagement strategies.',
      details: 'Beyond just posting updates, I build digital communities. I manage end-to-end content production, community engagement, and influencer partnerships to make your brand social-first.',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const creativeWork = [
    { title: 'Identity System', category: 'Branding', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800' },
    { title: 'Content Engine', category: 'Social', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800' },
    { title: 'Motion Graphics', category: 'Video', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800' },
    { title: 'Ad Layouts', category: 'Design', img: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800' }
  ];

  const pressLogos = ["Forbes India", "Entrepreneur", "Business Insider", "Social Samosa", "Mint"];

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white md:cursor-none">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        variants={cursorVariants}
        animate={cursorVariant}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-xl font-black tracking-tighter italic text-black"
          >
            ANANTA.
          </motion.span>
          <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <a href="#work" className="hover:text-black hover:underline transition-all">Work</a>
            <a href="#services" className="hover:text-black hover:underline transition-all">Services</a>
            <a href="#contact" className="hover:text-black hover:underline transition-all">Contact</a>
          </div>
        </div>
      </nav>

      {/* Press Bar */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale transition-all hover:opacity-60">
          {pressLogos.map((logo, i) => (
            <span key={i} className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">{logo}</span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeIn}>
            <span className="inline-block py-1 px-3 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase mb-6">
              Marketing Strategist
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]"
          >
            Scaling brands<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-gray-400">
              for the digital age.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-xl text-lg text-gray-500 leading-relaxed mb-12"
          >
            I help businesses find their voice and dominate their niche through tailored digital strategies and social storytelling.
          </motion.p>
        </div>
        
        {/* Background Blur Gradient */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-[120px] -z-0"></div>
      </section>

      {/* Projects Gallery */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-4 text-black">Selected Work</h2>
            <div className="h-px w-24 bg-black"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover="hover"
                onMouseEnter={() => setCursorVariant('project')}
                onMouseLeave={() => setCursorVariant('default')}
                className="relative aspect-[16/10] overflow-hidden rounded-3xl group cursor-pointer bg-stone-200"
              >
                <motion.img 
                  src={p.image} 
                  alt={p.title}
                  variants={{ hover: { scale: 1.1, filter: 'blur(4px)' } }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <motion.div 
                  variants={{ 
                    initial: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 } 
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black via-black/20 to-transparent text-white"
                >
                  <span className="text-gray-300 font-bold text-[10px] tracking-[0.3em] uppercase mb-2">{p.category}</span>
                  <h3 className="text-3xl font-black tracking-tight">{p.title}</h3>
                  <motion.div 
                    variants={{ initial: { width: 0 }, hover: { width: '100%' } }}
                    className="h-0.5 bg-white mt-4 origin-left"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                onClick={() => setSelectedService(s)}
                onMouseEnter={() => setCursorVariant('project')}
                onMouseLeave={() => setCursorVariant('default')}
                className="group cursor-pointer p-8 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-black"
              >
                <div className="h-1 w-12 bg-black mb-8 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 group-hover:underline text-black">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <span className="inline-block mt-6 text-[10px] font-bold uppercase tracking-widest text-black opacity-0 group-hover:opacity-100 transition-opacity">View Details +</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Gallery */}
      <section id="gallery" className="py-24 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-4 text-black">Creative Gallery</h2>
            <div className="h-px w-24 bg-black"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {creativeWork.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer bg-gray-100"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale" />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">{item.category}</span>
                  <p className="text-white font-bold text-sm">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] -z-0"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 contact-header"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-stone-900">Let's Work Together</h2>
            <p className="text-stone-500">Ready to scale your brand? Drop a message below.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-[2rem] bg-white backdrop-blur-xl border border-stone-200 shadow-2xl"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 ml-4">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Smith" 
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-rose-500 transition-colors placeholder:text-stone-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 ml-4">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-rose-500 transition-colors placeholder:text-stone-300"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 ml-4">Project Brief</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell me about your marketing goals..." 
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-rose-500 transition-colors placeholder:text-stone-300 resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 mt-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-2xl bg-stone-900 text-white font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-stone-200 hover:bg-rose-600 transition-all"
                >
                  Start a Project
                </motion.button>
              </div>
            </form>
          </motion.div>

          <div className="mt-12 flex justify-center gap-8 text-stone-400 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-rose-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-rose-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-rose-600 transition-colors">Twitter</a>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-900/90 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white border border-stone-200 p-8 md:p-12 rounded-[2.5rem] max-w-2xl w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-8 text-stone-400 hover:text-rose-600 transition-colors text-2xl"
                onClick={() => setSelectedService(null)}
              >
                ×
              </button>
              <div className={`h-1 w-24 bg-gradient-to-r ${selectedService.gradient} mb-8`}></div>
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-6 text-stone-900">{selectedService.title}</h2>
              <p className="text-stone-500 text-lg leading-relaxed mb-8">{selectedService.details}</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-stone-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-rose-600 transition-colors shadow-lg shadow-stone-200"
                onClick={() => setSelectedService(null)}
              >
                Close Details
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Simple Footer */}
      <footer className="py-20 text-center border-t border-stone-200">
        <p className="text-stone-400 text-xs tracking-widest uppercase">© {new Date().getFullYear()} Ananta — Digital Portfolio</p>
      </footer>
    </div>
  );
};

export default Portfolio;