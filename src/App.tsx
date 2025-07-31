import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Student Pages
import StudentLoginPage from "./pages/student/LoginPage";
import StudentDashboardPage from "./pages/student/DashboardPage";
import StudentQuizPage from "./pages/student/QuizPage";
import StudentProgressPage from "./pages/student/ProgressPage";

// Teacher Pages
import TeacherLoginPage from "./pages/teacher/TeacherLoginPage";
import TeacherDashboardPage from "./pages/teacher/ClassDashboardPage";
import StudentDetailPage from "./pages/teacher/StudentDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Student Routes */}
          <Route path="/student/login" element={<StudentLoginPage />} />
          <Route path="/student/dashboard" element={<StudentDashboardPage />} />
          <Route path="/student/quiz/:subjectId" element={<StudentQuizPage />} />
          <Route path="/student/progress" element={<StudentProgressPage />} />

          {/* Teacher Routes */}
          <Route path="/teacher/login" element={<TeacherLoginPage />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboardPage />} />
          <Route path="/teacher/student/:studentId" element={<StudentDetailPage />} />

          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;