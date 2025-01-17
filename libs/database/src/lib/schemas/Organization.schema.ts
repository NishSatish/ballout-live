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

  @Prop({ type: String })
  type: Establishment;

  @Prop({ type:
      {
        user: { type: mongoose.Types.ObjectId, ref: User.name },
        role: { type: String, enum: ROLES }
      }
    }
  )
  members: {
    user: User,
    role: string
  }[];

  @Prop({type: mongoose.Types.ObjectId, ref: User.name, index: true})
  creator: mongoose.Types.ObjectId | User;
}

export type IOrganizationDocument = HydratedDocument<Organization>

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
