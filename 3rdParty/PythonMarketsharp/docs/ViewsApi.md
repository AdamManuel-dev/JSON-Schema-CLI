# openapi_client.ViewsApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**views_field_list_available_by_view_type**](ViewsApi.md#views_field_list_available_by_view_type) | **GET** /companies/{companyId}/views/type/{listViewType}/fields | Get available fields to select by list view type
[**views_field_list_by_view_id**](ViewsApi.md#views_field_list_by_view_id) | **GET** /companies/{companyId}/views/{viewId} | Get a View By ID
[**views_view_create**](ViewsApi.md#views_view_create) | **POST** /companies/{companyid}/views | Create a new view
[**views_view_delete**](ViewsApi.md#views_view_delete) | **DELETE** /companies/{companyid}/views/{viewId} | Delete a view entirely
[**views_view_update**](ViewsApi.md#views_view_update) | **PUT** /companies/{companyid}/views | Update an existing view
[**views_views_by_type**](ViewsApi.md#views_views_by_type) | **GET** /companies/{companyId}/views/type/{listViewType} | Get available Views


# **views_field_list_available_by_view_type**
> ViewResourceModel views_field_list_available_by_view_type(company_id, list_view_type)

Get available fields to select by list view type

Returns a list of all available fields available to select from. For example, can be used to get a list of all fields available to be added to the Production View.

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
    api_instance = openapi_client.ViewsApi(api_client)
    company_id = 'company_id_example' # str | 
list_view_type = 56 # int | 

    try:
        # Get available fields to select by list view type
        api_response = api_instance.views_field_list_available_by_view_type(company_id, list_view_type)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ViewsApi->views_field_list_available_by_view_type: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **list_view_type** | **int**|  | 

### Return type

[**ViewResourceModel**](ViewResourceModel.md)

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

# **views_field_list_by_view_id**
> ViewResourceModel views_field_list_by_view_id(company_id, view_id)

Get a View By ID

Get a view with the ordered selected field list, The selected field order is zero based and sorted by the field order. <br />  Includes all available fields to select sorted by table name.

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
    api_instance = openapi_client.ViewsApi(api_client)
    company_id = 'company_id_example' # str | 
view_id = 'view_id_example' # str | 

    try:
        # Get a View By ID
        api_response = api_instance.views_field_list_by_view_id(company_id, view_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ViewsApi->views_field_list_by_view_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **view_id** | **str**|  | 

### Return type

[**ViewResourceModel**](ViewResourceModel.md)

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

# **views_view_create**
> ViewResourceModel views_view_create(companyid, model)

Create a new view

Create a new view along with the selected fields. <br /><br />    Required Fields: <br />   ViewId, ViewName, listviewType, at least one field must be included in the request.   <br />   No fields are allowed to have the duplicate order numbers. <br />   Order number is expected to start at zero <br />   A field must have a FieldId or a FieldDefId (custom field), but not both.

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
    api_instance = openapi_client.ViewsApi(api_client)
    companyid = 'companyid_example' # str | 
model = openapi_client.ViewBindingModel() # ViewBindingModel | 

    try:
        # Create a new view
        api_response = api_instance.views_view_create(companyid, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ViewsApi->views_view_create: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyid** | **str**|  | 
 **model** | [**ViewBindingModel**](ViewBindingModel.md)|  | 

### Return type

[**ViewResourceModel**](ViewResourceModel.md)

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

# **views_view_delete**
> object views_view_delete(view_id, companyid)

Delete a view entirely

Delete a view and associated field list

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
    api_instance = openapi_client.ViewsApi(api_client)
    view_id = 'view_id_example' # str | 
companyid = 'companyid_example' # str | 

    try:
        # Delete a view entirely
        api_response = api_instance.views_view_delete(view_id, companyid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ViewsApi->views_view_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **view_id** | **str**|  | 
 **companyid** | **str**|  | 

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

# **views_view_update**
> ViewResourceModel views_view_update(companyid, model)

Update an existing view

Update an existing view with the name and the new field list. <br /><br />  Note: the existing field list will be replaced with the passed in field list. <br /><br />    Required Fields: <br />   ViewName, listviewType, at least one field must be included in the request.   <br />   No fields are allowed to have the duplicate order numbers. <br />   Order number is expected to start at zero <br />   A field must have a FieldId or a FieldDefId (custom field), but not both.

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
    api_instance = openapi_client.ViewsApi(api_client)
    companyid = 'companyid_example' # str | 
model = openapi_client.ViewBindingModel() # ViewBindingModel | 

    try:
        # Update an existing view
        api_response = api_instance.views_view_update(companyid, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ViewsApi->views_view_update: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyid** | **str**|  | 
 **model** | [**ViewBindingModel**](ViewBindingModel.md)|  | 

### Return type

[**ViewResourceModel**](ViewResourceModel.md)

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

# **views_views_by_type**
> ViewResourceModel views_views_by_type(company_id, list_view_type)

Get available Views

Get a list of views available to select from. No fields are returned. The list of views returned is only the list of views the employee has permission to see. <br />  The list is returned in alphabetical order (with the default view being first)

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
    api_instance = openapi_client.ViewsApi(api_client)
    company_id = 'company_id_example' # str | 
list_view_type = 56 # int | 

    try:
        # Get available Views
        api_response = api_instance.views_views_by_type(company_id, list_view_type)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ViewsApi->views_views_by_type: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **list_view_type** | **int**|  | 

### Return type

[**ViewResourceModel**](ViewResourceModel.md)

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

