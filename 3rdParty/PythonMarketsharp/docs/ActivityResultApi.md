# openapi_client.ActivityResultApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activity_result_get_activity_results**](ActivityResultApi.md#activity_result_get_activity_results) | **GET** /companies/{companyId}/activities/results | Retrieve Activity Results


# **activity_result_get_activity_results**
> list[ActivityResultResourceModel] activity_result_get_activity_results(company_id, include_inactive=include_inactive)

Retrieve Activity Results

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
    api_instance = openapi_client.ActivityResultApi(api_client)
    company_id = 'company_id_example' # str | 
include_inactive = True # bool | (optional) (optional)

    try:
        # Retrieve Activity Results
        api_response = api_instance.activity_result_get_activity_results(company_id, include_inactive=include_inactive)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ActivityResultApi->activity_result_get_activity_results: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **include_inactive** | **bool**| (optional) | [optional] 

### Return type

[**list[ActivityResultResourceModel]**](ActivityResultResourceModel.md)

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

