import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Upload, Home, Info } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 w-full z-50 glass-card rounded-none border-0 border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="p-2 rounded-xl bg-gradient-to-r from-gradient-from to-gradient-via group-hover:shadow-glow transition-all duration-300">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">
            ResumeAI
          </span>
        </Link>

        <div className="flex items-center space-x-1">
          <Button
            variant={isActive("/") ? "default" : "ghost"}
            size="sm"
            asChild
            className={`${
              isActive("/") 
                ? "bg-gradient-to-r from-gradient-from to-gradient-via text-white shadow-glow" 
                : "text-muted-foreground hover:text-foreground"
            } transition-all duration-300`}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </Button>

          <Button
            variant={isActive("/upload") ? "default" : "ghost"}
            size="sm"
            asChild
            className={`${
              isActive("/upload")
                ? "bg-gradient-to-r from-gradient-from to-gradient-via text-white shadow-glow"
                : "text-muted-foreground hover:text-foreground"
            } transition-all duration-300`}
          >
            <Link to="/upload" className="flex items-center space-x-2">
              <Upload className="h-4 w-4" />
              <span>Upload</span>
            </Link>
          </Button>

          <Button
            variant={isActive("/about") ? "default" : "ghost"}
            size="sm"
            asChild
            className={`${
              isActive("/about")
                ? "bg-gradient-to-r from-gradient-from to-gradient-via text-white shadow-glow"
                : "text-muted-foreground hover:text-foreground"
            } transition-all duration-300`}
          >
            <Link to="/about" className="flex items-center space-x-2">
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;