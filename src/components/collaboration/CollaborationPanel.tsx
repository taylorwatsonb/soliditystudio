import React from 'react';
import { Users } from 'lucide-react';
import { CollaborationUser } from '../../types/collaboration';

interface CollaborationPanelProps {
  users: CollaborationUser[];
  roomId: string;
}

export function CollaborationPanel({ users, roomId }: CollaborationPanelProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="text-green-400" size={20} />
        <h3 className="text-lg font-semibold">Collaborators</h3>
      </div>

      <div className="space-y-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center space-x-2 p-2 rounded-lg bg-gray-700"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: user.color }}
            />
            <span className="text-sm">{user.name}</span>
            {user.cursor && (
              <span className="text-xs text-gray-400">
                Line {user.cursor.line}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700">
        <p className="text-sm text-gray-400">
          Room ID: {roomId}
        </p>
      </div>
    </div>
  );
}