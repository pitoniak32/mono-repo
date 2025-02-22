import { Controller, Get } from '@nestjs/common'
import type { AddingService } from './adding.service'

@Controller()
export class AddingController {
  constructor(private readonly addingService: AddingService) {}

  // @Post()
  // create(): Promise<Cat> {
  //   // return this.catsService.create('test')
  // }

  // @Get()
  // findAll(): Promise<Cat[]> {
  //   // return this.catsService.findAll()
  // }

  @Get()
  getAdd(): number {
    return this.addingService.add(1, 1)
  }
}
