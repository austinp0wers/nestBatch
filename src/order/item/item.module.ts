import { Order, OrderSchema } from './../schema/order.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemReader } from './item.reader';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Order.name, schema: OrderSchema }],
      'orders',
    ),
  ],
  providers: [ItemReader],
  exports: [ItemReader],
})
export class ItemModule {}
