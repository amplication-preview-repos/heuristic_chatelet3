import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OpportunityWhereInput = {
  customer?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  tasks?: TaskListRelationFilter;
  title?: StringNullableFilter;
  value?: FloatNullableFilter;
};
