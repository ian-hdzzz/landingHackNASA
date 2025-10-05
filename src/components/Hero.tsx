import Spline from '@splinetool/react-spline';
import { Button } from "@/components/ui/button";
import { ArrowRight, Satellite } from "lucide-react";
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const SplineAnimation = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-gradient-to-b from-background">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <div className="max-w-full mx-auto">
          {/* Language Toggle */}
          <div className="flex justify-center md:justify-end mb-6">
            <LanguageToggle />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-10 gap-8 items-center justify-center">
            {/* Left Column - Text Content with pointer events */}
            <div className="col-span-full lg:col-span-7 xl:col-span-6 space-y-8 text-center lg:text-left pointer-events-auto flex flex-col justify-center">
              {/* Enhanced Badge */}
              <div className="lg:w-80 inline-flex items-center justify-center gap-3 lg:gap-2 px-6 lg:px-1 py-3 lg:py-2 rounded-full bg-background/70 backdrop-blur-md border border-primary/30 animate-fade-in shadow-2xl mx-auto lg:mx-0">
                <Satellite className="w-5 h-5 lg:w-4 lg:h-4 text-primary animate-pulse" />
                <span className="text-sm lg:text-xs font-medium text-foreground">{t('hero.badge')}</span>
                <div className="w-2 h-2 lg:w-1.5 lg:h-1.5 bg-primary rounded-full animate-ping"></div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in drop-shadow-2xl">
                {t('hero.title').split(t('hero.titleHighlight')).map((part, index, array) => (
                  index === array.length - 1 ? (
                    <span key={index}>{part}</span>
                  ) : (
                    <span key={index}>
                      {part}
                      <span className="bg-gradient-to-r from-primary via-[hsl(var(--earth-teal))] to-primary bg-clip-text text-transparent drop-shadow-lg">
                        {t('hero.titleHighlight')}
                      </span>
                    </span>
                  )
                ))}
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-foreground/90 max-w-2xl animate-fade-in drop-shadow-lg">
                {t('hero.subtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in justify-center lg:justify-start">
                <Button variant="hero" size="xl" className="group backdrop-blur-md bg-primary/95 hover:bg-primary shadow-2xl hover:shadow-[0_0_50px_hsl(142_76%_45%_/_0.5)] transition-all duration-300">
                  {t('hero.cta1')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl" className="backdrop-blur-md bg-background/20 border-primary/40 hover:border-primary hover:bg-primary/15 shadow-xl transition-all duration-300">
                  {t('hero.cta2')}
                </Button>
              </div>

              {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 animate-fade-in">
            <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border">
              <div className="text-3xl font-bold text-primary">+40%</div>
              <div className="text-sm text-muted-foreground mt-1">{t('hero.stats.efficiency')}</div>
            </div>
            <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border">
              <div className="text-3xl font-bold text-primary">Real-time</div>
              <div className="text-sm text-muted-foreground mt-1">{t('hero.stats.monitoring')}</div>
            </div>
            <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border">
              <div className="text-3xl font-bold text-primary">{t('hero.stats.prediction')}</div>
              <div className="text-sm text-muted-foreground mt-1">{t('hero.stats.droughtPrediction')}</div>
            </div>
          </div>
            </div>
            
            {/* Right Column - Animation */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-4 mr-0">
              <div className="border-none relative h-[500px] md:h-[600px] xl:h-[700px] rounded-lg overflow-hidden bg-transparent">
                <Spline
                  scene="https://prod.spline.design/sCOwXCDfSb9mScQm/scene.splinecode"
                  style={{
                    width: '200%',
                    height: '200%',
                    position: 'absolute',
                    top: '-40%',
                    left: '-35%',
                    objectFit: 'cover',
                    transform: 'scale(2.4)'
                  }}
                  onLoad={() => console.log('Spline scene loaded')}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    
  );
};

export default SplineAnimation;
