import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import QuestionUI from "@/components/QuestionUI";
import { curriculum } from "@/data/curriculum";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const QuizPage = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('hi') ? 'hi' : 'en';

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  let topic;
  let topicQuestions = [];
  for (const classLevel of curriculum) {
    for (const subject of classLevel.subjects) {
      for (const chapter of subject.chapters) {
        const foundTopic = chapter.topics.find(t => t.id === Number(topicId));
        if (foundTopic) {
          topic = foundTopic;
          topicQuestions = foundTopic.questions;
          break;
        }
      }
      if (topic) break;
    }
    if (topic) break;
  }

  useEffect(() => {
    const storedStudent = localStorage.getItem("gyanoday-student");
    if (!storedStudent) {
      navigate("/student/login");
    }
  }, [navigate]);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 10);
    }
    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    setShowNextButton(false);
    if (currentQuestionIndex < topicQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  if (!topic) {
    return <div>Topic not found.</div>;
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

  if (topicQuestions.length === 0) {
    return (
       <div className="flex flex-col items-center min-h-screen bg-gray-50">
        <Header title={topic.name[lang]} showBackButton={true} />
        <main className="flex-grow flex items-center justify-center w-full p-4">
          <p className="text-xl">No questions available for this topic.</p>
        </main>
      </div>
    )
  }

  const progressValue = ((currentQuestionIndex + 1) / topicQuestions.length) * 100;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <Header title={topic.name[lang]} showBackButton={true} />
      <main className="flex-grow flex flex-col items-center justify-center w-full p-4">
        <div className="w-full max-w-2xl mb-4">
          <Progress value={progressValue} className="w-full" />
          <p className="text-center mt-2 text-sm text-gray-600">Question {currentQuestionIndex + 1} / {topicQuestions.length}</p>
        </div>
        <QuestionUI
          question={topicQuestions[currentQuestionIndex]}
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