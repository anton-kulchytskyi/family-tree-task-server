//import modules
import FamilyMemberServices from '../services/family.service';
import { Request, Response } from 'express';
// import FamilyMember from '../models/FamilyMember';

class familyController {
  //add post controller
  addMeber = async (req: Request, res: Response) => {
    console.log('addMeber');
    //data to be saved in database
    const data = {
      name: req.body.name,
      age: req.body.age,
      parents: req.body.parents || [],
      children: req.body.children || [],
    };
    //validating the request
    // const { error, value } = PostschemaValidate.validate(data);
    if (!data) {
      res.send('something went wrong');
    } else {
      //call the create post function in the service and pass the data from the request
      console.log('add-data', data);
      const member = await FamilyMemberServices.createFamilyMember(data);
      res.status(201).send(member);
    }

    // if (error) {
    //   res.send(error.message);
    // } else {
    //   //call the create post function in the service and pass the data from the request
    //   console.log('add-data', data);
    //   const member = await FamilyMemberServices.createFamilyMember(data);
    //   res.status(201).send(member);
    // }
  };

  //get all posts
  getMemebers = async (req: Request, res: Response) => {
    console.log('getMemebers');
    const members = await FamilyMemberServices.getFamilyMembers();
    res.send(members);
  };

  //get a single post
  getOneMember = async (req: Request, res: Response) => {
    //get id from the parameter
    const id = req.params.id;
    const member = await FamilyMemberServices.getFamilyMember(id);
    res.send(member);
  };

  //update post
  updateMember = async (req: Request, res: Response) => {
    const id = req.params.id;
    const member = await FamilyMemberServices.updateFamilyMember(id, req.body);
    res.send(member);
  };

  //delete a post
  deleteMember = async (req: Request, res: Response) => {
    const id = req.params.id;
    await FamilyMemberServices.deleteFamilyMember(id);
    res.send('post deleted');
  };
}

//export class
const FamilyController = new familyController();

export default FamilyController;
