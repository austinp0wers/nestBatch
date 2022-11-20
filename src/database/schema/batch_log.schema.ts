import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BatchLogDocument = Batch_Log & Document;

@Schema()
export class Batch_Log {
  @Prop()
  jobType: string;

  @Prop({
    default: 'ongoing',
  })
  status: string;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    default: null,
  })
  completedAt: Date;
}

export const BatchLogSchema = SchemaFactory.createForClass(Batch_Log);
