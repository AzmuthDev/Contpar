"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { Wrench, CircuitBoard, Container, Cable, SearchCheck, Settings, MapPin, Phone, Instagram, Menu, X, MessageCircle, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LocationMap } from "@/components/ui/expand-map";
import { TiltCard } from "@/components/ui/tilt-card";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Animations
    gsap.from("h1", {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.2,
    });

    gsap.from(".tilt-card", {
      scrollTrigger: {
        trigger: "#servicos",
        start: "top 80%",
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="min-h-screen font-sans">
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#f4f4f4] border-b border-gray-300 py-2 md:py-3 overflow-hidden">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 flex justify-between items-center">
          <Link href="#inicio" className="flex items-center transition-opacity hover:opacity-90 -ml-40 md:-ml-52">
            <img src="/contparlogosemfundo.jpeg" alt="Contpar Direções" className="h-20 md:h-32 w-auto object-contain mix-blend-multiply" style={{ filter: 'contrast(1.1) brightness(1.05)', transform: 'scale(2)', transformOrigin: 'left center' }} />
          </Link>
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-base font-bold tracking-wide text-[#2b3b8c] uppercase">
            <Link href="#inicio" className="hover:opacity-80 transition-opacity">Início</Link>
            <Link href="#servicos" className="hover:opacity-80 transition-opacity">Serviços</Link>
            <Link href="#sobre" className="hover:opacity-80 transition-opacity">Sobre</Link>
            <Link href="#contato" className="hover:opacity-80 transition-opacity">Contato</Link>
          </nav>
          <div className="flex items-center gap-3 lg:gap-5">
            <Link href="https://www.instagram.com/contpar_direcoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="hidden sm:flex text-[#2b3b8c] hover:opacity-80 transition-opacity" aria-label="Instagram">
              <Instagram className="w-9 h-9 border-2 border-[#2b3b8c] rounded-md p-1.5" />
            </Link>
            <Link href="https://wa.me/553198590098" target="_blank" className="bg-[#ed1c24] text-white hover:opacity-90 px-6 py-2.5 md:px-8 md:py-3 text-sm md:text-base font-bold uppercase whitespace-nowrap">AGENDAR AGORA</Link>
            <button 
              className="md:hidden text-[#2b3b8c] p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden fixed inset-0 top-[calc(100%)] bg-[#0a1532]/95 backdrop-blur-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          style={{ height: 'calc(100dvh - 56px)' }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
            <Link href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-bosch-red transition-colors uppercase font-display tracking-widest text-xl">Início</Link>
            <Link href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-bosch-red transition-colors uppercase font-display tracking-widest text-xl">Serviços</Link>
            <Link href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-bosch-red transition-colors uppercase font-display tracking-widest text-xl">Sobre</Link>
            <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-bosch-red transition-colors uppercase font-display tracking-widest text-xl">Contato</Link>
            <div className="w-16 h-px bg-gray-700 my-2"></div>
            <Link href="https://wa.me/553198590098" target="_blank" className="btn-primary py-2.5 px-6 text-xs uppercase font-display">Agendar Agora</Link>
            <Link href="https://www.instagram.com/contpar_direcoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-4">
              <Instagram className="w-5 h-5" />
              <span className="text-sm font-display tracking-wider uppercase">@contpar_direcoes</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[100dvh] flex flex-col justify-end pb-16 sm:pb-20 md:pb-24 pt-20 sm:pt-24 md:pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1600&q=80" alt="Workshop" className="w-full h-full object-cover grayscale opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1532] via-[#0a1532]/60 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-bosch-blue rounded-full blur-[100px] md:blur-[150px] opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10 w-full">
          <h1 className="text-[2.5rem] sm:text-5xl md:text-[5rem] font-bold leading-tight tracking-tight mb-0 text-white">
            Especialista em
          </h1>
          <h1 className="text-[2.5rem] sm:text-5xl md:text-[5rem] font-bold leading-tight tracking-tight mb-6 text-[#354397]">
            Direção Automotiva
          </h1>
          <div className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-white font-bold text-sm sm:text-base md:text-lg leading-relaxed">
              Soluções completas para veículos leves, pesados e utilitários. Qualidade, experiência e garantia em cada serviço.
            </p>
          </div>

          {/* Call to Action Card */}
          <div className="bg-[#1e235e] relative w-full max-w-4xl p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-8">
            <div className="relative z-10 w-full md:w-auto text-center md:text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase leading-snug">
                DIREÇÃO PESADA, COM BARULHO OU VAZAMENTO?<br/>RESOLVA AGORA.
              </h2>
            </div>
            <Link href="https://wa.me/553198590098" target="_blank" className="relative z-10 bg-[#ed1c24] text-white font-bold uppercase px-8 sm:px-10 py-3 text-xs sm:text-sm hover:opacity-90 transition-opacity w-full md:w-auto text-center whitespace-nowrap flex-shrink-0">
              WHATSAPP
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-b border-gray-300 bg-[#ebebeb] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-300">
            {[
              { label: "LOCALIZAÇÃO", value: "CONTAGEM -MG" },
              { label: "EXPERIÊNCIA", value: "+10 ANOS" },
              { label: "GARANTIA", value: "BOSCH" },
              { label: "ATENDIMENTO", value: "ESPECIALIZADO" },
            ].map((stat, idx) => (
              <div key={idx} className="py-5 sm:py-6 md:py-8 px-2 md:px-4 flex flex-col items-center justify-center text-center">
                <span className="text-[#2b3b8c] text-[10px] md:text-xs font-bold tracking-wider uppercase mb-1">{stat.label}</span>
                <span className="text-[#2b3b8c] text-base sm:text-lg md:text-2xl font-black uppercase">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner Sinais de Alerta Bosch */}
      <section className="w-full bg-[#071026] py-10 sm:py-14 md:py-20">
        <div className="w-full">
          <img 
            src="/sinais-alerta-bosch.png" 
            alt="Sinais de alerta para revisão da caixa de direção - Ruídos ao virar o volante, Direção dura, Folga no volante, Vazamentos - Bosch Centro de Direções" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Trilha Veículos */}
      <div className="w-full bg-[#ebebeb] border-y border-gray-300 py-4 md:py-5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16">

            {/* Linha Leve */}
            <div className="flex flex-col items-center text-center">
              <svg viewBox="0 0 80 60" className="w-16 md:w-20 h-auto mb-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Car body */}
                <path d="M12 40 L12 34 Q12 30 16 30 L22 30 L28 18 Q30 14 34 14 L50 14 Q54 14 56 18 L62 30 L66 30 Q70 30 70 34 L70 40" stroke="#2b3b8c" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Chassis line */}
                <line x1="10" y1="40" x2="72" y2="40" stroke="#2b3b8c" strokeWidth="2" strokeLinecap="round"/>
                {/* Front windshield */}
                <path d="M28 18 L24 30" stroke="#2b3b8c" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Rear windshield */}
                <path d="M56 18 L60 30" stroke="#2b3b8c" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Roof divider */}
                <line x1="42" y1="14" x2="42" y2="30" stroke="#2b3b8c" strokeWidth="1.5"/>
                {/* Door handle */}
                <line x1="35" y1="26" x2="39" y2="26" stroke="#2b3b8c" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="45" y1="26" x2="49" y2="26" stroke="#2b3b8c" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Headlight */}
                <rect x="66" y="32" width="4" height="3" rx="1" fill="#2b3b8c" opacity="0.5"/>
                <rect x="12" y="32" width="4" height="3" rx="1" fill="#2b3b8c" opacity="0.5"/>
                {/* Left wheel */}
                <circle cx="24" cy="40" r="6" stroke="#2b3b8c" strokeWidth="2" fill="#ebebeb"/>
                <circle cx="24" cy="40" r="2.5" fill="#2b3b8c"/>
                {/* Right wheel */}
                <circle cx="58" cy="40" r="6" stroke="#2b3b8c" strokeWidth="2" fill="#ebebeb"/>
                <circle cx="58" cy="40" r="2.5" fill="#2b3b8c"/>
                {/* Mirror */}
                <path d="M14 28 L10 26 L10 29 Z" fill="#2b3b8c" opacity="0.6"/>
                <path d="M68 28 L72 26 L72 29 Z" fill="#2b3b8c" opacity="0.6"/>
              </svg>
              <h3 className="text-[#2b3b8c] text-base md:text-lg font-black uppercase tracking-wider mb-2">Linha Leve</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Expert em veículos nacionais e importados</p>
            </div>

            {/* Linha Pesada */}
            <div className="flex flex-col items-center text-center">
              <svg viewBox="0 0 100 60" className="w-20 md:w-24 h-auto mb-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Cargo container */}
                <rect x="6" y="12" width="48" height="28" rx="2" stroke="#2b3b8c" strokeWidth="2" fill="none"/>
                {/* Container door lines */}
                <line x1="30" y1="12" x2="30" y2="40" stroke="#2b3b8c" strokeWidth="1" opacity="0.4"/>
                <line x1="18" y1="12" x2="18" y2="40" stroke="#2b3b8c" strokeWidth="1" opacity="0.4"/>
                <line x1="42" y1="12" x2="42" y2="40" stroke="#2b3b8c" strokeWidth="1" opacity="0.4"/>
                {/* Cabin */}
                <path d="M54 22 L54 40 L88 40 L88 28 L76 28 L68 18 L58 18 Q54 18 54 22Z" stroke="#2b3b8c" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                {/* Cabin window */}
                <rect x="70" y="29" width="10" height="7" rx="1.5" stroke="#2b3b8c" strokeWidth="1.5" fill="#ebebeb"/>
                {/* Windshield */}
                <path d="M68 18 L64 28" stroke="#2b3b8c" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Chassis */}
                <line x1="4" y1="40" x2="92" y2="40" stroke="#2b3b8c" strokeWidth="2" strokeLinecap="round"/>
                {/* Left wheels (dual) */}
                <circle cx="20" cy="40" r="5.5" stroke="#2b3b8c" strokeWidth="2" fill="#ebebeb"/>
                <circle cx="20" cy="40" r="2" fill="#2b3b8c"/>
                <circle cx="38" cy="40" r="5.5" stroke="#2b3b8c" strokeWidth="2" fill="#ebebeb"/>
                <circle cx="38" cy="40" r="2" fill="#2b3b8c"/>
                {/* Right wheel */}
                <circle cx="80" cy="40" r="5.5" stroke="#2b3b8c" strokeWidth="2" fill="#ebebeb"/>
                <circle cx="80" cy="40" r="2" fill="#2b3b8c"/>
                {/* Exhaust */}
                <rect x="88" y="36" width="4" height="3" rx="1" fill="#2b3b8c" opacity="0.4"/>
              </svg>
              <h3 className="text-[#2b3b8c] text-base md:text-lg font-black uppercase tracking-wider mb-2">Linha Pesada</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Trabalho especializado para caminhões e ônibus.</p>
            </div>

            {/* Linha de Utilitários */}
            <div className="flex flex-col items-center text-center">
              <svg viewBox="0 0 90 60" className="w-18 md:w-22 h-auto mb-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Pickup body */}
                <path d="M10 38 L10 30 Q10 26 14 26 L30 26 L30 16 Q30 12 34 12 L56 12 Q60 12 62 16 L68 26 L74 26 Q78 26 78 30 L78 38" stroke="#2b3b8c" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Cargo bed */}
                <rect x="10" y="26" width="20" height="12" stroke="#2b3b8c" strokeWidth="1.5" fill="none" rx="1"/>
                {/* Cabin divider / rear window */}
                <line x1="30" y1="12" x2="30" y2="38" stroke="#2b3b8c" strokeWidth="2"/>
                {/* Front windshield */}
                <path d="M62 16 L66 26" stroke="#2b3b8c" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Pillar */}
                <line x1="46" y1="12" x2="46" y2="26" stroke="#2b3b8c" strokeWidth="1.5"/>
                {/* Door handle */}
                <line x1="50" y1="22" x2="54" y2="22" stroke="#2b3b8c" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="36" y1="22" x2="40" y2="22" stroke="#2b3b8c" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Headlight */}
                <rect x="74" y="28" width="4" height="3" rx="1" fill="#2b3b8c" opacity="0.5"/>
                {/* Taillight */}
                <rect x="10" y="28" width="3" height="3" rx="1" fill="#2b3b8c" opacity="0.5"/>
                {/* Chassis */}
                <line x1="8" y1="38" x2="80" y2="38" stroke="#2b3b8c" strokeWidth="2" strokeLinecap="round"/>
                {/* Roof rack hint */}
                <line x1="34" y1="11" x2="58" y2="11" stroke="#2b3b8c" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                {/* Left wheel */}
                <circle cx="22" cy="38" r="6" stroke="#2b3b8c" strokeWidth="2" fill="#ebebeb"/>
                <circle cx="22" cy="38" r="2.5" fill="#2b3b8c"/>
                {/* Right wheel */}
                <circle cx="66" cy="38" r="6" stroke="#2b3b8c" strokeWidth="2" fill="#ebebeb"/>
                <circle cx="66" cy="38" r="2.5" fill="#2b3b8c"/>
                {/* Mirror */}
                <path d="M76 24 L80 22 L80 25 Z" fill="#2b3b8c" opacity="0.6"/>
              </svg>
              <h3 className="text-[#2b3b8c] text-base md:text-lg font-black uppercase tracking-wider mb-2">Linha de Utilitários</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Restauramos direções de picapes, caminhonetes, vans e SUVs.</p>
            </div>

          </div>
        </div>
      </div>


      {/* Serviços Section */}
      <section id="servicos" className="py-16 sm:py-20 md:py-28 bg-[#071026]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          {/* Header com imagem */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            <div className="lg:col-span-5 relative">
              <div className="absolute -left-3 sm:-left-4 -top-3 sm:-top-4 w-16 sm:w-24 h-16 sm:h-24 border-l-2 border-t-2 border-bosch-red z-0"></div>
              <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80" alt="Work" className="relative z-10 w-full aspect-[4/3] sm:aspect-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-[#101e45]" />
            </div>
            <div className="lg:col-span-7">
              <span className="eyebrow"><span></span> NOSSOS SERVIÇOS</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.05] sm:leading-[1] md:leading-[0.95] mb-5 sm:mb-6 md:mb-8 uppercase text-white">
                SOLUÇÕES EM<br/><span className="text-bosch-red">DIREÇÃO.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                Oferecemos soluções especializadas em sistemas de direção hidráulica para veículos leves, utilitários, caminhões, ônibus e máquinas, garantindo segurança, desempenho e confiabilidade.
              </p>
            </div>
          </div>

          {/* Grid de 6 serviços */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { icon: Wrench, title: "Recuperação de Caixas de Direção", desc: "Reparo e recuperação de caixas de direção hidráulica, restaurando seu funcionamento e prolongando a vida útil do componente.", num: "01" },
              { icon: CircuitBoard, title: "Reparo de Bombas Hidráulicas", desc: "Manutenção e recuperação de bombas hidráulicas com diagnóstico preciso e utilização de componentes de qualidade.", num: "02" },
              { icon: Container, title: "Substituição de Reservatórios", desc: "Troca de reservatórios da direção hidráulica danificados ou desgastados, garantindo o correto funcionamento do sistema.", num: "03" },
              { icon: Cable, title: "Troca de Mangueiras Hidráulicas", desc: "Substituição de mangueiras e conexões do conjunto de direção hidráulica, eliminando vazamentos e prevenindo falhas.", num: "04" },
              { icon: SearchCheck, title: "Diagnóstico de Falhas", desc: "Identificação precisa de problemas no sistema de direção hidráulica através de testes e inspeções especializadas.", num: "05" },
              { icon: Settings, title: "Manutenção Preventiva e Corretiva", desc: "Serviços de manutenção para prevenir desgastes prematuros, corrigir falhas e aumentar a confiabilidade do sistema.", num: "06" },
            ].map((serv, idx) => (
              <TiltCard key={idx} className="tilt-card group !p-5 sm:!p-6 md:!p-8">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <serv.icon className="w-6 h-6 sm:w-8 sm:h-8 text-bosch-red" />
                  <span className="text-[10px] sm:text-xs font-mono text-gray-600">{serv.num}</span>
                </div>
                <h3 className="font-display text-base sm:text-lg tracking-wide uppercase mb-1.5 sm:mb-2 text-white">{serv.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{serv.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 sm:py-20 md:py-24 bg-[#0a1532] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-dot-pattern-white"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            
            {/* Image Left */}
            <div className="w-full">
              <div className="bg-white p-2 sm:p-3 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <img src="/imagemloja.jpeg" alt="Contpar Direções Hidráulicas - Loja" className="w-full h-auto object-cover border border-gray-100 aspect-[4/3] sm:aspect-auto" />
              </div>
            </div>

            {/* Text Right */}
            <div className="text-left text-white">
              <span className="eyebrow"><span></span> NOSSA HISTÓRIA</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 sm:mb-8 uppercase">
                SOBRE A <span className="text-[#ed1c24]">CONTPAR</span>
              </h2>
              
              <div className="space-y-4 text-blue-50 text-sm sm:text-base leading-relaxed">
                <p>
                  A <strong>Contpar Direções Hidráulicas</strong> é especializada em sistemas de direção hidráulica para veículos leves e pesados.
                </p>
                <p>
                  Há 10 anos no mercado, construímos nossa reputação com base na qualidade dos serviços, atendimento transparente e compromisso com a satisfação dos clientes.
                </p>
                <p>
                  Somos uma oficina credenciada <strong>Bosch</strong>, seguindo padrões reconhecidos mundialmente em diagnóstico e reparação automotiva, o que reforça nosso compromisso com a excelência e a constante atualização técnica.
                </p>
                <p>
                  Contamos com uma equipe qualificada e equipamentos modernos para realizar diagnósticos precisos, manutenção preventiva e corretiva, além da recuperação de componentes de direção hidráulica.
                </p>
                <p className="font-bold text-white pt-4 border-t border-white/10 mt-6 text-base sm:text-lg">
                  Nosso objetivo é oferecer segurança, desempenho e confiabilidade, entregando soluções eficientes e serviços de qualidade para cada cliente.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/imagemloja.jpeg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1532]/85"></div>
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-8 items-start">
            <div>
              <span className="eyebrow"><span></span> ONDE ESTAMOS</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.05] sm:leading-[1] md:leading-[0.95] mb-6 sm:mb-8 md:mb-10 uppercase text-white">
                ESTAMOS EM<br/><span className="text-bosch-red">CONTAGEM.</span>
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#101e45] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-bosch-red" />
                  </div>
                  <div className="text-white">
                    <h4 className="font-display text-base sm:text-lg tracking-widest uppercase">Endereço</h4>
                    <p className="text-gray-400 font-display tracking-wide text-xs sm:text-sm mt-1 sm:mt-2">Rua Rio Tocantins, 1355<br/>Riacho das Pedras, Contagem - MG</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#101e45] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-bosch-red" />
                  </div>
                  <div className="text-white">
                    <h4 className="font-display text-base sm:text-lg tracking-widest uppercase">Telefone</h4>
                    <p className="text-gray-400 font-display tracking-wide text-xs sm:text-sm mt-1 sm:mt-2">(31) 3392-1234<br/>(31) 9 9859-0098 (WhatsApp)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#101e45] flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-bosch-red" />
                  </div>
                  <div className="text-white">
                    <h4 className="font-display text-base sm:text-lg tracking-widest uppercase">Instagram</h4>
                    <Link href="https://www.instagram.com/contpar_direcoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-gray-400 hover:text-white transition-colors font-display tracking-wide uppercase text-xs sm:text-sm">
                      @contpar_direcoes
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#101e45] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-bosch-red" />
                  </div>
                  <div className="text-white">
                    <h4 className="font-display text-base sm:text-lg tracking-widest uppercase">Horário</h4>
                    <p className="text-gray-400 font-display tracking-wide text-xs sm:text-sm mt-1 sm:mt-2">
                      Segunda a Sexta: 08:00 às 18:00<br/>
                      Almoço: 11:30 às 13:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12">
                <Link href="https://wa.me/553198590098" target="_blank" className="btn-primary w-full sm:w-auto uppercase font-display text-xs sm:text-sm">WHATSAPP</Link>
              </div>
            </div>
            
            {/* Promotional Banner Column */}
            <div className="flex justify-center w-full">
              <img 
                src="/contparimagem6.jpeg" 
                alt="Colocou a revisão na sua rota? Agende seu horário." 
                className="w-full max-w-sm rounded-lg shadow-2xl object-cover"
              />
            </div>
            
            {/* Integrated LocationMap Component */}
            <div className="flex justify-center lg:justify-end">
              <LocationMap 
                location="Contagem, MG" 
                coordinates="-19.9442° S, -44.0321° W" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marcas Atendidas */}
      <section className="w-full bg-[#0a1230] border-y border-[#1a2550] py-6 md:py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Label */}
            <div className="flex-shrink-0">
              <h3 className="text-white/60 text-xs md:text-sm font-bold tracking-[0.25em] uppercase whitespace-nowrap">Marcas Atendidas</h3>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-white/15 flex-shrink-0"></div>
            {/* Brand Logos */}
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center justify-center md:justify-start gap-6 sm:gap-8 md:gap-10 lg:gap-14 flex-wrap md:flex-nowrap">
                {/* Mercedes-Benz */}
                <div className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 80 80" className="w-10 h-10 md:w-12 md:h-12" fill="none">
                    <circle cx="40" cy="40" r="36" stroke="white" strokeWidth="2.5"/>
                    <circle cx="40" cy="40" r="30" stroke="white" strokeWidth="1.5"/>
                    <line x1="40" y1="10" x2="40" y2="40" stroke="white" strokeWidth="2"/>
                    <line x1="40" y1="40" x2="14" y2="58" stroke="white" strokeWidth="2"/>
                    <line x1="40" y1="40" x2="66" y2="58" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                {/* Volvo */}
                <div className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 80 80" className="w-10 h-10 md:w-12 md:h-12" fill="none">
                    <circle cx="40" cy="40" r="34" stroke="white" strokeWidth="2.5"/>
                    <line x1="40" y1="6" x2="55" y2="6" stroke="white" strokeWidth="2.5"/>
                    <text x="40" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">VOLVO</text>
                  </svg>
                </div>
                {/* Scania */}
                <div className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 90 40" className="w-16 h-8 md:w-20 md:h-10" fill="none">
                    <rect x="2" y="2" width="86" height="36" rx="4" stroke="white" strokeWidth="2"/>
                    <text x="45" y="26" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial" letterSpacing="2">SCANIA</text>
                  </svg>
                </div>
                {/* Volkswagen */}
                <div className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 80 80" className="w-10 h-10 md:w-12 md:h-12" fill="none">
                    <circle cx="40" cy="40" r="36" stroke="white" strokeWidth="2.5"/>
                    <path d="M22 20 L40 58 L58 20" stroke="white" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
                    <path d="M28 20 L40 48 L52 20" stroke="white" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Iveco */}
                <div className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 100 40" className="w-16 h-7 md:w-20 md:h-9" fill="none">
                    <text x="50" y="28" textAnchor="middle" fill="white" fontSize="22" fontWeight="900" fontFamily="Arial" letterSpacing="3">IVECO</text>
                  </svg>
                </div>
                {/* Ford */}
                <div className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 100 45" className="w-14 h-7 md:w-18 md:h-9" fill="none">
                    <ellipse cx="50" cy="22" rx="46" ry="20" stroke="white" strokeWidth="2"/>
                    <text x="50" y="29" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontStyle="italic" fontFamily="Georgia, serif">Ford</text>
                  </svg>
                </div>
                {/* Chevrolet */}
                <div className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 80 50" className="w-12 h-8 md:w-14 md:h-9" fill="none">
                    <rect x="5" y="15" width="70" height="20" rx="2" stroke="white" strokeWidth="2"/>
                    <rect x="20" y="18" width="40" height="14" rx="1" fill="white" opacity="0.2"/>
                    <polygon points="25,22 35,22 33,28 23,28" fill="white"/>
                    <polygon points="45,22 55,22 57,28 47,28" fill="white"/>
                  </svg>
                </div>
                {/* Fiat */}
                <div className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 80 40" className="w-12 h-6 md:w-16 md:h-8" fill="none">
                    <text x="40" y="30" textAnchor="middle" fill="white" fontSize="26" fontWeight="900" fontFamily="Arial" letterSpacing="4">FIAT</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Link */}
          <div className="mt-4 md:mt-5 text-center md:text-left md:pl-[calc(theme(spacing.32)+theme(spacing.10))]">
            <span className="text-sky-400 text-xs font-bold tracking-wider uppercase cursor-pointer hover:text-sky-300 transition-colors">
              VER TODAS AS MARCAS →
            </span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-32 bg-bosch-red relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-dot-pattern"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <h2 className="font-display text-3xl sm:text-5xl md:text-8xl font-black text-white leading-tight md:leading-[1.1] tracking-tight mb-4 sm:mb-6 md:mb-8 uppercase">
            SEGURANÇA NÃO É<br/>OPCIONAL. É BOSCH.
          </h2>
          <div className="overflow-hidden whitespace-nowrap mb-8 sm:mb-12 flex justify-center">
            <div className="animate-marquee">
              <p className="font-display text-red-900 text-sm sm:text-base md:text-xl tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] font-bold pr-8 sm:pr-12 md:pr-16 uppercase">
                A G E N D E   S U A   R E V I S Ã O   ·   P A D R Ã O   O R I G I N A L   ·   C O N T A G E M   M G   ·
              </p>
              <p className="font-display text-red-900 text-sm sm:text-base md:text-xl tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] font-bold pr-8 sm:pr-12 md:pr-16 uppercase">
                A G E N D E   S U A   R E V I S Ã O   ·   P A D R Ã O   O R I G I N A L   ·   C O N T A G E M   M G   ·
              </p>
            </div>
          </div>
          <Link href="https://wa.me/553198590098" target="_blank" className="bg-[#071026] text-white font-display uppercase tracking-widest px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm hover:bg-white hover:text-[#071026] transition-colors duration-300 inline-block">
            AGENDAR AGORA
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#04091a] border-t border-[#0a1532] pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
            <div className="col-span-2 text-white">
              <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2 uppercase text-white">Contpar <span className="text-bosch-red">Direções</span></div>
              <p className="font-display text-gray-600 tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs uppercase">PRECISÃO ALEMÃ EM CADA CURVA™</p>
            </div>
            <div>
              <h4 className="font-display text-white tracking-widest uppercase mb-4 sm:mb-6 text-sm">Menu</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-500 font-display uppercase">
                <li><Link href="#inicio" className="hover:text-white transition-colors">Início</Link></li>
                <li><Link href="#servicos" className="hover:text-white transition-colors">Serviços</Link></li>
                <li><Link href="#sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                <li><Link href="#contato" className="hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-white tracking-widest uppercase mb-4 sm:mb-6 text-sm">Social</h4>
              <div className="flex gap-3 sm:gap-4">
                <Link href="https://www.instagram.com/contpar_direcoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="w-10 h-10 bg-[#101e45] hover:bg-bosch-red flex items-center justify-center transition-colors text-gray-400 hover:text-white group" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-[#0a1532] pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between gap-2 text-[10px] sm:text-xs text-gray-700 font-mono">
            <p>&copy; 2026 Contpar Direções. Todos os direitos reservados.</p>
            <p>PARCEIRO OFICIAL BOSCH CAR SERVICE</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0a1532]/95 backdrop-blur-md border-t border-[#101e45] px-4 py-3 safe-area-bottom">
        <Link 
          href="https://wa.me/553198590098" 
          target="_blank" 
          className="flex items-center justify-center gap-2 w-full bg-bosch-red text-white font-display font-bold uppercase tracking-widest text-xs py-3 rounded-sm shadow-[0_0_20px_rgba(226,0,21,0.3)] active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          AGENDAR PELO WHATSAPP
        </Link>
      </div>
    </div>
  );
}
