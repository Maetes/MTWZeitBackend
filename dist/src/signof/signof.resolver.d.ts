import { SignofService } from './signof.service';
import { CreateSignofInput } from './dto/create-signof.input';
export declare class SignofResolver {
    private readonly signofService;
    constructor(signofService: SignofService);
    createSignof(createSignofInput: CreateSignofInput): Promise<import(".prisma/client").dbs_mtwSignOf>;
    findAll(): Promise<import(".prisma/client").dbs_mtwSignOf[]>;
    findOne(id: number): Promise<import(".prisma/client").dbs_mtwSignOf>;
    removeSignof(id: number): Promise<import(".prisma/client").dbs_mtwSignOf>;
}
