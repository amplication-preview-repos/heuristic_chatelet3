import { Customer } from "../customer/Customer";
import { Task } from "../task/Task";

export type Opportunity = {
  createdAt: Date;
  customer?: Customer | null;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  tasks?: Array<Task>;
  title: string | null;
  updatedAt: Date;
  value: number | null;
};
