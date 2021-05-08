import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private api : ApiService) { }
  data:any=[]
  ngOnInit(): void {
    this.api.events().subscribe(data=>this.data=data)
  }

}
