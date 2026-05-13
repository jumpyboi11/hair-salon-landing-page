import React, { useRef, useState } from 'react';
import { ArrowUpRight, Droplet, Scissors, Sparkles, X, Calendar, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ onOpenBooking }) => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-5xl rounded-[2rem] transition-all duration-300 pointer-events-none">
    <div className="px-6 py-4 flex items-center justify-between pointer-events-auto rounded-[2rem] border border-charcoal/5 bg-cream/80 backdrop-blur-md">
      <div className="text-xl font-bold tracking-tight">Studio Róż</div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#o-nas" className="link-lift hover:text-rose transition-colors">O nas</a>
        <a href="#usługi" className="link-lift hover:text-rose transition-colors">Usługi</a>
        <a href="#cennik" className="link-lift hover:text-rose transition-colors">Cennik</a>
      </div>
      <button onClick={onOpenBooking} className="magnetic-btn bg-charcoal text-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-moss transition-colors">Zarezerwuj termin</button>
    </div>
  </nav>
);

const Hero = ({ onOpenBooking }) => (
  <section className="relative h-[100dvh] w-full overflow-hidden bg-charcoal rounded-b-[2rem] md:rounded-b-[3rem]">
    <div className="hero-bg absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop")' }}></div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent"></div>
    <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 flex flex-col justify-end">
      <div className="max-w-3xl">
        <h1 className="text-cream flex flex-col gap-2">
          <span className="hero-text text-4xl md:text-6xl font-bold tracking-tight">Twój nowy wymiar</span>
          <span className="hero-text text-7xl md:text-9xl font-drama italic text-rose leading-[0.9]">piękna.</span>
        </h1>
        <p className="hero-text mt-8 text-cream/80 max-w-md text-lg font-medium">Profesjonalna koloryzacja, nowoczesne strzyżenie i głęboka pielęgnacja w sercu Oławy.</p>
        <div className="hero-text mt-10">
          <button onClick={onOpenBooking} className="magnetic-btn bg-cream text-charcoal px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-rose hover:text-cream transition-colors">
            Umów wizytę 
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="usługi" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Nasze Usługi</h2>
      <p className="text-charcoal/60 max-w-lg mx-auto">Odkryj nasz wymiar pielęgnacji, gdzie sztuka spotyka się z naturą.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="group relative h-96 w-full rounded-[2rem] overflow-hidden cursor-pointer magnetic-btn">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transition-transform duration-500 ease-out group-hover:-translate-y-2">
          <h3 className="text-4xl text-cream font-drama italic mb-3">Strzyżenie</h3>
          <p className="text-cream/80 text-sm font-medium leading-relaxed">Precyzyjne cięcie i modelowanie dopasowane do kształtu twarzy oraz Twojego stylu życia.</p>
        </div>
      </div>
      <div className="group relative h-96 w-full rounded-[2rem] overflow-hidden cursor-pointer magnetic-btn">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2680&auto=format&fit=crop")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transition-transform duration-500 ease-out group-hover:-translate-y-2">
          <h3 className="text-4xl text-cream font-drama italic mb-3">Koloryzacja</h3>
          <p className="text-cream/80 text-sm font-medium leading-relaxed">Zaawansowane techniki i bezpieczne rozjaśnianie przy użyciu najwyższej jakości produktów premium.</p>
        </div>
      </div>
      <div className="group relative h-96 w-full rounded-[2rem] overflow-hidden cursor-pointer magnetic-btn">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transition-transform duration-500 ease-out group-hover:-translate-y-2">
          <h3 className="text-4xl text-cream font-drama italic mb-3">Regeneracja</h3>
          <p className="text-cream/80 text-sm font-medium leading-relaxed">Głęboka, organiczna odnowa zniszczonych włosów, przywracająca im naturalny blask i siłę.</p>
        </div>
      </div>
    </div>
  </section>
);

const Manifesto = () => (
  <section className="relative py-32 overflow-hidden bg-moss rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-6 my-12">
    <div className="parallax-bg absolute -top-[20%] left-0 w-full h-[140%] bg-cover bg-center opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=2787&auto=format&fit=crop")' }}></div>
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <p className="manifesto-line text-2xl md:text-4xl text-cream/70 font-light leading-relaxed mb-8">
        Większość salonów skupia się na:<br />szybkim cięciu i masowej obsłudze.
      </p>
      <p className="manifesto-line text-3xl md:text-5xl text-cream font-drama italic leading-tight">
        My skupiamy się na: <br />indywidualnym podejściu i absolutnym zdrowiu Twoich włosów.
      </p>
    </div>
  </section>
);

