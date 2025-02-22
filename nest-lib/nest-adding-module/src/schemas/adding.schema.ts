import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type AddingDocument = HydratedDocument<Adding>

@Schema()
export class Adding {
  @Prop()
  first: number

  @Prop()
  second: number
}

export const AddingSchema = SchemaFactory.createForClass(Adding)
