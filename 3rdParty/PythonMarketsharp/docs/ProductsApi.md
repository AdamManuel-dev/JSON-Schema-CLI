# openapi_client.ProductsApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_associate_product_interest_to_lead**](ProductsApi.md#products_associate_product_interest_to_lead) | **POST** /companies/{companyId}/products/interests/leads/{leadId} | Associate product interest to lead.
[**products_disassociate_product_interests_from_lead**](ProductsApi.md#products_disassociate_product_interests_from_lead) | **POST** /companies/{companyId}/products/interests/leads/{leadId}/unlink | Unlink product interest from lead.
[**products_get_all_product_interests**](ProductsApi.md#products_get_all_product_interests) | **GET** /companies/{companyId}/products/interests/{activeOnly} | Get all product interests.
[**products_get_flat_production_total_amounts**](ProductsApi.md#products_get_flat_production_total_amounts) | **POST** /companies/{companyId}/products/productionFlatTotalAmounts | Retrieve Total Amount in dollars shown on the production flat view
[**products_get_flat_production_view**](ProductsApi.md#products_get_flat_production_view) | **POST** /companies/{companyId}/products/views/flat | Retrieve Flat/Pivot View of the production tab
[**products_get_product_interests_by_lead_id**](ProductsApi.md#products_get_product_interests_by_lead_id) | **GET** /companies/{companyId}/products/interests/leads/{leadId} | Get product interests by lead id.
[**products_get_product_types**](ProductsApi.md#products_get_product_types) | **GET** /companies/{companyId}/products/types/{activeOnly} | Retrieve Product Type
[**products_get_production_process_list_user_prefs**](ProductsApi.md#products_get_production_process_list_user_prefs) | **GET** /companies/{companyId}/products/userPrefs/productionProcessList | Get Production User Pref List
[**products_get_production_processes**](ProductsApi.md#products_get_production_processes) | **GET** /companies/{companyId}/products/processTypes/{activeOnly} | Get Process Type List
[**products_get_production_steps_by_process_id**](ProductsApi.md#products_get_production_steps_by_process_id) | **GET** /companies/{companyid}/products/jobProduct/{jobProductId}/process/{processId}/steps | Production Steps by Production Process Id
[**products_job_product_production_get**](ProductsApi.md#products_job_product_production_get) | **GET** /companies/{companyId}/products/jobProduct/{jobProductOid} | Get Job Product Information
[**products_production_step_info**](ProductsApi.md#products_production_step_info) | **GET** /companies/{companyId}/products/stepInfo/{stepId} | Retrieve Information about a Production Step
[**products_production_steps_has_activity**](ProductsApi.md#products_production_steps_has_activity) | **POST** /companies/{companyid}/products/hasActivities | Check Link between Production Step and Activity
[**products_update_job_product**](ProductsApi.md#products_update_job_product) | **PUT** /companies/{companyId}/products/jobProduct | Update Job Product
[**products_update_production_step_dates**](ProductsApi.md#products_update_production_step_dates) | **PUT** /companies/{companyId}/products/stepInfoDates/{stepId} | Update Production Step Dates
[**products_update_user_pref**](ProductsApi.md#products_update_user_pref) | **PUT** /companies/{companyId}/products/userPrefs/productionProcessList | Update User Pref
[**products_work_crew_get**](ProductsApi.md#products_work_crew_get) | **GET** /companies/{companyId}/products/workcrew/{activeOnly} | Get Work Crew List
[**products_work_crew_update**](ProductsApi.md#products_work_crew_update) | **PUT** /companies/{companyId}/products/workcrew | Update Work Crew List


# **products_associate_product_interest_to_lead**
> str products_associate_product_interest_to_lead(company_id, lead_id, models_to_add)

Associate product interest to lead.

This endpoint will associate a product interest to the lead that is passed in.  If the product interest is already associated to the lead the product interest record will be updated.

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | Database company id.
lead_id = 'lead_id_example' # str | Lead id.
models_to_add = [openapi_client.ProductTypeDetailBindingModel()] # list[ProductTypeDetailBindingModel] | Product interest model to be associated to the lead.

    try:
        # Associate product interest to lead.
        api_response = api_instance.products_associate_product_interest_to_lead(company_id, lead_id, models_to_add)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_associate_product_interest_to_lead: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| Database company id. | 
 **lead_id** | **str**| Lead id. | 
 **models_to_add** | [**list[ProductTypeDetailBindingModel]**](ProductTypeDetailBindingModel.md)| Product interest model to be associated to the lead. | 

### Return type

**str**

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

# **products_disassociate_product_interests_from_lead**
> str products_disassociate_product_interests_from_lead(company_id, lead_id, models_to_remove)

Unlink product interest from lead.

This endpoint will disassociate product interest record(s) from the lead that is passed in.  The product interest record is not deleted from the database, but merely no longer associated with the lead.

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | Database company id.
lead_id = 'lead_id_example' # str | Lead id.
models_to_remove = [openapi_client.SimpleProductTypeDetailBindingModel()] # list[SimpleProductTypeDetailBindingModel] | Product interest model(s).

    try:
        # Unlink product interest from lead.
        api_response = api_instance.products_disassociate_product_interests_from_lead(company_id, lead_id, models_to_remove)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_disassociate_product_interests_from_lead: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| Database company id. | 
 **lead_id** | **str**| Lead id. | 
 **models_to_remove** | [**list[SimpleProductTypeDetailBindingModel]**](SimpleProductTypeDetailBindingModel.md)| Product interest model(s). | 

### Return type

**str**

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

# **products_get_all_product_interests**
> list[ProductTypeDetailResourceModel] products_get_all_product_interests(company_id, active_only)

Get all product interests.

Returns all product type and product detail records for the company id passed.

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | Company id.
active_only = True # bool | If the value is true then only records that are active are returned.  If this value is false then all records are returned.

    try:
        # Get all product interests.
        api_response = api_instance.products_get_all_product_interests(company_id, active_only)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_get_all_product_interests: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| Company id. | 
 **active_only** | **bool**| If the value is true then only records that are active are returned.  If this value is false then all records are returned. | 

### Return type

[**list[ProductTypeDetailResourceModel]**](ProductTypeDetailResourceModel.md)

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

# **products_get_flat_production_total_amounts**
> ProductionTotalResourceModel products_get_flat_production_total_amounts(company_id, search)

Retrieve Total Amount in dollars shown on the production flat view

Retrieves the product total amounts for the same types shown on the production flat view. <br /><br />  Note: these numbers will not match the numbers on the production report or even in the regular production view as only jobs with a production type step defined in the admin section are considered.

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | 
search = openapi_client.ProductionSearchBindingModel() # ProductionSearchBindingModel | 

    try:
        # Retrieve Total Amount in dollars shown on the production flat view
        api_response = api_instance.products_get_flat_production_total_amounts(company_id, search)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_get_flat_production_total_amounts: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **search** | [**ProductionSearchBindingModel**](ProductionSearchBindingModel.md)|  | 

### Return type

[**ProductionTotalResourceModel**](ProductionTotalResourceModel.md)

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

# **products_get_flat_production_view**
> ProductionResourceModel products_get_flat_production_view(company_id, search)

Retrieve Flat/Pivot View of the production tab

Retrieves the product view with one Job Product per line. Only the process type steps defined in the admin section will be returned as the columns. <br />  if the oid is blank, then that column is not valid for that production step. <br />  if the oid has a value, then date end estimated and date end actual values are real.  <br />  Note: As of 2017-06-12 there is no way to set the time for a Production Step. As far as I can tell, the time part can and should be ignored.

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | 
search = openapi_client.ProductionSearchBindingModel() # ProductionSearchBindingModel | 

    try:
        # Retrieve Flat/Pivot View of the production tab
        api_response = api_instance.products_get_flat_production_view(company_id, search)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_get_flat_production_view: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **search** | [**ProductionSearchBindingModel**](ProductionSearchBindingModel.md)|  | 

### Return type

[**ProductionResourceModel**](ProductionResourceModel.md)

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

# **products_get_product_interests_by_lead_id**
> list[SimpleProductTypeDetailResourceModel] products_get_product_interests_by_lead_id(company_id, lead_id)

Get product interests by lead id.

Returns all product type and product detail records for the company and lead id passed.

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | Company id.
lead_id = 'lead_id_example' # str | Lead id.

    try:
        # Get product interests by lead id.
        api_response = api_instance.products_get_product_interests_by_lead_id(company_id, lead_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_get_product_interests_by_lead_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| Company id. | 
 **lead_id** | **str**| Lead id. | 

### Return type

[**list[SimpleProductTypeDetailResourceModel]**](SimpleProductTypeDetailResourceModel.md)

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

# **products_get_product_types**
> list[KeyValueResourceModel] products_get_product_types(company_id, active_only)

Retrieve Product Type

Retrieves a list of product types

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | 
active_only = True # bool | 

    try:
        # Retrieve Product Type
        api_response = api_instance.products_get_product_types(company_id, active_only)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_get_product_types: %s\n" % e)
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

# **products_get_production_process_list_user_prefs**
> list[UserPrefResourceModel] products_get_production_process_list_user_prefs(company_id)

Get Production User Pref List

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # Get Production User Pref List
        api_response = api_instance.products_get_production_process_list_user_prefs(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_get_production_process_list_user_prefs: %s\n" % e)
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

# **products_get_production_processes**
> list[KeyValueResourceModel] products_get_production_processes(company_id, active_only, product_id=product_id)

Get Process Type List

Get a list of process types

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | 
active_only = True # bool | 
product_id = 'product_id_example' # str | Optional parameter to filter list to applicable processes only (optional)

    try:
        # Get Process Type List
        api_response = api_instance.products_get_production_processes(company_id, active_only, product_id=product_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_get_production_processes: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **active_only** | **bool**|  | 
 **product_id** | **str**| Optional parameter to filter list to applicable processes only | [optional] 

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

# **products_get_production_steps_by_process_id**
> list[ProductionProcessStepResourceModel] products_get_production_steps_by_process_id(job_product_id, process_id, companyid)

Production Steps by Production Process Id

Retrieves a list of Production Steps

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
    api_instance = openapi_client.ProductsApi(api_client)
    job_product_id = 'job_product_id_example' # str | 
process_id = 'process_id_example' # str | 
companyid = 'companyid_example' # str | 

    try:
        # Production Steps by Production Process Id
        api_response = api_instance.products_get_production_steps_by_process_id(job_product_id, process_id, companyid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_get_production_steps_by_process_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_product_id** | **str**|  | 
 **process_id** | **str**|  | 
 **companyid** | **str**|  | 

### Return type

[**list[ProductionProcessStepResourceModel]**](ProductionProcessStepResourceModel.md)

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

# **products_job_product_production_get**
> JobProductViewResourceModel products_job_product_production_get(company_id, job_product_oid)

Get Job Product Information

Retrieves more detailed information for a specific Job Product

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | 
job_product_oid = 'job_product_oid_example' # str | 

    try:
        # Get Job Product Information
        api_response = api_instance.products_job_product_production_get(company_id, job_product_oid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_job_product_production_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **job_product_oid** | **str**|  | 

### Return type

[**JobProductViewResourceModel**](JobProductViewResourceModel.md)

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

# **products_production_step_info**
> ProductionStepResourceModel products_production_step_info(company_id, step_id)

Retrieve Information about a Production Step

Retrieve Information about a Production Step by id <br />   If the step id is invalid, an empty model is returned.

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | 
step_id = 'step_id_example' # str | The step id to get data for.

    try:
        # Retrieve Information about a Production Step
        api_response = api_instance.products_production_step_info(company_id, step_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_production_step_info: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **step_id** | **str**| The step id to get data for. | 

### Return type

[**ProductionStepResourceModel**](ProductionStepResourceModel.md)

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

# **products_production_steps_has_activity**
> bool products_production_steps_has_activity(companyid, production_step_id_list)

Check Link between Production Step and Activity

Checks if the any of the provided production steps have activities associated with them. Returns True if any of them have activities, else false.

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
    api_instance = openapi_client.ProductsApi(api_client)
    companyid = 'companyid_example' # str | 
production_step_id_list = ['production_step_id_list_example'] # list[str] | 

    try:
        # Check Link between Production Step and Activity
        api_response = api_instance.products_production_steps_has_activity(companyid, production_step_id_list)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_production_steps_has_activity: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyid** | **str**|  | 
 **production_step_id_list** | [**list[str]**](str.md)|  | 

### Return type

**bool**

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

# **products_update_job_product**
> ProductionJobProductSavedStepsResourceModel products_update_job_product(company_id, model)

Update Job Product

returns the saved steps and a list of steps that need to have their activity process triggered

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.ProductionJobProductBindingModel() # ProductionJobProductBindingModel | 

    try:
        # Update Job Product
        api_response = api_instance.products_update_job_product(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_update_job_product: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**ProductionJobProductBindingModel**](ProductionJobProductBindingModel.md)|  | 

### Return type

[**ProductionJobProductSavedStepsResourceModel**](ProductionJobProductSavedStepsResourceModel.md)

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

# **products_update_production_step_dates**
> str products_update_production_step_dates(company_id, step_id, model)

Update Production Step Dates

Update the actual end and start dates for a production step. Other fields are ignored. Returns the saved steps and a list of steps that need to have their activity process triggered

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | 
step_id = 'step_id_example' # str | 
model = openapi_client.ProductionStepBindingModel() # ProductionStepBindingModel | 

    try:
        # Update Production Step Dates
        api_response = api_instance.products_update_production_step_dates(company_id, step_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_update_production_step_dates: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **step_id** | **str**|  | 
 **model** | [**ProductionStepBindingModel**](ProductionStepBindingModel.md)|  | 

### Return type

**str**

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

# **products_update_user_pref**
> UserPrefResourceModel products_update_user_pref(company_id, model)

Update User Pref

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.UserPrefBindingModel() # UserPrefBindingModel | 

    try:
        # Update User Pref
        api_response = api_instance.products_update_user_pref(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_update_user_pref: %s\n" % e)
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

# **products_work_crew_get**
> list[ListDropDownItem] products_work_crew_get(company_id, active_only)

Get Work Crew List

Get a list of work crews. This is a user edit-able dropdown list.

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | 
active_only = True # bool | 

    try:
        # Get Work Crew List
        api_response = api_instance.products_work_crew_get(company_id, active_only)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_work_crew_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **active_only** | **bool**|  | 

### Return type

[**list[ListDropDownItem]**](ListDropDownItem.md)

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

# **products_work_crew_update**
> object products_work_crew_update(company_id, work_crews)

Update Work Crew List

Pass in all active and inactive work crews to ensure the correct order is saved. The passed in workCrews is saved in the given order.

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
    api_instance = openapi_client.ProductsApi(api_client)
    company_id = 'company_id_example' # str | 
work_crews = [openapi_client.ListDropDownItem()] # list[ListDropDownItem] | 

    try:
        # Update Work Crew List
        api_response = api_instance.products_work_crew_update(company_id, work_crews)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsApi->products_work_crew_update: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **work_crews** | [**list[ListDropDownItem]**](ListDropDownItem.md)|  | 

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

