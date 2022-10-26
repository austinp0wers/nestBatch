import { BatchLogDocument, Batch_Log } from './../schema/batch_log.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemWriter {
  constructor(
    @InjectModel(Batch_Log.name, 'automatic_kpi')
    private batchLogModel: Model<BatchLogDocument>,
  ) {}

  public async saveBatchExecution(batchSaveDto) {
    await new this.batchLogModel(batchSaveDto).save();
  }
}
