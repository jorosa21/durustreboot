import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AttendanceManagementService {
    private uri = environment.apiUrl + "AttendanceManagement/";
    constructor(private http: HttpClient) { }

    scheduleView(id): Observable<any[]>{
        let params = new HttpParams();
        params = params.append('shift_id', id);
        params = params.append('series_code', sessionStorage.getItem('sc'));
        params = params.append('created_by', sessionStorage.getItem('u'));
        return this.http.get<any[]>(this.uri + "employee_schedule_detail_view_sel", {params: params});
    }

    attendanceView(df, dt, bi): Observable<any[]>{
        let params = new HttpParams();
        params = params.append('date_from', df);
        params = params.append('date_to', dt);
        params = params.append('bio_id', bi);
        params = params.append('series_code', sessionStorage.getItem('sc'));
        params = params.append('created_by', sessionStorage.getItem('u'));
        return this.http.get<any[]>(this.uri + "attendance_log_sel", {params: params});
    }


    scheduleI(param): Observable<any> {
        return this.http.post(this.uri + "employee_schedule_detail_in", param);
    }

    attendanceI(param): Observable<any> {
        return this.http.post(this.uri + "attendance_log_temp_in", param);
    }
}
