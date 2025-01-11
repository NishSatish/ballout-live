import { Injectable } from '@nestjs/common';
import { CreateOrgDto } from '@ballout/libs/commons/src/lib/dto/create-org.dto';
import { ClientOptions, ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { MessagePatterns, MicroServiceTransports } from '@ballout/libs/commons/src';

@Injectable()
export class OrganizationsService {
  private OrganizationsClient: ClientProxy;

  constructor() {
    this.OrganizationsClient
      = ClientProxyFactory.create(MicroServiceTransports.organizationsTransport.nats as ClientOptions)
  }

  dispatchCreateOrganization(org: CreateOrgDto, user: string) {
    return this.OrganizationsClient.send(MessagePatterns.organizations.createOrganization, { org, user })
  }

  showAll() {
    return this.OrganizationsClient.send(MessagePatterns.organizations.getOrganizations, {})
  }
}
