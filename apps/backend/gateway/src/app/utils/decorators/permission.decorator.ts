import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { PermissionGuard } from '../guards/permission.guard';
import { Resource } from '@ballout/role-policies';

export const CheckPermissions = (options: CheckPermissionsOptions) => {
  return applyDecorators(
    SetMetadata('Action', options.action),
    SetMetadata('Resource', options.resource),
    UseGuards(PermissionGuard)
  )
}

interface CheckPermissionsOptions {
  action: string
  resource: Resource
}
