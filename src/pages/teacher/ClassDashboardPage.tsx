import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StatCard from "@/components/StatCard";
import StudentListTable from "@/components/StudentListTable";
import { students_performance } from "@/data/teacherMockData";
import { Users, Activity, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TeacherDashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("gyanoday-teacher");
    if (!isLoggedIn) {
      navigate("/teacher/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("gyanoday-teacher");
    navigate("/teacher/login");
  };

  const totalStudents = students_performance.length;
  const weakStudents = students_performance.filter(s => s.overall_status === 'कमजोर').length;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">टीचर डैशबोर्ड</h1>
        <Button variant="outline" onClick={handleLogout}>लॉगआउट</Button>
      </header>
      <main className="p-4 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <StatCard title="कुल स्टूडेंट्स" value={totalStudents} icon={<Users className="h-4 w-4 text-muted-foreground" />} />
          <StatCard title="अच्छा प्रदर्शन" value={students_performance.filter(s => s.overall_status === 'अच्छा').length} icon={<Activity className="h-4 w-4 text-muted-foreground" />} />
          <StatCard title="ध्यान दें" value={weakStudents} icon={<AlertCircle className="h-4 w-4 text-muted-foreground" />} />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>स्टूडेंट की सूची</CardTitle>
          </CardHeader>
          <CardContent>
            <StudentListTable students={students_performance} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TeacherDashboardPage;