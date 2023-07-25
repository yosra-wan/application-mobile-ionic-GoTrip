import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IpService {
  public ip = 'https://gotrip-ionic-application-backend.onrender.com';
  constructor() {}
}
