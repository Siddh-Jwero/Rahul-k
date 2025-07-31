import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-blue-50 p-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-4">
          ज्ञानोदय AI
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          ग्रामीण भारत के बच्चों के लिए व्यक्तिगत सीखने का एक नया तरीका।
        </p>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-6">
          <Link to="/student/login">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-green-500 hover:bg-green-600">
              मैं एक स्टूडेंट हूँ
            </Button>
          </Link>
          <Link to="/teacher/login">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-700">
              मैं एक टीचर हूँ
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-4">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default LandingPage;