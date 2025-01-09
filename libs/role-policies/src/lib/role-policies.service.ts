import { Injectable } from '@nestjs/common';
import { Action, MatchAction, OrganizationAction, Resource } from './actions.interface';

@Injectable()
export class RolePoliciesService {

  canPerformAction(role: string, action: Action, resource: Resource) {
    const userActions = this.roles[role][resource];
    if (userActions.find(userAction => action === userAction)) {
      return true;
    }
  }

  private roles: Record<string, Record<Resource, Action[]>> = {
    OrganizationAdmin: {
      'Organization': [
        OrganizationAction.CreateOrganization,
        OrganizationAction.DeleteOrganization,
        OrganizationAction.EditOrganization,
      ],

      'Match': [
        MatchAction.OperateMatch,
        MatchAction.DeleteMatch,
        MatchAction.CreateMatch
      ]
    },

    MatchOperator: {
      'Organization': [],
      'Match': [
        MatchAction.OperateMatch
      ]
    }
  }
}
