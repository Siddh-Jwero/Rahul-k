import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import { curriculum } from "@/data/curriculum";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChapterListPage = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const studentData = JSON.parse(localStorage.getItem("gyanoday-student") || "{}");
  const classLevel = curriculum.find(c => c.id === Number(studentData.class));
  const subject = classLevel?.subjects.find(s => s.id === Number(subjectId));

  if (!subject) {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-50">
        <Header title="Not Found" showBackButton={true} />
        <main className="flex-grow flex items-center justify-center w-full p-4">
          <p className="text-xl">Subject not found. Please go back.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <Header title={`Chapters in ${subject.name}`} showBackButton={true} />
      <main className="w-full max-w-4xl p-4 md:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Choose a Chapter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subject.chapters.map(chapter => (
            <Link key={chapter.id} to={`/student/subject/${subjectId}/chapter/${chapter.id}`}>
              <Card className="text-center transition-transform transform hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="text-6xl mx-auto">{chapter.icon}</div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold">{chapter.name}</CardTitle>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ChapterListPage;