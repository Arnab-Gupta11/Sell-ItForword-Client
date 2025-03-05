export interface IUser {
  userId: string;
  fullName: string;
  email: string;
  profileImg: string;
  role: "user" | "admin";
  iat?: number;
  exp?: number;
}
export type TRefUser = {
  createdAt: string;
  email: string;
  fullName: string;
  image: string;
  isBlocked: boolean;
  role: string;
  updatedAt: string;
  __v: number;
  _id: string;
  phone?: string;
  address: string;
  city: string;
};
