import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
