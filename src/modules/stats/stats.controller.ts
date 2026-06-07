import { StatsService } from '@modules/stats/stats.service';
import { Controller, Get } from '@nestjs/common';

@Controller('stats')
export class StatsController {
  constructor(private readonly _statsService: StatsService) {}

  @Get()
  public getStats() {
    return this._statsService.getStats();
  }
}
