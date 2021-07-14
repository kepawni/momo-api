import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMessage(): string {
    return '<p>Score one <a href="/heart">heart</a> or one <a href="/coin">coin</a>.</p>';
  }

  @Get('coin')
  scoreCoin(): string {
    this.appService.score('coin');
    return this.getMessage();
  }

  @Get('heart')
  scoreHeart(): string {
    this.appService.score('heart');
    return this.getMessage();
  }
}
