import { Test, TestingModule } from '@nestjs/testing'
import { AddingController } from './adding.controller'
import { AddingService } from './adding.service'

describe('AddingController', () => {
  let addingController: AddingController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AddingController],
      providers: [AddingService],
    }).compile()

    addingController = app.get<AddingController>(AddingController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(addingController.getAdd()).toBe('Hello World!')
    })
  })
})
