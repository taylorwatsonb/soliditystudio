export interface CollaborationUser {
  id: string;
  name: string;
  color: string;
  cursor?: {
    line: number;
    column: number;
  };
}

export interface CollaborationState {
  users: CollaborationUser[];
  isConnected: boolean;
  roomId: string | null;
}