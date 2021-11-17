import { Test, TestingModule } from '@nestjs/testing';
import { SignofResolver } from './signof.resolver';
import { SignofService } from './signof.service';

describe('SignofResolver', () => {
  let resolver: SignofResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignofResolver, SignofService],
    }).compile();

    resolver = module.get<SignofResolver>(SignofResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
