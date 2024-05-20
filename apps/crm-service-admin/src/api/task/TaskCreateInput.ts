import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";

export type TaskCreateInput = {
  completed?: boolean | null;
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  dueDate?: Date | null;
  opportunity?: OpportunityWhereUniqueInput | null;
  title?: string | null;
};
