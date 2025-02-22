import { ConfigService } from '@mono/nest-config'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Adding } from './schemas/adding.schema'

@Injectable()
export class AddingService {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(Adding.name) private addingModel: Model<Adding>,
  ) {}

  async create(first: number, second: number): Promise<Adding> {
    const createdAdding = new this.addingModel({ first, second })
    return createdAdding.save()
  }

  async findAll(): Promise<Adding[]> {
    return this.addingModel.find().exec()
  }

  add(a: number, b: number): number {
    // this.addingModel
    return a + b + this.configService.getAddingBonus()
  }
}
