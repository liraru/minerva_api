import { Location } from '@entities/index';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  LocationsController,
  LocationsService,
  LocationsQueryBuilderService
} from '@modules/locations';

@Module({
  controllers: [LocationsController],
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [LocationsService, LocationsQueryBuilderService]
})
export class LocationsModule {}
