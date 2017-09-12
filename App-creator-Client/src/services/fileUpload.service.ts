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
 Service between app and server API for upload image file and get the two main colors
*/

@Injectable()
export class FileUploadService {
     constructor(public http:Http){}

     uploadFile(fileToUpload:File)
     {
        let formData: any = new FormData();
        formData.append("inputImage",fileToUpload,fileToUpload.name);
        return this.http.post(environment.server_url+'api/Home/postfile',formData).map((res: Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
}