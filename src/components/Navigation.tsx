import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";

const Navigation = () => {
  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-foreground">
            Sisars Corporation
          </Link>
          
          <div className="flex gap-6">
            <NavLink to="/">Services</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
