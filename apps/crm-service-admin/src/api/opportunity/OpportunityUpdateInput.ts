import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TaskUpdateManyWithoutOpportunitiesInput } from "./TaskUpdateManyWithoutOpportunitiesInput";

export type OpportunityUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  status?: "Option1" | null;
  tasks?: TaskUpdateManyWithoutOpportunitiesInput;
  title?: string | null;
  value?: number | null;
};
