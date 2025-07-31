import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import SubjectCard from "@/components/SubjectCard";
import { subjects, progress } from "@/data/studentMockData";
import { Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Student {
  id: number;
  name: string;
}

const StudentDashboardPage = () => {
  const [student, setStudent] = useState<Student | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedStudent = localStorage.getItem("gyanoday-student");
    if (storedStudent) {
      setStudent(JSON.parse(storedStudent));
    } else {
      navigate("/student/login");
    }
  }, [navigate]);

  if (!student) {
    return <div className="flex items-center justify-center min-h-screen">लोड हो रहा है...</div>;
  }

  const studentProgress = progress[student.id] || { stars: 0, badges: [] };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <Header title={`नमस्ते, ${student.name}!`} showLogoutButton={true} />
      <main className="w-full max-w-4xl p-4 md:p-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">आपकी प्रगति</h2>
            <div className="flex items-center mt-2 text-yellow-500">
              <Star className="w-6 h-6 mr-2" />
              <span className="text-xl font-semibold">{studentProgress.stars} सितारे</span>
            </div>
            <div className="flex items-center mt-2 text-blue-600">
              <Award className="w-6 h-6 mr-2" />
              <span className="text-xl font-semibold">{studentProgress.badges.length} बैज</span>
            </div>
          </div>
          <Link to="/student/progress" className="w-full sm:w-auto">
            <Button className="w-full">पूरी प्रगति देखें</Button>
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">कोई विषय चुनें</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} {...subject} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboardPage;