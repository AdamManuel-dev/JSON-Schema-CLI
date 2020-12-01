# openapi_client.PrintFileApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**print_file_create_get_work_orders**](PrintFileApi.md#print_file_create_get_work_orders) | **POST** /companies/{companyid}/printfile/workorder | Creates a string url to open the print file shim to create a work order
[**print_file_delete_work_orders**](PrintFileApi.md#print_file_delete_work_orders) | **DELETE** /companies/{companyid}/printfile/workorder/{processTypeStepOid}/delete | This will delete the work order by the processTypeStepOid
[**print_file_get_work_order_by_id**](PrintFileApi.md#print_file_get_work_order_by_id) | **GET** /companies/{companyid}/printfile/workorder/{processTypeStepOid}/exists | Checks if a work order exists
[**print_file_get_work_order_templates**](PrintFileApi.md#print_file_get_work_order_templates) | **GET** /companies/{companyid}/printfile/workorder/templates | Gets the available work order templates
[**print_file_get_work_orders**](PrintFileApi.md#print_file_get_work_orders) | **GET** /companies/{companyid}/printfile/workorder/{processTypeStepOid} | Opens the existing work order for editing


# **print_file_create_get_work_orders**
> str print_file_create_get_work_orders(companyid, work_order_binding)

Creates a string url to open the print file shim to create a work order

This creates a string that is used as a url to create a new work order through the print file shim

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
    api_instance = openapi_client.PrintFileApi(api_client)
    companyid = 'companyid_example' # str | 
work_order_binding = openapi_client.PrintFileBindingModel() # PrintFileBindingModel | 

    try:
        # Creates a string url to open the print file shim to create a work order
        api_response = api_instance.print_file_create_get_work_orders(companyid, work_order_binding)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PrintFileApi->print_file_create_get_work_orders: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyid** | **str**|  | 
 **work_order_binding** | [**PrintFileBindingModel**](PrintFileBindingModel.md)|  | 

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

# **print_file_delete_work_orders**
> bool print_file_delete_work_orders(process_type_step_oid, companyid)

This will delete the work order by the processTypeStepOid

This will return a boolean whether the print file as been deleted

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
    api_instance = openapi_client.PrintFileApi(api_client)
    process_type_step_oid = 'process_type_step_oid_example' # str | 
companyid = 'companyid_example' # str | 

    try:
        # This will delete the work order by the processTypeStepOid
        api_response = api_instance.print_file_delete_work_orders(process_type_step_oid, companyid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PrintFileApi->print_file_delete_work_orders: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_type_step_oid** | **str**|  | 
 **companyid** | **str**|  | 

### Return type

**bool**

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

# **print_file_get_work_order_by_id**
> PrintFileExistsBindingModel print_file_get_work_order_by_id(process_type_step_oid, companyid)

Checks if a work order exists

Returns a boolean whether the work order exists

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
    api_instance = openapi_client.PrintFileApi(api_client)
    process_type_step_oid = 'process_type_step_oid_example' # str | 
companyid = 'companyid_example' # str | 

    try:
        # Checks if a work order exists
        api_response = api_instance.print_file_get_work_order_by_id(process_type_step_oid, companyid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PrintFileApi->print_file_get_work_order_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_type_step_oid** | **str**|  | 
 **companyid** | **str**|  | 

### Return type

[**PrintFileExistsBindingModel**](PrintFileExistsBindingModel.md)

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

# **print_file_get_work_order_templates**
> KeyValueResourceModel print_file_get_work_order_templates(companyid)

Gets the available work order templates

Returns a key value pair of work order templates

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
    api_instance = openapi_client.PrintFileApi(api_client)
    companyid = 'companyid_example' # str | 

    try:
        # Gets the available work order templates
        api_response = api_instance.print_file_get_work_order_templates(companyid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PrintFileApi->print_file_get_work_order_templates: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyid** | **str**|  | 

### Return type

[**KeyValueResourceModel**](KeyValueResourceModel.md)

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

# **print_file_get_work_orders**
> str print_file_get_work_orders(process_type_step_oid, companyid)

Opens the existing work order for editing

This creates a string that is used as a url to edit a new work order through the print file shim

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
    api_instance = openapi_client.PrintFileApi(api_client)
    process_type_step_oid = 'process_type_step_oid_example' # str | 
companyid = 'companyid_example' # str | 

    try:
        # Opens the existing work order for editing
        api_response = api_instance.print_file_get_work_orders(process_type_step_oid, companyid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PrintFileApi->print_file_get_work_orders: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_type_step_oid** | **str**|  | 
 **companyid** | **str**|  | 

### Return type

**str**

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