const Protocols = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.protocol-card');
    
    cards.forEach((card, index) => {
      // Pin each card when it reaches the top, until the very last card finishes scrolling
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
        end: () => `+=${window.innerHeight * (cards.length - index - 1)}`,
      });
    });
  }, { scope: containerRef });

  return (
    <section id="o-nas" ref={containerRef} className="relative hidden md:block" style={{ height: '300vh' }}>
      <div className="protocol-card absolute top-0 left-0 h-[100dvh] w-full flex items-center justify-center p-6 bg-cream text-charcoal">
        <div className="max-w-3xl w-full flex justify-between items-end border-b border-current/20 pb-8">
          <div>
            <div className="font-mono text-sm tracking-widest opacity-60 mb-4">PROTOKÓŁ 01</div>
            <h2 className="text-5xl md:text-8xl font-drama italic tracking-tight">Diagnoza</h2>
          </div>
          <p className="text-lg md:text-xl font-medium max-w-xs">Krok 1: Konsultacja i dogłębna analiza struktury włosa.</p>
        </div>
      </div>
      <div className="protocol-card absolute top-[100vh] left-0 h-[100dvh] w-full flex items-center justify-center p-6 bg-rose text-cream shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-3xl w-full flex justify-between items-end border-b border-current/20 pb-8">
          <div>
            <div className="font-mono text-sm tracking-widest opacity-60 mb-4">PROTOKÓŁ 02</div>
            <h2 className="text-5xl md:text-8xl font-drama italic tracking-tight">Zabieg</h2>
          </div>
          <p className="text-lg md:text-xl font-medium max-w-xs">Krok 2: Personalizowana technika dopasowana do Twoich potrzeb.</p>
        </div>
      </div>
      <div className="protocol-card absolute top-[200vh] left-0 h-[100dvh] w-full flex items-center justify-center p-6 bg-moss text-cream shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-3xl w-full flex justify-between items-end border-b border-current/20 pb-8">
          <div>
            <div className="font-mono text-sm tracking-widest opacity-60 mb-4">PROTOKÓŁ 03</div>
            <h2 className="text-5xl md:text-8xl font-drama italic tracking-tight">Domknięcie</h2>
          </div>
          <p className="text-lg md:text-xl font-medium max-w-xs">Krok 3: Stylizacja i zalecenia pielęgnacji domowej.</p>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="cennik" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Cennik orientacyjny</h2>
      <p className="text-charcoal/60 max-w-lg mx-auto">Finalna cena zależy od zużycia materiału i długości włosów. Dokładną wycenę podajemy podczas konsultacji.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      <div className="bg-white border border-charcoal/10 rounded-[2rem] p-8 magnetic-btn">
        <h3 className="text-2xl font-bold mb-2">Strzyżenie Damskie</h3>
        <p className="text-charcoal/60 mb-8 font-mono text-sm">od 120 PLN</p>
        <ul className="space-y-4 mb-8 text-sm">
          <li className="flex gap-3"><Droplet className="w-5 h-5 text-moss shrink-0" /> Mycie relaksacyjne</li>
          <li className="flex gap-3"><Scissors className="w-5 h-5 text-moss shrink-0" /> Precyzyjne cięcie</li>
          <li className="flex gap-3"><Sparkles className="w-5 h-5 text-moss shrink-0" /> Modelowanie</li>
        </ul>
      </div>
      <div className="bg-rose text-cream rounded-[2.5rem] p-10 shadow-2xl scale-105 z-10 magnetic-btn">
        <div className="inline-block bg-cream/20 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-6">BESTSELLER</div>
        <h3 className="text-3xl font-bold mb-2">Koloryzacja Globalna</h3>
        <p className="text-cream/80 mb-8 font-mono text-sm">od 250 PLN</p>
        <ul className="space-y-4 mb-8 text-sm text-cream/90">
          <li className="flex gap-3"><Droplet className="w-5 h-5 shrink-0" /> Ochrona struktury</li>
          <li className="flex gap-3"><Scissors className="w-5 h-5 shrink-0" /> Personalizowany kolor</li>
          <li className="flex gap-3"><Sparkles className="w-5 h-5 shrink-0" /> Tonowanie</li>
        </ul>
        <button className="w-full bg-cream text-charcoal py-3 rounded-full font-bold hover:scale-105 transition-transform">Wybieram</button>
      </div>
      <div className="bg-white border border-charcoal/10 rounded-[2rem] p-8 magnetic-btn">
        <h3 className="text-2xl font-bold mb-2">Regeneracja Premium</h3>
        <p className="text-charcoal/60 mb-8 font-mono text-sm">od 180 PLN</p>
        <ul className="space-y-4 mb-8 text-sm">
          <li className="flex gap-3"><Droplet className="w-5 h-5 text-moss shrink-0" /> Peeling skóry głowy</li>
          <li className="flex gap-3"><Scissors className="w-5 h-5 text-moss shrink-0" /> Wtłaczanie ampułki</li>
          <li className="flex gap-3"><Sparkles className="w-5 h-5 text-moss shrink-0" /> Sauna na włosy</li>
        </ul>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="kontakt" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Kontakt</h2>
      <p className="text-charcoal/60 max-w-lg mx-auto">Masz pytania? Chcesz ustalić szczegóły? Napisz do nas.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div className="bg-white border border-charcoal/10 rounded-[2rem] p-8 md:p-12 shadow-sm">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-charcoal/80">Imię i nazwisko</label>
            <input required className="w-full bg-cream/50 border border-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-moss transition-colors" placeholder="Twoje imię" type="text" name="name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-charcoal/80">Adres email</label>
            <input required className="w-full bg-cream/50 border border-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-moss transition-colors" placeholder="twoj@email.pl" type="email" name="email" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-charcoal/80">Wiadomość</label>
            <textarea required name="message" rows="4" className="w-full bg-cream/50 border border-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-moss transition-colors resize-none" placeholder="W czym możemy pomóc?"></textarea>
          </div>
          <button type="submit" className="magnetic-btn w-full bg-charcoal text-cream py-4 rounded-xl font-bold hover:bg-moss transition-colors flex justify-center items-center">Wyślij wiadomość</button>
        </form>
      </div>
      <div className="h-full min-h-[400px] w-full bg-charcoal/5 rounded-[2rem] overflow-hidden shadow-xl">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39999.64293910336!2d17.25203387818471!3d50.94191024345326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe007bdeb387f%3A0xc3f173b9846b0a88!2sO%C5%82awa!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full object-cover" style={{ border: 0, minHeight: '400px' }}></iframe>
      </div>
    </div>
  </section>
);

