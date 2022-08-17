import { Test, TestingModule } from '@nestjs/testing';
import { FaseUnoService } from './fase-uno.service';

describe('FaseUnoService', () => {
  let service: FaseUnoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FaseUnoService],
    }).compile();

    service = module.get<FaseUnoService>(FaseUnoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
