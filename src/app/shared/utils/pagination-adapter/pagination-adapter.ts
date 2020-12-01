import { BehaviorSubject, Observable, PartialObserver, Subscribable, Subscription, Unsubscribable } from 'rxjs';
import { PaginationQuery } from 'src/app/interfaces/pagination-query/pagination-query';

import { combineLatest } from 'rxjs';
import { map, scan, switchMap, tap } from 'rxjs/operators';
import { PageResponse } from 'src/app/models/page-response/page-response';

export class PaginationAdapter implements Subscribable<any> {

    private param: any;

    set setParam(param: any) {
        this.param = param;
    }

    get getParam() {
        return this.param;
    }

    private pageNumber$ = new BehaviorSubject(1);

    set setPageNumber(v: number) {
        this.pageNumber$.next(v);
    }

    get getPagNumber() {
        return this.pageNumber$.asObservable();
    }

    private dataSource$: Observable<any>;

    private pageSize$ = new BehaviorSubject(50);

    set setPageSize(v: number) {
        this.pageNumber$.next(v);
    }

    get getPageSize() {
        return this.pageSize$.asObservable();
    }

    private hasMore$ = new BehaviorSubject(true);

    public loading$ = new BehaviorSubject(false);

    constructor(dataSource: (query: PaginationQuery, param?: any) => Observable<any>, param:any) {
        this.param = param;
        
        this.dataSource$ = combineLatest([this.pageNumber$, this.pageSize$])
            .pipe(
                tap(() => this.loading$.next(true)),
                switchMap(([pNumber, pSize]) => {
                    let pQuery: PaginationQuery = {
                        pageNumber: pNumber,
                        pageSize: pSize
                    };                    

                    return dataSource(pQuery, this.param).pipe(
                        map((pageResponse: PageResponse<any>) => pageResponse.data)
                    )
                }),
                scan((acc, data) => {
                    if (data != null && data.length == 0)
                        this.hasMore$.next(false);

                    return [...acc, ...data]
                }, []),
                tap(() => this.loading$.next(false))
            )
    }

    subscribe(observer?: PartialObserver<any>): Unsubscribable;
    subscribe(next: null, error: null, complete: () => void): Unsubscribable;
    subscribe(next: null, error: (error: any) => void, complete?: () => void): Unsubscribable;
    subscribe(next: (value: any) => void, error: null, complete: () => void): Unsubscribable;
    subscribe(next?: (value: any) => void, error?: (error: any) => void, complete?: () => void): Unsubscribable;
    subscribe(next?: (value: any) => void, error?: (error: any) => void, complete?: () => void): Unsubscribable
    subscribe(observer?: PartialObserver<any> | null | undefined | ((value: any) => void), error?: null | undefined | ((error: any) => void), complete?: () => void): Unsubscribable {
        return this.dataSource$.subscribe(...arguments);
    }

    public loadMore() {
        if (this.hasMore$.getValue()) {
            let pageNumber = this.pageNumber$.getValue() + 1;
            this.setPageNumber = pageNumber;
        }
    }
}
