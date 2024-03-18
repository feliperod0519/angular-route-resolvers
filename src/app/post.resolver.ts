import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, catchError, EMPTY } from 'rxjs';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<any> {

  constructor(private newsService: NewsService,
              private router:Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.newsService.getPost(route.paramMap.get('id') || '{}').pipe(
      catchError(()=>{
        this.router.navigate(['/']);
        return EMPTY;
      })
    )
  }
}
