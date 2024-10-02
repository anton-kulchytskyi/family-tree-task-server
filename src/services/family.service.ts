import { Condition, ObjectId } from 'mongoose';
import FamilyMember from '../models/FamilyMember';

export class FamilyMemberService {
  async getFamilyMemberByName(name: string) {
    try {
      const familyMember = await FamilyMember.collection.findOne({
        name: name,
      });

      return familyMember;
    } catch (error) {
      console.log(error);
    }
  }

  async createFamilyMember(data: any) {
    try {
      const newMember = await FamilyMember.create(data);
      return newMember;
    } catch (error) {
      console.log(error);
    }
  }

  async getRootMember() {
    try {
      const root = await FamilyMember.findOne({ parents: [] }).populate(
        'children'
      );

      if (!root) {
        console.log('Root member not found');
        return null;
      }

      return root;
    } catch (error) {
      console.error('Error building family tree:', error);
      return null;
    }
  }

  async getFamilyMembers() {
    try {
      const members = await FamilyMember.find({})
        .populate('children')
        .populate('parents');
      return members;
    } catch (error) {
      console.log(error);
    }
  }

  async getFamilyMember(id: string) {
    try {
      const member = await FamilyMember.findById({ _id: id });
      if (!member) {
        return 'member not available';
      }
      return member;
    } catch (error) {
      console.log(error);
    }
  }

  // update children and parents arrays
  async updateChildrenAndParentArrays(
    parent_id: Condition<ObjectId>,
    child_id: Condition<ObjectId>
  ) {
    try {
      await FamilyMember.collection.updateOne(
        { _id: parent_id },
        { $push: { children: child_id } }
      );
      const childMember = await FamilyMember.collection.updateOne(
        { _id: child_id },
        { $push: { parents: parent_id } }
      );
    } catch (error) {
      console.log(error);
    }
  }

  //update member's name and age
  async updateFamilyMember(id: string, data: any) {
    try {
      const member = await FamilyMember.findByIdAndUpdate({ _id: id }, data, {
        new: true,
      });
      if (!member) {
        return 'post not available';
      }
      return member;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteFamilyMember(id: string) {
    try {
      const member = await FamilyMember.findByIdAndDelete(id);
      if (!member) {
        return 'post not available';
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const FamilyMemberServices = new FamilyMemberService();

export default FamilyMemberServices;
