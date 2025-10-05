import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex justify-center md:justify-start">
      <Button variant="outline" size="default" className="gap-2" onClick={toggleLanguage}>
        {i18n.language === 'es' ? 'en-US' : 'es-MX'}
      </Button>
    </div>
  );
};

export default LanguageToggle;
