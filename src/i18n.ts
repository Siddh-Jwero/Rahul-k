import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Landing Page
      "landing_title": "Gyanoday AI",
      "landing_subtitle": "A new way of personalized learning for children in rural India.",
      "student_button": "I am a Student",
      "teacher_button": "I am a Teacher",
      
      // Student Login Page
      "student_login": "Student Login",
      "student_login_desc": "Enter your username and PIN to start.",
      "username_label": "Username",
      "pin_label": "4-Digit PIN",
      "login_button": "Login",
      "go_back_button": "← Go Back",
      "incorrect_credentials_error": "Incorrect username or PIN.",

      // Teacher Login Page
      "teacher_login": "Teacher Login",
      "teacher_login_desc": "Login to continue to your dashboard.",
      "password_label": "Password",
      "incorrect_password_error": "Incorrect username or password.",

      // Quiz Audio Feedback
      "correct_answer_feedback": "Correct! Well done.",
      "incorrect_answer_feedback": "That's not quite right. Let's try the next one.",
    }
  },
  hi: {
    translation: {
      // Landing Page
      "landing_title": "ज्ञानोदय AI",
      "landing_subtitle": "ग्रामीण भारत में बच्चों के लिए व्यक्तिगत सीखने का एक नया तरीका।",
      "student_button": "मैं एक छात्र हूँ",
      "teacher_button": "मैं एक शिक्षक हूँ",

      // Student Login Page
      "student_login": "छात्र लॉगिन",
      "student_login_desc": "शुरू करने के लिए अपना उपयोगकर्ता नाम और पिन दर्ज करें।",
      "username_label": "उपयोगकर्ता नाम",
      "pin_label": "४-अंकीय पिन",
      "login_button": "लॉग इन करें",
      "go_back_button": "← वापस जाएं",
      "incorrect_credentials_error": "गलत उपयोगकर्ता नाम या पिन।",

      // Teacher Login Page
      "teacher_login": "शिक्षक लॉगिन",
      "teacher_login_desc": "अपने डैशबोर्ड पर जाने के लिए लॉगिन करें।",
      "password_label": "पासवर्ड",
      "incorrect_password_error": "गलत उपयोगकर्ता नाम या पासवर्ड।",

      // Quiz Audio Feedback
      "correct_answer_feedback": "सही जवाब! शाबाश।",
      "incorrect_answer_feedback": "यह सही नहीं है। चलो अगला सवाल देखते हैं।",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;