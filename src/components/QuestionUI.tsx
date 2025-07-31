import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface QuestionUIProps {
  question: {
    question_text: string;
    options: string[];
    correct_answer_index: number;
  };
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionUI = ({ question, onAnswer }: QuestionUIProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    onAnswer(index === question.correct_answer_index);
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
        <CardTitle className="text-2xl text-center">{question.question_text}</CardTitle>
        <CardDescription className="text-center">सही उत्तर चुनें</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
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