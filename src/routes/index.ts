import { Router } from 'express';
import { FormController } from '../controllers/FormController';

const router = Router();
const formController = new FormController();

router.post('/forms', (req, res) => formController.create(req, res));
router.get('/forms', (req, res) => formController.list(req, res));

export default router;