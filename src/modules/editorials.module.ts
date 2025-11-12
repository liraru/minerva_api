import { Editorial } from '@entities/editorial.entity';
import { EditorialsController } from 'src/controllers/editorials.controller';
import { EditorialsQueryBuilderService } from '@services/editorials/editorials-query-builder.service';
import { EditorialsService } from '@services/editorials/editorials.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [EditorialsService, EditorialsQueryBuilderService],
  imports: [TypeOrmModule.forFeature([Editorial])],
  controllers: [EditorialsController]
})
export class EditorialsModule {}
