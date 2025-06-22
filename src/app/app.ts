import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteTableComponent } from './components/route-table/route-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouteTableComponent ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'route-table-app';
}
