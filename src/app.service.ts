import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import f500ticker from '../assets/f500ticker.json';
import Random from '../util/Random';
import React, { useState } from 'react';

const [ticker, setTicker] = useState('');
const tickerJSON = f500ticker;

const setRandTicker = function () {
  setTicker(tickerJSON[Random()].Symbol.valueOf());
};

@Injectable()
export class StockService {
  async getStockData() {
    const date = new Date();
    if (ticker == '') {
      setRandTicker();
    }
    if (date.getUTCHours() == 14) {
      setRandTicker();
    }
    const url =
      'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' +
      { ticker } +
      `&apikey=${STOCK_KEY}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }
}
