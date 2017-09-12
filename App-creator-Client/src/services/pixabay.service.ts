import { Observable }  from 'rxjs/Observable';
import { Injectable }     from '@angular/core';
import {Http, Response,Headers,RequestOptions,URLSearchParams  } from '@angular/http';
import 'rxjs/add/observable/throw';
import {environment} from '../environments/environment';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

/*
    Service between pixaybay api to get images by given query.
*/

@Injectable()
export class pixabayService {
    url="https://pixabay.com/api/";

    constructor(public http:Http){}

    getImagesByQuery(search:string):Observable<any[]>
    {
            let params = new URLSearchParams();
            params.append("key",environment.pixaba_api);
            params.append("q",search);
            params.append("image_type","photo");
            return this.http.get(this.url,{search : params})
                 .map((res: Response) => res.json())
                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


}