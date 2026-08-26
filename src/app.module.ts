import { AuthorsModule } from '@modules/authors/authors.module';
import { BooksModule } from '@modules/books/books.module';
import { ConstantsModule } from '@modules/constants/constants.module';
import { EditorialsModule } from '@modules/editorials/editorials.module';
import { GenresModule } from '@modules/genres/genres.module';
import { LocationsModule } from '@modules/locations';
import { MangaModule } from '@modules/manga/manga.module';
import { StatsModule } from '@modules/stats/stats.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { databaseConfig } from '../private/database.config';
import { AuthModule } from '@modules/auth/auth.module';

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
  imports: [
    TypeOrmModule.forRoot(getDBConfig(environment)),
    AuthorsModule,
    BooksModule,
    ConstantsModule,
    EditorialsModule,
    GenresModule,
    MangaModule,
    StatsModule,
    LocationsModule,
    AuthModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {
  constructor() {}
}
