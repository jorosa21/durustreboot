import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class PayrollRatesManagementService {
    private uri = environment.apiUrl + "PayrollSetupManagement/";
    constructor(private http: HttpClient) { }
    
    rateView(id): Observable<any[]> {        
        let params = new HttpParams();
        params = params.append('rate_group_id', id);
        params = params.append('series_code', sessionStorage.getItem('sc'));
        return this.http.get<any[]>(this.uri + "payroll_rates_detail_view_sel", {params: params});
    }

    sssView(id): Observable<any[]> {        
        let params = new HttpParams();
        params = params.append('contribution_group_id', id);
        params = params.append('series_code', sessionStorage.getItem('sc'));
        return this.http.get<any[]>(this.uri + "sss_table_view_sel", {params: params});
    }

    pagibigView(id): Observable<any[]> {        
        let params = new HttpParams();
        params = params.append('contribution_group_id', id);
        params = params.append('series_code', sessionStorage.getItem('sc'));
        return this.http.get<any[]>(this.uri + "pagibig_table_view_sel", {params: params});
    }

    philhealthView(id): Observable<any[]> {        
        let params = new HttpParams();
        params = params.append('contribution_group_id', id);
        params = params.append('series_code', sessionStorage.getItem('sc'));
        return this.http.get<any[]>(this.uri + "philhealth_table_view_sel", {params: params});
    }

    adView(id): Observable<any[]> {   
        let params = new HttpParams();
        params = params.append('recurring_id', id);
        params = params.append("created_by", sessionStorage.getItem('u'));
        params = params.append('series_code', sessionStorage.getItem('sc'));
        return this.http.get<any[]>(this.uri + "recurring_view_sel", {params: params});
    }

    taxView(id, type): Observable<any[]> {        
        let params = new HttpParams();
        params = params.append('contribution_group_id', id);
        params = params.append('payroll_type_id', type);
        params = params.append('series_code', sessionStorage.getItem('sc'));
        return this.http.get<any[]>(this.uri + "tax_table_view_sel", {params: params});
    }

    rateIU(param): Observable<any> {
        return this.http.post(this.uri + "payroll_rates_in", param);
    }

    sssIU(param): Observable<any> {
        return this.http.post(this.uri + "sss_table_in", param);
    }

    pagibigIU(param): Observable<any> {
        return this.http.post(this.uri + "pagibig_table_in", param);
    }

    philhealthIU(param): Observable<any> {
        return this.http.post(this.uri + "philhealth_table_in", param);
    }

    taxIU(param): Observable<any> {
        return this.http.post(this.uri + "tax_table_in", param);
    }

    adIU(param): Observable<any> {
        return this.http.post(this.uri + "recurring_in_up", param);
    }
}
