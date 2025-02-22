import { ConfigModule } from '@mono/nest-config'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AddingController } from './adding.controller'
import { AddingService } from './adding.service'
import { Adding, AddingSchema } from './schemas/adding.schema'

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Adding.name, schema: AddingSchema }]),
  ],
  controllers: [AddingController],
  providers: [AddingService],
  exports: [AddingService],
})
export class AddingModule {}
