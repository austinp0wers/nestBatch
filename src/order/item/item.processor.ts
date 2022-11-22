import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemProcessor {
  constructor() {}

  public async calculateTotalRevenue(ordersList) {
    let totalRevenue = 0;
    for (let i = 0; i < ordersList.length; i++) {
      totalRevenue += ordersList[i].notifiedPrice;
    }
    const totalRevenueInWon = totalRevenue
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    return totalRevenueInWon;
  }
}
