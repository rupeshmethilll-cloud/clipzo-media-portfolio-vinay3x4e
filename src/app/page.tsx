"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

// ==========================================
// TYPE DEFINITIONS FOR STRICT TYPE SAFETY
// ==========================================
interface Reel {
  name: string;
  filename: string;
}

interface VideoWork {
  id: string;
  title: string;
  desc: string;
  poster: string;
  reels: readonly Reel[];
}

// ==========================================
// 1. CLIPZO MEDIA PROFILE DATA
// ==========================================
const profileData = {
  personal: {
    name: "VINAY",
    brand: "CLIPZO MEDIA",
    title: "Cinematographer | Photographer | Video Editor",
    bio: "Creative Cinematographer and video editor with hands-on experience in events, car showrooms, brand shoots, gym edits, product and promotional commercial shoots. Skilled in camera handling, framing, and visual storytelling with on-field project experience. Comfortable working in team environments and delivering quality visuals under real shoots - doing the complete process: shoot, edit, and deliver.",
    location: "Jaipur, Rajasthan, India",
    phone: "+91 9784484756",
    whatsappUrl: "https://wa.me/919784484756?text=Hi%20Vinay,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20discuss%20a%20project!",
    email: "vinayvanshiwal97@gmail.com",
    instagram: "_clizomedia",
    instagramUrl: "https://instagram.com/_clizomedia",
    cvUrl: "/vinay_cv.pdf",
  },
  skills: [
    "Wedding & Event Cinematography",
    "Gym & Fitness Shoots",
    "Commercial & Brand Shoots",
    "Camera Handling & Composition",
    "Creative Framing & Movement",
    "Video Editing",
    "Portrait & Candid Photography"
  ],
  education: [
    {
      institution: "Government Engineering College Bharatpur",
      degree: "B-Tech in Computer Science",
      desc: "Yes, I am also studying B-Tech with CS."
    },
    {
      institution: "Asian Academy Film & Television",
      degree: "Diploma in Camera & Lighting Techniques",
      desc: "Formal training in high-end cinematography, lighting styles, and camera setups."
    }
  ],
  // Exact requested slideshow sequence
  slideImages: [
    "/slides/cover.png",          // Personal Portfolio (Cover)
    "/slides/are_you_hiring.jpg",  // BRAND ARE YOU HIRING?
    "/slides/im_vinay.png",        // Hi, I'm Vinay (Intro)
    "/slides/why_me.png",          // why me?
    "/slides/slide_5.png",         // my education
    "/slides/slide_6.png",         // my work experience
    "/slides/slide_7.png",         // Niche portfolio
    "/slides/slide_8.png",         // FOR MORE INFO YOU NEED TO HIRE ME
    "/slides/slide_9.png",         // You are hired let's discuss salary
    "/slides/slide_10.png",        // thank you so much
    "/slides/slide_1.png"          // For hiring! (Squid Game + Cat Crying)
  ],
  videoWorks: [
    {
      id: "v1",
      title: "Automotive & Detailing Promo",
      desc: "Cinematic car PPF store reels and promotional videos highlighting detailing work.",
      poster: "automotive_poster.png",
      reels: [
        { name: "Reel 1", filename: "automotive_1.mp4" },
        { name: "Reel 2", filename: "automotive_2.mp4" },
        { name: "Reel 3", filename: "automotive_3.mp4" }
      ]
    },
    {
      id: "v2",
      title: "Gym & Fitness Reels",
      desc: "High-energy fitness phonk reels highlighting lifting, speed edits, and dynamic sync beats.",
      poster: "gym_poster.png",
      reels: [
        { name: "Reel 1", filename: "gym_1.mp4" },
        { name: "Reel 2", filename: "gym_2.mp4" }
      ]
    },
    {
      id: "v3",
      title: "Commercial Brand Showcase",
      desc: "Promotional product and lifestyle showcases capturing premium brand details and client aesthetics.",
      poster: "brand_poster.png",
      reels: [
        { name: "Reel 1", filename: "commercial_1.mp4" },
        { name: "Reel 2", filename: "commercial_2.mp4" }
      ]
    },
    {
      id: "v4",
      title: "Pre-Wedding & Events Highlight",
      desc: "Emotion-filled event coverages combining storytelling shots and clean grading edits.",
      poster: "wedding_poster.png",
      reels: [
        { name: "Reel 1", filename: "wedding_1.mp4" },
        { name: "Reel 2", filename: "wedding_2.mp4" }
      ]
    },
    {
      id: "v5",
      title: "Car Delivery Celebration Reel",
      desc: "Cinematic delivery day footage, key handover celebration, and custom showroom reveal edits.",
      poster: "delivery_poster.png",
      reels: [
        { name: "Reel 1", filename: "delivery_1.mp4" },
        { name: "Reel 2", filename: "delivery_2.mp4" }
      ]
    }
  ]
} as const;

