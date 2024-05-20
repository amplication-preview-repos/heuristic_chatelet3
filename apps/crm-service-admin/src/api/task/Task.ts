import { Customer } from "../customer/Customer";
import { Opportunity } from "../opportunity/Opportunity";

export type Task = {
  completed: boolean | null;
  createdAt: Date;
  customer?: Customer | null;
  description: string | null;
  dueDate: Date | null;
  id: string;
  opportunity?: Opportunity | null;
  title: string | null;
  updatedAt: Date;
};
