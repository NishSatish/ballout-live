import { Injectable } from '@nestjs/common';
import { Action, MatchAction, OrganizationAction, Resource } from './actions.interface';

@Injectable()
export class RolePoliciesService {

  canPerformAction(role: string, action: Action, resource: Resource) {
    if (!Object.keys(this.roles).find(availableRole => role == availableRole)) return false; // Check if role exists
    const userActions = this.roles[role][resource];
    // Check if action is available
    if (userActions.find(userAction => action === userAction)) {
      return true;
    }
    return false
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
