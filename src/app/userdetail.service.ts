import { Http,Response } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
@Injectable()
export class Userdetail{
constructor(private http:Http){}
private url:string="/assets/data/Userdata.json";
onReceive(){
    return this.http.get(this.url)
    .map((response:Response)=>response.json())
}
}