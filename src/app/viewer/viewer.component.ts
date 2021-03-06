import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions, Response, ResponseType } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
	//
	private myHeaders = new Headers({'Content-Type':'text/HTML'});
	itemID: string;
	//
	@Input()
	htmlContent: any = '<h3>TESTING</h3>';
	//
  	constructor(
		private activeRoute: ActivatedRoute,
		// private responseType: ResponseType,
		private router: Router,
		private http: Http
	) {}
	//
  	ngOnInit() {
		this.activeRoute.params
			.subscribe( (params: Params) => {
				this.itemID = params['id'];
				this.fetchHTML('data/story-'+ this.itemID +'.html');
				console.log(this.htmlContent); 
				// console.log(this.itemID);
			})
		;
	}
	// Get html content to pass to Component
	fetchHTML(pathFile: string) {
		let options = new RequestOptions({ headers: this.myHeaders });
		// console.log(pathFile);
		this.http.get(pathFile, options)
			.map(
				(html: any) => html.text()
			)
			.subscribe(
				html => this.htmlContent = html,
				(error: any) => {
					console.log(error);
			  	},
				() => {
					console.log('HTML Transferred');
				}
			)
		;
	}
	//
}
