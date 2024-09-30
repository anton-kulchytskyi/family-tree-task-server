import FamilyMember from '../models/FamilyMember';
export class FamilyMemberService {
  //create a FamilyMember
  async createFamilyMember(data: any) {
    try {
      const newMember = await FamilyMember.create(data);
      return newMember;
    } catch (error) {
      console.log(error);
    }
  }

  //get all posts
  async getFamilyMembers() {
    try {
      const members = await FamilyMember.find({});
      return members;
    } catch (error) {
      console.log(error);
    }
  }

  //get a single post
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

  //update a post
  async updateFamilyMember(id: string, data: any) {
    try {
      //pass the id of the object you want to update
      //data is for the new body you are updating the old one with
      //new:true, so the dats being returned, is the update one
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

  //delete a post by using the find by id and delete
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

//export the class
const FamilyMemberServices = new FamilyMemberService();

export default FamilyMemberServices;
