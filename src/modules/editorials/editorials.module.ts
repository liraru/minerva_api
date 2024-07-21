import { Editorial } from '@entities/editorial.entity';
import { EditorialsController } from '@modules/editorials/editorials.controller';
import { EditorialsQueryBuilderService } from '@modules/editorials/services/editorials-query-builder/editorials-query-builder.service';
import { EditorialsService } from '@modules/editorials/services/editorials/editorials.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [EditorialsService, EditorialsQueryBuilderService],
  imports: [TypeOrmModule.forFeature([Editorial])],
  controllers: [EditorialsController]
})
export class EditorialsModule {}
