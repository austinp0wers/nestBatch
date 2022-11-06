import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobExecutionDocument = Job_Execution & Document;

@Schema()
export class Job_Execution {
  @Prop()
  jobInstanceId: string;

  @Prop()
  status: string;

  @Prop()
  jobNumber: number;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;
}

export const JobExecutionSchema = SchemaFactory.createForClass(Job_Execution);
