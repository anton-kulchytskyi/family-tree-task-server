import mongoose from 'mongoose';

interface IFamilyMemberSchema {
  name: string;
  age: string;
  parents: string[];
  children: string[];
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
  parents: [String],
  children: [String],
});

const FamilyMember = mongoose.model<IFamilyMemberSchema>(
  'FamilyMember',
  FamilyMemberSchema
);

export default FamilyMember;
