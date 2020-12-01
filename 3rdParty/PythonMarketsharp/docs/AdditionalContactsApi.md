# openapi_client.AdditionalContactsApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**additional_contacts_search_additional_contacts**](AdditionalContactsApi.md#additional_contacts_search_additional_contacts) | **POST** /companies/{companyId}/additionalcontacts/search | Search for additional contacts
[**additional_contacts_search_additional_contacts_0**](AdditionalContactsApi.md#additional_contacts_search_additional_contacts_0) | **POST** /additionalcontacts/search | Search for additional contacts


# **additional_contacts_search_additional_contacts**
> object additional_contacts_search_additional_contacts(company_id, additional_contact)

Search for additional contacts

QuickFind - Additional Contact Search. Employee id required in bearer token.

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
    api_instance = openapi_client.AdditionalContactsApi(api_client)
    company_id = 'company_id_example' # str | 
additional_contact = openapi_client.AdditionalContactSearchBindingModel() # AdditionalContactSearchBindingModel | 

    try:
        # Search for additional contacts
        api_response = api_instance.additional_contacts_search_additional_contacts(company_id, additional_contact)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AdditionalContactsApi->additional_contacts_search_additional_contacts: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **additional_contact** | [**AdditionalContactSearchBindingModel**](AdditionalContactSearchBindingModel.md)|  | 

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

# **additional_contacts_search_additional_contacts_0**
> object additional_contacts_search_additional_contacts_0(additional_contact)

Search for additional contacts

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
    api_instance = openapi_client.AdditionalContactsApi(api_client)
    additional_contact = openapi_client.AdditionalContactSearchBindingModel() # AdditionalContactSearchBindingModel | 

    try:
        # Search for additional contacts
        api_response = api_instance.additional_contacts_search_additional_contacts_0(additional_contact)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AdditionalContactsApi->additional_contacts_search_additional_contacts_0: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **additional_contact** | [**AdditionalContactSearchBindingModel**](AdditionalContactSearchBindingModel.md)|  | 

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

