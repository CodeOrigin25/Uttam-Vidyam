import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleLoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Select Role</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Student
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Teacher
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleLoginPage;

