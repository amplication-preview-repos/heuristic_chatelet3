import { OpportunityCreateNestedManyWithoutCustomersInput } from "./OpportunityCreateNestedManyWithoutCustomersInput";
import { TaskCreateNestedManyWithoutCustomersInput } from "./TaskCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  opportunities?: OpportunityCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
  tasks?: TaskCreateNestedManyWithoutCustomersInput;
};
