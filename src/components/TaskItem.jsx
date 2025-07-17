import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const statusStyles = {
  pending: 'bg-yellow-100 text-yellow-700',
  in_progress: 'bg-blue-100 text-blue-700',
  completed: 'bg-green-100 text-green-700',
};

export default function TaskItem({ task }) {
  return (
    <li className="p-4 bg-gray-50 border rounded-lg hover:bg-gray-100 transition">
      <Link to={`/tasks/${task.id}`} className="flex justify-between items-center">
        <div>
          <p className="font-medium">{task.title}</p>
          <p className="text-sm text-gray-600">Patient: {task.patient}</p>
        </div>
        <span
          className={clsx(
            'px-3 py-1 rounded-full text-sm font-semibold',
            statusStyles[task.status]
          )}
        >
          {task.status.replace('_', ' ').toUpperCase()}
        </span>
      </Link>
    </li>
  );
}
