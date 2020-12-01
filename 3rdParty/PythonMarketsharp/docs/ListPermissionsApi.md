# openapi_client.ListPermissionsApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_permissions_get_active_simple_employees_with_specificed_list_permission**](ListPermissionsApi.md#list_permissions_get_active_simple_employees_with_specificed_list_permission) | **GET** /companies/{companyId}/listpermissions/{permissionName}/employees/active | List active employees that have the specified permission
[**list_permissions_get_simple_employees_with_specificed_list_permission**](ListPermissionsApi.md#list_permissions_get_simple_employees_with_specificed_list_permission) | **GET** /companies/{companyId}/listpermissions/{permissionName}/employees | List all employees that have a specified list permission


# **list_permissions_get_active_simple_employees_with_specificed_list_permission**
> list[SimpleEmployeeResourceModel] list_permissions_get_active_simple_employees_with_specificed_list_permission(company_id, permission_name)

List active employees that have the specified permission

Return only active employees for the specified permission name

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
    api_instance = openapi_client.ListPermissionsApi(api_client)
    company_id = 'company_id_example' # str | The id of company.
permission_name = 'permission_name_example' # str | Allowed values include all, activityassignedto, appointmentsetby, canvasser, confirmedby,   productionassignedto, projectmanager, promoter, salesperson, servicerep, telemarketer or jobworker.

    try:
        # List active employees that have the specified permission
        api_response = api_instance.list_permissions_get_active_simple_employees_with_specificed_list_permission(company_id, permission_name)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ListPermissionsApi->list_permissions_get_active_simple_employees_with_specificed_list_permission: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| The id of company. | 
 **permission_name** | **str**| Allowed values include all, activityassignedto, appointmentsetby, canvasser, confirmedby,   productionassignedto, projectmanager, promoter, salesperson, servicerep, telemarketer or jobworker. | 

### Return type

[**list[SimpleEmployeeResourceModel]**](SimpleEmployeeResourceModel.md)

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

# **list_permissions_get_simple_employees_with_specificed_list_permission**
> list[SimpleEmployeeResourceModel] list_permissions_get_simple_employees_with_specificed_list_permission(company_id, permission_name)

List all employees that have a specified list permission

Return all active and inactive employees for the specified permission name

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
    api_instance = openapi_client.ListPermissionsApi(api_client)
    company_id = 'company_id_example' # str | The id of company.
permission_name = 'permission_name_example' # str | Allowed values include all, activityassignedto, appointmentsetby, canvasser, confirmedby,   productionassignedto, projectmanager, promoter, salesperson, servicerep, telemarketer or jobworker.

    try:
        # List all employees that have a specified list permission
        api_response = api_instance.list_permissions_get_simple_employees_with_specificed_list_permission(company_id, permission_name)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ListPermissionsApi->list_permissions_get_simple_employees_with_specificed_list_permission: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| The id of company. | 
 **permission_name** | **str**| Allowed values include all, activityassignedto, appointmentsetby, canvasser, confirmedby,   productionassignedto, projectmanager, promoter, salesperson, servicerep, telemarketer or jobworker. | 

### Return type

[**list[SimpleEmployeeResourceModel]**](SimpleEmployeeResourceModel.md)

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

