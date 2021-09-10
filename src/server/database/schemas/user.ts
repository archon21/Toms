import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  roles: {
    type: Array,
    required: true,
  },
});

export default mongoose.model("users", UserSchema);
