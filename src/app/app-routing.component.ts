import { MainOngoingActivitiesComponent } from './home/activities/ongoing-activities/main-ongoing-activities/main-ongoing-activities.component';
import { SalesComponent } from './home/activities/ongoing-activities/sales/sales.component';
import { FeaturedProductsComponent } from './home/activities/ongoing-activities/featured-products/featured-products.component';
import { DiscountForCustomerComponent } from './home/activities/ongoing-activities/discount-for-customer/discount-for-customer.component';
import { CustomerRetentionComponent } from './home/activities/ongoing-activities/customer-retention/customer-retention.component';
import { OngoingActivitiesComponent } from './home/activities/ongoing-activities/ongoing-activities.component';
import { ChampionOfQuarterComponent } from './home/activities/championship/champion-of-quarter/champion-of-quarter.component';
import { ChampionOfMonthComponent } from './home/activities/championship/champion-of-month/champion-of-month.component';
import { ChampionshipComponent } from './home/activities/championship/championship.component';
import { ActivityComponent } from './home/activities/activity/activity.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { RetentionActivityComponent } from './home/activities/retention-activity/retention-activity.component';
import { OverallActivitiesComponent } from './home/activities/overall-activities/overall-activities.component';
import { EnrollActivityComponent } from './home/activities/enroll-activity/enroll-activity.component';
import { ActivitiesComponent } from './home/activities/activities.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const appRoutes : Routes = [
    {path: "" , redirectTo: "/sign-in", pathMatch:'full'},
    {path: "sign-in" , component : SigninComponent},
    {path: "home", component: HomeComponent , canActivate: [AuthGuardService]},
    {path: "activity" , component: ActivityComponent , canActivate: [AuthGuardService] , children: [
        {path: "" , component: ActivitiesComponent , canActivate: [AuthGuardService]},
        {path: "championship" , component: ChampionshipComponent , canActivate: [AuthGuardService]},
            {path: "champion-of-month" , component: ChampionOfMonthComponent , canActivate: [AuthGuardService]},
            {path: "champion-of-quarter" , component: ChampionOfQuarterComponent , canActivate: [AuthGuardService]},
            
        {path: "ongoing-activities" , component: OngoingActivitiesComponent , canActivate: [AuthGuardService] , children : [
            {path: "" , component: MainOngoingActivitiesComponent , canActivate: [AuthGuardService]},
            {path: "customer-retention" , component:CustomerRetentionComponent , canActivate: [AuthGuardService]},
            {path: "discount-for-customer" , component: DiscountForCustomerComponent , canActivate: [AuthGuardService]},
            {path: "featured-products" , component: FeaturedProductsComponent , canActivate: [AuthGuardService]},
            {path: "sales" , component: SalesComponent , canActivate: [AuthGuardService]}
        ]},
        {path: "enroll" , component: EnrollActivityComponent , canActivate: [AuthGuardService]},
        {path: "overall" , component: OverallActivitiesComponent , canActivate: [AuthGuardService]},
        {path: "retention" , component: RetentionActivityComponent , canActivate: [AuthGuardService]}
    ]},
    {path: "**" , redirectTo: "/home" , pathMatch: 'full'}
];

const appRouter = RouterModule.forRoot(appRoutes);

@NgModule({
    imports:[appRouter]
})

export class AppRoutingModule {}