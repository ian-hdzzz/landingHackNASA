import PlantsGallery from "@/components/PlantsGallery";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Species = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-left">
            <Link 
              to="/"
              className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">BLOOMBLY</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <PlantsGallery />
      
    </div>
  );
};

export default Species;
