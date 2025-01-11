import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { RolePoliciesService } from '@ballout/libs/role-policies/src/lib/role-policies.service';
import { Action, Resource } from '@ballout/libs/role-policies/src/lib/actions.interface';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector, private rolePolicyService: RolePoliciesService) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // Get metadata set by the decorator you need to create
    const action = this.reflector.get<Action>('Action', context.getHandler());
    const resource = this.reflector.get<Resource>('Resource', context.getHandler());
    const role = context.switchToHttp().getRequest().userRole!;

    if (!this.rolePolicyService.canPerformAction(role, action, resource)) {
      Logger.error('No permission to perform ' + action +  ' for this user');
      return false;
    }
    return true;
  }
}
