import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { progress } from "@/data/users";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Award } from "lucide-react";

interface Student {
  id: number;
  name: string;
}

const StudentProgressPage = () => {
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
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  const studentProgress = progress[student.id] || { stars: 0, badges: [] };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <Header title="Your Progress" showBackButton={true} />
      <main className="w-full max-w-4xl p-4 md:p-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center"><Star className="w-6 h-6 mr-2 text-yellow-500" /> Total Stars</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-yellow-500">{studentProgress.stars}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><Award className="w-6 h-6 mr-2 text-blue-600" /> Your Badges</CardTitle>
          </CardHeader>
          <CardContent>
            {studentProgress.badges.length > 0 ? (
              <ul className="list-disc list-inside space-y-2">
                {studentProgress.badges.map((badge, index) => (
                  <li key={index} className="text-lg">{badge}</li>
                ))}
              </ul>
            ) : (
              <p>You haven't earned any badges yet. Keep learning!</p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default StudentProgressPage;