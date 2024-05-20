import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TaskCreateNestedManyWithoutOpportunitiesInput } from "./TaskCreateNestedManyWithoutOpportunitiesInput";

export type OpportunityCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  status?: "Option1" | null;
  tasks?: TaskCreateNestedManyWithoutOpportunitiesInput;
  title?: string | null;
  value?: number | null;
};
