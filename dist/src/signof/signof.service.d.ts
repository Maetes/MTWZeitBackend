import { CreateSignofInput } from './dto/create-signof.input';
import { PrismaService } from 'prisma/prisma.service';
export declare class SignofService {
    private readonly prismaSerive;
    constructor(prismaSerive: PrismaService);
    create(createSignofInput: CreateSignofInput): Promise<import(".prisma/client").dbs_mtwSignOf>;
    findAll(): Promise<import(".prisma/client").dbs_mtwSignOf[]>;
    findOne(id: number): Promise<import(".prisma/client").dbs_mtwSignOf>;
    findContain(kd: string): Promise<import(".prisma/client").dbs_mtwSignOf[]>;
    remove(id: number): Promise<import(".prisma/client").dbs_mtwSignOf>;
}
