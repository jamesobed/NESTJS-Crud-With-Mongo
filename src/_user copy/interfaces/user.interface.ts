export interface UserInterface {
  id?: string;
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber: string;
  avatar: string;
  isVerified: boolean;
  email: string;
  confirmPassword?: string;
  password: string;
  token?: string;
  role?: string;
}
