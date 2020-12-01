# openapi_client.CalendarApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calendar_create_category**](CalendarApi.md#calendar_create_category) | **POST** /companies/{companyId}/calendar/categories | Create a calendar category.
[**calendar_create_event**](CalendarApi.md#calendar_create_event) | **POST** /companies/{companyId}/calendar/events | Create a calendar event and send an email to all resources listed if sendEmail is set to true.
[**calendar_create_event_exception**](CalendarApi.md#calendar_create_event_exception) | **POST** /companies/{companyId}/calendar/events/exception | Creates an Exception to a Recurring CalendarEvent
[**calendar_delete_category**](CalendarApi.md#calendar_delete_category) | **DELETE** /companies/{companyId}/calendar/categories | Delete a calendar category.
[**calendar_delete_event**](CalendarApi.md#calendar_delete_event) | **DELETE** /companies/{companyId}/calendar/events | Delete a calendar event.
[**calendar_get_call_center_filtered_events**](CalendarApi.md#calendar_get_call_center_filtered_events) | **POST** /companies/{companyId}/calendar/callcenter/events/filter | Get calendar events in a specified date range
[**calendar_get_categories**](CalendarApi.md#calendar_get_categories) | **GET** /companies/{companyId}/calendar/categories | Get all calendar categories for a company
[**calendar_get_event_contact**](CalendarApi.md#calendar_get_event_contact) | **GET** /companies/{companyid}/calendar/eventContact | 
[**calendar_get_events**](CalendarApi.md#calendar_get_events) | **GET** /companies/{companyId}/calendar/events | Get all calendar events for a company
[**calendar_get_filtered_events**](CalendarApi.md#calendar_get_filtered_events) | **POST** /companies/{companyId}/calendar/events/filter | Get calendar events in a specified date range
[**calendar_get_permissions**](CalendarApi.md#calendar_get_permissions) | **GET** /companies/{companyId}/calendar/permissions | 
[**calendar_get_resources**](CalendarApi.md#calendar_get_resources) | **GET** /companies/{companyId}/calendar/resources | Get all calendar resources for a company
[**calendar_get_user_prefs**](CalendarApi.md#calendar_get_user_prefs) | **GET** /companies/{companyId}/calendar/userPrefs | Get all calendar user preferences for an employee
[**calendar_move_event**](CalendarApi.md#calendar_move_event) | **POST** /companies/{companyId}/calendar/events/move | Moves a Calendar Event to a new datetime
[**calendar_reschedule_event**](CalendarApi.md#calendar_reschedule_event) | **POST** /companies/{companyId}/calendar/events/reschedule | Reschedule a Calendar Event to a new datetime and/or resource
[**calendar_update_category**](CalendarApi.md#calendar_update_category) | **PUT** /companies/{companyId}/calendar/categories | Update a calendar category.
[**calendar_update_event**](CalendarApi.md#calendar_update_event) | **PUT** /companies/{companyId}/calendar/events | Update a calendar event and send an email to all resources listed if sendEmail is set to true.
[**calendar_update_event_0**](CalendarApi.md#calendar_update_event_0) | **PUT** /companies/{companyId}/calendar/events/exception | Updates an exception (only) to a CalendarEvent
[**calendar_update_mapped_sales_appointment_event**](CalendarApi.md#calendar_update_mapped_sales_appointment_event) | **POST** /companies/{companyId}/calendar/events/sales/mapped | Updates Salespeople for a Sales Appointment
[**calendar_update_resource_color**](CalendarApi.md#calendar_update_resource_color) | **PUT** /companies/{companyId}/calendar/resources/color | Inserts or Updates a Resource Color
[**calendar_update_user_pref**](CalendarApi.md#calendar_update_user_pref) | **PUT** /companies/{companyId}/calendar/userPrefs | Update a calendar user preference for an employee.


# **calendar_create_category**
> CategoryResourceModel calendar_create_category(company_id, model)

Create a calendar category.

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.CategoryBindingModel() # CategoryBindingModel | 

    try:
        # Create a calendar category.
        api_response = api_instance.calendar_create_category(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_create_category: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**CategoryBindingModel**](CategoryBindingModel.md)|  | 

### Return type

[**CategoryResourceModel**](CategoryResourceModel.md)

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

# **calendar_create_event**
> EventViewModel calendar_create_event(company_id, model)

Create a calendar event and send an email to all resources listed if sendEmail is set to true.

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.EventBindingModel() # EventBindingModel | 

    try:
        # Create a calendar event and send an email to all resources listed if sendEmail is set to true.
        api_response = api_instance.calendar_create_event(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_create_event: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**EventBindingModel**](EventBindingModel.md)|  | 

### Return type

[**EventViewModel**](EventViewModel.md)

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

# **calendar_create_event_exception**
> EventViewModel calendar_create_event_exception(company_id, model)

Creates an Exception to a Recurring CalendarEvent

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.GeneralEventExceptionBindingModel() # GeneralEventExceptionBindingModel | 

    try:
        # Creates an Exception to a Recurring CalendarEvent
        api_response = api_instance.calendar_create_event_exception(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_create_event_exception: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**GeneralEventExceptionBindingModel**](GeneralEventExceptionBindingModel.md)|  | 

### Return type

[**EventViewModel**](EventViewModel.md)

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

# **calendar_delete_category**
> CategoryResourceModel calendar_delete_category(id, company_id)

Delete a calendar category.

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
    api_instance = openapi_client.CalendarApi(api_client)
    id = 56 # int | 
company_id = 'company_id_example' # str | 

    try:
        # Delete a calendar category.
        api_response = api_instance.calendar_delete_category(id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_delete_category: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **company_id** | **str**|  | 

### Return type

[**CategoryResourceModel**](CategoryResourceModel.md)

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

# **calendar_delete_event**
> EventViewModel calendar_delete_event(id, company_id)

Delete a calendar event.

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
    api_instance = openapi_client.CalendarApi(api_client)
    id = 56 # int | 
company_id = 'company_id_example' # str | 

    try:
        # Delete a calendar event.
        api_response = api_instance.calendar_delete_event(id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_delete_event: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **company_id** | **str**|  | 

### Return type

[**EventViewModel**](EventViewModel.md)

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

# **calendar_get_call_center_filtered_events**
> list[EventResourceModel] calendar_get_call_center_filtered_events(company_id, model)

Get calendar events in a specified date range

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.EventDatesBindingModel() # EventDatesBindingModel | 

    try:
        # Get calendar events in a specified date range
        api_response = api_instance.calendar_get_call_center_filtered_events(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_get_call_center_filtered_events: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**EventDatesBindingModel**](EventDatesBindingModel.md)|  | 

### Return type

[**list[EventResourceModel]**](EventResourceModel.md)

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

# **calendar_get_categories**
> list[CategoryResourceModel] calendar_get_categories(company_id)

Get all calendar categories for a company

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # Get all calendar categories for a company
        api_response = api_instance.calendar_get_categories(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_get_categories: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

### Return type

[**list[CategoryResourceModel]**](CategoryResourceModel.md)

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

# **calendar_get_event_contact**
> str calendar_get_event_contact(id, companyid)



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
    api_instance = openapi_client.CalendarApi(api_client)
    id = 56 # int | 
companyid = 'companyid_example' # str | 

    try:
        api_response = api_instance.calendar_get_event_contact(id, companyid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_get_event_contact: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
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

# **calendar_get_events**
> list[EventResourceModel] calendar_get_events(company_id)

Get all calendar events for a company

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # Get all calendar events for a company
        api_response = api_instance.calendar_get_events(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_get_events: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

### Return type

[**list[EventResourceModel]**](EventResourceModel.md)

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

# **calendar_get_filtered_events**
> list[EventResourceModel] calendar_get_filtered_events(company_id, model)

Get calendar events in a specified date range

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.EventDatesBindingModel() # EventDatesBindingModel | 

    try:
        # Get calendar events in a specified date range
        api_response = api_instance.calendar_get_filtered_events(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_get_filtered_events: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**EventDatesBindingModel**](EventDatesBindingModel.md)|  | 

### Return type

[**list[EventResourceModel]**](EventResourceModel.md)

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

# **calendar_get_permissions**
> str calendar_get_permissions(company_id)



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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        api_response = api_instance.calendar_get_permissions(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_get_permissions: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

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

# **calendar_get_resources**
> list[ResourcesResourceModel] calendar_get_resources(company_id)

Get all calendar resources for a company

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # Get all calendar resources for a company
        api_response = api_instance.calendar_get_resources(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_get_resources: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

### Return type

[**list[ResourcesResourceModel]**](ResourcesResourceModel.md)

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

# **calendar_get_user_prefs**
> list[UserPrefResourceModel] calendar_get_user_prefs(company_id)

Get all calendar user preferences for an employee

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # Get all calendar user preferences for an employee
        api_response = api_instance.calendar_get_user_prefs(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_get_user_prefs: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

### Return type

[**list[UserPrefResourceModel]**](UserPrefResourceModel.md)

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

# **calendar_move_event**
> object calendar_move_event(company_id, model)

Moves a Calendar Event to a new datetime

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.EventBindingModel() # EventBindingModel | 

    try:
        # Moves a Calendar Event to a new datetime
        api_response = api_instance.calendar_move_event(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_move_event: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**EventBindingModel**](EventBindingModel.md)|  | 

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

# **calendar_reschedule_event**
> object calendar_reschedule_event(company_id, model)

Reschedule a Calendar Event to a new datetime and/or resource

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.RescheduleEventBindingModel() # RescheduleEventBindingModel | 

    try:
        # Reschedule a Calendar Event to a new datetime and/or resource
        api_response = api_instance.calendar_reschedule_event(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_reschedule_event: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**RescheduleEventBindingModel**](RescheduleEventBindingModel.md)|  | 

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

# **calendar_update_category**
> CategoryResourceModel calendar_update_category(company_id, model)

Update a calendar category.

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.CategoryBindingModel() # CategoryBindingModel | 

    try:
        # Update a calendar category.
        api_response = api_instance.calendar_update_category(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_update_category: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**CategoryBindingModel**](CategoryBindingModel.md)|  | 

### Return type

[**CategoryResourceModel**](CategoryResourceModel.md)

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

# **calendar_update_event**
> EventViewModel calendar_update_event(company_id, model)

Update a calendar event and send an email to all resources listed if sendEmail is set to true.

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.EventBindingModel() # EventBindingModel | 

    try:
        # Update a calendar event and send an email to all resources listed if sendEmail is set to true.
        api_response = api_instance.calendar_update_event(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_update_event: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**EventBindingModel**](EventBindingModel.md)|  | 

### Return type

[**EventViewModel**](EventViewModel.md)

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

# **calendar_update_event_0**
> EventViewModel calendar_update_event_0(company_id, model)

Updates an exception (only) to a CalendarEvent

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.GeneralEventExceptionBindingModel() # GeneralEventExceptionBindingModel | 

    try:
        # Updates an exception (only) to a CalendarEvent
        api_response = api_instance.calendar_update_event_0(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_update_event_0: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**GeneralEventExceptionBindingModel**](GeneralEventExceptionBindingModel.md)|  | 

### Return type

[**EventViewModel**](EventViewModel.md)

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

# **calendar_update_mapped_sales_appointment_event**
> object calendar_update_mapped_sales_appointment_event(company_id, model)

Updates Salespeople for a Sales Appointment

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.AppointmentBindingModel() # AppointmentBindingModel | 

    try:
        # Updates Salespeople for a Sales Appointment
        api_response = api_instance.calendar_update_mapped_sales_appointment_event(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_update_mapped_sales_appointment_event: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**AppointmentBindingModel**](AppointmentBindingModel.md)|  | 

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

# **calendar_update_resource_color**
> ResourcesResourceModel calendar_update_resource_color(company_id, model)

Inserts or Updates a Resource Color

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.ResourceBindingModel() # ResourceBindingModel | 

    try:
        # Inserts or Updates a Resource Color
        api_response = api_instance.calendar_update_resource_color(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_update_resource_color: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**ResourceBindingModel**](ResourceBindingModel.md)|  | 

### Return type

[**ResourcesResourceModel**](ResourcesResourceModel.md)

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

# **calendar_update_user_pref**
> UserPrefResourceModel calendar_update_user_pref(company_id, model)

Update a calendar user preference for an employee.

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
    api_instance = openapi_client.CalendarApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.UserPrefBindingModel() # UserPrefBindingModel | 

    try:
        # Update a calendar user preference for an employee.
        api_response = api_instance.calendar_update_user_pref(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CalendarApi->calendar_update_user_pref: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**UserPrefBindingModel**](UserPrefBindingModel.md)|  | 

### Return type

[**UserPrefResourceModel**](UserPrefResourceModel.md)

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

