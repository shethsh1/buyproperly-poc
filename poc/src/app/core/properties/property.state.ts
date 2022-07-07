export interface Properties {
  totalCount: number,
  data: any[],
  activeProperty ?: object,
  loadingProperty: boolean  

}

export const properties: Properties = {
  totalCount: 0,
  data: [],
  loadingProperty: true
}