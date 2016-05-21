import mongoose from 'mongoose';
import { referalCode } from '../util/randGen';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  referalCode: {
    type: String,
    default: referalCode
  },
  fastCashBalance: {
    type: Number,
    default: 1
  },
  children: [{
    type: ObjectId,
    ref: 'User'
  }],
  parent: {
    type: ObjectId,
    ref: 'User'
  },
  notifications: [{
    content: String,
    read: Boolean,
    type: {
      type: String,
      enum: ['TRANSACTION', 'MESSAGE']
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
});

userSchema.methods.makeFastCash = function(amount, cb) {
  this.fastCashBalance += amount;
  return this.save(cb);
};

const User = mongoose.model('User', userSchema);

export default User;
