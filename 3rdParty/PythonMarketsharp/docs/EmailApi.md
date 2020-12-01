# openapi_client.EmailApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**email_get_all_active_email_templates**](EmailApi.md#email_get_all_active_email_templates) | **GET** /companies/{companyid}/email/templates | Get active email templates
[**email_get_email_template_linked_events**](EmailApi.md#email_get_email_template_linked_events) | **GET** /companies/{companyid}/email/template/{templateId}/linkedevents | Get Email Template Dependencies


# **email_get_all_active_email_templates**
> list[KeyValueResourceModel] email_get_all_active_email_templates(companyid)

Get active email templates

Return a list of valid email templates the User can select

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
    api_instance = openapi_client.EmailApi(api_client)
    companyid = 'companyid_example' # str | 

    try:
        # Get active email templates
        api_response = api_instance.email_get_all_active_email_templates(companyid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EmailApi->email_get_all_active_email_templates: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyid** | **str**|  | 

### Return type

[**list[KeyValueResourceModel]**](KeyValueResourceModel.md)

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

# **email_get_email_template_linked_events**
> EmailLinkedEventsResourceModel email_get_email_template_linked_events(template_id, companyid)

Get Email Template Dependencies

This returns true or false for a given template whether it needs detals about a service orders, lead/inquiry and so on

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
    api_instance = openapi_client.EmailApi(api_client)
    template_id = 'template_id_example' # str | 
companyid = 'companyid_example' # str | 

    try:
        # Get Email Template Dependencies
        api_response = api_instance.email_get_email_template_linked_events(template_id, companyid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EmailApi->email_get_email_template_linked_events: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**|  | 
 **companyid** | **str**|  | 

### Return type

[**EmailLinkedEventsResourceModel**](EmailLinkedEventsResourceModel.md)

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

