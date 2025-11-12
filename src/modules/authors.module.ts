import { Module } from '@nestjs/common';
import { AuthorsController } from '../controllers/authors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from '@entities/author.entity';
import { AuthorsService } from '@services/authors/authors.service';
import { AuthorsQueryBuilderService } from '@services/authors/authors-query-builder.service';

@Module({
  controllers: [AuthorsController],
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorsService, AuthorsQueryBuilderService]
})
export class AuthorsModule {}
