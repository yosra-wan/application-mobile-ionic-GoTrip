import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { IpService } from './ip.service';
@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  constructor(
    private tokenService: TokenService,
    private http: HttpClient,
    private ipservice: IpService
  ) {}
  getUser() {
    return this.http.get(
      `${this.ipservice.ip}/users/${this.tokenService.userData.value.userId}`
    );
  }
  getAllPublicTrip() {
    return this.http.get(
      `${this.ipservice.ip}/publicCircuits/getAllPubliccCircuit`
    );
  }
}
