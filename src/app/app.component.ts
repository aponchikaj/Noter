import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  MenuMode:boolean = false
  NormalMode:boolean = true

  openMenu(){
    this.MenuMode = true
    this.NormalMode = false
  }

  closeMenu(){
    this.MenuMode = false
    this.NormalMode = true
  }

}
