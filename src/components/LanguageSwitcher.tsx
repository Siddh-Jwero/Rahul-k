import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      <Button
        variant={i18n.language.startsWith('en') ? 'secondary' : 'ghost'}
        onClick={() => changeLanguage('en')}
        size="sm"
      >
        English
      </Button>
      <Button
        variant={i18n.language.startsWith('hi') ? 'secondary' : 'ghost'}
        onClick={() => changeLanguage('hi')}
        size="sm"
      >
        हिन्दी
      </Button>
    </div>
  );
};

export default LanguageSwitcher;