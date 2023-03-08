import { Controller, Get, Render } from '@nestjs/common';
import { StockService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: StockService) {}
  @Get()
  @Render('index')
  home() {
    return {};
  }

  @Get()
  getStockData() {
    return this.appService.getStockData();
  }
}
