import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
  nombreAdmin: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 300,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  },
  password: {
    type: String,
    required: true,
  }
});

const Administradir = mongoose.model('admin', adminSchema);

export default Administradir;
