import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from '@entities/author.entity';
import { AuthorsService } from '@modules/authors/services/authors/authors.service';
import { AuthorsQueryBuilderService } from '@modules/authors/services/authors-query-builder/authors-query-builder.service';

@Module({
  controllers: [AuthorsController],
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorsService, AuthorsQueryBuilderService]
})
export class AuthorsModule {}
