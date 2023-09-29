export interface IBaseTableColumn {
    name: string
    key: string
}

export interface IBaseTableData {
    [key: string]: string
}

export interface IBaseTableSort {
    key: string
    direction: 'ASC' | 'DESC'
}
