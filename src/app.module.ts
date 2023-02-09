import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  /* should pass a NEXT.js server instance
        as the argument to `forRootAsync` */
  imports: [
    HttpModule.register({
      baseURL: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${STOCK_KEY}`,
      params: {
        appid: process.env.STOCK_KEY,
      },
    }),
    RenderModule.forRootAsync(
      Next({ dev: true }),
      /* null means that nest-next 
        should look for pages in root dir */
      { viewsDir: null },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
