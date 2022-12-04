import { EndBatchLogPatchDto } from './../order/dto/endBatchLogPatch.dto';
import { BatchLogSaveDto } from './../order/dto/batchLogSave.dto';
import { ItemWriter } from './../order/item/item.writer';
import { ItemProcessor } from './../order/item/item.processor';
import { ItemReader } from './../order/item/item.reader';
import { Injectable } from '@nestjs/common';
@Injectable()
export class BatchStepService {
  constructor(
    private itemReader: ItemReader,
    private itemProcessor: ItemProcessor,
    private itemWriter: ItemWriter,
  ) {}

  public async getTotalOrderRevenue() {
    const prevDate = new Date();
    const startBatchDto: BatchLogSaveDto = new BatchLogSaveDto('revenueBatch');
    let totalRevenue: number;
    let endBatchDto: EndBatchLogPatchDto;
    this.itemReader.getTotalOrderCount(prevDate);
    const currentBatch = await this.itemWriter.saveBatchExecution(
      startBatchDto,
    );

    try {
      const ordersResult = await this.itemReader.getOrders(prevDate);

      totalRevenue = await this.itemProcessor.calculateTotalRevenue(
        ordersResult,
      );

      if (!totalRevenue || !ordersResult) {
        endBatchDto = new EndBatchLogPatchDto(
          currentBatch._id,
          'fail',
          new Date(),
        );
      }
    } catch (err) {
      console.log('err');
    }
    const jobExecutionResult =
      await this.itemWriter.saveSuccessfulJobExecution();

    if (jobExecutionResult) {
      endBatchDto = new EndBatchLogPatchDto(
        currentBatch._id,
        'successful',
        new Date(),
      );
    }

    await this.itemWriter.patchBatchExecution(endBatchDto);
    return totalRevenue;
  }
}
