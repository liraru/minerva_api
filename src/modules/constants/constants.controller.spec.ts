import { Test, TestingModule } from '@nestjs/testing';
import { ConstantsController } from './constants.controller';
import { ConstantsService } from './constants.service';

describe('ConstantsController', () => {
  let controller: ConstantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConstantsController],
      providers: [ConstantsService]
    }).compile();

    controller = module.get<ConstantsController>(ConstantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a non-empty countries list', () => {
    const result = controller.getCountries();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('code');
    expect(result[0]).toHaveProperty('name');
  });

  it('should return a non-empty languages list', () => {
    const result = controller.getLanguages();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('code');
    expect(result[0]).toHaveProperty('name');
  });
});
