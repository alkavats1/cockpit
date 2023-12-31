// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api:{
    baseUrl:"http://98.70.13.238:4000/",
    
    routes:{
      registerUser:{endpoint:'jsonRegister', method:'POST'},
      loginUser: {endpoint:'JsonLogin', method:'POST'},
      postAzureCluster: {endpoint:'json_submit_form_azure', method:'POST'},
      postAksCluster: {endpoint:'json_create_aks', method:'POST'},
      postAwsCluster: {endpoint:'json_submit_form_aws', method:'POST'},
      postEksCluster: {endpoint:'json_create_aws', method:'POST'},
      postDeleteEksCluster: {endpoint:'json_delete_eks', method:'POST'},
      postGcpCluster: {endpoint:'json_submit_form_gke', method:'POST'},
      postGkeCluster: {endpoint:'json_create_gke', method:'POST'},
      postDeleteAksCluster: {endpoint:'json_delete_aks', method:'POST'},
      postDeleteGkeCluster: {endpoint:'json_delete_gke', method:'POST'},
      getAwsCredentials: {endpoint:'json-show-details-aws', method:'POST'},
      getAzureCredentials: {endpoint:'json-show-details-azure', method:'POST'},
      getGcpCredentials: {endpoint:'json-show-details-gcp', method:'POST'},
      getAwsCluster: {endpoint:'json-my-cluster-details-aws', method:'POST'},
      getAzureCluster: {endpoint:'json-my-cluster-details-azure', method:'POST'},
      getGcpCluster: {endpoint:'json-my-cluster-details-gcp', method:'POST'},
      postAwsCreationStatus: {endpoint:'json-creation-status-aws', method:'POST'},
      postAzureCreationStatus: {endpoint:'json-creation-status-azure', method:'POST'},
      postGcpCreationStatus: {endpoint:'json-creation-status-gcp', method:'POST'},
      postAwsLogs: {endpoint:'json-logs-aws', method:'POST'},
      postAzureLogs: {endpoint:'json-logs-azure', method:'POST'},
      postGcpLogs: {endpoint:'json-logs-gcp', method:'POST'},
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
