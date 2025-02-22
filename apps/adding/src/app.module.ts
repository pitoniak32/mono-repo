import { AddingModule } from '@mono/nest-adding-module'
import { ConfigService } from '@mono/nest-config'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '../../../nest-lib/nest-config/dist/config.module'

@Module({
  imports: [
    ConfigModule,
    AddingModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useExisting: ConfigService,
    }),
  ],
})
export class AppModule {}
