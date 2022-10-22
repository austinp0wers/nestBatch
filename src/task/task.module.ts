import { BatchStepModule } from '../step/step.module';
import { TaskService } from './task.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [BatchStepModule],
  providers: [TaskService],
})
export class TasksModule {}
