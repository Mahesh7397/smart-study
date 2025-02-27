import { BookOpen, Brain, MessageCircle, Calculator, FileText, Book, BookMarked, GraduationCap } from 'lucide-react';



const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Study Resources",
      description: "Access comprehensive study materials, notes, and guides",
      link:"#resource"
    }
    ,
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Tutor",
      description: "Get personalized learning assistance powered by AI",
      link:"/ai-tutor"
    }
    ,
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Doubt Solving Chatbox",
      description: "Get instant answers to your academic questions 24/7",
      link:"/community"
    }
    ,
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Grade Calculator",
      description: "Instantly compute your grades, GPA, and academic performance with ease!",
      link:"/gradcalculator"
    }
  ];
  
  const testimonials = [
    {
      name: "Abrar S",
      role: "Bsc Computer Science",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content: "This platform has transformed my learning experience. The AI-powered features are incredibly helpful!"
    },
    {
      name: "Riyas Khan",
      role: "Bsc Mathematics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content: "The study resources and community support have helped me excel in my courses."
    }
  ];
  
  const resourceTypes = [
    {
      id: 'questionpaper',
      icon: <FileText className="w-6 h-6" />,
      title: 'Past Question Papers',
      description: 'Access previous year question papers and practice tests',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      id: 'notes',
      icon: <Book className="w-6 h-6" />,
      title: 'Notes',
      description: 'Comprehensive study notes and lecture materials',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      id: 'handbook',
      icon: <BookMarked className="w-6 h-6" />,
      title: 'Handbook',
      description: 'Course handbooks and reference materials',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      id: 'grading',
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Grading Documents',
      description: 'Grading policies and assessment criteria',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    }
  ];




export default {features,testimonials,resourceTypes}