const Footer = ({ onOpenBooking }) => (
  <footer className="bg-charcoal text-cream pt-24 pb-12 px-6 md:px-12 rounded-t-[3rem] md:rounded-t-[4rem] text-sm">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-cream/10 pb-16">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold mb-6">Studio Róż</h2>
        <p className="text-cream/60 max-w-sm mb-8">Przełamujemy schematy w pielęgnacji i koloryzacji. Twoje włosy zasługują na bezkompromisową jakość i organiczne luksusowe produkty.</p>
        <button onClick={onOpenBooking} className="magnetic-btn border border-cream/20 px-6 py-2 rounded-full hover:bg-cream hover:text-charcoal transition-colors">Zarezerwuj termin</button>
      </div>
      <div>
        <h4 className="font-mono text-xs opacity-50 mb-6 tracking-widest uppercase">Kontakt</h4>
        <ul className="space-y-4 opacity-80">
          <li>Oława</li>
          <li>ul. Przykładowa 1</li>
          <li>+48 123 456 789</li>
          <li>hello@studioroz.pl</li>
        </ul>
      </div>
      <div>
        <h4 className="font-mono text-xs opacity-50 mb-6 tracking-widest uppercase">Godziny</h4>
        <ul className="space-y-4 opacity-80">
          <li className="flex justify-between"><span>Pon - Pt</span> <span>09:00 - 19:00</span></li>
          <li className="flex justify-between"><span>Sobota</span> <span>09:00 - 14:00</span></li>
          <li className="flex justify-between text-rose"><span>Niedziela</span> <span>Zamknięte</span></li>
        </ul>
      </div>
    </div>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 opacity-40 text-xs">
      <p>© 2026 Studio Róż. Wszelkie prawa zastrzeżone.</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-rose transition-colors">Instagram</a>
        <a href="#" className="hover:text-rose transition-colors">Facebook</a>
      </div>
    </div>
  </footer>
);

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#F0EBE1] w-full max-w-lg rounded-[2rem] p-8 md:p-10 shadow-2xl z-10 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-charcoal/5 hover:bg-charcoal/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-charcoal/60" />
        </button>

        <h2 className="text-3xl font-drama italic text-charcoal mb-2">Zarezerwuj termin</h2>
        <p className="text-charcoal/60 text-sm mb-8">Wypełnij poniższe dane, aby ustalić wizytę w naszym salonie.</p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2 text-charcoal/80">Wybierz usługę</label>
            <select className="w-full bg-white border border-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-moss transition-colors appearance-none text-charcoal">
              <option>-- Wybierz z listy --</option>
              <option>Strzyżenie Damskie</option>
              <option>Koloryzacja Globalna</option>
              <option>Regeneracja Premium</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2 text-charcoal/80">
                <Calendar className="w-4 h-4" /> Data
              </label>
              <input type="date" className="w-full bg-white border border-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-moss transition-colors text-charcoal" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2 text-charcoal/80">
                <Clock className="w-4 h-4" /> Godzina
              </label>
              <select className="w-full bg-white border border-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-moss transition-colors appearance-none text-charcoal">
                <option>Wybierz</option>
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-charcoal/80">Imię i nazwisko</label>
            <input type="text" placeholder="Twoje dane" className="w-full bg-white border border-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-moss transition-colors" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-charcoal/80">Numer telefonu</label>
            <input type="tel" placeholder="+48 ___ ___ ___" className="w-full bg-white border border-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-moss transition-colors" />
          </div>

          <button type="button" className="magnetic-btn w-full bg-charcoal text-cream py-4 rounded-xl font-bold hover:bg-moss transition-colors mt-4">
            Potwierdź rezerwację
          </button>
        </form>
      </div>
    </div>
  );
};

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative w-full overflow-hidden bg-cream font-sans text-charcoal selection:bg-rose selection:text-cream">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      <Services />
      <Manifesto />
      <Protocols />
      <Pricing />
      <Contact />
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;
