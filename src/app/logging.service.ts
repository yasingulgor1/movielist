import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  message : Array<string> = [];

  constructor() { }

  set Message(ms : string){
      this.message.push(ms);
  }

  Clear(){
    this.message = [];
  }



}
