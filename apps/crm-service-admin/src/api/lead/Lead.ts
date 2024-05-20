export type Lead = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
