export interface categoryProp{
    categoryProp: string
    search: string | undefined
}

export interface PackageProps{
    id: string
    destino: string,
    Descripcion?: string[],
    salida: string,
    categoria: string,
    imgUrl: string[],
    isPromoted: boolean
}
