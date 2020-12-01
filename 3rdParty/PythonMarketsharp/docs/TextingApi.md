# openapi_client.TextingApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**texting_get_all_text_templates**](TextingApi.md#texting_get_all_text_templates) | **GET** /companies/{companyid}/texting/templates/{contactId} | Get active texting templates
[**texting_get_text_template_linked_events**](TextingApi.md#texting_get_text_template_linked_events) | **GET** /companies/{companyid}/texting/template/{templateId}/linkedEvents | Get Texting Template Dependencies


# **texting_get_all_text_templates**
> list[KeyValueResourceModel] texting_get_all_text_templates(contact_id, companyid)

Get active texting templates

Return a list of valid texting templates the User can select

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
    api_instance = openapi_client.TextingApi(api_client)
    contact_id = 'contact_id_example' # str | 
companyid = 'companyid_example' # str | 

    try:
        # Get active texting templates
        api_response = api_instance.texting_get_all_text_templates(contact_id, companyid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TextingApi->texting_get_all_text_templates: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**|  | 
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

# **texting_get_text_template_linked_events**
> TextingLinkedEventsResourceModel texting_get_text_template_linked_events(template_id, companyid)

Get Texting Template Dependencies

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
    api_instance = openapi_client.TextingApi(api_client)
    template_id = 'template_id_example' # str | 
companyid = 'companyid_example' # str | 

    try:
        # Get Texting Template Dependencies
        api_response = api_instance.texting_get_text_template_linked_events(template_id, companyid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TextingApi->texting_get_text_template_linked_events: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**|  | 
 **companyid** | **str**|  | 

### Return type

[**TextingLinkedEventsResourceModel**](TextingLinkedEventsResourceModel.md)

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

