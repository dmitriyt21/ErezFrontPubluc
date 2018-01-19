import { ScreenSettingsService } from './../shared/services/screen-settings.service';
import { Component, OnInit , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {

    orientationSubscription : Subscription;
    screeoOrientation : string;

    constructor(private screenSettingsService :ScreenSettingsService) {}

    ngOnInit() {
        window.scrollTo(0,0);
        this.getScreenOrientation();

    }

    getScreenOrientation(){
        this.screeoOrientation = this.screenSettingsService.getScreenOrientation();

        this.orientationSubscription =
            this.screenSettingsService.screenOrientation.subscribe(
                (orientation : string) => {
                    this.screeoOrientation = orientation;
                }
            );
    }

    ngOnDestroy(){
        this.orientationSubscription.unsubscribe();
    }
}
