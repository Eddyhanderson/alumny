export class PageResponse<T>{
    data: Array<T>;

    pageNumber?: number;

    pageSize?: number;

    nextPage?: string;

    previousPage?: string;

    constructor(data: Array<T>) {
        this.data = data;
    }
}