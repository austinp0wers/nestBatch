import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemProcessor {
  constructor() {}

  public async calculateTotalRevenue(ordersList) {
    let totalRevenue = 0;
    for (let i = 0; i < ordersList.length; i++) {
      if (ordersList[i].additionalPrice.length > 1) {
        while (ordersList[i].additionalPrice.length > 1) {
          const temp = ordersList[i].additionalPrice.pop();
          totalRevenue += temp.amount;
        }
      }
      totalRevenue += ordersList[i].notifiedPrice;
    }

    return totalRevenue;
  }
}
