import {Component, Input} from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html'
})

export class SearchComponent {

	@Input() items: any[] = [];

	handleSearch(event: any) {
		debugger;
		console.log(event.target.value);
	}
}