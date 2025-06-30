import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import type { ITask } from "@/types";

interface Iprops {
    task: ITask;
}

export default function TaskCard({ task }: Iprops) {

    const dispatch = useAppDispatch()

    return (

        <div className="max-w-sm w-full rounded-xl border bg-white shadow p-5">
            {/* Title, Toggle & Delete */}
            <div className="flex justify-between items-start mb-3">
                <h2 className={cn({"line-through" : task.isComplited})}>{task.title}</h2>
                <div className="flex items-center gap-2">
                    {/* Toggle (for future use) */}
                    <input 
                        type="checkbox"
                        className="accent-blue-600"
                        onClick={() => dispatch(toggleCompleteState(task.id))}
                        title="Select Task"
                    />

                    {/* Delete Button */}
                    <button
                        // You must define this function
                        className="text-red-500 hover:text-red-700 text-sm"
                        title="Delete Task"
                    >
                        🗑️
                    </button>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-3">
                {task.description}
            </p>

            {/* Due Date & Priority */}
            <div className="flex justify-between items-center text-sm mb-4">
                <div className="text-gray-500">
                    📅 Due: <span className="text-gray-800 font-medium">{task.dueDate.toString()}</span>
                </div>
                <div className={cn(" font-semibold", {
                    "text-red-600": task.priority === "high",
                    "text-green-600": task.priority === "medium",
                    "text-sky-600": task.priority === "low"
                })}>
                    🔥 {task.priority}
                </div>
            </div>

            {/* Action Button */}
            <button className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
                View Details
            </button>
            <br />
            <button onClick={() => dispatch(deleteTask(task.id))} className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
                Delete
            </button>
        </div>

    );
}