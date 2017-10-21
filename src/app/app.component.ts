import { Component } from '@angular/core';

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
	constructor() {
		this.addRecords(5);
	}
	//
	addRecords(number: number) {
		for(var i = 1; i <= number; i++){
			this.items.push({
				id: i,
				text: "Story " + i
			});
		}
	}
	//
}
