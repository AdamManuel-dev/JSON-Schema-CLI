# openapi_client.ContactApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contact_call_center_search_contacts**](ContactApi.md#contact_call_center_search_contacts) | **POST** /contacts/search2 | Search for contacts.
[**contact_filter_contacts**](ContactApi.md#contact_filter_contacts) | **POST** /companies/{companyId}/contacts/filter | Filter for contacts
[**contact_get**](ContactApi.md#contact_get) | **GET** /contacts/{contactId} | Retrieve a contact - Deprecated
[**contact_get_contact_by_id**](ContactApi.md#contact_get_contact_by_id) | **GET** /companies/{companyId}/contacts/{contactId} | Retrieve a contact
[**contact_replace_attachment**](ContactApi.md#contact_replace_attachment) | **PUT** /companies/{companyId}/contacts/{contactId}/attachments | Replace an attachment - Deprecated
[**contact_search_contact**](ContactApi.md#contact_search_contact) | **POST** /contacts/search | Filter for contacts - Deprecated
[**contact_search_contacts**](ContactApi.md#contact_search_contacts) | **POST** /companies/{companyId}/contacts/search | Search for contacts
[**contact_upload_attachment**](ContactApi.md#contact_upload_attachment) | **POST** /companies/{companyId}/contacts/{contactId}/attachments | Upload an attachment


# **contact_call_center_search_contacts**
> list[MultiCompanyContactSearchResult] contact_call_center_search_contacts(contact)

Search for contacts.

If \"numberOfRecords\" is not specified when making a request a default of up to 100 records will be returned.

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
    api_instance = openapi_client.ContactApi(api_client)
    contact = openapi_client.ContactSearchBindingModel() # ContactSearchBindingModel | 

    try:
        # Search for contacts.
        api_response = api_instance.contact_call_center_search_contacts(contact)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ContactApi->contact_call_center_search_contacts: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact** | [**ContactSearchBindingModel**](ContactSearchBindingModel.md)|  | 

### Return type

[**list[MultiCompanyContactSearchResult]**](MultiCompanyContactSearchResult.md)

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

# **contact_filter_contacts**
> list[ContactResourceModel] contact_filter_contacts(company_id, query)

Filter for contacts

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
    api_instance = openapi_client.ContactApi(api_client)
    company_id = 'company_id_example' # str | 
query = openapi_client.ContactBindingModel() # ContactBindingModel | 

    try:
        # Filter for contacts
        api_response = api_instance.contact_filter_contacts(company_id, query)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ContactApi->contact_filter_contacts: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **query** | [**ContactBindingModel**](ContactBindingModel.md)|  | 

### Return type

[**list[ContactResourceModel]**](ContactResourceModel.md)

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

# **contact_get**
> object contact_get(contact_id)

Retrieve a contact - Deprecated

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
    api_instance = openapi_client.ContactApi(api_client)
    contact_id = 'contact_id_example' # str | 

    try:
        # Retrieve a contact - Deprecated
        api_response = api_instance.contact_get(contact_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ContactApi->contact_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**|  | 

### Return type

**object**

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

# **contact_get_contact_by_id**
> list[ContactResourceModel] contact_get_contact_by_id(contact_id, company_id)

Retrieve a contact

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
    api_instance = openapi_client.ContactApi(api_client)
    contact_id = 'contact_id_example' # str | 
company_id = 'company_id_example' # str | 

    try:
        # Retrieve a contact
        api_response = api_instance.contact_get_contact_by_id(contact_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ContactApi->contact_get_contact_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**|  | 
 **company_id** | **str**|  | 

### Return type

[**list[ContactResourceModel]**](ContactResourceModel.md)

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

# **contact_replace_attachment**
> list[str] contact_replace_attachment(contact_id, company_id)

Replace an attachment - Deprecated

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
    api_instance = openapi_client.ContactApi(api_client)
    contact_id = 'contact_id_example' # str | 
company_id = 'company_id_example' # str | 

    try:
        # Replace an attachment - Deprecated
        api_response = api_instance.contact_replace_attachment(contact_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ContactApi->contact_replace_attachment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**|  | 
 **company_id** | **str**|  | 

### Return type

**list[str]**

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

# **contact_search_contact**
> object contact_search_contact(query)

Filter for contacts - Deprecated

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
    api_instance = openapi_client.ContactApi(api_client)
    query = openapi_client.ContactBindingModel() # ContactBindingModel | 

    try:
        # Filter for contacts - Deprecated
        api_response = api_instance.contact_search_contact(query)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ContactApi->contact_search_contact: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**ContactBindingModel**](ContactBindingModel.md)|  | 

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

# **contact_search_contacts**
> list[ContactSearchResult] contact_search_contacts(company_id, contact)

Search for contacts

QuickFind Contact Search. Employee id required in bearer token

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
    api_instance = openapi_client.ContactApi(api_client)
    company_id = 'company_id_example' # str | 
contact = openapi_client.ContactSearchBindingModel() # ContactSearchBindingModel | 

    try:
        # Search for contacts
        api_response = api_instance.contact_search_contacts(company_id, contact)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ContactApi->contact_search_contacts: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **contact** | [**ContactSearchBindingModel**](ContactSearchBindingModel.md)|  | 

### Return type

[**list[ContactSearchResult]**](ContactSearchResult.md)

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

# **contact_upload_attachment**
> list[str] contact_upload_attachment(contact_id, company_id, unknown_base_type)

Upload an attachment

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
    api_instance = openapi_client.ContactApi(api_client)
    contact_id = 'contact_id_example' # str | 
company_id = 'company_id_example' # str | 
unknown_base_type = openapi_client.UNKNOWN_BASE_TYPE() # UNKNOWN_BASE_TYPE | 

    try:
        # Upload an attachment
        api_response = api_instance.contact_upload_attachment(contact_id, company_id, unknown_base_type)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ContactApi->contact_upload_attachment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**|  | 
 **company_id** | **str**|  | 
 **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

**list[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

