import { Order, OrderDocument } from './../schema/order.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ItemReader {
  constructor(
    @InjectModel(Order.name, 'orders') private orderModel: Model<OrderDocument>,
  ) {}

  public async getOrders(fromDate: Date) {
    const ordersList = await this.orderModel.find(
      { status: 'complete', completedAt: { $gt: fromDate } },
      {
        _id: 1,
        riderId: 1,
        notifiedPrice: 1,
        additionalPrice: 1,
        completedAt: 1,
      },
    );

    return ordersList;
  }
}
