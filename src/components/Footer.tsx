import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-lg">BLOOMBLY</div>
              <div className="text-xs text-muted-foreground">{t('footer.tagline')}</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              {t('footer.links.about')}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t('footer.links.technology')}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t('footer.links.useCases')}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t('footer.links.contact')}
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <div>{t('footer.copyright')}</div>
            <div className="text-xs">{t('footer.challenge')}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
