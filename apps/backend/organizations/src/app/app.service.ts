import { Injectable, Logger } from '@nestjs/common';
import { CreateOrgDto } from '@ballout/libs/commons/src/lib/dto/create-org.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Organization } from '@ballout/libs/database/src/lib/schemas/Organization.schema';
import { Model, Connection } from 'mongoose';
import { User } from '@ballout/libs/database/src/lib/schemas/User.schema';
import { transactionHandler } from '@ballout/libs/database/src/';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Organization.name) private orgModel: Model<Organization>,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectConnection() private connection: Connection
  ) {
  }

  async saveOrganization(orgData: { org: CreateOrgDto, user: string }) {
    return transactionHandler(
      this.connection,
      async () => {
        const createdOrg = await new this.orgModel({
          name: orgData.org.name,
          type: orgData.org.type,
          address: orgData.org.address,
          creator: orgData.user
        }).save();

        const updatedUser = await this.userModel.findByIdAndUpdate({
          _id: orgData.user
        }, {
          $push: {
            organizations: {
              _id: createdOrg._id,
              role: 'OrganizationAdmin'
            }
          }
        })

        Logger.log('Org created', createdOrg);
        Logger.log('User updated', updatedUser);

        return { createdOrg, creator: updatedUser._id };
      }
    );

  }

  async getOrganizations() {
    return this.orgModel.find({}).populate('creator');
  }


}
