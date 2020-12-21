export enum HandleToggleType {
    REDIRECT = 'redirect', // '页面跳转',
    TOGGLECOMPONENT = 'toggleComponent', // '切换组件状态'
}

export enum HandleActionConfigEvent {
    FADE = 'fade', // '切换显影',
    FADEOUT = 'fadeOut', // '消失',
    FADEIN = 'fadeIn', // '出现',
    STYLECHANGE = 'styleChange', // 切换样式
}

export interface HandleActionAnimate {
    type: HandleActionConfigEvent; // 动画类型,
    time: number; // 时间
}

export interface HandleActionConfigData extends Object {
    // className 用于 切换样式
    className?: string;
}

export interface HandleActionConfig {
    target: string; // 目标 component uid
    event: HandleActionConfigEvent | string;
    animate?: HandleActionAnimate;
    data?: HandleActionConfigData;
}
