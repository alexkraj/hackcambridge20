const msRestAzure = require('ms-rest-azure');
const adlsManagement = require('azure-arm-datalake-store');

const subscriptionId = '7cce2574-8f09-4477-895d-d73246904929';

msRestAzure.interactiveLogin().then(credentials => {
  const accountClient = new adlsManagement.DataLakeStoreAccountClient(
    credentials,
    subscriptionId
  );
  accountClient.account.list().then(result => {
    console.log(result);
  });
});


jQuery(document).ready(function($){
    function sendUpdate(){
        $.ajax({
            url: 'url-here.com',
            type: 'POST',
            dataType: 'JSON',
            success: successFunction,
            error: errorFunction,
            
            complete: function (){
                // runs no matter what
            }

        });
    }
});