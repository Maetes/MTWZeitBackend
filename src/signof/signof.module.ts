import { Module } from '@nestjs/common';
import { SignofService } from './signof.service';
import { SignofResolver } from './signof.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, SignofResolver, SignofService],
})
export class SignofModule {}
