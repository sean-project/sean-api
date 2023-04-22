import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type StarDocument = Star & Document;

@Schema()
export class Star {
  @Prop()
  starID: number;
  @Prop()
  starCustomTags: string;
  @Prop()
  starName: string;
  @Prop()
  starAge: number;
  @Prop()
  starSex: string;
  @Prop()
  height: string;
  @Prop()
  weight: string;
  @Prop()
  birthdayDate: Date;
  @Prop()
  country: string;
  @Prop()
  birthPlace: string;
  @Prop()
  nation: string;
  @Prop()
  bloodType: string;
  @Prop()
  headImg: string;
  @Prop()
  professions: string;
  @Prop()
  fans: number;
  @Prop()
  school: string;
  @Prop()
  repWorks: string;
  @Prop()
  brokerageFirm: string;
  @Prop()
  describe: string;
  @Prop()
  wbID: string;
  @Prop()
  dyID: string;
  @Prop()
  xhsID: string;
  @Prop()
  bilibiliID: string;
}
export const StarSchema = SchemaFactory.createForClass(Star);
