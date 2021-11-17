import { Injectable } from '@nestjs/common';
import { CreateSignofInput } from './dto/create-signof.input';
import { UpdateSignofInput } from './dto/update-signof.input';
import fs from 'fs';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SignofService {
  constructor(private readonly prismaSerive: PrismaService) {}

  async create(createSignofInput: CreateSignofInput) {
    return await this.prismaSerive.dbs_mtwSignOf.create({
      data: { ...createSignofInput },
    });
  }

  async findAll() {
    return this.prismaSerive.dbs_mtwSignOf.findMany();
  }

  async findOne(id: number) {
    return this.prismaSerive.dbs_mtwSignOf.findUnique({
      where: { id },
    });
  }

  // update(id: number, updateSignofInput: UpdateSignofInput) {
  //   return `This action updates a #${id} signof`;
  // }

  async remove(id: number) {
    return this.prismaSerive.dbs_mtwSignOf.delete({
      where: { id },
    });
  }
}
