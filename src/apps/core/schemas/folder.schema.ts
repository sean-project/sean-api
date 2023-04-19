import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type FolderDocument = Folder & Document;

@Schema()
export class Folder {
  @Prop()
  BirthPlace: string;
}

export const FolderSchema = SchemaFactory.createForClass(Folder);
