import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { teacher } from "@/data/teacherMockData";
import { showError } from "@/utils/toast";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const TeacherLoginPage = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === teacher.username && password === teacher.password) {
      localStorage.setItem("gyanoday-teacher", "true");
      navigate("/teacher/dashboard");
    } else {
      showError(t("incorrect_password_error"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{t('teacher_login')}</CardTitle>
          <CardDescription>{t('teacher_login_desc')}</CardDescription>
        </CardHeader>
        <div className="px-6 pb-2">
          <LanguageSwitcher />
        </div>
        <form onSubmit={handleLogin}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">{t('username_label')}</Label>
              <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">{t('password_label')}</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full">{t('login_button')}</Button>
            <Button variant="link" asChild>
              <Link to="/">{t('go_back_button')}</Link>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default TeacherLoginPage;