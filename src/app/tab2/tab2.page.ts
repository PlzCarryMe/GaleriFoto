import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  tebak
  randNumber
  bool : boolean = null

  tebakangka(){
    this.randNumber = Math.floor(Math.random() * 11);

    if(this.tebak == this.randNumber){
      this.bool = true
      alert("Tebakan Benar")
    }
    else{
      this.bool = false
      alert("Tebakan salah")
    }

  }
}
