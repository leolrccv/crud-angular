import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get title(): string {
    return this._headerData.value.title;
  }

  get icon(): string {
    return this._headerData.value.icon;
  }

  get routeUrl(): string {
    return this._headerData.value.routeUrl;
  }

  set headerData(data: HeaderData) {
    this._headerData.next(data);
  }

}
