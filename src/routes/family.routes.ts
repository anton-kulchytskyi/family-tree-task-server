//importing modules
import express from 'express';
import FamilyController from '../controlers/family.controller';

//initiating the router
const router = express.Router();

//add post route
router.post('/', FamilyController.addMeber);

//get posts
router.get('/', FamilyController.getMemebers);

//get single post
router.get('/:id', FamilyController.getOneMember);

//update a post
router.put('/:id', FamilyController.updateMember);

//delete a post
router.delete('/:id', FamilyController.deleteMember);

export default router;
