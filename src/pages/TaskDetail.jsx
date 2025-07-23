import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const statusStyles = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  in_progress: 'bg-blue-100 text-blue-800 border-blue-200',
  completed: 'bg-green-100 text-green-800 border-green-200',
};

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    // Simulate API call - replace with your actual API call
    const fetchTask = async () => {
      try {
        // Mock data - replace with your actual API call
        const mockTask = {
          id: id,
          title: 'Hepatitis B',
          patient: {
            name: 'John Doe',
            age: 32,
            gender: 'Male',
            patientId: 'PAT-001'
          },

          status: 'pending',
          requestedBy: 'Laboratory Department',
          requestedDate: '2024-01-15',
          estimatedDuration: '30 minutes',
          description: 'Hepatitis B test to check for infection.',
          instructions: ' Handle blood samples with care.',
          notes: 'Walk-in patient presents for wellness screening. No known medical history provided.',
          equipment: ['Blood collection tubes', 'Needle', 'Tourniquet', 'Alcohol swabs'],
          results: null
        };
        
        // Simulate API delay
        setTimeout(() => {
          setTask(mockTask);
          setLoading(false);
        }, 1000);
        
      } catch (err) {
        console.error('Error fetching task:', err);
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleStatusUpdate = async (newStatus) => {
    try {
      // Replace with your actual API call
      setTask(prev => ({ ...prev, status: newStatus }));
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Task Not Found</h2>
            <p className="text-gray-500 mb-6">The task you're looking for doesn't exist.</p>
            <button 
              onClick={() => navigate('/technician-dashboard')}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => navigate('/technician-dashboard')}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboard
            </button>
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${statusStyles[task.status]}`}>
                {task.status.replace('_', ' ').toUpperCase()}
              </span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{task.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Patient Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h2 className="text-xl font-semibold text-gray-800">Patient Information</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Name</p>
                  <p className="font-medium text-gray-800">{task.patient.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Patient ID</p>
                  <p className="font-medium text-gray-800">{task.patient.patientId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Age</p>
                  <p className="font-medium text-gray-800">{task.patient.age} years</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Gender</p>
                  <p className="font-medium text-gray-800">{task.patient.gender}</p>
                </div>
              </div>
            </div>

            {/* Test Details */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h2 className="text-xl font-semibold text-gray-800">Test Details</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Description</p>
                  <p className="text-gray-800">{task.description}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Instructions</p>
                  <p className="text-gray-800">{task.instructions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Required Equipment</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {task.equipment.map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Task Info */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Task Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Requested By</p>
                  <p className="font-medium text-gray-800">{task.requestedBy}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Requested Date</p>
                  <p className="font-medium text-gray-800">{task.requestedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Estimated Duration</p>
                  <p className="font-medium text-gray-800">{task.estimatedDuration}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Actions</h3>
              <div className="space-y-3">
                {task.status === 'pending' && (
                  <button
                    onClick={() => handleStatusUpdate('in_progress')}
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                  >
                    Start Task
                  </button>
                )}
                
                {task.status === 'in_progress' && (
                  <button
                    onClick={() => handleStatusUpdate('completed')}
                    className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors font-medium"
                  >
                    Mark as Complete
                  </button>
                )}
                
                {task.status === 'completed' && (
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <svg className="w-12 h-12 text-green-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-green-800 font-medium">Task Completed</p>
                  </div>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}