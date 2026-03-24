import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const port_frontend = process.env.PORT_FRONTEND ?? 3001;
	console.log(`Starting backend on port ${process.env.PORT ?? 5000} with CORS enabled for http://localhost:${port_frontend}`);
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: `http://localhost:${port_frontend}` });
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
