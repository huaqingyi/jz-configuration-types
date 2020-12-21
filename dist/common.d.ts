export declare enum HandleToggleType {
    REDIRECT = "redirect",
    TOGGLECOMPONENT = "toggleComponent"
}
export declare enum HandleActionConfigEvent {
    FADE = "fade",
    FADEOUT = "fadeOut",
    FADEIN = "fadeIn",
    STYLECHANGE = "styleChange"
}
export interface HandleActionAnimate {
    type: HandleActionConfigEvent;
    time: number;
}
export interface HandleActionConfigData extends Object {
    className?: string;
}
export interface HandleActionConfig {
    target: string;
    event: HandleActionConfigEvent | string;
    animate?: HandleActionAnimate;
    data?: HandleActionConfigData;
}
