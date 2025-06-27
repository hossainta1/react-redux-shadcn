import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";


export default function Task() {
    const tasks = useAppSelector(selectTasks);
    

    console.log(tasks)
    return (
        <div>
            <h1>This is Task component</h1>
        </div>

    );

}



