import { AddTaskModal } from "@/module/tasks/AddTaskModal";
import TaskCard from "@/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";


export default function Task() {
    const tasks = useAppSelector(selectTasks);


    console.log(tasks)
    return (
        <>
            <div>
                <h1 className="mb-5">Add Task</h1>

                <AddTaskModal></AddTaskModal>
            </div>
            <div className="mt-10">
                {
                    tasks.map(task => <TaskCard task={task}></TaskCard>)
                }
            </div>

        </>

    );

}



