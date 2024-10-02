import FamilyMemberServices from '../services/family.service';
import { Request, Response } from 'express';

class familyController {
  //add new member controller
  addMeber = async (req: Request, res: Response) => {
    const data = {
      parent: req.body.parent,
      name: req.body.name,
      age: req.body.age,
    };
    // to do - add validation
    if (!data) {
      res.send('something went wrong');
    } else {
      // create new member and find his parent
      const newData = await FamilyMemberServices.createFamilyMember({
        name: data.name,
        age: data.age,
      });
      const parent = await FamilyMemberServices.getFamilyMemberByName(
        data.parent
      );

      if (parent) {
        await FamilyMemberServices.updateChildrenAndParentArrays(
          parent._id,
          newData?._id
        );
      }

      res.status(201).send(newData);
    }
  };

  getRootMember = async (req: Request, res: Response) => {
    const members = await FamilyMemberServices.getRootMember();
    res.send(members);
  };

  //get all family members
  getMemebers = async (req: Request, res: Response) => {
    const members = await FamilyMemberServices.getFamilyMembers();
    res.send(members);
  };

  //get a single member
  getOneMember = async (req: Request, res: Response) => {
    const id = req.params.id;
    const member = await FamilyMemberServices.getFamilyMember(id);
    res.send(member);
  };

  //update a member
  updateMember = async (req: Request, res: Response) => {
    const id = req.params.id;
    const member = await FamilyMemberServices.updateFamilyMember(id, req.body);
    res.send(member);
  };

  //delete a member
  deleteMember = async (req: Request, res: Response) => {
    const id = req.params.id;
    await FamilyMemberServices.deleteFamilyMember(id);
    res.send('post deleted');
  };
}

//export class
const FamilyController = new familyController();

export default FamilyController;
