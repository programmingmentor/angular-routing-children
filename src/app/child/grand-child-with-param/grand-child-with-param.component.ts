import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grand-child-with-param',
  templateUrl: './grand-child-with-param.component.html',
  styleUrls: ['./grand-child-with-param.component.css']
})
export class GrandChildWithParamComponent implements OnInit {

  param: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.param = params['param'];
    });
  }

  ngOnInit() {
  }

}
