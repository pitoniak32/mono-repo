import type { AddingService } from '@mono/nest-adding-module'
import { Controller, Get } from '@nestjs/common'

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