// Spring configuration for custom pop-up bounce effects
const springPopupConfig = {
  type: "spring",
  stiffness: 90,
  damping: 14,
  mass: 0.9
} as const;

// ==========================================
// 2. VIDEO CARD SUB-COMPONENT
// ==========================================
function VideoCard({ work, isFeatured }: { work: VideoWork; isFeatured: boolean }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={springPopupConfig}
      className={`border border-white/10 bg-black flex flex-col justify-between rounded overflow-hidden transition-all hover:border-white/20 ${
        isFeatured ? "md:col-span-2 max-w-xl mx-auto w-full" : ""
      }`}
    >
      <div className="relative aspect-video w-full bg-black group">
        <video
          key={work.reels[activeTab].filename}
          src={
            work.reels[activeTab].filename.startsWith("http://") || 
            work.reels[activeTab].filename.startsWith("https://") 
              ? work.reels[activeTab].filename 
              : `/videos/${work.reels[activeTab].filename}`
          }
          className="w-full h-full object-cover"
          controls
          poster={work.poster ? `/videos/${work.poster}` : `/slides/slide_3.png`}
        />
        
        {/* Floating reel switcher tabs */}
        <div className="absolute top-3 right-3 flex gap-1.5 z-20">
          {work.reels.map((reel: Reel, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-2.5 py-1 text-[9px] font-mono rounded tracking-widest transition-all ${
                activeTab === idx
                  ? "bg-white text-black font-bold border border-white"
                  : "bg-black/60 text-white/60 border border-white/15 hover:bg-black/80 hover:text-white"
              }`}
            >
              {reel.name.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 text-left">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
          {work.title}
        </h3>
        <p className="text-[10px] text-white/50 font-light leading-normal">
          {work.desc} (Playing: {work.reels[activeTab].filename})
        </p>
      </div>
    </motion.div>
  );
}

// ==========================================
// 3. MAIN INTERACTIVE PORTFOLIO
// ==========================================
export default function InteractivePortfolio() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Preloader progress bar
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Injecting root HTML/body styles for smooth, controllable scrolling */}
      <style dangerouslySetInnerHTML={{__html: `
        html, body {
          background-color: black !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: auto !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 3px;
        }
      `}} />

      {/* Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[99999] bg-black flex flex-col justify-center items-center select-none"
          >
            <div className="text-center flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo.png" 
                alt="Clipzo Media" 
                className="w-20 h-20 object-contain mb-4 animate-pulse" 
              />
              <h2 className="font-display text-2xl font-black tracking-widest text-white uppercase mb-4">
                {profileData.personal.brand}
              </h2>
              <div className="w-48 h-[1px] bg-white/10 mx-auto relative overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="w-full min-h-screen bg-black text-[#f8fafc] font-sans selection:bg-white/20 selection:text-white relative">
          
          {/* Global Background Image with Low Opacity (Cinematic feel) */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/background.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
            {/* Soft dark vignette overlay to keep text highly readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
          </div>

          {/* ==========================================
              SECTION 1: HERO
             ========================================== */}
          <section className="min-h-screen w-screen flex flex-col justify-between p-6 md:p-12 relative bg-transparent border-b border-white/5 py-24">
            {/* Header */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-20">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="CM" className="w-6 h-6 object-contain rounded-sm" />
                <span className="font-display font-black text-xs tracking-widest text-white uppercase">{profileData.personal.brand}</span>
              </div>
              <a
                href={profileData.personal.cvUrl}
                download="Vinay_CV.pdf"
                className="flex items-center gap-1 border border-white/15 text-white/80 rounded px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider hover:bg-white/5 transition-all"
              >
                <Download className="w-3 h-3" />
                CV PDF
              </a>
            </div>

            {/* Main Hero with Entrance Animations */}
            <div className="my-auto text-center z-10 max-w-3xl mx-auto px-4 flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img 
                initial={{ opacity: 0, scale: 0.7, y: -40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={springPopupConfig}
                src="/logo.png" 
                alt="Clipzo Media Logo" 
                className="w-28 h-28 md:w-36 md:h-36 object-contain mb-6 rounded-lg shadow-2xl border border-white/5 bg-[#030303]" 
              />
              
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-mono text-[9px] text-white/40 tracking-widest uppercase mb-3 block"
              >
                {"// REEL MAKING AGENCY"}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 35, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ...springPopupConfig, delay: 0.3 }}
                className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase leading-none mb-6"
              >
                {profileData.personal.brand}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/50 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light mb-10"
              >
                {profileData.personal.bio}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex justify-center gap-6 text-[10px] uppercase font-mono tracking-widest text-white/60"
              >
                <span>CINEMATOGRAPHY</span>
                <span>&bull;</span>
                <span>VIDEO EDITING</span>
                <span>&bull;</span>
                <span>JAIPUR, IN</span>
              </motion.div>
            </div>

            {/* Footer indicator */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto text-[9px] font-mono text-white/30 z-20">
              <span>CLIPZO MEDIA PORTFOLIO</span>
              <span className="animate-bounce">SCROLL DOWN &darr;</span>
            </div>
          </section>

          {/* ==========================================
              SECTION 2: VIDEO WORKS (Selected Works)
             ========================================== */}
          <section className="min-h-screen w-screen flex flex-col justify-between p-6 md:p-12 relative bg-transparent border-b border-white/5 py-24">
            {/* Header */}
            <div className="w-full max-w-7xl mx-auto flex justify-between items-end border-b border-white/10 pb-4 z-20">
              <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-wider">{"// SELECTED WORKS"}</h2>
              <span className="font-mono text-[9px] text-white/40 uppercase">02 / 04</span>
            </div>

            {/* Videos Grid with Switcher */}
            <div className="my-auto w-full max-w-6xl mx-auto px-4 py-8 z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {profileData.videoWorks.map((work, index) => (
                <VideoCard
                  key={work.id}
                  work={work}
                  isFeatured={index === profileData.videoWorks.length - 1 && profileData.videoWorks.length % 2 !== 0}
                />
              ))}
            </div>

            {/* Footer helper */}
            <div className="w-full max-w-7xl mx-auto text-center text-[9px] font-mono text-white/30 z-20">
              ALL VIDEOS CONVERTED TO WEB-OPTIMIZED MP4 &bull; FAST LOADING ENFORCED
            </div>
          </section>

          {/* ==========================================
              SECTION 3: PRESENTATION GALLERY (Grid layout)
             ========================================== */}
          <section className="min-h-screen w-screen flex flex-col justify-between p-6 md:p-12 relative bg-transparent border-b border-white/5 py-24">
            {/* Header */}
            <div className="w-full max-w-7xl mx-auto flex justify-between items-end border-b border-white/10 pb-4 z-20 mb-8">
              <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-wider">{"// PRESENTATION GALLERY"}</h2>
              <span className="font-mono text-[9px] text-white/40 uppercase">03 / 04</span>
            </div>

            {/* Gallery Grid - brings images close together */}
            <div className="w-full max-w-6xl mx-auto z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mb-12">
              {profileData.slideImages.map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={springPopupConfig}
                  className="relative aspect-[4/3] rounded overflow-hidden shadow-lg border border-white/5 bg-[#050505] group cursor-pointer hover:border-white/20 transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Clipzo Media Slide ${idx + 1}`}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white/60 font-mono text-[8px] px-1.5 py-0.5 rounded tracking-wider">
                    {String(idx + 1).padStart(2, "0")} / {profileData.slideImages.length}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Slide helper */}
            <div className="w-full max-w-7xl mx-auto text-center text-[9px] font-mono text-white/30 z-20">
              PORTFOLIO SHOWCASE &bull; {profileData.personal.brand} PRESENTATION
            </div>
          </section>

          {/* ==========================================
              SECTION 4: CONTACT & DETAILS
             ========================================== */}
          <section className="min-h-screen w-screen flex flex-col justify-between p-6 md:p-12 relative bg-transparent py-24">
            {/* Header */}
            <div className="w-full max-w-7xl mx-auto flex justify-between items-end border-b border-white/10 pb-4 z-20">
              <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-wider">{"// PROFILE & CONTACT"}</h2>
              <span className="font-mono text-[9px] text-white/40 uppercase">04 / 04</span>
            </div>

            {/* Profile Content with Spring Popups */}
            <div className="my-auto w-full max-w-5xl mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
              {/* About and Education (col-span-7) */}
              <motion.div 
                initial={{ opacity: 0, y: 70, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={springPopupConfig}
                className="md:col-span-7 flex flex-col gap-6"
              >
                <div>
                  <h3 className="font-mono text-[10px] text-accent-cyan tracking-widest uppercase mb-2">{"// BIOGRAPHY"}</h3>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">
                    {profileData.personal.bio}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                  <div>
                    <h4 className="font-mono text-[9px] text-white/40 tracking-widest uppercase mb-2">{"// EDUCATION"}</h4>
                    {profileData.education.map((edu, idx) => (
                      <div key={idx} className="border-l border-white/10 pl-3 mb-3 py-0.5">
                        <h5 className="text-[11px] font-bold text-white uppercase">{edu.degree}</h5>
                        <span className="text-[9px] text-white/40 block leading-normal">{edu.institution}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-mono text-[9px] text-white/40 tracking-widest uppercase mb-2">{"// CORE SKILLS"}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {profileData.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-white/5 border border-white/10 text-[9px] text-white/80 rounded px-2.5 py-1 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Direct Contacts & Actions (col-span-5) */}
              <motion.div 
                initial={{ opacity: 0, y: 70, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={springPopupConfig}
                className="md:col-span-5 border border-white/10 p-6 bg-black/40 rounded flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-mono text-[10px] text-accent-cyan tracking-widest uppercase mb-4">{"// INQUIRIES"}</h3>
                  <div className="flex flex-col gap-4 text-xs font-mono text-white/70">
                    <div className="flex items-center gap-3">
                      <Phone className="w-3.5 h-3.5 text-accent-cyan" />
                      <a href={`tel:${profileData.personal.phone}`} className="hover:text-white transition-colors">{profileData.personal.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-3.5 h-3.5 text-accent-purple" />
                      <a href={`mailto:${profileData.personal.email}`} className="hover:text-white transition-colors">{profileData.personal.email}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>JAIPUR, RAJASTHAN</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaInstagram className="w-3.5 h-3.5 text-accent-purple" />
                      <a href={profileData.personal.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@{profileData.personal.instagram}</a>
                    </div>
                  </div>
                </div>

                <a
                  href={profileData.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-8 py-3 bg-white text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded hover:bg-[#d1d5db] transition-colors font-mono"
                >
                  <FaWhatsapp className="w-4 h-4 text-green-600" />
                  START WHATSAPP CHAT
                </a>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[9px] font-mono text-white/30 border-t border-white/10 pt-4 z-20">
              <span>© 2026 {profileData.personal.brand} &bull; ALL RIGHTS RESERVED</span>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:underline hover:text-white mt-2 sm:mt-0 uppercase"
              >
                BACK TO TOP &uarr;
              </button>
            </div>
          </section>

        </div>
      )}
    </>
  );
}
