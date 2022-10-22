import { ItemModule } from '../order/item/item.module';
import { BatchStepService } from './step.service';
import { Module } from '@nestjs/common';
@Module({
  imports: [ItemModule],
  providers: [BatchStepService],
  exports: [BatchStepService],
})
export class BatchStepModule {}
