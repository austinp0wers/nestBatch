import { EndBatchLogPatchDto } from './../dto/endBatchLogPatch.dto';
import { BatchLogSaveDto } from './../dto/batchLogSave.dto';
import {
  BatchLogDocument,
  Batch_Log,
} from '../../database/schema/batch_log.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemWriter {
  constructor(
    @InjectModel(Batch_Log.name, 'automatic_kpi')
    private batchLogModel: Model<BatchLogDocument>,
  ) {}

  public async saveBatchExecution(batchSaveDto: BatchLogSaveDto) {
    return await new this.batchLogModel(batchSaveDto).save();
  }

  public async patchBatchExecution(endBatchLogPatchDto: EndBatchLogPatchDto) {
    return await this.batchLogModel.findOneAndUpdate(
      { _id: endBatchLogPatchDto.id },
      {
        status: endBatchLogPatchDto.status,
        completedAt: endBatchLogPatchDto.completedAt,
      },
    );
  }
  public async saveJobInstance() {}

  public async saveSuccessfulJobExecution() {}
}
