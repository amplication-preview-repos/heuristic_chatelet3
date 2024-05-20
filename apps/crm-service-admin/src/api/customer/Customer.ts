import { Opportunity } from "../opportunity/Opportunity";
import { Task } from "../task/Task";

export type Customer = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  opportunities?: Array<Opportunity>;
  phone: string | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
