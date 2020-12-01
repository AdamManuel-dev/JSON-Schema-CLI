# openapi_client.AuthenticationApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**token_post**](AuthenticationApi.md#token_post) | **POST** /token | Retrieve a token


# **token_post**
> token_post(grant_type, apikey, company_id=company_id, apisecret=apisecret, empoid=empoid, company_id=company_id, username=username, password=password)

Retrieve a token

There are two ways to authenticate with this API. Application Authentication and Employee Authentication. <br />You need credentials provided by Marketsharp in order to authenticate with this API <br /><br />Application Authentication can be used access more than one Marketsharp company with the same set of credentials. <br />Employee Authentication uses your Marketsharp login credentials to authenticate to the api. Therefore, you would need to know login credentals to every marketsharp company you need access to.

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://restapi1aws.marketsharpm.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://restapi1aws.marketsharpm.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    grant_type = 'password' # str | Set to password (default to 'password')
apikey = 'apikey_example' # str | Provided by MarketSharp
company_id = 'company_id_example' # str | Your Marketsharp Company Id. Provide when authenticating. Takes precedence over company_id (optional)
apisecret = 'apisecret_example' # str | Provide only if you authenticating as an application. (optional)
empoid = 'empoid_example' # str | Provide only if you authenticating as an application. (optional)
company_id = 'company_id_example' # str | Provide only if you authenticating as an employee. This parameter is deprecated and will be removed in the future. Please use companyId instead (optional)
username = 'username_example' # str | Provide only if you authenticating as an employee. (optional)
password = 'password_example' # str | Provide only if you authenticating as an employee. (optional)

    try:
        # Retrieve a token
        api_instance.token_post(grant_type, apikey, company_id=company_id, apisecret=apisecret, empoid=empoid, company_id=company_id, username=username, password=password)
    except ApiException as e:
        print("Exception when calling AuthenticationApi->token_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grant_type** | **str**| Set to password | [default to &#39;password&#39;]
 **apikey** | **str**| Provided by MarketSharp | 
 **company_id** | **str**| Your Marketsharp Company Id. Provide when authenticating. Takes precedence over company_id | [optional] 
 **apisecret** | **str**| Provide only if you authenticating as an application. | [optional] 
 **empoid** | **str**| Provide only if you authenticating as an application. | [optional] 
 **company_id** | **str**| Provide only if you authenticating as an employee. This parameter is deprecated and will be removed in the future. Please use companyId instead | [optional] 
 **username** | **str**| Provide only if you authenticating as an employee. | [optional] 
 **password** | **str**| Provide only if you authenticating as an employee. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

