import { ConfigModule } from '@mono/nest-config'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AddingService } from './adding.service'
import { Adding, AddingSchema } from './schemas/adding.schema'

@Module({
  imports: [
    ConfigModule,
    // MongooseModule.forFeature([
    //   {name: Adding.name, schema: AddingSchema }
    // ]),
  ],
  providers: [AddingService],
  exports: [AddingService],
})
export class AddingModule {}
