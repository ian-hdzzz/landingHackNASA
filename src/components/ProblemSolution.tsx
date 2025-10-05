import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProblemSolution = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className=" absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div className="mx-4 md:ml-20 space-y-6 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-destructive/20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-5 h-5 text-destructive" />
              <span className="text-sm font-semibold">{t('problemSolution.problem.badge')}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              {t('problemSolution.problem.title')}
            </h2>
            
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-destructive mt-1">•</span>
                <span>{t('problemSolution.problem.points.climate')}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive mt-1">•</span>
                <span>{t('problemSolution.problem.points.data')}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive mt-1">•</span>
                <span>{t('problemSolution.problem.points.policies')}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive mt-1">•</span>
                <span>{t('problemSolution.problem.points.biodiversity')}</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="mx-4 md:mr-20 space-y-6 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 backdrop-blur-sm border border-primary/20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">{t('problemSolution.solution.badge')}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              {t('problemSolution.solution.title')}
            </h2>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>{t('problemSolution.solution.points.monitoring')}</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>{t('problemSolution.solution.points.prediction')}</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>{t('problemSolution.solution.points.reports')}</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>{t('problemSolution.solution.points.data')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
