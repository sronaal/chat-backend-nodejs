import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    name: { type: String }, // null para chat privado
    isGroup: { type: Boolean, default: false },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Room', RoomSchema);
