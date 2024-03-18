import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopPosts() {
    const endpoint = 'https://hacker-news.firebaseio.com/v0/topstories.json';

    return this.http.get(endpoint);
  }

  getPost(postId:string){
    const endpoint = 'https://hacker-news.firebaseio.com/v0/item';
    return this.http.get(`${endpoint}/${postId}.json`)
  }

  /*

  {
    by: "dangle1",
    descendants: 0,
    id: 39738571,
    score: 4,
    time: 1710713808,
    title: "Inferring the "Meaning" of Wing-Tail Flicking Behavior in American Crows",
    type: "story",
    url: "https://orb.binghamton.edu/cgi/viewcontent.cgi?article=1096&context=research_days_posters_2021"
  }

  */
}
