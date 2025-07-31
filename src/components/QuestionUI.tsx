import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Question } from "@/data/curriculum/types";
import { Star, BrainCircuit } from "lucide-react";

interface QuestionUIProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionUI = ({ question, onAnswer }: QuestionUIProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { i18n, t } = useTranslation();
  const lang = i18n.language.startsWith('hi') ? 'hi' : 'en';

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    const correct = index === question.correct_answer_index;
    setSelectedOption(index);
    setIsAnswered(true);
    setIsCorrect(correct);
    onAnswer(correct);
  };

  const getButtonClass = (index: number) => {
    if (!isAnswered) return "bg-blue-500 hover:bg-blue-600";
    if (index === question.correct_answer_index) return "bg-green-500 hover:bg-green-600";
    if (index === selectedOption) return "bg-red-500 hover:bg-red-600";
    return "bg-gray-300";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">{question.question_text[lang]}</CardTitle>
        {isAnswered && isCorrect !== null ? (
          <div className="flex justify-center items-center pt-4">
            {isCorrect ? (
              <div className="flex items-center text-green-500">
                <Star className="w-8 h-8 mr-2 animate-pulse" />
                <span className="font-bold text-lg">{t('correct_answer_feedback')}</span>
              </div>
            ) : (
              <div className="flex items-center text-red-500">
                <BrainCircuit className="w-8 h-8 mr-2" />
                <span className="font-bold text-lg">{t('incorrect_answer_feedback')}</span>
              </div>
            )}
          </div>
        ) : (
          <CardDescription className="text-center">Choose the correct answer</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options[lang].map((option, index) => (
            <Button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`text-lg p-6 h-auto whitespace-normal ${getButtonClass(index)}`}
              disabled={isAnswered}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionUI;