import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoDbService {
  public getMongoOptions() {
    let mongoOptions = {};
    mongoOptions = {
      orders: {
        uri: `${process.env.MONGO_DATABASE_ORDERS}`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      automatic_kpi: {
        uri: `${process.env.MONGO_DATABASE_AUTOMATIC_KPI}`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      job_execution_detail: {
        uri: `${process.env.MONGO_DATABASE_JOB_EXECUTION_DETAIL}`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    };
    return mongoOptions;
  }
}
