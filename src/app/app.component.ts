import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
  	title = 'Angular JS';
	//
	items: any[] = [];
	//
	constructor(private router: Router) {
		this.addRecords(5);
	}
	//
	addRecords(number: number) {
		for(var i = 1; i <= number; i++){
			this.items.push({
				id: i,
				text: "Story " + i,
				page: "story-"+ i +".html"
			});
		}
	}
	//
	nav2url(Url: String) {
		this.router.navigate([Url]);
  	}
  	//
}
