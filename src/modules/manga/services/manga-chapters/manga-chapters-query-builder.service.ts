import { MangaChapter } from '@entities/manga-chapter.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class MangaChaptersQueryBuilderService {
  constructor(
    @InjectRepository(MangaChapter)
    private readonly _mangaChapterRepo: Repository<MangaChapter>
  ) {}

  get(id?: string): Promise<MangaChapter[]> {
    if (id) return this._mangaChapterRepo.find({
      relations: ['manga'],
      where: { id }
    });
    return this._mangaChapterRepo.find({
      relations: ['manga'],
      order: { publicationDate: 'ASC' }
    });
  }

  getByMangaId(mangaId: string): Promise<MangaChapter[]> {
    return this._mangaChapterRepo.find({
      relations: ['manga'],
      where: { manga: { id: mangaId } }
    });
  }

  create(chapter: MangaChapter): Promise<InsertResult> {
    return this._mangaChapterRepo.insert(chapter);
  }

  update(id: string, chapter: MangaChapter): Promise<UpdateResult> {
    return this._mangaChapterRepo.update(id, chapter);
  }

  delete(id: string): Promise<DeleteResult> {
    return this._mangaChapterRepo.delete(id);
  }
}