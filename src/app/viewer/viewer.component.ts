import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
	itemID: string;
  	constructor(
		private activeRoute: ActivatedRoute,
		private router: Router
  	) {}

  	ngOnInit() {
		this.activeRoute.params.subscribe( (params: Params) => {
			this.itemID = params['id'];
			// console.log(this.itemID);
		});
  	}

}
