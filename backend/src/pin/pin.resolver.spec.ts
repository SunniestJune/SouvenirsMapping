import { Test, TestingModule } from '@nestjs/testing';
import { PinResolver } from './pin.resolver';
import { PinService } from './pin.service';

describe('PinResolver', () => {
  let resolver: PinResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PinResolver, PinService],
    }).compile();

    resolver = module.get<PinResolver>(PinResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
