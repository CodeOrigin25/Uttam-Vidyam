import React, { useState } from 'react';
import { 
  User, GraduationCap, BookOpen, MessageCircle, TrendingUp, Award, Trophy, Brain,
  CheckCircle, AlertCircle, BarChart3, Users, FileText, Settings, LogOut, Plus
} from 'lucide-react';

const EduFlow = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedSubject, setSelectedSubject] = useState(null);

  const studentData = {
    name: "Alex Johnson",
    streak: 15,
    totalPoints: 2450,
    subjects: [
      { name: "Mathematics", progress: 78, color: "bg-blue-500" },
      { name: "Physics", progress: 65, color: "bg-blue-600" },
      { name: "Chemistry", progress: 82, color: "bg-blue-400" },
      { name: "Biology", progress: 71, color: "bg-blue-700" }
    ],
    recentQuizzes: [
      { subject: "Mathematics", score: 85, date: "2025-01-08" },
      { subject: "Physics", score: 72, date: "2025-01-07" },
      { subject: "Chemistry", score: 91, date: "2025-01-06" }
    ]
  };

  const teacherData = {
    name: "Dr. Sarah Williams",
    classes: [
      { name: "Class 10A Mathematics", students: 32, subject: "Mathematics" },
      { name: "Class 10B Mathematics", students: 28, subject: "Mathematics" },
      { name: "Class 9A Physics", students: 30, subject: "Physics" }
    ]
  };

  // Authentication Screen if user not selected
  const AuthScreen = () => {
    const handleAuth = (role) => {
      setUserRole(role);
      setCurrentUser(role === 'student' ? studentData : teacherData);
      setCurrentPage('dashboard');
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">Uttam Vidyam</h1>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleAuth('student')}
              className="p-6 border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <GraduationCap className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <p>Student</p>
            </button>
            <button
              onClick={() => handleAuth('teacher')}
              className="p-6 border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <User className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <p>Teacher</p>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Sidebar Component
  const Sidebar = () => {
    const studentNavItems = [
      { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
      { id: 'classroom', label: 'Classroom', icon: BookOpen },
      { id: 'ai-tutor', label: 'AI Tutor', icon: MessageCircle },
      { id: 'results', label: 'Results', icon: Trophy },
      { id: 'settings', label: 'Settings', icon: Settings }
    ];

    const teacherNavItems = [
      { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
      { id: 'classes', label: 'My Classes', icon: Users },
      { id: 'assessments', label: 'Assessments', icon: FileText },
      { id: 'analytics', label: 'Analytics', icon: TrendingUp },
      { id: 'settings', label: 'Settings', icon: Settings }
    ];

    const navItems = userRole === 'student' ? studentNavItems : teacherNavItems;

    return (
      <div className="bg-white shadow-lg h-screen w-64 fixed left-0 top-0 z-50">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold">Uttam Vidyam</h1>
          <p className="text-sm capitalize">{userRole} Portal</p>
        </div>
        <nav className="mt-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-blue-50 transition-colors ${
                  currentPage === item.id ? 'bg-blue-50 border-r-2 border-blue-600 text-blue-700' : 'text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="absolute bottom-0 w-full p-6">
          <button
            onClick={() => { setCurrentUser(null); setUserRole(null); setCurrentPage('dashboard'); }}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    );
  };

  // Student Dashboard (simplified)
  const StudentDashboard = () => (
    <div className="p-8">
      <h2>Welcome, {currentUser.name}</h2>
      <p>Total Points: {currentUser.totalPoints}</p>
      <p>Streak: {currentUser.streak} days</p>
    </div>
  );

  // Teacher Dashboard (simplified)
  const TeacherDashboard = () => (
    <div className="p-8">
      <h2>Welcome, {currentUser.name}</h2>
      <p>Total Classes: {currentUser.classes.length}</p>
      <p>Total Students: {currentUser.classes.reduce((sum, cls) => sum + cls.students, 0)}</p>
    </div>
  );

  const MainLayout = () => {
    const renderPage = () => {
      if (userRole === 'student') return <StudentDashboard />;
      return <TeacherDashboard />;
    };

    return (
      <div className="bg-gray-50 min-h-screen flex">
        <Sidebar />
        <div className="ml-64 w-full">{renderPage()}</div>
      </div>
    );
  };

  return !currentUser ? <AuthScreen /> : <MainLayout />;
};

export default EduFlow;
