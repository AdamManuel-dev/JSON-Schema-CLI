# openapi_client.CompanyApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**company_get**](CompanyApi.md#company_get) | **GET** /companies/{companyId} | Retrieve a company
[**company_get_companies**](CompanyApi.md#company_get_companies) | **GET** /companies | Retrieve all companies for a database


# **company_get**
> CompanyBindingModel company_get(company_id)

Retrieve a company

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
    api_instance = openapi_client.CompanyApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # Retrieve a company
        api_response = api_instance.company_get(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CompanyApi->company_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

### Return type

[**CompanyBindingModel**](CompanyBindingModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **company_get_companies**
> SharedCompanyEmployeeResourceModel company_get_companies()

Retrieve all companies for a database

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
    api_instance = openapi_client.CompanyApi(api_client)
    
    try:
        # Retrieve all companies for a database
        api_response = api_instance.company_get_companies()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CompanyApi->company_get_companies: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SharedCompanyEmployeeResourceModel**](SharedCompanyEmployeeResourceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

