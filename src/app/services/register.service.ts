import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
private postUserRegister = `${environment.api.baseUrl}${environment.api.routes.registerUser.endpoint}`;
private loginUser = `${environment.api.baseUrl}${environment.api.routes.loginUser.endpoint}`;
private postAzureClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postAzureCluster.endpoint}`;
private postAksClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postAksCluster.endpoint}`;
private postAwsClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postAwsCluster.endpoint}`;
private postEksClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postEksCluster.endpoint}`;
private postDeleteEksClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postDeleteEksCluster.endpoint}`
private postGcpClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postGcpCluster.endpoint}`;
private postGkeClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postGkeCluster.endpoint}`;
private postDeleteAksClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postDeleteAksCluster.endpoint}`;
private postDeleteGkeClusterUrl = `${environment.api.baseUrl}${environment.api.routes.postDeleteGkeCluster.endpoint}`;
private getAwsCrediantials = `${environment.api.baseUrl}${environment.api.routes.getAwsCredentials.endpoint}`;
private getAzureCrediantials = `${environment.api.baseUrl}${environment.api.routes.getAzureCredentials.endpoint}`;
private getGcpCrediantials = `${environment.api.baseUrl}${environment.api.routes.getGcpCredentials.endpoint}`;
private getAwsCluster = `${environment.api.baseUrl}${environment.api.routes.getAwsCluster.endpoint}`;
private getAzureCluster = `${environment.api.baseUrl}${environment.api.routes.getAzureCluster.endpoint}`;
private getGcpCluster = `${environment.api.baseUrl}${environment.api.routes.getGcpCluster.endpoint}`;
private postAwsStatus = `${environment.api.baseUrl}${environment.api.routes.postAwsCreationStatus.endpoint}`;
private postAzureStatus = `${environment.api.baseUrl}${environment.api.routes.postAzureCreationStatus.endpoint}`;
private postGcpStatus = `${environment.api.baseUrl}${environment.api.routes.postGcpCreationStatus.endpoint}`;
private postAwsLog = `${environment.api.baseUrl}${environment.api.routes.postAwsLogs.endpoint}`;
private postAzureLog = `${environment.api.baseUrl}${environment.api.routes.postAzureLogs.endpoint}`;
private postGcpLog = `${environment.api.baseUrl}${environment.api.routes.postGcpLogs.endpoint}`;


  constructor(private httpClient: HttpClient) {}

    postRegister(body:any): Observable<any>{
      return this.httpClient.post(this.postUserRegister,body);
    }

    login(body:any): Observable<any>{
      return this.httpClient.post(this.loginUser,body);
    }

    postAzureCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postAzureClusterUrl,body);
    }

    postAksCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postAksClusterUrl,body);
    }

    postAwsCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postAwsClusterUrl,body);
    }

    postEksCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postEksClusterUrl,body);
    }

    postDeleteEksCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postDeleteEksClusterUrl,body);
    }

    postGcpCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postGcpClusterUrl,body);
    }

    postGkeCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postGkeClusterUrl,body);
    }

    postDeleteAksCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postDeleteAksClusterUrl,body);
    }

    postDeleteGkeCluster(body:any): Observable<any>{
      return this.httpClient.post(this.postDeleteGkeClusterUrl,body);
    }

    getAwsCrediantial(awsBody:any): Observable<any>{
      return this.httpClient.post(this.getAwsCrediantials, awsBody);
    }

    getAzureCrediantial(azureBody:any): Observable<any>{
      return this.httpClient.post(this.getAzureCrediantials,azureBody);
    }

    getGcpCrediantial(gcpBody:any): Observable<any>{
      return this.httpClient.post(this.getGcpCrediantials,gcpBody);
    }

    getAwsClusters(awsBody:any): Observable<any>{
      return this.httpClient.post(this.getAwsCluster,awsBody);
    }

    getAzureClusters(azureBody:any): Observable<any>{
      return this.httpClient.post(this.getAzureCluster,azureBody);
    }

    getGcpClusters(gcpBody:any): Observable<any>{
      return this.httpClient.post(this.getGcpCluster,gcpBody);
    }

    postAwsCreationStatus(gcpBody:any): Observable<any>{
      return this.httpClient.post(this.postAwsStatus,gcpBody);
    }

    postAzureCreationStatus(gcpBody:any): Observable<any>{
      return this.httpClient.post(this.postAzureStatus,gcpBody);
    }

    postGcpCreationStatus(gcpBody:any): Observable<any>{
      return this.httpClient.post(this.postGcpStatus,gcpBody);
    }

    postAwsLogs(gcpBody:any): Observable<any>{
      return this.httpClient.post(this.postAwsLog,gcpBody);
    }

    postAzureLogs(gcpBody:any): Observable<any>{
      return this.httpClient.post(this.postAzureLog,gcpBody);
    }

    postGcpLogs(gcpBody:any): Observable<any>{
      return this.httpClient.post(this.postGcpLog,gcpBody);
    }
  }