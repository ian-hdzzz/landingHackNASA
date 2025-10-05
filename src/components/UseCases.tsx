import { Tractor, Building2, Leaf, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const UseCases = () => {
  const { t } = useTranslation();

  const useCases = [
    {
      icon: Users,
      sector: t('useCases.sectors.environmental.sector'),
      title: t('useCases.sectors.environmental.title'),
      description: t('useCases.sectors.environmental.description'),
      stats: t('useCases.sectors.environmental.stats'),
      color: "text-teal-500",
      bgColor: "bg-teal-500/20",
      borderColor: "border-teal-500/30",
      gradientColor: "from-teal-500/10"
    },
    {
      icon: Building2,
      sector: t('useCases.sectors.private.sector'),
      title: t('useCases.sectors.private.title'),
      description: t('useCases.sectors.private.description'),
      stats: t('useCases.sectors.private.stats'),
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/20",
      borderColor: "border-indigo-500/30",
      gradientColor: "from-indigo-500/10"
    },
    {
      icon: Leaf,
      sector: t('useCases.sectors.government.sector'),
      title: t('useCases.sectors.government.title'),
      description: t('useCases.sectors.government.description'),
      stats: t('useCases.sectors.government.stats'),
      color: "text-green-500",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
      gradientColor: "from-green-500/10"
    },
    {
      icon: Tractor,
      sector: t('useCases.sectors.farmers.sector'),
      title: t('useCases.sectors.farmers.title'),
      description: t('useCases.sectors.farmers.description'),
      stats: t('useCases.sectors.farmers.stats'),
      color: "text-amber-500",
      bgColor: "bg-amber-500/20",
      borderColor: "border-amber-500/30",
      gradientColor: "from-amber-500/10"
    },
  ];
  return (
    <section className="py-24 relative bg-gradient-to-b from-background to-card/30 mx-20">
      <div className="container px-4  ">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('useCases.title')}{" "}
            <span className="bg-gradient-to-r from-primary via-[hsl(var(--earth-teal))] to-primary bg-clip-text text-transparent">
              {t('useCases.titleHighlight')}
            </span>
            {t('useCases.titleEnd')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('useCases.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCase.gradientColor} to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg ${useCase.bgColor} border ${useCase.borderColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${useCase.color}`} />
                      </div>
                      <div>
                        <div className={`text-xs font-semibold ${useCase.color} uppercase tracking-wider`}>{useCase.sector}</div>
                        <h3 className="text-xl font-bold">{useCase.title}</h3>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full ${useCase.bgColor} border ${useCase.borderColor} text-xs font-semibold ${useCase.color}`}>
                      {useCase.stats}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
