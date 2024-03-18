import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, catchError, delay, of } from 'rxjs';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root'
})
export class NewsResolver implements Resolve<Observable<any>> {

  constructor(private newsService: NewsService){}

  resolve(): Observable<any> {
    //return of('Route! Hello from Resolver').pipe(delay(2000));
    return this.newsService.getTopPosts().pipe(
      catchError(()=>of('data not available!'))
    )
  }
}
