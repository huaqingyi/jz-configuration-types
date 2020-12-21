import { HandleActionConfig, HandleToggleType } from './common';

export enum HandleType {
    CLICK = 'click', // '单击事件',
    DBCLICK = 'dbclick', // '双击事件',
    HOVER = 'hover', // '悬浮事件',
    MOUSEENTER = 'mouseenter', // '移入事件',
    MOUSELEAVE = 'mouseleave', // '移出事件',
    MOUSEDOWN = 'mousedown', // '鼠标按下事件',
    MOUSEUP = 'mouseup', // '鼠标抬起事件'
}

export interface HandleAction {
    handleType: HandleType;
    toggleType: HandleToggleType;
    config: HandleActionConfig;
}

export interface HandleActions {
    [uid: string]: HandleAction[];
}
