import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PerformanceChart from "@/components/PerformanceChart";
import { student_details, students_performance } from "@/data/teacherMockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StudentDetailPage = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("gyanoday-teacher");
    if (!isLoggedIn) {
      navigate("/teacher/login");
    }
  }, [navigate]);

  const details = student_details[studentId!];
  const performance = students_performance.find(s => s.id === Number(studentId));

  if (!details || !performance) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-xl mb-4">Student data not found.</p>
        <Button onClick={() => navigate("/teacher/dashboard")}>Back to Dashboard</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
       <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">{details.name}'s Report</h1>
        <Button variant="outline" onClick={() => navigate(-1)}>&larr; Go Back</Button>
      </header>
      <main className="p-4 md:p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Topic-wise Performance</CardTitle>
              <CardDescription>Student's score in each topic</CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceChart data={details.topic_wise_performance} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Insight</CardTitle>
              <CardDescription>Advice provided by AI</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-800 rounded">
                {performance.ai_insight}
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentDetailPage;