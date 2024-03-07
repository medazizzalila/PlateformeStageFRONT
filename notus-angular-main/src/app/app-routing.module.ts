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
import { ReclamationsComponent } from "./views/admin/reclamations/reclamations.component";
import { OffresemploisComponent } from "./views/admin/offresemplois/offresemplois.component";
import { FormationsComponent } from "./views/admin/formations/formations.component";
import { EvenementsComponent } from "./views/admin/evenements/evenements.component";
import { QaComponent } from "./views/admin/qa/qa.component";
import { StageListComponent } from "./views/admin/stages/components/stage-list/stage-list.component";
import { CreateStageComponent } from "./views/admin/stages/components/create-stage/create-stage.component";
import { UpdateStageComponent } from "./views/admin/stages/components/update-stage/update-stage.component";
import { StageDetailsComponent } from "./views/admin/stages/components/stage-details/stage-details.component";
import { StageFrontComponent } from "./views/landing/stages/stage-front-etudiant/stage-front.component";
import { DocListComponent } from "./views/admin/Doc/components/doc-list/doc-list.component";
import { CreateDocComponent } from "./views/admin/Doc/components/create-doc/create-doc.component";
import { UpdateDocComponent } from "./views/admin/Doc/components/update-doc/update-doc.component";
import { DocDetailsComponent } from "./views/admin/Doc/components/doc-details/doc-details.component";
import { StageFrontSocieteComponent } from "./views/landing/stages/stage-front-societe/stage-list/stage-front-societe.component";
import { UpdateStageSocieteComponent } from "./views/landing/stages/stage-front-societe/update-stage/update-stage.component";
import { CreateStageSocieteComponent } from "./views/landing/stages/stage-front-societe/create-stage/create-stage.component";
import { StageDatailFrontComponent } from "./views/landing/stages/stage-datail-front/stage-datail-front.component";
import { DocEtudiantFrontComponent } from "./views/landing/doc/etudiant/doc-etudiant-front/doc-etudiant-front.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "utilisateurs", component: UtilisateursComponent },
      { path: "reclamations", component: ReclamationsComponent },
      { path: "offresemplois", component: OffresemploisComponent},
      { path: "stage", component: StageListComponent},
      {path: "create-stage", component: CreateStageComponent},
      {path: "update-stage/:id", component: UpdateStageComponent},
      {path: "stage-details/:id", component: StageDetailsComponent},
      { path: "doc", component: DocListComponent},
      {path: "create-doc", component: CreateDocComponent},
      {path: "update-doc/:id", component: UpdateDocComponent},
      {path: "doc-details/:id", component: DocDetailsComponent},
      
      { path: "formations", component: FormationsComponent },
      { path: "evenements", component: EvenementsComponent },
      { path: "qa", component: QaComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
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
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "", component: LandingComponent },
  { path: "stage", component: StageFrontComponent },
  { path: "stagesoc", component: StageFrontSocieteComponent },
 
  { path: "update-stagesoc/:id", component: UpdateStageSocieteComponent },
  { path: "create-stagesoc", component: CreateStageSocieteComponent },
  { path: "details-stagefront/:id", component: StageDatailFrontComponent },
  { path: "docetud", component: DocEtudiantFrontComponent },
  
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
