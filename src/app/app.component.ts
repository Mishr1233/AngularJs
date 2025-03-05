import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';

  //url of BridgeLabz logo
  imgUrl = "../assets/BridgeLabzLogo.avif";
  url = "https://www.bridgelabz.com";
  userName: string = "";

  ngOnInit(): void{
    this.title = "Hello from BridgeLabz.";
  }

  //click event function
  onClick($event: any) {
    console.log("Save button is clicked!", $event);
    window.open(this.imgUrl, "_blank");
  }
}
