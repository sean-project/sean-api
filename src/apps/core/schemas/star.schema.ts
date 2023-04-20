import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type StarDocument = Star & Document;

@Schema()
export class Star {
  @Prop()
  Sex: number;
  @Prop()
  StarAge: number;
  @Prop()
  BirthPlace: string;
}
// BirthPlace、StarAge
export const StarSchema = SchemaFactory.createForClass(Star);
