import { GraphService } from './shared/services/graph.service';
import { MessagesService } from './shared/services/messages.service';
import { AdminService } from './shared/services/admin.service';
import { ScreenSettingsService } from './shared/services/screen-settings.service';
import { UrlService } from './shared/services/url.service';
import { ActivityService } from './shared/services/activity.service';
import { ErrorService } from './shared/services/error.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AgentService } from './shared/services/agent.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { ActivitiesComponent } from './home/activities/activities.component';
import { OverallActivitiesComponent } from './home/activities/overall-activities/overall-activities.component';
import { RetentionActivityComponent } from './home/activities/retention-activity/retention-activity.component';
import { EnrollActivityComponent } from './home/activities/enroll-activity/enroll-activity.component';
import { AppRoutingModule } from './app-routing.component';
import { RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';
import { ActivityComponent } from './home/activities/activity/activity.component';
import { EnrollAgentHistoryComponent } from './home/activities/enroll-activity/enroll-agent-history/enroll-agent-history.component';
import { HebDatePipe } from './shared/pipes/heb-date.pipe';
import { MobileMenuComponent } from './header/mobile-menu/mobile-menu.component';
import { RetentionAgentHistoryComponent } from './home/activities/retention-activity/retention-agent-history/retention-agent-history.component';
import { OverallAgentHistoryComponent } from './home/activities/overall-activities/overall-agent-history/overall-agent-history.component';
import { ChampionshipComponent } from './home/activities/championship/championship.component';
import { OngoingActivitiesComponent } from './home/activities/ongoing-activities/ongoing-activities.component';
import { ChampionOfMonthComponent } from './home/activities/championship/champion-of-month/champion-of-month.component';
import { ChampionOfQuarterComponent } from './home/activities/championship/champion-of-quarter/champion-of-quarter.component';
import { FeaturedProductsComponent } from './home/activities/ongoing-activities/featured-products/featured-products.component';
import { SalesComponent } from './home/activities/ongoing-activities/sales/sales.component';
import { CustomerRetentionComponent } from './home/activities/ongoing-activities/customer-retention/customer-retention.component';
import { DiscountForCustomerComponent } from './home/activities/ongoing-activities/discount-for-customer/discount-for-customer.component';
import { ChampionOfMonthHistoryComponent } from './home/activities/championship/champion-of-month/champion-of-month-history/champion-of-month-history.component';
import { ChampionOfQuarterHistoryComponent } from './home/activities/championship/champion-of-quarter/champion-of-quarter-history/champion-of-quarter-history.component';
import { MainOngoingActivitiesComponent } from './home/activities/ongoing-activities/main-ongoing-activities/main-ongoing-activities.component';
import { GraphComponent } from './graph/graph.component';

import Chart from 'chart.js';
import { MessagesComponent } from './messages/messages.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { MessageItemComponent } from './messages/messages-list/message-item/message-item.component';
import { SalesHistoryComponent } from './home/activities/ongoing-activities/sales/sales-history/sales-history.component';
import { FeaturedProductsHistoryComponent } from './home/activities/ongoing-activities/featured-products/featured-products-history/featured-products-history.component';
import { DiscountForCustomerHistoryComponent } from './home/activities/ongoing-activities/discount-for-customer/discount-for-customer-history/discount-for-customer-history.component';
import { CustomerRetentionHistoryComponent } from './home/activities/ongoing-activities/customer-retention/customer-retention--history/customer-retention--history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    ActivitiesComponent,
    OverallActivitiesComponent,
    RetentionActivityComponent,
    EnrollActivityComponent,
    ActivityComponent,
    EnrollAgentHistoryComponent,
    HebDatePipe,
    MobileMenuComponent,
    RetentionAgentHistoryComponent,
    OverallAgentHistoryComponent,
    ChampionOfMonthComponent,
    ChampionOfQuarterComponent,
    FeaturedProductsComponent,
    SalesComponent,
    CustomerRetentionComponent,
    DiscountForCustomerComponent,
    ChampionshipComponent,
    OngoingActivitiesComponent,
    ChampionOfMonthHistoryComponent,
    ChampionOfQuarterHistoryComponent,
    MainOngoingActivitiesComponent,
    GraphComponent,
    MessagesComponent,
    MessagesListComponent,
    MessageItemComponent,
    SalesHistoryComponent,
    FeaturedProductsHistoryComponent,
    DiscountForCustomerHistoryComponent,
    CustomerRetentionHistoryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    MaterializeModule
  ],
  providers: [AgentService,
              AuthGuardService,
              ActivityService,
              GraphService,
              ScreenSettingsService,
              AdminService,
              MessagesService,
              UrlService,
              ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
