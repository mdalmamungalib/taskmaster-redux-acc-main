import React from "react";
import Modal from "../ui/Modal/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen, title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTask(data));
    console.log("Form Data Submitted:", data);
    setIsOpen(false); // Close the modal after submission
  };

  const assign = [
    { id: 1, name: "Arman Khan" },
    { id: 2, name: "Sumaiya Akter" },
    { id: 3, name: "Faruk Ahmed" },
    { id: 4, name: "Jannatul Ferdous" },
    { id: 5, name: "Habib Ullah" },
    { id: 6, name: "Tasnia Rahman" },
    { id: 7, name: "Ashfaqur Rahman" },
    { id: 8, name: "Mehnaz Chowdhury" },
    { id: 9, name: "Imtiaz Hossain" },
    { id: 10, name: "Sharmin Sultana" },
    { id: 11, name: "Tanjid Alam" },
    { id: 12, name: "Rafia Yasmin" },
    { id: 13, name: "Masum Billah" },
    { id: 14, name: "Shabnam Nahar" },
    { id: 15, name: "Zakir Hossain" },
    { id: 16, name: "Nadia Hasan" },
    { id: 17, name: "Khalid Mahmud" },
    { id: 18, name: "Anika Tasnim" },
    { id: 19, name: "Rashedul Karim" },
    { id: 20, name: "Tasmia Islam" },
  ];

  const priority = [
    { id: 1, name: "High" },
    { id: 2, name: "Medium" },
    { id: 3, name: "Low" },
  ];

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={title || "Add Task"}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className="flex flex-col mb-5">
          <label
            htmlFor="title"
            className="mb-2 font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "Title is required",
            })}
            className="w-full p-2 border rounded-md"
          />
          {errors.title && (
            <p className="text-sm text-red-600">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col mb-5">
          <label
            htmlFor="description"
            className="mb-2 font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Description"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Dateline */}
        <div className="flex flex-col mb-5">
          <label
            htmlFor="dateline"
            className="mb-2 font-medium text-gray-700"
          >
            Dateline
          </label>
          <input
            type="date"
            id="dateline"
            {...register("dateline", {
              required: "Dateline is required",
            })}
            className="w-full p-2 border rounded-md"
          />
          {errors.dateline && (
            <p className="text-sm text-red-600">
              {errors.dateline.message}
            </p>
          )}
        </div>

        {/* Assign to */}
        <div className="flex flex-col mb-5">
          <label
            htmlFor="assignTo"
            className="mb-2 font-medium text-gray-700"
          >
            Assign to
          </label>
          <select
            {...register("assignTo")}
            className="w-full p-2 border rounded-md"
          >
            {assign.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Priority */}
        <div className="flex flex-col mb-5">
          <label
            htmlFor="priority"
            className="mb-2 font-medium text-gray-700"
          >
            Priority
          </label>
          <select
            {...register("priority")}
            className="w-full p-2 border rounded-md"
          >
            {priority.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="p-2 text-white bg-red-600 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="p-2 text-white bg-blue-600 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
