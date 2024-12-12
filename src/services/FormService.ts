import Form, { IForm } from '../models/Form';

export class FormService {
  async createForm(data: IForm) {
    return await Form.create(data);
  }

  async getForms() {
    return await Form.find();
  }
}