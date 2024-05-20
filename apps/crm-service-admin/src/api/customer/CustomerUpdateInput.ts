import { OpportunityUpdateManyWithoutCustomersInput } from "./OpportunityUpdateManyWithoutCustomersInput";
import { TaskUpdateManyWithoutCustomersInput } from "./TaskUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  opportunities?: OpportunityUpdateManyWithoutCustomersInput;
  phone?: string | null;
  tasks?: TaskUpdateManyWithoutCustomersInput;
};
