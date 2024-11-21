import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/employees/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {user ? (
            <div className="px-4 py-6 sm:px-0">
              <h2 className="text-2xl font-semibold text-gray-900">Welcome, {user.name}</h2>
              <p className="mt-2 text-gray-600">Position: {user.position}</p>
              <p className="mt-1 text-gray-600">Department: {user.department}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

