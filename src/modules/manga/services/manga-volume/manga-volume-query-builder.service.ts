import { MangaChapter } from '@entities/manga-chapter.entity';
import { MangaVolume } from '@entities/manga-volume';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class MangaVolumesQueryBuilderService {
  constructor(
    @InjectRepository(MangaVolume)
    private readonly _mangaVolumeRepo: Repository<MangaVolume>
  ) {}

  get(id?: string): Promise<MangaVolume[]> {
    if (id)
      return this._mangaVolumeRepo.find({
        relations: ['manga'],
        where: { id }
      });
    return this._mangaVolumeRepo.find({
      relations: ['manga'],
      order: { volume: 'ASC' }
    });
  }

  getByMangaId(mangaId: string): Promise<MangaVolume[]> {
    return this._mangaVolumeRepo.find({
      relations: ['manga'],
      where: { manga: { id: mangaId } }
    });
  }

  create(chapter: MangaVolume): Promise<InsertResult> {
    return this._mangaVolumeRepo.insert(chapter);
  }

  update(id: string, chapter: MangaVolume): Promise<UpdateResult> {
    return this._mangaVolumeRepo.update(id, chapter);
  }

  delete(id: string): Promise<DeleteResult> {
    return this._mangaVolumeRepo.delete(id);
  }
}
