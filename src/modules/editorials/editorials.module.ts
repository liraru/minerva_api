import { EditorialsController } from '@modules/editorials/editorials.controller';
import { Module } from '@nestjs/common';
import { EditorialsService } from '@services/editorials/editorials.service';

@Module({
  providers: [EditorialsService],
  controllers: [EditorialsController]
})
export class EditorialsModule {}
