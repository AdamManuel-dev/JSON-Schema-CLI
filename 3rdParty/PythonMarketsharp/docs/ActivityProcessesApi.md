# openapi_client.ActivityProcessesApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activity_processes_get_activity_process_id_from_ref_and_res**](ActivityProcessesApi.md#activity_processes_get_activity_process_id_from_ref_and_res) | **POST** /companies/{companyid}/activitityprocessid | Get activity process id.
[**activity_processes_get_activity_processes**](ActivityProcessesApi.md#activity_processes_get_activity_processes) | **GET** /companies/{companyId}/activityprocesses | List all activity processes
[**activity_processes_get_proposed_activities**](ActivityProcessesApi.md#activity_processes_get_proposed_activities) | **POST** /companies/{companyId}/activities/process/{activityProcessId}/proposedActivities | Returns pending activities auto-generated from activity process configuration.


# **activity_processes_get_activity_process_id_from_ref_and_res**
> object activity_processes_get_activity_process_id_from_ref_and_res(companyid, model)

Get activity process id.

This endpoint returns and activity process id for a given               reference id and result id. The reference id can be null if one doesn't              exist. Result id is required.

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
    api_instance = openapi_client.ActivityProcessesApi(api_client)
    companyid = 'companyid_example' # str | 
model = openapi_client.ReferenceAndResultBindingModel() # ReferenceAndResultBindingModel | 

    try:
        # Get activity process id.
        api_response = api_instance.activity_processes_get_activity_process_id_from_ref_and_res(companyid, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ActivityProcessesApi->activity_processes_get_activity_process_id_from_ref_and_res: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyid** | **str**|  | 
 **model** | [**ReferenceAndResultBindingModel**](ReferenceAndResultBindingModel.md)|  | 

### Return type

**object**

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

# **activity_processes_get_activity_processes**
> list[LeadCaptureResourceModel] activity_processes_get_activity_processes(company_id)

List all activity processes

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
    api_instance = openapi_client.ActivityProcessesApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # List all activity processes
        api_response = api_instance.activity_processes_get_activity_processes(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ActivityProcessesApi->activity_processes_get_activity_processes: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

### Return type

[**list[LeadCaptureResourceModel]**](LeadCaptureResourceModel.md)

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

# **activity_processes_get_proposed_activities**
> list[ProposedActivityResourceModel] activity_processes_get_proposed_activities(company_id, activity_process_id, model)

Returns pending activities auto-generated from activity process configuration.

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
    api_instance = openapi_client.ActivityProcessesApi(api_client)
    company_id = 'company_id_example' # str | 
activity_process_id = 'activity_process_id_example' # str | 
model = openapi_client.ProposedActivitiesRequestBindingModel() # ProposedActivitiesRequestBindingModel | RequestType for now is ProductionStep. More to come later, such as ServiceOrder.

    try:
        # Returns pending activities auto-generated from activity process configuration.
        api_response = api_instance.activity_processes_get_proposed_activities(company_id, activity_process_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ActivityProcessesApi->activity_processes_get_proposed_activities: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **activity_process_id** | **str**|  | 
 **model** | [**ProposedActivitiesRequestBindingModel**](ProposedActivitiesRequestBindingModel.md)| RequestType for now is ProductionStep. More to come later, such as ServiceOrder. | 

### Return type

[**list[ProposedActivityResourceModel]**](ProposedActivityResourceModel.md)

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

