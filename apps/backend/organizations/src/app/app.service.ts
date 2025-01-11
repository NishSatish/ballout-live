import { Injectable, Logger } from '@nestjs/common';
import { CreateOrgDto } from '@ballout/libs/commons/src/lib/dto/create-org.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Organization } from '@ballout/libs/database/src/lib/schemas/Organization.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(Organization.name) private orgModel: Model<Organization>) {
  }
  async saveOrganization(orgData: { org: CreateOrgDto, user: string }) {
    try {
      const createdOrg = await new this.orgModel({
        name: orgData.org.name,
        type: orgData.org.type,
        address: orgData.org.address,
        creator: orgData.user
      }).save();
      Logger.log('Org created', createdOrg);
      return createdOrg;
    } catch(e) {
      Logger.error(e);
      return e;
    }
  }

  async getOrganizations() {
    return this.orgModel.find({}).populate('creator');
  }
}
