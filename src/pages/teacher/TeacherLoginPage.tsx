import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { teacher } from "@/data/teacherMockData";
import { showError } from "@/utils/toast";

const TeacherLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === teacher.username && password === teacher.password) {
      localStorage.setItem("gyanoday-teacher", "true");
      navigate("/teacher/dashboard");
    } else {
      showError("गलत यूजरनेम या पासवर्ड।");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">टीचर लॉगिन</CardTitle>
          <CardDescription>जारी रखने के लिए लॉगिन करें।</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">यूजरनेम</Label>
              <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">पासवर्ड</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full">लॉगिन करें</Button>
            <Button variant="link" asChild>
              <Link to="/">&larr; वापस जाएं</Link>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default TeacherLoginPage;