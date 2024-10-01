import express from 'express';
import FamilyController from '../controlers/family.controller';

const router = express.Router();

router.post('/', FamilyController.addMeber);
router.get('/', FamilyController.getMemebers);
router.get('/:id', FamilyController.getOneMember);
router.put('/:id', FamilyController.updateMember);
router.delete('/:id', FamilyController.deleteMember);

export default router;
