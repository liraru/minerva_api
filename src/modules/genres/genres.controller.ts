import { Genre } from '@entities/index';
import { GenresService } from '@modules/genres';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

const API_RESPONSE = {
  GET_LIST: {
    status: 200,
    description: 'Result',
    example: [{ id: 'uuid', name: 'string' }]
  },
  GET_BY_ID: {
    status: 200,
    description: 'Result',
    example: { id: 'uuid', name: 'string' }
  },
  CREATE: {
    status: 200,
    description: 'Result',
    example: { id: 'uuid', name: 'string' }
  },
  UPDATE: {
    status: 200,
    description: 'Result',
    example: { id: 'uuid', name: 'string' }
  },
  DELETE: {
    status: 200,
    description: 'Result'
  }
};

@ApiTags('genres')
@Controller('genres')
export class GenresController {
  constructor(private readonly _genresService: GenresService) {}

  @Get(``)
  @ApiOperation({ summary: 'Get all genres' })
  @ApiResponse(API_RESPONSE.GET_LIST)
  public getList() {
    return this._genresService.getList();
  }

  @Get(`/:id`)
  @ApiOperation({ summary: 'Get genre by id' })
  @ApiResponse(API_RESPONSE.GET_BY_ID)
  public getById(@Param(`id`) id: string) {
    return this._genresService.getById(id);
  }

  @Post(``)
  @ApiOperation({ summary: 'Create genre' })
  @ApiResponse(API_RESPONSE.CREATE)
  public create(@Body() genre: Partial<Genre>) {
    return this._genresService.create(genre.name);
  }

  @Put(`/:id`)
  @ApiOperation({ summary: 'Update genre' })
  @ApiResponse(API_RESPONSE.UPDATE)
  public update(@Param(`id`) id: string, @Body() genre: Genre) {
    return this._genresService.update(id, genre);
  }

  @Delete(`/:id`)
  @ApiOperation({ summary: 'Delete genre' })
  @ApiResponse(API_RESPONSE.DELETE)
  public delete(@Param(`id`) id: string) {
    return this._genresService.delete(id);
  }
}
