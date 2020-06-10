import {Component, OnInit} from '@angular/core';
import {HackerNewsService} from './services/hacker-news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Reign project';

  constructor(private hackerNewsService: HackerNewsService) { }
  ngOnInit(): void {
  this.getHackerNews();
  }
  getHackerNews() {
    this.hackerNewsService.getHackerNewsPosts()
      .subscribe(resp => {
        console.log(resp);
      });
  }

}
