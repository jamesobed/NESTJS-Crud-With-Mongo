import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  phoneNumber: String,
  avatar: String,
  isVerified: Boolean,
  email: String,
  password: String,
});
