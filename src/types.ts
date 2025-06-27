export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isComplited: boolean;
  priority: "High" | "Medium" | "Low";
}
