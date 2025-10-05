import { Satellite, Brain, BarChart3, MapPin, Clock, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

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
    <section className="py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('features.title')}{" "}
            <span className="bg-gradient-to-r from-primary via-[hsl(var(--earth-teal))] to-primary bg-clip-text text-transparent">
              {t('features.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mx-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-card transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
