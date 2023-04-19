// import { prepareInit } from './utils/prepareInit';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { prepareInit } from './utils/prepareInit';
async function bootstrap() {
  prepareInit();
  const { AppModule } = await import('./app.module');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
