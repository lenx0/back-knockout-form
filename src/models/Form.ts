import mongoose, { Schema, Document } from 'mongoose';

export interface IForm extends Document {
  nomeCompleto: string;
  dataNascimento: Date;
  telefone: string;
  cep: string;
  endereco: string;
  numero: string;
}

const FormSchema: Schema = new Schema({
  nomeCompleto: { type: String, required: true },
  dataNascimento: { type: Date, required: true },
  telefone: { type: String, required: true },
  cep: { type: String, required: true },
  endereco: { type: String, required: true },
  numero: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IForm>('Form', FormSchema);