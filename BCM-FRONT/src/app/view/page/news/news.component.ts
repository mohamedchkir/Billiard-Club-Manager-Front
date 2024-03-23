import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../../core/service/news/news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  data!: any[];
  displayedArticles: number = 3; // Number of initially displayed articles
  showAll: boolean = false;

  constructor(private dataService: NewsService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  toggleDisplay() {
    if (this.showAll) {
      this.displayedArticles = 3; // Display only three articles
    } else {
      this.displayedArticles = this.data.length; // Display all articles
    }
    this.showAll = !this.showAll; // Toggle the showAll flag
  }
}
