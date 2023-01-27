import { Component } from '@angular/core';
import { ApicallingService } from './Services/apicalling.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ap:ApicallingService ){}
  title = 'setupApplication';
  url = 'http://localhost:3000/Person';

  getdata()
  {
    this.ap.apiGet(this.url).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}
