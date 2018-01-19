import { ActivatedRoute, Params, Router, NavigationEnd, Event } from '@angular/router';
import { Link } from './../../../shared/models/link.model';
import { ScreenSettingsService } from './../../../shared/services/screen-settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

    links : Array<Link> = new Array<Link>();
    currentPage : number;
    currentUrl : string;
    isHomePage : boolean;
    showMenu : boolean = true;
    fadeIn : boolean;
    fadeOut : boolean;
    noEffect : boolean;

    constructor(private screenSettingsService :ScreenSettingsService,
                private router : Router) { 
    }

    ngOnInit() {
        this.loadLinks();
        this.activeLink(this.router.url,this.links);
        this.startHomeAndNavigate('championship','/championship');

        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.activeLink(event.url,this.links);
            }
        });
    }

    startHomeAndNavigate(path : string , routeToActive : string){
        if(this.isHomePage){
            this.showMenu = false;
            this.fadeIn = true;
            setTimeout(
                () => {
                    this.fadeOut = true;
                    this.fadeIn = false;
                    setTimeout(
                        () => {
                            this.fadeIn = false;
                            this.fadeOut = false;
                            this.noEffect = true;
                            this.router.navigate(['/activity',path]);
                            this.activeLink(routeToActive,this.links);
                            this.showMenu = true;
                        }
                    ,2000)
                },4000)
        }
        else{
            this.noEffect = true;
            this.fadeIn = false;
            this.fadeOut = false;
        }
    }

    loadLinks(){
        this.links.push(...
            [
                new Link("" , "דף ראשי"),
                new Link("/championship" , "אליפויות" , [
                    new Link("/championship/champion-of-month" , "אלוף החודש"),
                    new Link("/championship/champion-of-quarter" , "אלוף הרבעון"),
                ]),
                new Link("/ongoing-activities", "פעילויות שוטפות" , [
                    new Link("/ongoing-activities/sales" ,"מכירות"),
                    new Link("/ongoing-activities/customer-retention" ,"שימור וגיוס לקוחות"),
                    new Link("/ongoing-activities/featured-products" ,"מוצרים נבחרים"),
                    new Link("/ongoing-activities/discount-for-customer" ,"הנחה ללקוחות")
                ])

                // all links

                // new Link("" , "דף ראשי"),
                // new Link("/championship" , "אליפויות"),
                // new Link("/championship/champion-of-month" , "אלוף החודש"),
                // new Link("/championship/champion-of-quarter" , "אלוף הרבעון"),

                // new Link("/ongoing-activities", "פעילויות שוטפות" ),
                // new Link("/ongoing-activities/sales" ,"מכירות"),
                // new Link("/ongoing-activities/customer-retention" ,"שימור וגיוס לקוחות"),
                // new Link("/ongoing-activities/featured-products" ,"מוצרים נבחרים"),
                // new Link("/ongoing-activities/discount-for-customer" ,"הנחה ללקוחות")

            ]
        );
    }

    activeLink(currentUrl : string , arrOfLinks : Array<Link>){
        console.log(currentUrl)
        let index = arrOfLinks.filter(
            (link,index) => {
                if(currentUrl == '/activity'){
                    if(link.urlPath == ''){
                        this.isHomePage = true;
                        this.setPage(index);
                    }
                }
                else if(currentUrl.toLocaleLowerCase().indexOf(link.urlPath.toLocaleLowerCase()) > -1){
                    this.isHomePage = false;
                    this.setPage(index);
                }         
            }
        );
    }

    setPage(index : number){
        console.log(index + 1);
        this.currentPage = index;
        window.scrollTo(0,0);
    }

    setVideoBackground() : string{
        return this.screenSettingsService.getVideoBackground();
    }

}
