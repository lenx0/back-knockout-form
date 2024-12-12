import { Request, Response } from 'express';
import { FormService } from '../services/FormService';

const formService = new FormService();

export class FormController {
  async create(req: Request, res: Response) {
    try {
      const form = await formService.createForm(req.body);
      res.status(201).json(form);
    } catch (error) {
      res.status(500).json({ message: 'Error creating form', error });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const forms = await formService.getForms();
      res.status(200).json(forms);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching forms', error });
    }
  }
}