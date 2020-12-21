import { HandleActionConfig, HandleToggleType } from './common';
export declare enum HandleType {
    CLICK = "click",
    DBCLICK = "dbclick",
    HOVER = "hover",
    MOUSEENTER = "mouseenter",
    MOUSELEAVE = "mouseleave",
    MOUSEDOWN = "mousedown",
    MOUSEUP = "mouseup"
}
export interface HandleAction {
    handleType: HandleType;
    toggleType: HandleToggleType;
    config: HandleActionConfig;
}
export interface HandleActions {
    [uid: string]: HandleAction[];
}
