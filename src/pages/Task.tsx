import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModal } from "@/module/tasks/AddTaskModal";
import TaskCard from "@/module/tasks/TaskCard";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


export default function Task() {
    const tasks = useAppSelector(selectTasks);

    const dispatch = useAppDispatch();

    return (
        <>
            <div>
                <h1 className="mb-5">Add Task</h1>
                <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger onClick={() => dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
                    </TabsList>
                    <AddTaskModal></AddTaskModal>
                </Tabs>
            </div>
            <div className="mt-10">
                <div>{tasks.length}</div> <br />
                {
                    tasks?.map(task => <TaskCard task={task} key={task.id}></TaskCard>)
                }
            </div>

        </>

    );

}



