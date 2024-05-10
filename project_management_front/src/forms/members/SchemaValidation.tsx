import { z } from 'zod';


const taskSchema = z.object({
  id: z.number().optional(),
  project_name: z.string().min(1, "Project name is required"),
  description: z.string().min(10, "Description should be at least 10 characters long"),
  status: z.string().min(1, "Status is required")
});

export { taskSchema };