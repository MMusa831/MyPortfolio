import { useState, useEffect } from "react";
import { cn } from "../lib/Utils";
import { ThemeToggle } from "./ThemToggle";
import { Menu, X } from 'lucide-react';


const navItems = [
  { name: "A propos de moi", href: "#" },
  { name: "Formations", href: "#formations" },
  { name: "Compétences", href: "#competences" },
  { name: "Expériences", href: "#experiences" },
  { name: "Contact", href: "#contact" },
];  

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 return <nav className={cn("fixed w-full z-40 transition-all duration-300",  scrolled ? "py-3  bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
   <div className="container flex items-center justify-between">
     <a className="text-xl font-bold text-primary flex items-center">
      <span className="left-20 relative z-10 ">
        <span className=" text-glow text-foreground"> Mohamed </span> Portfolio
      </span>
     </a>

     {/* desktop nav */}

     <div className='hidden md:flex items-center space-x-8 px-19'>
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className='text-foreground hover:text-primary font-bold transition-colors duration-300'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='flex items-center space-x-2'>
            <div className='p-0 md:p-5'>
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className='md:hidden p-2 z-50 text-foreground mr-3'
              aria-label={isMenuOpen ? "Close The Menu" : "Open The Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

     {/* mobile nav */}
      <div className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
          'transition-all duration-300 md:hidden',
          isMenuOpen 
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          )}
          >
          <div className='flex flex-col mr-15 space-y-8'>
          {navItems.map((item, key) => (
            <a 
            key={key}
            href={item.href}
            className='text-foreground/80 hover:text-primary font-bold transition-colors duration-300'
            onClick={() => setIsMenuOpen(false)}
            >
              {item.name}</a>
          ))}
          </div> 

         </div>

   </div>

 </nav>
}