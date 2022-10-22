import { Order, OrderDocument } from './../schema/order.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ItemReader {
  constructor(
    @InjectModel(Order.name, 'orders') private orderModel: Model<OrderDocument>,
  ) {}

  public async getOrders(today: Date) {
    return await this.orderModel.find(
      {
        status: 'complete',
        completedAt: { $gt: today },
      },
      { _id: 1, riderId: 1, notifiedPrice: 1, additionalPrice: 1 },
    );
  }
}
