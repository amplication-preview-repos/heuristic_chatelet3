import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OpportunityListRelationFilter } from "../opportunity/OpportunityListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  opportunities?: OpportunityListRelationFilter;
  phone?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
};
