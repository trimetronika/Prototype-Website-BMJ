import { 
  ShieldCheck, 
  Trash2, 
  ParkingCircle, 
  UserRound, 
  Users, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  ArrowRight,
  ExternalLink,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setShowScrollTop(y > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Diklat Satpam', href: '#diklat' },
    { name: 'Karir', href: '#karir' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const services = [
    {
      id: 1,
      title: 'Security Service',
      desc: 'Pelayanan keamanan dengan kemampuan dasar maintenance risk incident, protection, prevention, dan pengawasan terpadu.',
      icon: <ShieldCheck className="w-10 h-10 text-bmj-red" />
    },
    {
      id: 2,
      title: 'Cleaning Service',
      desc: 'Layanan kebersihan profesional menggunakan peralatan modern dan bahan ramah lingkungan untuk menciptakan suasana nyaman, bersih, dan excellence.',
      icon: <Trash2 className="w-10 h-10 text-bmj-red" />
    },
    {
      id: 3,
      title: 'Security Parking',
      desc: 'Petugas keamanan khusus yang bertanggung jawab menjaga, mengatur, dan mengawasi area parkir agar tetap aman dan tertib.',
      icon: <ParkingCircle className="w-10 h-10 text-bmj-red" />
    },
    {
      id: 4,
      title: 'Driver',
      desc: 'Tenaga pengemudi profesional yang telah melalui uji kelayakan, memahami etika berkendara, rute perjalanan, dan mengutamakan keselamatan.',
      icon: <UserRound className="w-10 h-10 text-bmj-red" />
    },
    {
      id: 5,
      title: 'Karyawan Produksi',
      desc: 'Tenaga kerja produksi yang kompeten, disiplin, dan berorientasi pada hasil kerja optimal untuk industri Anda.',
      icon: <Users className="w-10 h-10 text-bmj-red" />
    }
  ];

  const waLink = "https://wa.me/6289659706408";

  const Logo = ({ className = "" }: { className?: string }) => (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <img 
        src="/bmj_logo.svg" 
        alt="Logo PT Bina Mitra Jaya" 
        className="h-10 md:h-14 w-auto"
        width={280}
        height={80}
        onError={(e) => {
          // Fall back to PNG if SVG is not supported
          if (e.currentTarget.src.includes('bmj_logo.svg')) {
            e.currentTarget.src = '/bmj_logo.png';
          }
        }}
      />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <header 
        role="banner"
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="hidden lg:block">
              <p className={`text-sm font-bold leading-tight ${scrolled ? 'text-bmj-blue' : 'text-white'}`}>PT. BINA MITRA JAYA</p>
              <p className={`text-[10px] font-medium tracking-widest ${scrolled ? 'text-bmj-red/80' : 'text-slate-300'}`}>BERSAMA BMJ PASTI JAYA</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Menu utama">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className={`text-sm font-semibold transition-colors hover:text-bmj-red ${
                  scrolled ? 'text-bmj-blue' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Konsultasi via WhatsApp – buka di tab baru"
              className="bg-bmj-red text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/20 flex items-center gap-2"
            >
              Konsultasi via WA
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className={scrolled ? 'text-bmj-blue' : 'text-white'} aria-hidden="true" />
            ) : (
              <Menu className={scrolled ? 'text-bmj-blue' : 'text-white'} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              role="navigation"
              aria-label="Menu navigasi mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href}
                    className="text-bmj-blue font-semibold hover:text-bmj-red py-2 border-b border-slate-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Konsultasi via WhatsApp – buka di tab baru"
                  className="bg-bmj-red text-white p-4 rounded-xl text-center font-bold"
                >
                  Konsultasi via WA
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main id="main-content">

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 bg-hero-pattern overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-bmj-red/20 text-bmj-red text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm border border-bmj-red/30">
                Penyedia Jasa Alih Daya Terunggul
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Solusi Tenaga Kerja Profesional, <span className="text-bmj-red">Terpercaya</span>, & Berintegritas
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                PT. BINA MITRA JAYA hadir membantu lembaga dan perusahaan Anda dengan layanan alih daya (outsourcing) berkualitas: Security, Cleaning Service, Driver, dan Karyawan Produksi. Bersama BMJ Pasti Jaya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hubungi kami via WhatsApp – buka di tab baru"
                  className="bg-bmj-red text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-all shadow-2xl hover:shadow-red-500/40 flex items-center justify-center gap-3 group"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
                  Hubungi Kami via WhatsApp
                </a>
                <a 
                  href="#layanan"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2"
                >
                  Lihat Layanan Kami
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-bmj-red/10 blur-[120px] rounded-full" aria-hidden="true"></div>
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full" aria-hidden="true"></div>
      </section>

      {/* Stats / Badges Section */}
      <div className="bg-bmj-blue py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Tahun Berdiri', value: '2016' },
              { label: 'Personel Terlatih', value: '2000+' },
              { label: 'Kota Jangkauan', value: 'Jawa Tengah' },
              { label: 'Izin Resmi', value: 'Mabes Polri' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tentang Kami Section */}
      <section id="tentang" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Tim profesional PT Bina Mitra Jaya" 
                  className="rounded-3xl shadow-2xl relative z-10 border-8 border-white"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-bmj-red rounded-3xl -z-0"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-bmj-blue rounded-full -z-0"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-bmj-red font-bold text-sm tracking-[0.2em] uppercase block mb-4">Profil Perusahaan</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bmj-blue mb-8 leading-tight">
                Mengapa Memilih PT Bina Mitra Jaya?
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  PT. BINA MITRA JAYA adalah perusahaan alih daya (outsourcing) yang didirikan pada tahun 2016. Kami menyediakan jasa tenaga kerja terlatih, handal, jujur, dan bertanggung jawab.
                </p>
                <p>
                  Sebelum penempatan, seluruh tenaga kerja kami melalui proses rekrutmen tanpa biaya dan diberikan pembekalan ketrampilan kerja, tata krama (attitude), serta Etika Profesi.
                </p>
                
                <div className="pt-6 border-t border-slate-100 grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-bmj-blue mb-3 flex items-center gap-2">
                      <CheckCircle2 className="text-bmj-red w-5 h-5" /> Visi
                    </h4>
                    <p className="text-sm">Menyediakan jasa pelayanan tenaga kerja yang terpercaya, profesional, berintegritas dan amanah untuk mendukung produktifitas lembaga pengguna jasa.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-bmj-blue mb-3 flex items-center gap-2">
                      <CheckCircle2 className="text-bmj-red w-5 h-5" /> Budaya
                    </h4>
                    <div className="text-sm">
                      <p className="mb-1"><span className="font-bold">Motto:</span> Melayani Sepenuh Hati.</p>
                      <p><span className="font-bold">Prinsip:</span> Amanah dan Terpercaya.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="py-24 bg-bmj-gray-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-bmj-red font-bold text-sm tracking-[0.2em] uppercase block mb-4">Solusi Kami</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-bmj-blue mb-6">Layanan Outsourcing Kami</h2>
            <p className="text-slate-600 text-lg">
              Kami menyediakan berbagai tenaga kerja profesional yang siap mendukung operasional perusahaan Anda dengan standar kualitas tinggi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="bg-bmj-gray-light w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-bmj-red/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-bmj-blue mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                <a 
                  href={waLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Info selengkapnya tentang ${service.title} via WhatsApp`}
                  className="text-bmj-red text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Info Selengkapnya <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block p-8 bg-bmj-blue rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mt-16 -mr-16"></div>
              <h3 className="text-2xl font-bold mb-4">Butuh tenaga kerja untuk bidang lain?</h3>
              <p className="text-slate-300 mb-8 max-w-md mx-auto">Kami siap menyesuaikan kebutuhan SDM sesuai dengan spesifikasi perusahaan Anda.</p>
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dapatkan penawaran harga spesial via WhatsApp – buka di tab baru"
                className="bg-bmj-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-red-900/40"
              >
                Dapatkan Penawaran Harga Spesial
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diklat Gada Pratama Section */}
      <section id="diklat" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-bmj-blue rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative overflow-hidden min-h-[400px]">
              <img 
                  src="https://images.unsplash.com/photo-1544650030-3c9baf648ce7?q=80&w=2070&auto=format&fit=crop" 
                  alt="Peserta Diklat Satpam Gada Pratama" 
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-bmj-blue/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 bg-bmj-red px-4 py-2 rounded-lg text-white text-xs font-bold uppercase tracking-widest mb-4">
                  <ShieldCheck className="w-4 h-4" /> Sertifikasi Resmi Polri
                </div>
                <h4 className="text-white text-2xl font-bold">Pusat Pelatihan Satpam Gada Pratama</h4>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-bmj-red font-bold text-sm tracking-[0.2em] uppercase block mb-4">Nilai Tambah Kompetitif</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight">
                Keunggulan Personel Tersertifikasi Diklat Gada Pratama
              </h2>
              <div className="space-y-6 text-slate-300 leading-relaxed mb-10">
                <p>
                  Sebagai perusahaan outsourcing terpercaya, kami tidak hanya menyalurkan tenaga kerja, tetapi juga mendidik calon Satpam melalui Diklat Gada Pratama berizin Polri.
                </p>
                <p>
                  Kami hanya menempatkan personel bersertifikat Gada Pratama, sehingga Anda dipastikan mendapatkan pengamanan yang unggul, disiplin, dan terstandar nasional.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-bmj-red w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Berizin Mabes Polri</span>
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-bmj-red w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Instruktur Berpengalaman</span>
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-bmj-red w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Standar Nasional</span>
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-bmj-red w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Disiplin Tinggi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Karir Section */}
      <section id="karir" className="py-24 bg-bmj-gray-light border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <span className="text-bmj-blue/60 font-bold text-sm tracking-wider uppercase block mb-4">REKRUTMEN PERSONEL</span>
              <h2 className="text-3xl font-extrabold text-bmj-blue mb-6">Peluang Karir: Bergabunglah Bersama BMJ</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Kami senantiasa mencari individu yang tangguh, jujur, dan berdedikasi. Jika Anda siap menjadi profesional di bidang pengamanan, kebersihan, atau operasional, jadilah bagian dari kami.
              </p>
              <a 
                href="https://forms.gle/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Isi Formulir Pendaftaran – buka di tab baru"
                className="inline-flex items-center gap-2 border-2 border-bmj-blue text-bmj-blue px-6 py-3 rounded-full font-bold hover:bg-bmj-blue hover:text-white transition-all group"
              >
                Isi Formulir Pendaftaran
                <ExternalLink className="w-4 h-4 group-hover:scale-110" aria-hidden="true" />
              </a>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-bmj-blue/5 p-8 rounded-3xl relative">
                <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-md border border-slate-50">
                  <Users className="w-10 h-10 text-bmj-blue" />
                </div>
                <div className="text-center pt-6">
                  <p className="text-4xl font-extrabold text-bmj-blue mb-1">Cepat</p>
                  <p className="text-slate-500 font-medium">Proses Rekrutmen</p>
                  <p className="mt-4 text-xs font-bold text-bmj-red uppercase tracking-widest">Tanpa Biaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer id="kontak" role="contentinfo" className="bg-bmj-blue text-white pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-4 mb-8">
                <Logo />
                <div>
                  <h4 className="font-bold text-lg leading-tight uppercase tracking-widest text-white">PT. BINA MITRA JAYA</h4>
                  <p className="text-[10px] text-bmj-red font-bold tracking-[0.3em]">BERSAMA BMJ PASTI JAYA</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Penyedia jasa alih daya (outsourcing) profesional dan terpercaya sejak 2016, berlokasi di Ambarawa, Kabupaten Semarang.
              </p>
              <div className="flex gap-4">
                <a 
                  href={`tel:+6289659706408`}
                  aria-label="Hubungi kami via telepon"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bmj-red transition-colors"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </a>
                <a 
                  href="mailto:ptbina.mitrajaya@gmail.com"
                  aria-label="Kirim email ke PT Bina Mitra Jaya"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bmj-red transition-colors"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </a>
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat via WhatsApp – buka di tab baru"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bmj-red transition-colors text-bmj-red hover:text-white"
                >
                  <span className="font-extrabold text-lg" aria-hidden="true">M</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8 border-b border-white/10 pb-4">Tautan</h4>
              <nav aria-label="Tautan navigasi footer">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-slate-400 hover:text-bmj-red transition-colors flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 bg-bmj-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              </nav>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8 border-b border-white/10 pb-4">Layanan</h4>
              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item.title}>
                    <a href="#layanan" className="text-slate-400 hover:text-white transition-colors">{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8 border-b border-white/10 pb-4">Hubungi Kami</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-white/5 p-3 rounded-xl flex-shrink-0 h-fit" aria-hidden="true">
                    <MapPin className="text-bmj-red w-5 h-5" />
                  </div>
                  <address className="text-slate-400 text-sm leading-relaxed not-italic">
                    Gg. Asoka Kupang Pete, RT.06/RW.02 Kec. Ambarawa, Kab. Semarang, Jawa Tengah, Kode Pos 50612.
                  </address>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/5 p-3 rounded-xl flex-shrink-0" aria-hidden="true">
                    <Phone className="text-bmj-red w-5 h-5" />
                  </div>
                  <a href="tel:+6289659706408" className="text-slate-400 hover:text-white text-sm transition-colors">
                    0896-5970-6408
                  </a>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/5 p-3 rounded-xl flex-shrink-0" aria-hidden="true">
                    <Mail className="text-bmj-red w-5 h-5" />
                  </div>
                  <a href="mailto:ptbina.mitrajaya@gmail.com" className="text-slate-400 hover:text-white text-sm transition-colors">
                    ptbina.mitrajaya@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">
              © 2025 PT Bina Mitra Jaya. <span className="text-white font-medium">Bersama BMJ Pasti Jaya.</span>
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Kembali ke atas halaman"
            className="fixed bottom-6 right-6 z-50 bg-bmj-red text-white w-12 h-12 rounded-full shadow-lg hover:bg-red-700 transition-all flex items-center justify-center focus:ring-2 focus:ring-bmj-red focus:ring-offset-2"
          >
            <ChevronUp className="w-6 h-6" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

