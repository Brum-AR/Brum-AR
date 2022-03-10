import { Test, TestingModule } from '@nestjs/testing';
import { BrakeController } from './brake.controller';
import { BrakeService } from './brake.service';

describe('BrakeController', () => {
  let controller: BrakeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrakeController],
      providers: [BrakeService],
    }).compile();

    controller = module.get<BrakeController>(BrakeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
