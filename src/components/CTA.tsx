import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse">
            <Leaf className="w-5 h-5 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            {t('cta.title')}{" "}
            <span className="bg-gradient-to-r from-primary via-[hsl(var(--earth-teal))] to-primary bg-clip-text text-transparent">
              {t('cta.titleHighlight')}
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('cta.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" className="group">
              {t('cta.button1')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              {t('cta.button2')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;