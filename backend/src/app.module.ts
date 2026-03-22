import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [HealthModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
