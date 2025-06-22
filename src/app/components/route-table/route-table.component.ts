import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { RouteService } from '../../services/route.service';
import { Route } from '../../models/route.model';

@Component({
  selector: 'app-route-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './route-table.component.html',
  styleUrls: ['./route-table.component.scss']
})
export class RouteTableComponent implements OnInit {
  public displayedColumns: string[] = ['address', 'mask', 'gateway', 'interface'];
  public dataSource = new MatTableDataSource<Route>([]);

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private routeService: RouteService) {}

  ngOnInit(): void {
    this.routeService.routes$.subscribe(routes => {
      this.dataSource.data = routes;
      this._configureSorting();
    });
    this.dataSource.sort = this.sort;
  }

  private _configureSorting(): void {
    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property === 'address' || property === 'gateway') {
        return this._ipToNumber(item[property as 'address' | 'gateway']);
      }
      return (item[property as keyof Route] as string) || '';
    };
  }

  private _ipToNumber(ip: string): number {
    return ip
      .split('.')
      .map(seg => parseInt(seg, 10))
      .reduce((acc, seg) => (acc << 8) + seg, 0);
  }
}
