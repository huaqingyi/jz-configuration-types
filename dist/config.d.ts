export interface AsyncSimple {
    [uid: string]: string[];
}
export interface AsyncList {
    pageCount: number;
    page: number;
    fields: string[];
}
export interface AsyncLists {
    [uid: string]: AsyncList;
}
export interface ConfigProps {
    field: string;
    remark: string;
}
export interface ConfigData {
    [field: string]: any;
}
export interface ConfigDatas {
    [uid: string]: ConfigData;
}
export interface Config {
    name: string;
    asyncSimple?: AsyncSimple;
    asyncLists?: AsyncLists;
    props?: ConfigProps[];
    data?: ConfigDatas;
}
