# openapi_client.EmployeesApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employees_dismiss_reminder**](EmployeesApi.md#employees_dismiss_reminder) | **POST** /companies/{companyId}/employees/{employeeId}/dismissReminder | Dismiss a Reminder
[**employees_filter_employees**](EmployeesApi.md#employees_filter_employees) | **POST** /companies/{companyid}/employees/filter | Filter Employees
[**employees_generate_and_update_pass_reset_token**](EmployeesApi.md#employees_generate_and_update_pass_reset_token) | **POST** /companies/{companyId}/employees/{employeeId}/passwordreset/{expiresInHours} | Generates a password reset URL.
[**employees_get_feature_permissions**](EmployeesApi.md#employees_get_feature_permissions) | **GET** /companies/{companyId}/employees/{employeeId}/featurePermissions | Get Feature Permissions
[**employees_get_production_assigned_to_employees**](EmployeesApi.md#employees_get_production_assigned_to_employees) | **GET** /companies/{companyId}/employees/production/assignedTo/{activeOnly} | Get Production Assigned To Employee List
[**employees_get_production_project_manager_employees**](EmployeesApi.md#employees_get_production_project_manager_employees) | **GET** /companies/{companyId}/employees/projectmanager/{activeOnly} | Get Project Manager Employees
[**employees_get_production_salespeople_employees**](EmployeesApi.md#employees_get_production_salespeople_employees) | **GET** /companies/{companyId}/employees/production/salespeople/{activeOnly} | Get Salesperson for Production List
[**employees_get_user_reminders**](EmployeesApi.md#employees_get_user_reminders) | **POST** /companies/{companyId}/employees/{employeeId}/reminders | Get User Reminders


# **employees_dismiss_reminder**
> DismissReminderResourceModel employees_dismiss_reminder(company_id, employee_id, model)

Dismiss a Reminder

This endpoint is used to dismiss a reminder.  This enpoint takes a single parameter which is the id of the reminder to dismiss. <br />  Example (\"activityId\": '2e1afbc4-893b-4e70-4321-58523541a123'}    An object containing a single boolean property will be returned. If set to true   the dismissal was processed successfully, if set to false the update failed. <br />  Return Example { \"dismissSuccessful\" : true } <br />

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
    api_instance = openapi_client.EmployeesApi(api_client)
    company_id = 'company_id_example' # str | 
employee_id = 'employee_id_example' # str | 
model = openapi_client.EmployeesBindingModel() # EmployeesBindingModel | 

    try:
        # Dismiss a Reminder
        api_response = api_instance.employees_dismiss_reminder(company_id, employee_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EmployeesApi->employees_dismiss_reminder: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **employee_id** | **str**|  | 
 **model** | [**EmployeesBindingModel**](EmployeesBindingModel.md)|  | 

### Return type

[**DismissReminderResourceModel**](DismissReminderResourceModel.md)

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

# **employees_filter_employees**
> list[SimpleEmployeeResourceModel] employees_filter_employees(companyid, model)

Filter Employees

Provides a way to search employees if they have a phone, email, or a specific list permission type.               Can pass in a list of employee Id to always include at the top of the results. The included employees are only at the top of the list if they would not be in the result.              Otherwise, the list is sorted by employee name descending.

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
    api_instance = openapi_client.EmployeesApi(api_client)
    companyid = 'companyid_example' # str | 
model = openapi_client.EmployeeFilterBindingModel() # EmployeeFilterBindingModel | 

    try:
        # Filter Employees
        api_response = api_instance.employees_filter_employees(companyid, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EmployeesApi->employees_filter_employees: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyid** | **str**|  | 
 **model** | [**EmployeeFilterBindingModel**](EmployeeFilterBindingModel.md)|  | 

### Return type

[**list[SimpleEmployeeResourceModel]**](SimpleEmployeeResourceModel.md)

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

# **employees_generate_and_update_pass_reset_token**
> str employees_generate_and_update_pass_reset_token(company_id, employee_id, expires_in_hours)

Generates a password reset URL.

Returns the URL containing the password reset token for the company and employee id passed.  Token expire time is an optional parameter that defaults to 12 hours.

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
    api_instance = openapi_client.EmployeesApi(api_client)
    company_id = 'company_id_example' # str | 
employee_id = 'employee_id_example' # str | 
expires_in_hours = 56 # int | 

    try:
        # Generates a password reset URL.
        api_response = api_instance.employees_generate_and_update_pass_reset_token(company_id, employee_id, expires_in_hours)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EmployeesApi->employees_generate_and_update_pass_reset_token: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **employee_id** | **str**|  | 
 **expires_in_hours** | **int**|  | 

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

# **employees_get_feature_permissions**
> list[str] employees_get_feature_permissions(company_id, employee_id)

Get Feature Permissions

Get the coalesced user and company feature permissions. Only granted permissions will be returned.

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
    api_instance = openapi_client.EmployeesApi(api_client)
    company_id = 'company_id_example' # str | 
employee_id = 'employee_id_example' # str | 

    try:
        # Get Feature Permissions
        api_response = api_instance.employees_get_feature_permissions(company_id, employee_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EmployeesApi->employees_get_feature_permissions: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **employee_id** | **str**|  | 

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

# **employees_get_production_assigned_to_employees**
> list[KeyValueResourceModel] employees_get_production_assigned_to_employees(company_id, active_only)

Get Production Assigned To Employee List

Returns a list of Employees which are valid to be assigned to Production tasks

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
    api_instance = openapi_client.EmployeesApi(api_client)
    company_id = 'company_id_example' # str | 
active_only = True # bool | 

    try:
        # Get Production Assigned To Employee List
        api_response = api_instance.employees_get_production_assigned_to_employees(company_id, active_only)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EmployeesApi->employees_get_production_assigned_to_employees: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **active_only** | **bool**|  | 

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

# **employees_get_production_project_manager_employees**
> list[KeyValueResourceModel] employees_get_production_project_manager_employees(company_id, active_only)

Get Project Manager Employees

Get a list of employees which are project managers

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
    api_instance = openapi_client.EmployeesApi(api_client)
    company_id = 'company_id_example' # str | 
active_only = True # bool | 

    try:
        # Get Project Manager Employees
        api_response = api_instance.employees_get_production_project_manager_employees(company_id, active_only)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EmployeesApi->employees_get_production_project_manager_employees: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **active_only** | **bool**|  | 

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

# **employees_get_production_salespeople_employees**
> list[KeyValueResourceModel] employees_get_production_salespeople_employees(company_id, active_only)

Get Salesperson for Production List

Get a list of valid employees which are valid to be shown in the production salesperson lists

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
    api_instance = openapi_client.EmployeesApi(api_client)
    company_id = 'company_id_example' # str | 
active_only = True # bool | 

    try:
        # Get Salesperson for Production List
        api_response = api_instance.employees_get_production_salespeople_employees(company_id, active_only)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EmployeesApi->employees_get_production_salespeople_employees: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **active_only** | **bool**|  | 

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

# **employees_get_user_reminders**
> list[Reminder] employees_get_user_reminders(company_id, employee_id)

Get User Reminders

This endpoint is used to retrieve reminders for a given employee that have not been dismissed.  Return Example [{ \"activityId\": \"2e1afbc4-893b-4e70-4321-58523541a123\", <br />                     \"contactId\": \"da623e7d-1c12-4a44-6579-6e1c5454b46a\", <br />                     \"activityType\": \"Email Out\",                         <br />                     \"activityReferenceName\": \"Thank You Email\",          <br />                     \"dueDate\": \"2015-08-18T13:11:20.127\",                <br />                     \"contactFirstName\": \"First Name\",                    <br />                     \"contactLastName\": \"Last Name\",                      <br />                     \"contactType\": \"2\",                                  <br />                     \"pastDue\": true,                                      <br />                     \"createdDate\": \"2016-02-02T11:37:15.697\"             <br />                  }]

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
    api_instance = openapi_client.EmployeesApi(api_client)
    company_id = 'company_id_example' # str | 
employee_id = 'employee_id_example' # str | 

    try:
        # Get User Reminders
        api_response = api_instance.employees_get_user_reminders(company_id, employee_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EmployeesApi->employees_get_user_reminders: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **employee_id** | **str**|  | 

### Return type

[**list[Reminder]**](Reminder.md)

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

