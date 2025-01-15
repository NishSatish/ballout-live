import { createSlice } from '@reduxjs/toolkit';

type OrganizationStore = {
  currentUserOrganizations: {id: string, role: string}[] | [],
  selectedOrganization?: string
}

const initOrganization: OrganizationStore = {
  currentUserOrganizations: [],
  selectedOrganization: undefined
}

export const organizationSlice = createSlice({
  name: 'organization',
  initialState: initOrganization,
  reducers: {}
});

export const organizationActions = organizationSlice.actions;
