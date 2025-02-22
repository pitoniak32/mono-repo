import { Controller, Get, Post } from '@nestjs/common'
import { AddingService } from './adding.service'
import { Adding } from './schemas/adding.schema'

@Controller()
export class AddingController {
  constructor(private readonly addingService: AddingService) {}

  @Post()
  create(): Promise<Adding> {
    return this.addingService.create(1, 1)
  }

  @Get()
  findAll(): Promise<Adding[]> {
    return this.addingService.findAll()
  }

  @Get()
  getAdd(): number {
    return this.addingService.add(1, 1)
  }
}
