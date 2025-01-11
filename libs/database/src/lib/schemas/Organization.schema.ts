import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as mongoose } from 'mongoose';
import { User } from './User.schema';
import { Establishment, ROLES } from '@ballout/role-policies';

@Schema()
export class Organization {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  type: Establishment;

  @Prop({ type:
      {
        user: { type: mongoose.Types.ObjectId, ref: 'User' },
        role: { type: String, enum: ROLES }
      }
    }
  )
  members: {
    user: User,
    role: string
  }[];

  @Prop({type: mongoose.Types.ObjectId,ref: 'User'})
  creator: User;
}

export type OrganizationDocument = HydratedDocument<Organization>

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
