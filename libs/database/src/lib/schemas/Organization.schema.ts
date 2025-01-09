import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as mongoose } from 'mongoose';
import { User } from './User.schema';

@Schema()
export class Organization {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  type: Establishment;

  @Prop({ type: [mongoose.Types.ObjectId], ref: 'User' })
  members: User[];
}

type Establishment = 'edu' | 'club';

export type OrganizationDocument = HydratedDocument<Organization>

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
