import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type JobExecutionDocument = Job_Execution & Document;

@Schema()
export class Job_Execution {
  @Prop()
  jobInstanceId: mongoose.Types.ObjectId;

  @Prop()
  status: string;

  @Prop()
  jobNumber: number;

  totalRange: number;

  @Prop()
  fromIndex: number;

  @Prop()
  toIndex: number;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    default: null,
  })
  completedAt: Date;
}

export const JobExecutionSchema = SchemaFactory.createForClass(Job_Execution);
