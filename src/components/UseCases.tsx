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
    <section className="py-16 md:py-20 lg:py-24 relative bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            {t('useCases.title')}{" "}
            <span className="bg-gradient-to-r from-primary via-[hsl(var(--earth-teal))] to-primary bg-clip-text text-transparent">
              {t('useCases.titleHighlight')}
            </span>
            {t('useCases.titleEnd')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4 sm:px-0">
            {t('useCases.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] lg:hover:scale-105"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${useCase.gradientColor} to-transparent rounded-full blur-xl sm:blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className="relative space-y-3 sm:space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${useCase.bgColor} border ${useCase.borderColor} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${useCase.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-xs font-semibold ${useCase.color} uppercase tracking-wider mb-1`}>{useCase.sector}</div>
                        <h3 className="text-lg sm:text-xl font-bold leading-tight">{useCase.title}</h3>
                      </div>
                    </div>
                    <div className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full ${useCase.bgColor} border ${useCase.borderColor} text-xs font-semibold ${useCase.color} flex-shrink-0`}>
                      {useCase.stats}
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
