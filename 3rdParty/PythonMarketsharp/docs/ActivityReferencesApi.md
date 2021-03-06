# openapi_client.ActivityReferencesApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activity_references_get_activity_references**](ActivityReferencesApi.md#activity_references_get_activity_references) | **GET** /companies/{companyId}/activities/references | Get activity references for a company.


# **activity_references_get_activity_references**
> list[ActivityReferenceResourceModel] activity_references_get_activity_references(company_id, include_inactive=include_inactive)

Get activity references for a company.

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
    api_instance = openapi_client.ActivityReferencesApi(api_client)
    company_id = 'company_id_example' # str | 
include_inactive = True # bool |  (optional)

    try:
        # Get activity references for a company.
        api_response = api_instance.activity_references_get_activity_references(company_id, include_inactive=include_inactive)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ActivityReferencesApi->activity_references_get_activity_references: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **include_inactive** | **bool**|  | [optional] 

### Return type

[**list[ActivityReferenceResourceModel]**](ActivityReferenceResourceModel.md)

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

