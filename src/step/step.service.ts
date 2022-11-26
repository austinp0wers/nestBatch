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
    const currentBatch = await this.itemWriter.saveBatchExecution(
      startBatchDto,
    );
    let totalRevenue: number;
    const ordersResult = await this.itemReader.getOrders(prevDate);

    try {
      totalRevenue = await this.itemProcessor.calculateTotalRevenue(
        ordersResult,
      );
    } catch (err) {}
    const endBatchDto: EndBatchLogPatchDto = new EndBatchLogPatchDto(
      currentBatch._id,
      'successful',
      new Date(),
    );
    await this.itemWriter.patchBatchExecution(endBatchDto);
    await this.itemWriter.saveSuccessfulJobExecution();
    return totalRevenue;
  }
}
