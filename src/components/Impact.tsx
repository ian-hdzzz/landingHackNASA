import { Sprout, Globe2, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import agricultureImage from "@/assets/agriculture.jpg";
import biodiversityImage from "@/assets/biodiversity.jpg";
import technologyImage from "@/assets/technology.jpg";

const Impact = () => {
  const { t } = useTranslation();

  const impacts = [
    {
      icon: Sprout,
      title: t('impact.agriculture.title'),
      description: t('impact.agriculture.description'),
      image: agricultureImage,
      benefits: [
        t('impact.agriculture.benefits.prediction'),
        t('impact.agriculture.benefits.optimization'),
        t('impact.agriculture.benefits.management'),
        t('impact.agriculture.benefits.reduction')
      ],
      color: "primary"
    },
    {
      icon: Globe2,
      title: t('impact.biodiversity.title'),
      description: t('impact.biodiversity.description'),
      image: biodiversityImage,
      benefits: [
        t('impact.biodiversity.benefits.detection'),
        t('impact.biodiversity.benefits.policies'),
        t('impact.biodiversity.benefits.prioritization'),
      ],
      color: "accent"
    },
  ];
  return (
    <section className="py-16 md:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
           {t('impact.title')}{" "}
            <span className="bg-gradient-to-r from-primary via-[hsl(var(--earth-teal))] to-primary bg-clip-text text-transparent">
              {t('impact.titleHighlight')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4 sm:px-0">
            {t('impact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] lg:hover:scale-105"
              >
                {/* Image Background */}
                <div className="absolute inset-0 opacity-15 sm:opacity-20 group-hover:opacity-25 sm:group-hover:opacity-30 transition-opacity">
                  <img 
                    src={impact.image} 
                    alt={impact.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-${impact.color}/20 border border-${impact.color}/30 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 text-${impact.color}`} />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{impact.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{impact.description}</p>
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
                    {impact.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-2 sm:gap-3 text-xs sm:text-sm">
                        <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -bottom-16 -right-16 sm:-bottom-20 sm:-right-20 w-32 h-32 sm:w-40 sm:h-40 bg-${impact.color}/20 rounded-full blur-2xl sm:blur-3xl group-hover:bg-${impact.color}/30 transition-all`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
