"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { Droplet, Cpu, ShieldCheck, Zap, MapPin, Phone, Instagram, Menu, X, MessageCircle } from "lucide-react";
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
      <header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent bg-[#191919]/90 backdrop-blur-md py-3 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          <Link href="#inicio" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <img src="/logo.png" alt="Contpar Direções" className="h-8 md:h-12 w-auto object-contain" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium tracking-wide text-gray-400 uppercase font-display">
            <Link href="#inicio" className="hover:text-white transition-colors">Início</Link>
            <Link href="#servicos" className="hover:text-white transition-colors">Serviços</Link>
            <Link href="#sobre" className="hover:text-white transition-colors">Sobre</Link>
            <Link href="#contato" className="hover:text-white transition-colors">Contato</Link>
          </nav>
          <div className="flex items-center gap-3 lg:gap-4">
            <Link href="https://www.instagram.com/contpar_direcoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="hidden sm:flex text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://wa.me/553198590098" target="_blank" className="btn-primary !px-2.5 !py-1.5 md:!px-4 md:!py-2 lg:!px-6 lg:!py-2.5 !text-[9px] md:!text-[10px] lg:!text-xs uppercase font-display whitespace-nowrap">AGENDAR AGORA</Link>
            <button 
              className="md:hidden text-gray-400 hover:text-white p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden fixed inset-0 top-[calc(100%)] bg-[#191919]/95 backdrop-blur-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-[#191919]/60 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-bosch-blue rounded-full blur-[100px] md:blur-[150px] opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10 w-full">
          <span className="eyebrow text-white text-[10px] sm:text-xs">
            <span></span> PARCEIRO OFICIAL BOSCH
          </span>
          <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-[7rem] font-bold leading-[1.05] sm:leading-[1] md:leading-[0.9] tracking-tight mb-4 sm:mb-6 md:mb-8 uppercase text-white">
            PRECISÃO QUE<br/>MOVE O SEU<br/><span className="text-bosch-red">DESTINO.</span>
          </h1>
          <div className="max-w-xl mb-8 sm:mb-12">
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Referência em manutenção de direções hidráulicas e elétricas em Contagem-MG. Tecnologia de ponta e o selo de qualidade Bosch para sua total segurança.
            </p>
          </div>

          {/* Call to Action Card */}
          <div className="bg-bosch-red relative overflow-hidden w-full max-w-4xl p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 md:gap-8 border-l-4 border-white shadow-[0_0_40px_rgba(226,0,21,0.3)] mt-4 sm:mt-8 group">
            <div className="absolute inset-0 opacity-10 bg-dot-pattern"></div>
            <div className="relative z-10 w-full md:w-auto overflow-hidden">
              <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-black text-white leading-[1.1] sm:leading-[1] md:leading-[0.95] tracking-tight mb-2 sm:mb-3 uppercase">
                DIREÇÃO DURA OU BARULHO?<br/>RESOLVA AGORA.
              </h2>
              <div className="w-full overflow-hidden whitespace-nowrap flex relative">
                <div className="animate-marquee">
                  <p className="font-display text-red-900 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-bold pr-6 sm:pr-8">
                    A G E N D E   U M   D I A G N Ó S T I C O   ·   G R A T U I T O   ·   S E M   C O M P R O M I S S O   ·   P A D R Ã O   B O S C H   ·
                  </p>
                  <p className="font-display text-red-900 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-bold pr-6 sm:pr-8">
                    A G E N D E   U M   D I A G N Ó S T I C O   ·   G R A T U I T O   ·   S E M   C O M P R O M I S S O   ·   P A D R Ã O   B O S C H   ·
                  </p>
                </div>
              </div>
            </div>
            <Link href="https://wa.me/553198590098" target="_blank" className="relative z-10 bg-[#111111] text-white font-display uppercase tracking-widest px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm hover:bg-white hover:text-[#111111] transition-colors duration-300 w-full md:w-auto text-center whitespace-nowrap flex-shrink-0">
              WHATSAPP
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-y border-gray-800 bg-[#111111] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: "Localização", value: "CONTAGEM" },
              { label: "Experiência", value: "+10 ANOS" },
              { label: "Tecnologia", value: "BOSCH" },
              { label: "Garantia", value: "ORIGINAL" },
            ].map((stat, idx) => (
              <div key={idx} className={`py-5 sm:py-6 md:py-8 px-2 md:px-4 flex flex-col items-center justify-center text-center border-gray-800 ${idx % 2 !== 0 ? "border-l" : ""} ${idx > 1 ? "border-t md:border-t-0" : ""} ${idx > 0 ? "md:border-l" : ""}`}>
                <span className="font-display text-gray-500 text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase mb-1">{stat.label}</span>
                <span className="font-display text-base sm:text-lg md:text-2xl tracking-wide text-white uppercase">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner Sinais de Alerta Bosch */}
      <section className="w-full bg-[#111111] py-10 sm:py-14 md:py-20">
        <div className="w-full">
          <img 
            src="/sinais-alerta-bosch.png" 
            alt="Sinais de alerta para revisão da caixa de direção - Ruídos ao virar o volante, Direção dura, Folga no volante, Vazamentos - Bosch Centro de Direções" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 sm:py-20 md:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="absolute -left-3 sm:-left-4 -top-3 sm:-top-4 w-16 sm:w-24 h-16 sm:h-24 border-l-2 border-t-2 border-bosch-red z-0"></div>
              <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80" alt="Work" className="relative z-10 w-full aspect-[4/3] sm:aspect-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-gray-800" />
            </div>
            <div className="lg:col-span-7">
              <span className="eyebrow"><span></span> O QUE FAZEMOS</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.05] sm:leading-[1] md:leading-[0.95] mb-5 sm:mb-6 md:mb-8 uppercase text-white">
                SOLUÇÕES EM<br/><span className="text-bosch-red">DIREÇÃO.</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: Droplet, title: "Direção Hidráulica", desc: "Reparo de caixas, bombas e mangueiras com peças genuínas.", num: "01" },
                  { icon: Cpu, title: "Direção Elétrica", desc: "Diagnóstico computadorizado e calibração de sensores EPS.", num: "02" },
                  { icon: ShieldCheck, title: "Suspensão", desc: "Revisão completa do sistema para uma condução estável.", num: "03" },
                  { icon: Zap, title: "Padrão Bosch", desc: "Metodologia oficial de diagnóstico e garantia estendida.", num: "04" },
                ].map((serv, idx) => (
                  <TiltCard key={idx} className="tilt-card group !p-5 sm:!p-6 md:!p-8">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <serv.icon className="w-6 h-6 sm:w-8 sm:h-8 text-bosch-red" />
                      <span className="text-[10px] sm:text-xs font-mono text-gray-600">{serv.num}</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl tracking-wide uppercase mb-1.5 sm:mb-2 text-white">{serv.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{serv.desc}</p>
                  </TiltCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 sm:py-20 md:py-24 bg-bosch-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-dot-pattern-white"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-3 sm:mb-4 uppercase text-white">
                TECNOLOGIA ALEMÃ<br/>AO SEU DISPOR.
              </h2>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
                Como parceiro oficial Bosch, temos acesso às ferramentas e softwares mais avançados do mundo para cuidar da sua direção.
              </p>
            </div>
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded shadow-xl flex items-center justify-center w-full sm:w-auto max-w-xs sm:max-w-none">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/1280px-Bosch-logo.svg.png" alt="Bosch" className="h-8 sm:h-10 md:h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/imagemloja.jpeg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#191919]/85"></div>
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
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-bosch-red" />
                  </div>
                  <div className="text-white">
                    <h4 className="font-display text-base sm:text-lg tracking-widest uppercase">Endereço</h4>
                    <p className="text-gray-400 font-display tracking-wide text-xs sm:text-sm mt-1 sm:mt-2">Rua Rio Tocantins, 1355<br/>Riacho das Pedras, Contagem - MG</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-bosch-red" />
                  </div>
                  <div className="text-white">
                    <h4 className="font-display text-base sm:text-lg tracking-widest uppercase">Telefone</h4>
                    <p className="text-gray-400 font-display tracking-wide text-xs sm:text-sm mt-1 sm:mt-2">(31) 3392-1234<br/>(31) 9 9859-0098 (WhatsApp)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-bosch-red" />
                  </div>
                  <div className="text-white">
                    <h4 className="font-display text-base sm:text-lg tracking-widest uppercase">Instagram</h4>
                    <Link href="https://www.instagram.com/contpar_direcoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-gray-400 hover:text-white transition-colors font-display tracking-wide uppercase text-xs sm:text-sm">
                      @contpar_direcoes
                    </Link>
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
          <Link href="https://wa.me/553198590098" target="_blank" className="bg-[#111111] text-white font-display uppercase tracking-widest px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm hover:bg-white hover:text-[#111111] transition-colors duration-300 inline-block">
            AGENDAR AGORA
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-gray-900 pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-10">
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
                <Link href="https://www.instagram.com/contpar_direcoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="w-10 h-10 bg-gray-900 hover:bg-bosch-red flex items-center justify-center transition-colors text-gray-400 hover:text-white group" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-900 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between gap-2 text-[10px] sm:text-xs text-gray-700 font-mono">
            <p>&copy; 2026 Contpar Direções. Todos os direitos reservados.</p>
            <p>PARCEIRO OFICIAL BOSCH CAR SERVICE</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#191919]/95 backdrop-blur-md border-t border-gray-800 px-4 py-3 safe-area-bottom">
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
