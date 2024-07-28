import { AuthorsModule } from '@modules/authors/authors.module';
import { BooksModule } from '@modules/books/books.module';
import { EditorialsModule } from '@modules/editorials/editorials.module';
import { GenresModule } from '@modules/genres/genres.module';
import { MangaModule } from '@modules/manga/manga.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { databaseConfig } from 'private/database.config';

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
    EditorialsModule,
    GenresModule,
    MangaModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
