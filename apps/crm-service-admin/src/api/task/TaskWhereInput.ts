import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";

export type TaskWhereInput = {
  completed?: BooleanNullableFilter;
  customer?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  opportunity?: OpportunityWhereUniqueInput;
  title?: StringNullableFilter;
};
