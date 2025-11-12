import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Mi API')
    .setDescription('Documentación de la API con Swagger')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // ruta: http://localhost:3000/api
}
bootstrap();
