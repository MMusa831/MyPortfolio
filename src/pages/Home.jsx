import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { Wrench, Battery, Zap, Mail, Phone, MapPin, Clock, ArrowUp } from "lucide-react";
import Photo from  '../assets/profile.jpg';
import { useState, useEffect } from "react";

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
     
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - A propos de moi */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            {/* Photo Section */}
            <div className="flex justify-center md:justify-end order-1 md:order-1">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                  <img 
                    src={Photo} 
                    alt="Mohamed - Mécanicien Vélos & Trottinettes Électriques" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x400/46B68E/ffffff?text=Mohamed"
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 flex space-x-2">
                  <Wrench className="h-10 w-10 text-primary animate-float bg-background rounded-full p-2 border border-primary" />
                  <Battery className="h-10 w-10 text-primary animate-float bg-background rounded-full p-2 border border-primary" style={{animationDelay: '0.2s'}} />
                  <Zap className="h-10 w-10 text-primary animate-float bg-background rounded-full p-2 border border-primary" style={{animationDelay: '0.4s'}} />
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left space-y-6 order-2 md:order-2">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-glow">Mohamed</span>
              </h1>
              <h2 className="text-2xl md:text-4xl text-primary font-semibold">
                Mécanicien Vélos & Trottinettes Électriques
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Passionné par la mobilité électrique avec plus de 3 ans d'expérience dans la réparation, 
                la maintenance et le diagnostic de vélos et trottinettes électriques. 
                Expert en systèmes électriques, batteries et mécaniques.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
                <a href="#contact" className="cosmic-button">
                  Me Contacter
                </a>
                <a href="#experiences" className="px-8 py-2 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Voir mes Expériences
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-glow">Formations</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-3">
                Titre Professionnel en Développement web
              </h3>
              <p className="text-foreground/70 mb-2">2019</p>
              <p className="text-foreground/90">
               Développeur web Fullstack JavaScript.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-3">
                INGÉNIEUR PÉTROLIER
              </h3>
              <p className="text-foreground/70 mb-2">2010</p>
              <p className="text-foreground/90">
               Sudan University of Sciences and Technology
               Reconnu en France (Maîtrise)
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-3">
                Cariste - préparateur de commandes
              </h3>
              <p className="text-foreground/70 mb-2">2016</p>
              <p className="text-foreground/90">
                Préparateur de commandes, Chariots élévateurs 1 - 3 - 5.
              </p>
            </div>            
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-glow">Compétences</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary text-center mb-6">
                Mécanique
              </h3>
              <div className="space-y-4">
                {[
                  { skill: "Réparation de cadres", level: 95 },
                  { skill: "Ajustement freins/vitesses", level: 98 },
                  { skill: "Montage roues & pneus", level: 100 },
                  { skill: "Entretien transmission", level: 90 }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground/90">{item.skill}</span>
                      <span className="text-primary font-bold">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{width: `${item.level}%`}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary text-center mb-6">
                Électrique
              </h3>
              <div className="space-y-4">
                {[
                  { skill: "Diagnostic systèmes électriques", level: 92 },
                  { skill: "Réparation moteurs électriques", level: 88 },
                  { skill: "Gestion batteries Li-ion", level: 95 },
                  { skill: "Programmation contrôleurs", level: 85 }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground/90">{item.skill}</span>
                      <span className="text-primary font-bold">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{width: `${item.level}%`}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary text-center mb-6">
                Service Client
              </h3>
              <div className="space-y-4">
                {[
                  { skill: "Conseil technique", level: 93 },
                  { skill: "Diagnostic rapide", level: 96 },
                  { skill: "Relation client", level: 90 },
                  { skill: "Formation utilisateurs", level: 88 }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground/90">{item.skill}</span>
                      <span className="text-primary font-bold">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{width: `${item.level}%`}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expériences Section */}
      <section id="experiences" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-glow">Expériences</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300">
              <div className="flex flex-col mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Mécanicien - vélos Électriques
                  </h3>
                  <p className="text-lg text-foreground/80">Smovengo Vélib - Alfortville</p>
                </div>
                <span className="text-foreground/70 font-semibold mt-2">
                  mai 2025 - aout 2025
                </span>
              </div>
              <ul className="space-y-2 text-foreground/90">
                <li>• Réparation et maintenance de 20+ vélos électriques par semaine</li>
                <li>• Diagnostic et résolution de pannes électriques complexes</li>
                <li>• Formation des nouveaux techniciens sur les systèmes électriques</li>
                <li>• Gestion des stocks de pièces détachées et batteries</li>
                <li>• Conseil personnalisé aux clients sur l'entretien préventif</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300">
              <div className="flex flex-col mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Mécanicien Vélos et trottinettes Électriques
                  </h3>
                  <p className="text-lg text-foreground/80">Pony SA - Evry</p>
                </div>
                <span className="text-foreground/70 font-semibold mt-2">
                  2022 - 2023
                </span>
              </div>
              <ul className="space-y-2 text-foreground/90">
                <li>• Maintenance préventive et réparations courantes</li>
                <li>• Installation et configuration de kits électriques</li>
                <li>• Test et validation des réparations effectuées</li>
                <li>• Assistance technique téléphonique aux clients</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300">
              <div className="flex flex-col mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                     Mécanicien Trottinettes Électriques
                  </h3>
                  <p className="text-lg text-foreground/80">TIER Mobilité</p>
                </div>
                <span className="text-foreground/70 font-semibold mt-2">
                  2021 - 2022
                </span>
              </div>
              <ul className="space-y-2 text-foreground/90">
                <li>• Apprentissage des bases de la mécanique vélo</li>
                <li>• Réparations simples et entretien courant</li>
                <li>• Découverte des systèmes électriques VAE</li>
                <li>• Accueil et conseil clientèle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-glow">Contact</span>
          </h2>
          <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <p className="text-xl text-foreground/90">
                  Besoin d'un expert en mobilité électrique ?
                </p>
                <p className="text-foreground/70">
                  Je suis disponible pour des missions de réparation, maintenance, 
                  ou conseil technique sur vos vélos et trottinettes électriques.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <Mail className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-bold text-primary">Email</h3>
                  </div>
                  <a href="mailto:mohamed@cycline.fr" className="text-foreground/80 hover:text-primary transition-colors">
                    mohamed@cycline.fr
                  </a>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <Phone className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-bold text-primary">Téléphone</h3>
                  </div>
                  <a href="tel:+33624512552" className="text-foreground/80 hover:text-primary transition-colors">
                    +33 6 24 51 25 52
                  </a>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-bold text-primary">Localisation</h3>
                  </div>
                  <p className="text-foreground/80">Paris, Île-de-France</p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-bold text-primary">Disponibilité</h3>
                  </div>
                  <p className="text-foreground/80">Lun - Sam: 9h - 18h</p>
                </div>
              </div>

              <div className="text-center pt-6">
                <a href="mailto:mohamed@cycline.fr" className="text-base cosmic-button">
                  Envoyer un message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-foreground/60">
          <p>© 2025 Mohamed - Mécanicien Vélos & Trottinettes Électriques</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Retour en haut"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};



export default Home;
