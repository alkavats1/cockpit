import { NgModule,CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AzureCredentialComponent } from './azure-credential/azure-credential.component';
import { GcpCredentialComponent } from './gcp-credential/gcp-credential.component';
import { AwsCredentialComponent } from './aws-credential/aws-credential.component';
import { HomeComponent } from './home/home.component';
import { CloudSelectionComponent } from './cloud-selection/cloud-selection.component';
import { AksClusterComponent } from './aks-cluster/aks-cluster.component';
import { EksClusterComponent } from './eks-cluster/eks-cluster.component';
import { GkeClusterComponent } from './gke-cluster/gke-cluster.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteEksComponent } from './delete-eks/delete-eks.component';
import { DeleteAksComponent } from './delete-aks/delete-aks.component';
import { DeleteGkeComponent } from './delete-gke/delete-gke.component';
import { DeleteCloudSelectionComponent } from './delete-cloud-selection/delete-cloud-selection.component';
import { MyClusterComponent } from './my-cluster/my-cluster.component';
import { CrediantialsDetailComponent } from './crediantials-detail/crediantials-detail.component';
import { CardCredentialsComponent } from './card-credentials/card-credentials.component';
import { ClusterStatusComponent } from './cluster-status/cluster-status.component';
import { ClusterCreationCardComponent } from './cluster-creation-card/cluster-creation-card.component';
import { FormsModule } from '@angular/forms';
import { ClusterCardComponent } from './cluster-card/cluster-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    LoginComponent,
    AzureCredentialComponent,
    GcpCredentialComponent,
    AwsCredentialComponent,
    HomeComponent,
    CloudSelectionComponent,
    AksClusterComponent,
    EksClusterComponent,
    GkeClusterComponent,
    DeleteEksComponent,
    DeleteAksComponent,
    DeleteGkeComponent,
    DeleteCloudSelectionComponent,
    MyClusterComponent,
    CrediantialsDetailComponent,
    CardCredentialsComponent,
    ClusterStatusComponent,
    ClusterCreationCardComponent,
    ClusterCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,    
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
