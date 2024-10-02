import mongoose from 'mongoose';

interface IFamilyMemberSchema {
  name: string;
  age: string;
  parents: mongoose.Types.ObjectId[];
  children: mongoose.Types.ObjectId[];
}

const FamilyMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  parents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FamilyMember' }],
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FamilyMember' }],
});

const FamilyMember = mongoose.model<IFamilyMemberSchema>(
  'FamilyMember',
  FamilyMemberSchema
);

export default FamilyMember;
