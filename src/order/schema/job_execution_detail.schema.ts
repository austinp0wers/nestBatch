import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobExecutionDetailDocument = Job_Execution_Detail & Document;

@Schema()
export class Job_Execution_Detail {
  @Prop()
  batchCategory: string;

  @Prop()
  status: string;

  @Prop()
  jobNumber: number;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;
}

export const JobExecutionDetailSchema =
  SchemaFactory.createForClass(Job_Execution_Detail);
