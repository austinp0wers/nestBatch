import { ItemReader } from './../order/item/item.reader';
import { Injectable } from '@nestjs/common';
@Injectable()
export class BatchStepService {
  constructor(private itemReader: ItemReader) {}

  public async getTotalOrderRevenue() {
    const prevDate = new Date('2022-10-18T15:00:00');
    const ordersResult = await this.itemReader.getOrders(prevDate);
    console.log(ordersResult);
    return 1000;
  }
}
