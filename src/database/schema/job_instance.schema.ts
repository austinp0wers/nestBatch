import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Job_InstanceDocument = Job_Instance & Document;

@Schema()
export class Job_Instance {
  @Prop()
  category: string;

  @Prop()
  status: string;

  @Prop()
  failedTask: string;

  @Prop()
  range: number;

  @Prop()
  totalRange: number;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;
}

export const JobInstanceSchema = SchemaFactory.createForClass(Job_Instance);
