import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Leaf, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

const PlantsGallery = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Lista de las 33 especies de plantas usando traducciones
  const plants = [
    {
      id: 1,
      nameKey: "rosa",
      image: "/images/rosa.png",
      color: "rose"
    },
    {
      id: 2,
      nameKey: "lavanda",
      image: "/images/lavanda.png",
      color: "purple"
    },
    {
      id: 3,
      nameKey: "girasol",
      image: "/images/girasol.png",
      color: "yellow"
    },
    // Aqui agregas más plantas pao 
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % plants.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, plants.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % plants.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + plants.length) % plants.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentPlant = plants[currentIndex];

  const getColorClasses = (color: string) => {
    const colorMap = {
      rose: {
        gradient: "from-rose-500/20 via-pink-500/20 to-red-500/20",
        text: "text-rose-400",
        border: "border-rose-500/30",
        bg: "bg-rose-500/10"
      },
      purple: {
        gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
        text: "text-purple-400",
        border: "border-purple-500/30",
        bg: "bg-purple-500/10"
      },
      yellow: {
        gradient: "from-yellow-500/20 via-amber-500/20 to-orange-500/20",
        text: "text-yellow-400",
        border: "border-yellow-500/30",
        bg: "bg-yellow-500/10"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.rose;
  };

  const colors = getColorClasses(currentPlant.color);

  return (
    <section id="plants-gallery" className="h-screen relative overflow-hidden bg-gradient-to-b from-card/30 to-background flex flex-col">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-30 animate-pulse`}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      </div>
        {/* Language Toggle */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col h-full">
          <div className="absolute top-5 right-4 sm:right-8 lg:right-12">
            <LanguageToggle />
          </div>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto py-2 md:py-6 pb-0 relative">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary">{t('plantsGallery.badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            {t('plantsGallery.title')}{" "}
            <span className="bg-gradient-to-r from-primary via-[hsl(var(--earth-teal))] to-primary bg-clip-text text-transparent">
              {t('plantsGallery.titleHighlight')}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
            {t('plantsGallery.subtitle')}
          </p>
        </div>

        {/* Main Gallery - Flex grow to fill remaining space */}
        <div className="flex-1 -mt-4 lg:-mt-14 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center h-full">
            
            {/* Left Image - Optimized for PNG without container */}
            <div className="relative flex justify-center lg:justify-start items-center min-h-0 flex-1 px-4 lg:px-6">
              <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg aspect-[3/4] flex items-center justify-center">
                {/* PNG Image without background container - Fixed dimensions */}
                <img 
                  src={currentPlant.image}
                  alt={t(`plantsGallery.plants.${currentPlant.nameKey}.name`)}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105 drop-shadow-2xl"
                />

                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute -left-6 lg:-left-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute -right-6 lg:-right-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-4 text-center lg:text-left px-4 lg:px-0">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {t(`plantsGallery.plants.${currentPlant.nameKey}.name`)}
                </h3>
                <p className="text-lg sm:text-xl italic text-muted-foreground">
                  {t(`plantsGallery.plants.${currentPlant.nameKey}.scientificName`)}
                </p>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.border} border`}>
                  <span className="text-xs font-medium">{t('plantsGallery.family')}</span>
                  <span className={`text-xs font-semibold ${colors.text}`}>{t(`plantsGallery.plants.${currentPlant.nameKey}.family`)}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t(`plantsGallery.plants.${currentPlant.nameKey}.description`)}
              </p>

              <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border`}>
                <div className="flex items-start gap-3">
                  <Info className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-xs mb-1">{t('plantsGallery.funFact')}</h4>
                    <p className="text-xs text-muted-foreground">{t(`plantsGallery.plants.${currentPlant.nameKey}.funFact`)}</p>
                  </div>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-xs text-muted-foreground">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <div className="w-16 h-1 bg-border rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300 rounded-full"
                    style={{ width: `${((currentIndex + 1) / plants.length) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground">
                  {String(plants.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlantsGallery;
