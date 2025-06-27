import { cn } from "@/lib/utils";
import type { ITask } from "@/types";

interface Iprops {
    task: ITask;
}

export default function TaskCard({ task }: Iprops) {
    return (

        <div className="max-w-sm w-full rounded-xl border bg-white shadow p-5">
            {/* Title & Completion Status */}
            <div className="flex justify-between items-start mb-3">
                <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
                <span className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-800">
                    {task.isComplited}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-3">
                {task.description}
            </p>

            {/* Due Date & Priority */}
            <div className="flex justify-between items-center text-sm mb-4">
                <div className="text-gray-500">
                    📅 Due: <span className="text-gray-800 font-medium">{task.dueDate}</span>
                </div>
                <div className={cn(" font-semibold", {
                    "text-red-600": task.priority === "High",
                    "text-green-600": task.priority === "Medium",
                    "text-sky-600": task.priority === "Low"
                })}>
                    🔥 {task.priority}
                </div>
            </div>

            {/* Action Button */}
            <button className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
                View Details
            </button>
        </div>
    );
}