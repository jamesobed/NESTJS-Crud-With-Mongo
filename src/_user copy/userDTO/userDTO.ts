export class CreateUserDTO {
  readonly firstName: string;
  readonly lastName: string;
  readonly userName: string;
  readonly phoneNumber: string;
  readonly avatar: string;
  readonly isVerified: boolean;
  readonly email: string;
  readonly confirmPassword: string;
  readonly password: string;
}
