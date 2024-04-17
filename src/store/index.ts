import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { abasSlice } from "./abas";

function makeStore() {
    return configureStore({
        reducer: {
            [abasSlice.name]: abasSlice.reducer
        },
        devTools: true,
    });
}

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;


export default store;