import { AddingModule, AddingService } from '@mono/nest-adding-module'
import { ConfigModule, ConfigService } from '@mono/nest-config'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ConfigModule,
    AddingModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useExisting: ConfigService,
    }),
  ],
  providers: [AddingService],
  exports: [AddingService],
})
export class AppModule {}
