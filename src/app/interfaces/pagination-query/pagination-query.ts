export class PaginationQuery {    
    constructor(pageNumber?:number, pageSize?:number, searchValue?:string){
        this.pageNumber = pageNumber ?? 1;
        this.pageSize = pageSize ?? 10;
        this.searchValue = searchValue ?? '';
    }
    pageNumber: number;

    pageSize: number;

    searchValue?: string = '';
}