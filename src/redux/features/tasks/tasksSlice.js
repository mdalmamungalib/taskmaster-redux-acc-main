import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mir Hussain",
      priority: "high",
    },
  ],
};
const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.task.length === 0) {
        state.task.push({ id: 1, status: "pending", ...payload });
      } else {
        const lestElement = state.task.at(-1);
        state.task.push({
          id: lestElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.task.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.task.find(
        (item) => item.id === payload.id
      );
      target.status = payload.status;
    },
  },
});

export const { addTask, removeTask, updateStatus } =
  tasksSlice.actions;

export default tasksSlice.reducer;
