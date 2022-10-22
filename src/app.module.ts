import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDbService } from './database/mongodb/mongodb.service';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './task/task.module';

const mongoDbService = new MongoDbService();

@Module({
  imports: [
    TasksModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: () => mongoDbService.getMongoOptions()['orders'],
      connectionName: 'orders',
    }),
    MongooseModule.forRootAsync({
      useFactory: () => mongoDbService.getMongoOptions()['automatic_kpi'],
      connectionName: 'automatic_kpi',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
