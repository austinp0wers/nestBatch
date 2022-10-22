import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IAdditionalPrice } from '../interface/additionalPrice.interface';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  _id: number;

  @Prop()
  riderId: number;

  @Prop()
  notifiedPrice: number;

  @Prop(IAdditionalPrice)
  additionalPrice: IAdditionalPrice;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
