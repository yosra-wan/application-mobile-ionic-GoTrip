import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpService } from './ip.service';

@Injectable({
  providedIn: 'root',
})
export class CreateEventService {
  constructor(private http: HttpClient, private ipservice: IpService) {}
  postCircuit(circuit: any) {
    return this.http.post(
      `${this.ipservice.ip}/proposedCircuits/setProposedCircuit`,
      circuit
    );
  }
}
