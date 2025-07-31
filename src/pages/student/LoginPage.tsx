import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { students } from "@/data/users";
import { showError } from "@/utils/toast";

const StudentLoginPage = () => {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const student = students.find(s => s.username === username && s.pin === pin);
    if (student) {
      localStorage.setItem("gyanoday-student", JSON.stringify(student));
      navigate("/student/dashboard");
    } else {
      showError("Incorrect username or PIN.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Student Login</CardTitle>
          <CardDescription>Enter your username and PIN to start.</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="pin">4-Digit PIN</Label>
              <Input id="pin" type="password" inputMode="numeric" pattern="\d{4}" maxLength={4} value={pin} onChange={(e) => setPin(e.target.value)} required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full">Login</Button>
            <Button variant="link" asChild>
              <Link to="/">&larr; Go Back</Link>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default StudentLoginPage;