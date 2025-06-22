import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Route } from '../models/route.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private readonly _routes$ = new BehaviorSubject<Route[]>(this._generateRoutes());
  public readonly routes$: Observable<Route[]> = this._routes$.asObservable();

  private _generateRoutes(): Route[] {
    return [
      { uuid: uuidv4(), address: '0.0.0.0',    mask: '0.0.0.0',   gateway: '193.0.174.1', interface: 'Ethernet'     },
      { uuid: uuidv4(), address: '10.1.30.0',  mask: '255.255.255.0', gateway: '0.0.0.0',     interface: 'Guest Wi-Fi'  },
      { uuid: uuidv4(), address: '192.168.1.0',mask: '255.255.255.0', gateway: '0.0.0.0',     interface: 'Home LAN'     },
      { uuid: uuidv4(), address: '193.0.174.0',mask: '255.255.255.0', gateway: '0.0.0.0',     interface: 'Ethernet'     },
      { uuid: uuidv4(), address: '193.0.175.0',mask: '255.255.255.0', gateway: '193.0.174.10',interface: 'Ethernet'     },
      { uuid: uuidv4(), address: '193.0.175.22',mask: '255.255.255.255',gateway: '193.0.174.1', interface: 'Ethernet'     },
      { uuid: uuidv4(), address: '172.16.0.0', mask: '255.240.0.0',   gateway: '172.16.0.1', interface: 'VPN'          },
      { uuid: uuidv4(), address: '8.8.8.0',    mask: '255.255.255.0', gateway: '8.8.8.8',    interface: 'Public DNS'   },
      { uuid: uuidv4(), address: '127.0.0.0',  mask: '255.0.0.0',     gateway: '127.0.0.1',  interface: 'Loopback'     },
    ];
  }
}
