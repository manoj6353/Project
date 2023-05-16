import { Test, TestingModule } from '@nestjs/testing';
import { AddtocartController } from './addtocart.controller';
import { AddtocartService } from './addtocart.service';

describe('AddtocartController', () => {
  let controller: AddtocartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddtocartController],
      providers: [AddtocartService],
    }).compile();

    controller = module.get<AddtocartController>(AddtocartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
