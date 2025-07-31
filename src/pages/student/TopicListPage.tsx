import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import { curriculum } from "@/data/curriculum/index";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TopicListPage = () => {
  const { subjectId, chapterId } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('hi') ? 'hi' : 'en';

  const studentData = JSON.parse(localStorage.getItem("gyanoday-student") || "{}");
  const classLevel = curriculum.find(c => c.id === Number(studentData.class));
  const subject = classLevel?.subjects.find(s => s.id === Number(subjectId));
  const chapter = subject?.chapters.find(c => c.id === Number(chapterId));

  if (!chapter) {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-50">
        <Header title="Not Found" showBackButton={true} />
        <main className="flex-grow flex items-center justify-center w-full p-4">
          <p className="text-xl">Chapter not found. Please go back.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <Header title={chapter.name[lang]} showBackButton={true} />
      <main className="w-full max-w-4xl p-4 md:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Choose a Topic to Start Quiz</h2>
        <Card>
          <CardHeader>
            <CardTitle>Topics</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            {chapter.topics.map(topic => (
              <Link key={topic.id} to={`/student/quiz/${topic.id}`}>
                <Button className="w-full justify-start p-6 text-lg" variant="secondary">
                  {topic.name[lang]}
                </Button>
              </Link>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TopicListPage;