import {
  ArrowRightIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  removeTask,
  updateStatus,
} from "../../redux/features/tasks/tasksSlice";

const TaskCard = ({ task }) => {
  console.log("card task", task);
  const dispatch = useDispatch();

  let updatedStatus;
  if (task.status === "pending") {
    updatedStatus = "running";
  } else if (task.status === "running") {
    updatedStatus = "done";
  } else {
    updatedStatus = "archive";
  }

  return (
    <div className="p-5 rounded-md bg-secondary/10">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === "high" ? "text-red-500" : ""
        } ${task.priority === "medium" ? "text-yellow-500" : ""} ${
          task.priority === "low" ? "text-green-500" : ""
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.dateline}</p>
        <div className="flex gap-3">
          <button
            onClick={() => dispatch(removeTask(task.id))}
            title="Delete"
          >
            <TrashIcon className="w-5 h-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(
                updateStatus({ id: task.id, status: updateStatus })
              )
            }
            title="Update Status"
          >
            <ArrowRightIcon className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
