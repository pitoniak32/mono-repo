import { Injectable } from '@nestjs/common'

@Injectable()
export class AddingService {
  // constructor(private readonly configService: ConfigService, @InjectModel(Adding.name) private addingModel: Model<Adding>) {}
  // constructor(private readonly configService: ConfigService) {}

  // async create(): Promise<Adding> {
  //   const createdAdding = new this.addingModel({ first: 1, second: 1 });
  //   return createdAdding.save();
  // }

  // async findAll(): Promise<Adding[]> {
  //   return this.addingModel.find().exec();
  // }

  add(a: number, b: number): number {
    // this.addingModel
    return a + b //+ this.configService.getAddingBonus()
  }
}
