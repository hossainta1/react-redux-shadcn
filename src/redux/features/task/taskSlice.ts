import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "tvTuBvKzBcLTEBVtszw4G",
      isComplited: false,
      title: "Test",
      description: "Test",
      priority: "medium",
      dueDate: "2025-06-23T18:00:00.000Z",
    },
  ],

  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isComplited: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },

    toggleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isComplited = !task.isComplited)
          : task
      );
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },

    updateFilter: (
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } 
  
  else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } 
  
  else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  }
  
  else {
    return state.todo.filter;
  }
};

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
