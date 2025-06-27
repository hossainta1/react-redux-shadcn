import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [
    {
      id: "adgfejrnetrkk",
      title: "Initialize Front-End",
      description: "Create Home page and Routing",
      dueDate: "2025-11",
      isComplited: false,
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {},
});

export default taskSlice.reducer;
