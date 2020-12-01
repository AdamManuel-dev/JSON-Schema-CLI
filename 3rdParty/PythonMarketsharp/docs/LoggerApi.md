# openapi_client.LoggerApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logger_logged_in_client_side_exception**](LoggerApi.md#logger_logged_in_client_side_exception) | **POST** /logger/log/clientsideexception | Log Client Side Exceptions
[**logger_logged_out_client_side_exception**](LoggerApi.md#logger_logged_out_client_side_exception) | **POST** /logger/log/loginclientsideexception | Log Client Side Exceptions


# **logger_logged_in_client_side_exception**
> str logger_logged_in_client_side_exception(model)

Log Client Side Exceptions

User must be logged in to use this endpoint              <br /> Used to log exceptions that occur in clientside code. You can pass in only fields that have a value.

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
    api_instance = openapi_client.LoggerApi(api_client)
    model = openapi_client.ClientSideExceptionBindingModel() # ClientSideExceptionBindingModel | 

    try:
        # Log Client Side Exceptions
        api_response = api_instance.logger_logged_in_client_side_exception(model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling LoggerApi->logger_logged_in_client_side_exception: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**ClientSideExceptionBindingModel**](ClientSideExceptionBindingModel.md)|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logger_logged_out_client_side_exception**
> str logger_logged_out_client_side_exception(model)

Log Client Side Exceptions

Used when user is not logged in              <br /> Used to log exceptions that occur in clientside code. You can pass in only fields that have a value.

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
    api_instance = openapi_client.LoggerApi(api_client)
    model = openapi_client.ClientSideExceptionBindingModel() # ClientSideExceptionBindingModel | 

    try:
        # Log Client Side Exceptions
        api_response = api_instance.logger_logged_out_client_side_exception(model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling LoggerApi->logger_logged_out_client_side_exception: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**ClientSideExceptionBindingModel**](ClientSideExceptionBindingModel.md)|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

