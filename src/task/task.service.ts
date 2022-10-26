import { BatchStepService } from '../step/step.service';
import { Injectable, Logger } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
// 실제 수행되는 태스크 구현.

@Injectable()
export class TaskService {
  constructor(private batchSteps: BatchStepService) {}

  private readonly logger = new Logger(TaskService.name);

  // !! Interval time should not be set to env
  // app bound시 env가 null로 읽힌 상태에서 실행되는 것을 방지
  @Interval(10000)
  async totalRevenue() {
    let total_revenue;
    try {
      total_revenue = await this.batchSteps.getTotalOrderRevenue();
    } catch (err) {
      console.log(err);
    }
    this.logger.log(`total revenue is ${total_revenue}`);
  }
}
