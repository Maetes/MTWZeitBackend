import { Test, TestingModule } from '@nestjs/testing';
import { SignofService } from './signof.service';

describe('SignofService', () => {
  let service: SignofService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignofService],
    }).compile();

    service = module.get<SignofService>(SignofService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
