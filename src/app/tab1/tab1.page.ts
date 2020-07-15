import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  res: any;
  res1:any;
  res2:any;
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
      let url1 ="http://127.0.0.1:3000/carousel";
      this.http.get(url1).subscribe((res) => {
      console.log(res);
      this.res = res;
      });

      let url2 ="http://127.0.0.1:3000/hotsell";
      this.http.get(url2).subscribe((res1) => {
      console.log(res1);
      this.res1 = res1;
      });

      let url3 ="http://127.0.0.1:3000/product";
      this.http.get(url3).subscribe((res2) => {
      console.log(res2);
      this.res2 = res2;
      });
     
     
  }



}
