import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // pasa solo los campos definidos en el dto
      forbidNonWhitelisted: true // Lanza los errores de las validaciones
    })
  )
  
  await app.listen(3000);
}
bootstrap();
