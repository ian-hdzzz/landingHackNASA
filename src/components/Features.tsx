import { Satellite, Brain, BarChart3, MapPin, Clock, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Satellite,
      title: t('features.items.precise.title'),
      description: t('features.items.precise.description')
    },
    {
      icon: Brain,
      title: t('features.items.ml.title'),
      description: t('features.items.ml.description')
    },
    {
      icon: MapPin,
      title: t('features.items.global.title'),
      description: t('features.items.global.description')
    },
    {
      icon: Clock,
      title: t('features.items.realtime.title'),
      description: t('features.items.realtime.description')
    },
  ];
  return (
    <section className="py-16 md:py-20 lg:py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] lg:bg-[size:4rem_4rem] opacity-15 sm:opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            {t('features.title')}{" "}
            <span className="bg-gradient-to-r from-primary via-[hsl(var(--earth-teal))] to-primary bg-clip-text text-transparent">
              {t('features.titleHighlight')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4 sm:px-0">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-card transition-all duration-300 hover:scale-[1.02] lg:hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12 md:mt-16">
          <Link 
            to="/species"
            className=" text-white group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary  to-primary text-primary-foreground font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
          >
            <span className="text-lg">Explorar Especies de Plantas</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
