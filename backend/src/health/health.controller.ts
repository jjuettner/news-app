import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateHealthDto } from './dto/create-health.dto';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Post()
  create(@Body() createHealthDto: CreateHealthDto) {
    return this.healthService.create(createHealthDto);
  }

  @Get()
  findAll() {
    return 'ok';
  }
}
