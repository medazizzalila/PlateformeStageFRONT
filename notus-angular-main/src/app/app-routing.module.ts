import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

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
import { UtilisateursComponent } from "./views/admin/utilisateurs/utilisateurs.component";
import { StagesComponent } from "./views/admin/stages/stages.component";
import { ReclamationsComponent } from "./views/admin/reclamations/reclamations.component";
import { OffresemploisComponent } from "./views/admin/offresemplois/offresemplois.component";
import { FormationsComponent } from "./views/admin/formations/formations.component";
import { EvenementsComponent } from "./views/admin/evenements/evenements.component";
import { QaComponent } from "./components/qa/qa.component";
import { QaAddComponent } from "./components/qa/qa-add/qa-add.component";
import { QaUpdateComponent } from "./components/qa/qa-update/qa-update.component";
import { QaFrontComponent } from "./components/qa-front/qa-front.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "utilisateurs", component: UtilisateursComponent },
      { path: "stages", component: StagesComponent },
      { path: "reclamations", component: ReclamationsComponent },
      { path: "offresemplois", component: OffresemploisComponent},
      { path: "formations", component: FormationsComponent },
      { path: "evenements", component: EvenementsComponent },
      { path: "qa", component: QaComponent },
      { path: "qa-add", component: QaAddComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: 'qa-update/:id', component: QaUpdateComponent },
      
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: 'qa', component: QaFrontComponent },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "", component: LandingComponent },
  { path: 'qa', component: QaFrontComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
