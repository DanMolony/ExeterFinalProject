import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Dan Molony";
  city = "Bronx, NY";
  tagline = "This is actually a photo of my dog Sally";
  aboutMe =
    "Let this website serve as my Final project for the ApprenticeNow/ Exeter Java-Fullstack course";
}
