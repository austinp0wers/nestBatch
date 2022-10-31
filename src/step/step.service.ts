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
    const prevDate = new Date('2022-10-19T15:00:00.000Z');
    const ordersResult = await this.itemReader.getOrders(prevDate);
    const totalRevenue: number = await this.itemProcessor.calculateTotalRevenue(
      ordersResult,
    );
    const batchDto: BatchLogSaveDto = new BatchLogSaveDto();
    const saveTotalRevenue = await this.itemWriter.saveBatchExecution(batchDto);
    return saveTotalRevenue;
  }
}
