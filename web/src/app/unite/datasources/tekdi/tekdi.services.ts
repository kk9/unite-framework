import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { CoursesDataService } from './collection/courses.datasource';
// const ServiceCollection =  {
//     'courses': CoursesDataService,
// };

@Injectable()
export class TekdiServices {
    private dsConfigObj;
    // constructor(private config, private _httpClient?: HttpClient) {
    // }

    // getData(serviceName)
    // {
    //     let dsName = serviceName && ServiceCollection.hasOwnProperty(serviceName) 
    //                     ? ServiceCollection[serviceName]
    //                     : ServiceCollection['default'];

    //     let dsObj = new dsName(this.config, this._httpClient);
    //     return dsObj.getData().map(asdf => {
    //         return asdf;
    //     });
    // }
}