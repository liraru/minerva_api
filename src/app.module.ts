import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from 'private/database.config';
import { GenresModule } from '@modules/genres/genres.module';

const environment: 'local' | 'develop' = 'local';

function getDBConfig(host: 'local' | 'develop'): TypeOrmModuleOptions {
  console.log(`>>>>> Initializing with ${host} data <<<<<`.toUpperCase());
  switch (host) {
    case 'local':
      return databaseConfig.mysql_local as TypeOrmModuleOptions;
    case 'develop':
      return databaseConfig.mysql_server as TypeOrmModuleOptions;
  }
}

@Module({
  imports: [TypeOrmModule.forRoot(getDBConfig(environment)), GenresModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
