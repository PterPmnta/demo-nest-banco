import { Test, TestingModule } from '@nestjs/testing';
import { FaseUnoController } from './fase-uno.controller';
import { FaseUnoService } from './fase-uno.service';

describe('FaseUnoController', () => {
  let controller: FaseUnoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaseUnoController],
      providers: [FaseUnoService],
    }).compile();

    controller = module.get<FaseUnoController>(FaseUnoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
