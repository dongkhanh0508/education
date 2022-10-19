export interface User {
  id: number;
  username: string;
  password: string;
  role: number;
  status: number;
  createdBy: number;
  createdAt: Date;
  updatedBy: number;
  updatedAt: Date;
  investors: Investor[];
}

export interface Investor {
  id: number;
  name: string;
  dob: Date;
  idCard: string;
  address: string;
  phone: string;
  email: string;
  bank: string;
  banksAccount: string;
  status: number;
  userId: number;
  createdBy: number;
  createdAt: Date;
  updatedBy: number;
  updatedAt: Date;
}
export interface AuthRequest {
  username: string;
  password: string;
}
export interface AuthResponse {
  token: string;
  refreshToken: string;
}
