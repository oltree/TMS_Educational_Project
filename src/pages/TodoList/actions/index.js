import { createAction } from "redux-actions";

export const CREATE_TODO = createAction("CREATE_TODO");
export const REMOVE_TODO = createAction("REMOVE_TODO");
export const EDIT_TODO = createAction("EDIT_TODO");
export const SAVE_TODO = createAction("SAVE_TODO");
export const COMPLETE_TODO = createAction("COMPLETE_TODO");
export const REMOVE_ALL_TODO = createAction("RESET_ALL_TODO");
export const SORT_TODO = createAction("SORT_TODO");
export const REVERSE_SORT_TODO = createAction("REVERSE_SORT_TODO");
export const DEFAULT_TODO = createAction("DEFAULT_TODO");
