// 返回 对象
export interface AsyncSimple {
    [uid: string]: string[]; // uid 表名: 字段名
}

export interface AsyncList {
    pageCount: number;
    page: number;
    fields: string[];
}

// 返回 列表
export interface AsyncLists {
    [uid: string]: AsyncList; // uid 表名: 字段名
}

export interface ConfigProps {
    field: string; // 插槽的 键名 <test :[键名]="" />
    remark: string; // 备注信息
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
