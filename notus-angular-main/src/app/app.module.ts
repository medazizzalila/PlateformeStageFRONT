import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views

import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardBarChartComponent } from "./components/cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "./components/cards/card-line-chart/card-line-chart.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { MapExampleComponent } from "./components/maps/map-example/map-example.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { StageListComponent } from "./views/admin/stages/components/stage-list/stage-list.component";
import { FormsModule} from '@angular/forms';
import { CreateStageComponent } from "./views/admin/stages/components/create-stage/create-stage.component";
import { UpdateStageComponent } from "./views/admin/stages/components/update-stage/update-stage.component";
import { StageDetailsComponent } from "./views/admin/stages/components/stage-details/stage-details.component";
import { FilterPipe } from "./views/admin/stages/components/stage-list/filter.pipe";
import { StageFrontComponent } from "./views/landing/stages/stage-front-etudiant/stage-front.component";
import { DocListComponent } from "./views/admin/Doc/components/doc-list/doc-list.component";
import { CreateDocComponent } from "./views/admin/Doc/components/create-doc/create-doc.component";
import { DocDetailsComponent } from "./views/admin/Doc/components/doc-details/doc-details.component";
import { UpdateDocComponent } from "./views/admin/Doc/components/update-doc/update-doc.component";
import { StageFrontSocieteComponent } from "./views/landing/stages/stage-front-societe/stage-list/stage-front-societe.component";
import { UpdateStageSocieteComponent } from "./views/landing/stages/stage-front-societe/update-stage/update-stage.component";
import { CreateStageSocieteComponent } from "./views/landing/stages/stage-front-societe/create-stage/create-stage.component";
import { StageDatailFrontComponent } from "./views/landing/stages/stage-datail-front/stage-datail-front.component";
import { DocEtudiantFrontComponent } from "./views/landing/doc/etudiant/doc-etudiant-front/doc-etudiant-front.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    StageListComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    ProfileComponent,
    CreateStageComponent,
    UpdateStageComponent,
    StageDetailsComponent,
    FilterPipe,
    StageFrontComponent,
    DocListComponent,
    CreateDocComponent,
    DocDetailsComponent,
    UpdateDocComponent,
    StageFrontSocieteComponent,
    UpdateStageSocieteComponent,
    CreateStageSocieteComponent,
    StageDatailFrontComponent,
    DocEtudiantFrontComponent
    

  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
