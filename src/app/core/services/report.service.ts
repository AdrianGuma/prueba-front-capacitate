import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ReportResponse } from '../../models/report.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private http = inject(HttpClient);

  private apiUrl =
    'https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport';

  getReport(): Observable<ReportResponse> {
    return this.http.get<ReportResponse>(this.apiUrl);
  }
}
