import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument, mongo, Schema as mongoose } from 'mongoose';
import { Organization } from './Organization.schema';

const ROLES = ['OrganizationAdmin', 'MatchOperator'];

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [
      {
        org: { type: mongoose.Types.ObjectId, ref: 'Organization' },
        role: { type: String, enum: ROLES }
      }
    ], default: [] })
  organizations: {
    org: mongoose.Types.ObjectId | Organization,
    roles: string
  }[];


}

export type UserDocument = HydratedDocument<User>

export const UserSchema = SchemaFactory.createForClass(User);
