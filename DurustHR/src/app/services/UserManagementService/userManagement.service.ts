import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ArrDropdown } from '../../models/arrDropdown';

@Injectable()
export class UserManagementService {
    private uri = environment.apiUrl + "UserManagement/";
    constructor(private http: HttpClient) { }

    employeeView(id): Observable<any[]> {        
        let params = new HttpParams();
        params = params.append('created_by', sessionStorage.getItem('u'));
        params = params.append('employee_id', id);
        params = params.append('series_code', sessionStorage.getItem('sc'));
        return this.http.get<any[]>(this.uri + "employee_view_sel", {params: params});
    }

    download(): Observable<any[]>{
        return this.http.get<any[]>("http://168.63.254.218:1015/api/DataUploadManagement/ExportAttendanceLog");
    }

    employeeFetch(id, row, index): Observable<any[]> {        
        let params = new HttpParams();
        params = params.append('created_by', sessionStorage.getItem('u'));
        params = params.append('employee_id', id);
        params = params.append('row', row);
        params = params.append('index', index);
        params = params.append('series_code', sessionStorage.getItem('sc'));
        return this.http.get<any[]>(this.uri + "employee_fetch", {params: params});
    }

    employeeList(): Observable<any[]> {        
        let params = new HttpParams();
        params = params.append('employee_id', "0");
        params = params.append('series_code', sessionStorage.getItem('sc'));
        return this.http.get<any[]>(this.uri + "employee_active_view", {params: params});
    }

    leaveView(li, ltc, ln, tl, tt, id): Observable<any[]> {        
        let params = new HttpParams();
        params = params.append('leave_type_id', li);
        params = params.append('leave_type_code', ltc);
        params = params.append('leave_name', ln);
        params = params.append('total_leaves', tl);
        params = params.append('tag_type', tt);
        params = params.append('id', id);
        params = params.append('created_by', sessionStorage.getItem('u'));
        params = params.append('series_code', sessionStorage.getItem('sc'));
        return this.http.get<any[]>(this.uri + "employee_leave_view", {params: params});
    }

    scheduleView(si, ti, to, th, df, dt, tt, id): Observable<any[]> {        
        let params = new HttpParams();
        params = params.append('shift_id', si);
        params = params.append('time_in', ti);
        params = params.append('time_out', to);
        params = params.append('total_working_hours', th);
        params = params.append('date_from', df);
        params = params.append('date_to', dt);
        params = params.append('tag_type', tt);
        params = params.append('id', id);
        params = params.append('created_by', sessionStorage.getItem('u'));
        params = params.append('series_code', sessionStorage.getItem('sc'));
        return this.http.get<any[]>(this.uri + "employee_schedule_view", {params: params});
    }

    movementView(e, m, df, dt): Observable<any[]> {        
        let params = new HttpParams();
        params = params.append('movement_type', m);
        params = params.append('created_by', sessionStorage.getItem('u'));
        params = params.append('employee_id', e);
        params = params.append('date_from', df);
        params = params.append('date_to', dt);
        params = params.append('series_code', sessionStorage.getItem('sc'));
        return this.http.get<any[]>(this.uri + "employee_movement_sel", {params: params});
    }

    employeeIU(param): Observable<any> {
        return this.http.post(this.uri + "employee_in_up", param);
    }

}
