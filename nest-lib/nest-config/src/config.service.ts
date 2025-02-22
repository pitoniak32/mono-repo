import { Injectable } from '@nestjs/common'
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose'

@Injectable()
export class ConfigService implements MongooseOptionsFactory {
  createMongooseOptions():
    | Promise<MongooseModuleOptions>
    | MongooseModuleOptions {
    let mongoUri = process.env.MONGO_URI
    if (!mongoUri && process.env.MONGO_HOST && process.env.MONGO_PORT) {
      mongoUri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/sales-path`
    }
    const ret: MongooseModuleOptions = {
      retryAttempts: Number.MAX_SAFE_INTEGER,
      retryDelay: 1000,
      uri: mongoUri || 'mongodb://127.0.0.1:27017/nest',
      directConnection: process.env.IS_PIPELINE === 'true',
      autoIndex: true,
    }
    return ret
  }

  getAddingBonus(): number {
    return 10
  }
}
