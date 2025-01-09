export enum OrganizationAction {
  CreateOrganization = 'org:create',
  EditOrganization = 'org:edit',
  DeleteOrganization = 'org:delete',
}

export enum MatchAction {
  CreateMatch = 'match:create',
  OperateMatch = 'match:operate',
  DeleteMatch = 'match:delete'
}
export type Action = OrganizationAction | MatchAction;

export type Resource = 'Organization' | 'Match';
