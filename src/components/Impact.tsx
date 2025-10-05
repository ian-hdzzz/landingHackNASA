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
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
           {t('impact.title')}{" "}
            <span className="bg-gradient-to-r from-primary via-[hsl(var(--earth-teal))] to-primary bg-clip-text text-transparent">
              {t('impact.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('impact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mx-20">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105"
              >
                {/* Image Background */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <img 
                    src={impact.image} 
                    alt={impact.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 space-y-6">
                  <div className={`w-14 h-14 rounded-xl bg-${impact.color}/20 border border-${impact.color}/30 flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 text-${impact.color}`} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{impact.title}</h3>
                    <p className="text-muted-foreground">{impact.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {impact.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-${impact.color}/20 rounded-full blur-3xl group-hover:bg-${impact.color}/30 transition-all`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
