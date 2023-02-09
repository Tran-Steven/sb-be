import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class StockService {
  async getStockData() {
    const url = 'linkhere';
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }
}
