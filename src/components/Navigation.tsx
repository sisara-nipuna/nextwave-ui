import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-mono text-primary hover:text-primary/80 transition-colors group">
            <Terminal className="w-5 h-5 group-hover:animate-pulse" />
            <span className="neon-glow">nipuna@dev</span>
            <span className="text-muted-foreground">:~$</span>
          </Link>
          <ul className="flex items-center gap-1 sm:gap-2">
            {["Home", "Projects", "Skills", "Experience", "Contact"].map((item) => (
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
