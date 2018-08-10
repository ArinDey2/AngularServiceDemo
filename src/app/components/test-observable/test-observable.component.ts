import { Component, OnInit } from '@angular/core';

import { ObservableService } from '../../services/observable.service';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {

  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    this.observableService.test().subscribe(data =>
    console.log(data));
  }

}
