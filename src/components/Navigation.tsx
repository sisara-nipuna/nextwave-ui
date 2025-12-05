import { useState } from "react";
import { Link } from "react-router-dom";
import { Terminal, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Projects", "Skills", "Experience", "Contact"];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-mono text-primary hover:text-primary/80 transition-colors group">
            <Terminal className="w-5 h-5 group-hover:animate-pulse" />
            <span className="neon-glow">nipuna@dev</span>
            <span className="text-muted-foreground hidden sm:inline">:~$</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="px-3 py-2 text-sm font-mono text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/30"
                >
                  /{item.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary border border-border hover:border-primary transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-sm font-mono text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border-l-2 border-transparent hover:border-primary"
                  >
                    <span className="text-primary">$</span> cd /{item.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
