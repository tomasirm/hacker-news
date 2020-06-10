import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {HackerNewsService} from '../../services/hacker-news.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.css']
})
export class HackerNewsComponent implements OnInit, OnDestroy {
  public articles: Article[] = [];
  articlesObservable: Subscription = new Subscription();

  getHackerNews() {
    this.articlesObservable = this.hackerNewsService.getHackerNewsPosts().subscribe(data => {
      this.articles = data;
      this.articles = this.filterArticlesByDeletedItems(this.articles);
      // @ts-ignore
      this.articles = this.articles.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      this.articles = this.articles.filter(article => article.title || article.story_title);
    }, error => {
      console.log(error);
    });

  }
  filterArticlesByDeletedItems(articles: Article[]) {
    const deleteItems = this.hackerNewsService.getDeleteItems();
    return articles.filter(item => !deleteItems.includes(item.objectID));
  }

  reciveDeleteItemEvent(event){
    if (event) {
      this.getHackerNews();
    }
  }

  constructor(private hackerNewsService: HackerNewsService) {
  }

  ngOnInit(): void {
    this.getHackerNews();
  }

  ngOnDestroy(): void {
    this.articlesObservable.unsubscribe();
  }
}
