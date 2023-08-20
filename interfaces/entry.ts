export interface entry {
  _id: string;
  description: string;
  createdAt: number;
  status: statusType;
}

export type statusType = 'pending' | 'in-progress' | 'completed'