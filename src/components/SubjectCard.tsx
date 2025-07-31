import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SubjectCardProps {
  id: number;
  name: { en: string; hi: string };
  icon: string;
  disabled?: boolean;
}

const SubjectCard = ({ id, name, icon, disabled = false }: SubjectCardProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('hi') ? 'hi' : 'en';

  const content = (
    <Card className={`text-center transition-transform transform hover:scale-105 ${disabled ? 'bg-gray-200 opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}`}>
      <CardHeader>
        <div className="text-6xl mx-auto">{icon}</div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl font-semibold">{name[lang]}</CardTitle>
      </CardContent>
    </Card>
  );

  if (disabled) {
    return <div>{content}</div>;
  }

  return (
    <Link to={`/student/subject/${id}`}>
      {content}
    </Link>
  );
};

export default SubjectCard;