import { Establishment } from '@ballout/role-policies';

export interface CreateOrgDto {
  name: string,
  address: string,
  type: Establishment,
  creator: string
}
