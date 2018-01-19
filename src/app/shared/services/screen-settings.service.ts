import { Subject } from 'rxjs/Subject';
import { UrlService } from './url.service';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ScreenSettingsService{
    screenOrientation = new Subject<string>();
    
    constructor(private urlService : UrlService){}

    getVideoBackground() : string{
        //return this.urlService.urlApiPath + '/stream';
        //return 'assets/background/Time_Lapse.mp4';
        return 'assets/background/city-bg.mp4';
        //return 'https://s3.ca-central-1.amazonaws.com/erez1api/assets/background/Time_Lapse.mp4';
    }

    resizeScreen(){
        window.innerHeight > window.innerWidth ? 
        this.screenOrientation.next('portrait') : 
        this.screenOrientation.next('landscape');
    }

    getScreenOrientation() : string{
        return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    }
}