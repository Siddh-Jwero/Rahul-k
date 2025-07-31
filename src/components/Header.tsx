import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showLogoutButton?: boolean;
}

const Header = ({ title, showBackButton = false, showLogoutButton = false }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("gyanoday-student");
    navigate("/student/login");
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md w-full flex justify-between items-center">
      <div>
        {showBackButton && (
          <Button variant="ghost" onClick={() => navigate(-1)} className="mr-2 text-white hover:bg-blue-700">
            &larr; Back
          </Button>
        )}
      </div>
      <h1 className="text-xl font-bold text-center flex-grow">{title}</h1>
      <div>
        {showLogoutButton && (
          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;