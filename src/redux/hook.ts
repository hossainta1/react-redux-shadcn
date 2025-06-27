import { useDispatch, useSelector } from "react-redux";
import type { dispatchApp, RootState } from "./store";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<dispatchApp>();