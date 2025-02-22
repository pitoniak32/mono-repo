import { AddingModule, AddingService } from '@mono/nest-adding-module'
import { ConfigModule, ConfigService } from '@mono/nest-config'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AddingController } from './adding.controller'

@Module({
  imports: [
    ConfigModule,
    AddingModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useExisting: ConfigService,
    }),
  ],
  controllers: [AddingController],
  providers: [AddingService],
  exports: [AddingService],
})
export class AppModule {}
