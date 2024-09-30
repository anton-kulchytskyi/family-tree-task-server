import mongoose from 'mongoose';

//creating an interface
interface IFamilyMemberSchema {
  name: string;
  age: string;
  parent: string;
  published: boolean;
}

//Postschema
const FamilyMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  parents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FamilyMember',
    },
  ],
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FamilyMember',
    },
  ],
});

//creating a model
const FamilyMember = mongoose.model<IFamilyMemberSchema>(
  'FamilyMember',
  FamilyMemberSchema
);

export default FamilyMember;
