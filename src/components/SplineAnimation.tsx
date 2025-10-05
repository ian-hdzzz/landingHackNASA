import Spline from '@splinetool/react-spline';
import { Button } from "@/components/ui/button";
import { ArrowRight, Satellite } from "lucide-react";

const SplineAnimation = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
{/* Left Column - Text Content with pointer events */}
          <div className="w-full max-w-xl lg:max-w-2xl space-y-8 text-left pointer-events-auto">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background/70 backdrop-blur-md border border-primary/30 animate-fade-in shadow-2xl">
              <Satellite className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">NASA Space Apps Challenge 2025</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in drop-shadow-2xl">
              Observa el{" "}
              <span className="bg-gradient-to-r from-primary via-[hsl(var(--earth-teal))] to-primary bg-clip-text text-transparent drop-shadow-lg">
                pulso de vida
              </span>
              {" "}de nuestro planeta
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-foreground/90 max-w-2xl animate-fade-in drop-shadow-lg">
              Transformamos datos satelitales de la NASA en una herramienta estratégica 
              para agricultura inteligente y conservación ambiental
            </p>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in">
              <Button variant="hero" size="xl" className="group backdrop-blur-md bg-primary/95 hover:bg-primary shadow-2xl hover:shadow-[0_0_50px_hsl(142_76%_45%_/_0.5)] transition-all duration-300">
                Ver la Aplicación
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="backdrop-blur-md bg-background/20 border-primary/40 hover:border-primary hover:bg-primary/15 shadow-xl transition-all duration-300">
                Conocer Más
              </Button>
            </div>

            {/* Compact Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 animate-fade-in">
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary drop-shadow-lg">+40%</div>
                <div className="text-xs text-foreground/70 drop-shadow">Eficiencia</div>
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-accent drop-shadow-lg">Real-time</div>
                <div className="text-xs text-foreground/70 drop-shadow">Monitoreo</div>
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-[hsl(var(--earth-teal))] drop-shadow-lg">IA</div>
                <div className="text-xs text-foreground/70 drop-shadow">Predicción</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
            <Spline
              scene="https://prod.spline.design/4QzmKiXtCOLJDJP1/scene.splinecode"
              style={{
                width: '-50%',
                height: '100%'
              }}
              onLoad={() => console.log('Spline scene loaded')}
            />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Interactúa con la animación para descubrir todas las funcionalidades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplineAnimation;
