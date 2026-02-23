export interface User {
  id: string;
  name: string;
  email: string;
  created_at?: string;
}

export interface House {
  id: string;
  name: string;
  created_by: string | null;
  created_at?: string;
}

export interface Member {
  id: string;
  house_id: string;
  user_id: string;
  role: 'admin' | 'member';
  created_at?: string;
}
