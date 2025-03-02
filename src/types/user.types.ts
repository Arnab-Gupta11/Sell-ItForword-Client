export interface IUser {
  userId: string;
  fullName: string;
  email: string;
  profileImg: string;
  role: "user" | "admin";
  iat?: number;
  exp?: number;
}
