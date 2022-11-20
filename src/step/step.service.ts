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
    const batchDto: BatchLogSaveDto = new BatchLogSaveDto('revenueBatch');
    await this.itemWriter.saveBatchExecution(batchDto);

    let totalRevenue: string;
    const ordersResult = await this.itemReader.getOrders(prevDate);
    try {
      totalRevenue = await this.itemProcessor.calculateTotalRevenue(
        ordersResult,
      );
    } catch (err) {}

    return totalRevenue;
  }
}
