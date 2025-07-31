import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import QuestionUI from "@/components/QuestionUI";
import { questions, subjects } from "@/data/studentMockData";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const QuizPage = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const subjectQuestions = questions.filter(q => q.subjectId === Number(subjectId));
  const subject = subjects.find(s => s.id === Number(subjectId));

  useEffect(() => {
    const storedStudent = localStorage.getItem("gyanoday-student");
    if (!storedStudent) {
      navigate("/student/login");
    }
  }, [navigate]);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 10); // 10 points for each correct answer
    }
    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    setShowNextButton(false);
    if (currentQuestionIndex < subjectQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  if (!subject) {
    return <div>Subject not found.</div>;
  }

  if (quizFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl font-bold">Quiz Finished!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl mb-8">Your Score: <span className="font-bold text-green-600">{score}</span></p>
            <Button onClick={() => navigate("/student/dashboard")}>Back to Dashboard</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (subjectQuestions.length === 0) {
    return (
       <div className="flex flex-col items-center min-h-screen bg-gray-50">
        <Header title={subject.name} showBackButton={true} />
        <main className="flex-grow flex items-center justify-center w-full p-4">
          <p className="text-xl">No questions available for this subject.</p>
        </main>
      </div>
    )
  }

  const progressValue = ((currentQuestionIndex + 1) / subjectQuestions.length) * 100;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <Header title={subject.name} showBackButton={true} />
      <main className="flex-grow flex flex-col items-center justify-center w-full p-4">
        <div className="w-full max-w-2xl mb-4">
          <Progress value={progressValue} className="w-full" />
          <p className="text-center mt-2 text-sm text-gray-600">Question {currentQuestionIndex + 1} / {subjectQuestions.length}</p>
        </div>
        <QuestionUI
          question={subjectQuestions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
        {showNextButton && (
          <Button onClick={handleNextQuestion} className="mt-8 animate-pulse">
            Next Question &rarr;
          </Button>
        )}
      </main>
    </div>
  );
};

export default QuizPage;