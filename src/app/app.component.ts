import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlueComponent } from "./blue/blue.component";
import { YellowComponent } from "./yellow/yellow.component";
import { GreenComponent } from "./green/green.component";
import { RedComponent } from "./red/red.component";
import { OrangeComponent } from "./orange/orange.component";
import { BlackComponent } from "./black/black.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlueComponent, YellowComponent, GreenComponent, RedComponent, OrangeComponent, BlackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'colors';
}
