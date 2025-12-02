import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-foreground">
            Nipuna Mahaliyana
          </Link>
          <ul className="space-y-2 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-6">
              {["Home", "Projects", "Skills", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
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
