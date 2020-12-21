import { HandleActionConfig, HandleToggleType } from "./common";

export interface Event {
    toggleType: HandleToggleType;
    config: HandleActionConfig;
}

export interface Events {
    [uid: string]: Event;
}