import React, { useState, useEffect } from 'react';
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  MessageCircle, 
  TrendingUp, 
  Award, 
  Calendar,
  Upload,
  Users,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Target,
  Clock,
  Trophy,
  Brain,
  CheckCircle,
  AlertCircle,
  Plus,
  Search
} from 'lucide-react';

const EduFlow = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Mock data for demonstration
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

  // Authentication Component
  const AuthScreen = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [selectedRole, setSelectedRole] = useState('');

    const handleAuth = (role) => {
      setUserRole(role);
      setCurrentUser(role === 'student' ? studentData : teacherData);
      setCurrentPage('dashboard');
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">EduFlow</h1>
            <p className="text-gray-600">Your Learning Journey Starts Here</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAuth('student')}
                className="p-6 border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
              >
                <GraduationCap className="w-12 h-12 text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-slate-800">Student</h3>
                <p className="text-sm text-gray-600 mt-1">Learn & Progress</p>
              </button>

              <button
                onClick={() => handleAuth('teacher')}
                className="p-6 border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
              >
                <User className="w-12 h-12 text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-slate-800">Teacher</h3>
                <p className="text-sm text-gray-600 mt-1">Teach & Manage</p>
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Choose your role to continue
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Student Dashboard Components
  const StudentDashboard = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {currentUser.name}!</h2>
        <p className="opacity-90">Ready to continue your learning journey?</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Current Streak</p>
              <p className="text-3xl font-bold text-slate-800">{currentUser.streak}</p>
              <p className="text-blue-600 text-sm">days</p>
            </div>
            <Trophy className="w-12 h-12 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Points</p>
              <p className="text-3xl font-bold text-slate-800">{currentUser.totalPoints}</p>
              <p className="text-blue-600 text-sm">points earned</p>
            </div>
            <Award className="w-12 h-12 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Overall Progress</p>
              <p className="text-3xl font-bold text-slate-800">74%</p>
              <p className="text-green-600 text-sm">+5% this week</p>
            </div>
            <TrendingUp className="w-12 h-12 text-green-500" />
          </div>
        </div>
      </div>

      {/* Subject Progress */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Subject Progress</h3>
        <div className="space-y-4">
          {currentUser.subjects.map((subject, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${subject.color}`}></div>
                <span className="font-medium text-slate-700">{subject.name}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${subject.color}`}
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-12">{subject.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
        <div className="flex items-start space-x-3">
          <Brain className="w-6 h-6 text-purple-600 mt-1" />
          <div>
            <h3 className="font-bold text-slate-800 mb-2">Today's Study Suggestion</h3>
            <p className="text-slate-700 mb-2">
              You got 65% in Physics last week. Let's review "Newton's Laws" before moving to "Energy and Work".
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
              Start Review Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const StudentClassroom = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Classroom</h2>
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>AI Tutor</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentUser.subjects.map((subject, index) => (
          <div
            key={index}
            onClick={() => setSelectedSubject(subject)}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <div className={`w-12 h-12 rounded-lg ${subject.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">{subject.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{subject.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${subject.color}`}
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Results Section */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Recent Results</h3>
        <div className="space-y-3">
          {currentUser.recentQuizzes.map((quiz, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-slate-800">{quiz.subject} Quiz</h4>
                <p className="text-sm text-gray-600">{quiz.date}</p>
              </div>
              <div className="text-right">
                <span className={`text-lg font-bold ${quiz.score >= 80 ? 'text-green-600' : quiz.score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {quiz.score}%
                </span>
                <div className="flex items-center space-x-1">
                  {quiz.score >= 80 ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                  )}
                  <span className="text-sm text-gray-600">
                    {quiz.score >= 80 ? 'Excellent' : quiz.score >= 60 ? 'Good' : 'Needs Work'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Teacher Dashboard Components
  const TeacherDashboard = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {currentUser.name}!</h2>
        <p className="opacity-90">Manage your classes and track student progress</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Classes</p>
              <p className="text-3xl font-bold text-slate-800">{currentUser.classes.length}</p>
            </div>
            <Users className="w-12 h-12 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Students</p>
              <p className="text-3xl font-bold text-slate-800">
                {currentUser.classes.reduce((sum, cls) => sum + cls.students, 0)}
              </p>
            </div>
            <GraduationCap className="w-12 h-12 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Assessments</p>
              <p className="text-3xl font-bold text-slate-800">12</p>
            </div>
            <FileText className="w-12 h-12 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Classes Overview */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-800">Your Classes</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Class</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentUser.classes.map((classItem, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer">
              <h4 className="font-medium text-slate-800 mb-2">{classItem.name}</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Students</span>
                  <span className="font-medium">{classItem.students}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subject</span>
                  <span className="font-medium">{classItem.subject}</span>
                </div>
              </div>
              <div className="mt-3 flex space-x-2">
                <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  View Details
                </button>
                <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  Upload Notes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
          <div className="flex items-start space-x-3">
            <Upload className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Upload Study Material</h3>
              <p className="text-slate-700 text-sm mb-3">
                Upload notes and let AI generate quizzes and presentations automatically.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                Upload Files
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
          <div className="flex items-start space-x-3">
            <BarChart3 className="w-6 h-6 text-purple-600 mt-1" />
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Create Assessment</h3>
              <p className="text-slate-700 text-sm mb-3">
                Build quizzes with AI assistance. Multiple choice, essays, and more.
              </p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                Create Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Navigation Component
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
          <h1 className="text-2xl font-bold text-slate-800">EduFlow</h1>
          <p className="text-sm text-gray-600 capitalize">{userRole} Portal</p>
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
            onClick={() => {
              setCurrentUser(null);
              setUserRole(null);
              setCurrentPage('dashboard');
            }}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    );
  };

  // Main App Layout
  const MainLayout = () => {
    const renderPage = () => {
      if (userRole === 'student') {
        switch (currentPage) {
          case 'dashboard':
            return <StudentDashboard />;
          case 'classroom':
            return <StudentClassroom />;
          default:
            return <StudentDashboard />;
        }
      } else {
        return <TeacherDashboard />;
      }
    };

    return (
      <div className="bg-gray-50 min-h-screen">
        <Sidebar />
        <div className="ml-64 p-8">
          <div className="max-w-7xl mx-auto">
            {renderPage()}
          </div>
        </div>
      </div>
    );
  };

  // Main App Component
  if (!currentUser) {
    return <AuthScreen />;
  }

  return <MainLayout />;
};

export default EduFlow;