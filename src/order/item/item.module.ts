import { ItemWriter } from './item.writer';
import { Batch_Log, BatchLogSchema } from './../schema/batch_log.schema';
import { ItemProcessor } from './item.processor';
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
    MongooseModule.forFeature(
      [{ name: Batch_Log.name, schema: BatchLogSchema }],
      'automatic_kpi',
    ),
  ],
  providers: [ItemReader, ItemProcessor, ItemWriter],
  exports: [ItemReader, ItemProcessor, ItemWriter],
})
export class ItemModule {}
