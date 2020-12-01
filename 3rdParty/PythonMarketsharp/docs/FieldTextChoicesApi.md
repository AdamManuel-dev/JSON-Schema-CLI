# openapi_client.FieldTextChoicesApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**field_text_choices_get_field_text_choices**](FieldTextChoicesApi.md#field_text_choices_get_field_text_choices) | **GET** /companies/{companyId}/fieldtextchoices/{fieldName}/{activeOnly} | List Field Text Choices.


# **field_text_choices_get_field_text_choices**
> list[KeyValueResourceModel] field_text_choices_get_field_text_choices(field_name, active_only, company_id)

List Field Text Choices.

Returns a list of field text choices based on the field name that is passed.  For example, to return payment types pass in the string \"PaymentType\".

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
    api_instance = openapi_client.FieldTextChoicesApi(api_client)
    field_name = 'field_name_example' # str | This field is not case sensitive.  Name of the field to display text choices for. ie) paymenttype or paymentmethod.
active_only = True # bool | Optional parameter.  Defaults to true if the parameter is omitted from the request.  Set to false to return all active and inactive records.  True will return active records only.
company_id = 'company_id_example' # str | 

    try:
        # List Field Text Choices.
        api_response = api_instance.field_text_choices_get_field_text_choices(field_name, active_only, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling FieldTextChoicesApi->field_text_choices_get_field_text_choices: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_name** | **str**| This field is not case sensitive.  Name of the field to display text choices for. ie) paymenttype or paymentmethod. | 
 **active_only** | **bool**| Optional parameter.  Defaults to true if the parameter is omitted from the request.  Set to false to return all active and inactive records.  True will return active records only. | 
 **company_id** | **str**|  | 

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

