"use client"

import { useEffect } from "react";
import Link from "next/link";
import { Droplet, Cpu, ShieldCheck, Zap, MapPin, Phone, Instagram } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LocationMap } from "@/components/ui/expand-map";
import { TiltCard } from "@/components/ui/tilt-card";

export default function Home() {
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
      <header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent bg-[#191919]/90 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="#inicio" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <img src="/logo.png" alt="Contpar Direções" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-400 uppercase font-display">
            <Link href="#inicio" className="hover:text-white transition-colors">Início</Link>
            <Link href="#servicos" className="hover:text-white transition-colors">Serviços</Link>
            <Link href="#sobre" className="hover:text-white transition-colors">Sobre</Link>
            <Link href="#contato" className="hover:text-white transition-colors">Contato</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://www.instagram.com/contpar_direcoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://wa.me/553198590098" target="_blank" className="btn-primary py-2.5 px-6 text-xs uppercase font-display">AGENDAR AGORA</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex flex-col justify-end pb-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1600&q=80" alt="Workshop" className="w-full h-full object-cover grayscale opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-[#191919]/60 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bosch-blue rounded-full blur-[150px] opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <span className="eyebrow text-white">
            <span></span> PARCEIRO OFICIAL BOSCH
          </span>
          <h1 className="font-display text-6xl md:text-[7rem] font-bold leading-[0.9] tracking-tight mb-8 uppercase text-white">
            PRECISÃO QUE<br/>MOVE O SEU<br/><span className="text-bosch-red">DESTINO.</span>
          </h1>
          <div className="max-w-xl mb-12">
            <p className="text-gray-400 text-lg leading-relaxed">
              Referência em manutenção de direções hidráulicas e elétricas em Contagem-MG. Tecnologia de ponta e o selo de qualidade Bosch para sua total segurança.
            </p>
          </div>

          {/* Call to Action Card */}
          <div className="bg-bosch-red relative overflow-hidden w-full max-w-4xl p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-l-4 border-white shadow-[0_0_40px_rgba(226,0,21,0.3)] mt-8 group">
            <div className="absolute inset-0 opacity-10 bg-dot-pattern"></div>
            <div className="relative z-10 w-full lg:w-auto overflow-hidden">
              <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-[0.95] tracking-tight mb-3 uppercase">
                DIREÇÃO DURA OU BARULHO?<br/>RESOLVA AGORA.
              </h2>
              <div className="w-full overflow-hidden whitespace-nowrap flex relative">
                <div className="animate-marquee">
                  <p className="font-display text-red-900 text-sm tracking-[0.2em] font-bold pr-8">
                    A G E N D E   U M   D I A G N Ó S T I C O   ·   G R A T U I T O   ·   S E M   C O M P R O M I S S O   ·   P A D R Ã O   B O S C H   ·
                  </p>
                  <p className="font-display text-red-900 text-sm tracking-[0.2em] font-bold pr-8">
                    A G E N D E   U M   D I A G N Ó S T I C O   ·   G R A T U I T O   ·   S E M   C O M P R O M I S S O   ·   P A D R Ã O   B O S C H   ·
                  </p>
                </div>
              </div>
            </div>
            <Link href="https://wa.me/553198590098" target="_blank" className="relative z-10 bg-[#111111] text-white font-display uppercase tracking-widest px-8 py-4 text-sm hover:bg-white hover:text-[#111111] transition-colors duration-300 w-full lg:w-auto text-center whitespace-nowrap flex-shrink-0">
              WHATSAPP
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-y border-gray-800 bg-[#111111] relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800">
            {[
              { label: "Localização", value: "CONTAGEM-MG" },
              { label: "Experiência", value: "+10 ANOS" },
              { label: "Tecnologia", value: "BOSCH" },
              { label: "Garantia", value: "ORIGINAL" },
            ].map((stat, idx) => (
              <div key={idx} className="py-8 px-4 flex flex-col items-center justify-center text-center">
                <span className="font-display text-gray-500 text-xs tracking-widest uppercase mb-1">{stat.label}</span>
                <span className="font-display text-2xl tracking-wide text-white uppercase">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Serviços Section */}
      <section id="servicos" className="section-padding bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 border-l-2 border-t-2 border-bosch-red z-0"></div>
              <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80" alt="Work" className="relative z-10 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-gray-800" />
            </div>
            <div className="lg:col-span-7">
              <span className="eyebrow"><span></span> O QUE FAZEMOS</span>
              <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-8 uppercase text-white">
                SOLUÇÕES EM<br/><span className="text-bosch-red">DIREÇÃO.</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Droplet, title: "Direção Hidráulica", desc: "Reparo de caixas, bombas e mangueiras com peças genuínas.", num: "01" },
                  { icon: Cpu, title: "Direção Elétrica", desc: "Diagnóstico computadorizado e calibração de sensores EPS.", num: "02" },
                  { icon: ShieldCheck, title: "Suspensão", desc: "Revisão completa do sistema para uma condução estável.", num: "03" },
                  { icon: Zap, title: "Padrão Bosch", desc: "Metodologia oficial de diagnóstico e garantia estendida.", num: "04" },
                ].map((serv, idx) => (
                  <TiltCard key={idx} className="tilt-card group">
                    <div className="flex items-center justify-between mb-4">
                      <serv.icon className="w-8 h-8 text-bosch-red" />
                      <span className="text-xs font-mono text-gray-600">{serv.num}</span>
                    </div>
                    <h3 className="font-display text-xl tracking-wide uppercase mb-2 text-white">{serv.title}</h3>
                    <p className="text-gray-400 text-sm">{serv.desc}</p>
                  </TiltCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-bosch-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-dot-pattern-white"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4 uppercase text-white">
                TECNOLOGIA ALEMÃ<br/>AO SEU DISPOR.
              </h2>
              <p className="text-blue-100 text-lg max-w-xl">
                Como parceiro oficial Bosch, temos acesso às ferramentas e softwares mais avançados do mundo para cuidar da sua direção.
              </p>
            </div>
            <div className="bg-white p-8 rounded shadow-xl flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/1280px-Bosch-logo.svg.png" alt="Bosch" className="h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section-padding bg-[#191919]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="eyebrow"><span></span> ONDE ESTAMOS</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95] mb-10 uppercase text-white">
                ESTAMOS EM<br/><span className="text-bosch-red">CONTAGEM.</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-bosch-red" />
                  </div>
                  <div className="text-white">
                    <h4 className="font-display text-lg tracking-widest uppercase">Endereço</h4>
                    <p className="text-gray-400">Rua Rio Tocantins, 1355<br/>Riacho das Pedras, Contagem - MG</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-bosch-red" />
                  </div>
                  <div className="text-white">
                    <h4 className="font-display text-lg tracking-widest uppercase">Telefone</h4>
                    <p className="text-gray-400">(31) 3392-1234<br/>(31) 9 9859-0098 (WhatsApp)</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-bosch-red" />
                  </div>
                  <div className="text-white">
                    <h4 className="font-display text-lg tracking-widest uppercase">Instagram</h4>
                    <Link href="https://www.instagram.com/contpar_direcoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-gray-400 hover:text-white transition-colors font-display tracking-wide uppercase text-sm">
                      @contpar_direcoes
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link href="https://wa.me/553198590098" target="_blank" className="btn-primary w-full md:w-auto uppercase font-display">WHATSAPP</Link>
              </div>
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
      <section className="py-32 bg-bosch-red relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-dot-pattern"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="font-display text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8 uppercase">
            SEGURANÇA NÃO É<br/>OPCIONAL. É BOSCH.
          </h2>
          <div className="overflow-hidden whitespace-nowrap mb-12 flex justify-center">
            <div className="animate-marquee">
              <p className="font-display text-red-900 text-xl tracking-[0.4em] font-bold pr-16 uppercase">
                A G E N D E   S U A   R E V I S Ã O   ·   P A D R Ã O   O R I G I N A L   ·   C O N T A G E M   M G   ·
              </p>
              <p className="font-display text-red-900 text-xl tracking-[0.4em] font-bold pr-16 uppercase">
                A G E N D E   S U A   R E V I S Ã O   ·   P A D R Ã O   O R I G I N A L   ·   C O N T A G E M   M G   ·
              </p>
            </div>
          </div>
          <Link href="https://wa.me/553198590098" target="_blank" className="bg-[#111111] text-white font-display uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-[#111111] transition-colors duration-300 inline-block">
            AGENDAR AGORA
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-gray-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 text-white">
              <div className="font-display text-3xl font-bold tracking-tight mb-2 uppercase text-white">Contpar <span className="text-bosch-red">Direções</span></div>
              <p className="font-display text-gray-600 tracking-[0.2em] text-xs uppercase">PRECISÃO ALEMÃ EM CADA CURVA™</p>
            </div>
            <div>
              <h4 className="font-display text-white tracking-widest uppercase mb-6">Menu</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-display uppercase">
                <li><Link href="#inicio" className="hover:text-white transition-colors">Início</Link></li>
                <li><Link href="#servicos" className="hover:text-white transition-colors">Serviços</Link></li>
                <li><Link href="#sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                <li><Link href="#contato" className="hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-white tracking-widest uppercase mb-6 font-display">Social</h4>
              <div className="flex gap-4">
                <Link href="https://www.instagram.com/contpar_direcoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="w-10 h-10 bg-gray-900 hover:bg-bosch-red flex items-center justify-center transition-colors text-gray-400 hover:text-white group" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-700 font-mono">
            <p>&copy; 2026 Contpar Direções. Todos os direitos reservados.</p>
            <p>PARCEIRO OFICIAL BOSCH CAR SERVICE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
