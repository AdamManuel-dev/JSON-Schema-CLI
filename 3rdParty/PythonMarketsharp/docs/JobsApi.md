# openapi_client.JobsApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobs_get_jobs_and_leads**](JobsApi.md#jobs_get_jobs_and_leads) | **POST** /companies/{companyId}/jobs/opportunities | Get jobs and leads.
[**jobs_search_jobs**](JobsApi.md#jobs_search_jobs) | **POST** /companies/{companyid}/jobs/search | Quickfind - Job Search
[**jobs_search_jobs_0**](JobsApi.md#jobs_search_jobs_0) | **POST** /jobs/search | 


# **jobs_get_jobs_and_leads**
> list[JobLeadResourceModel] jobs_get_jobs_and_leads(company_id, search_model)

Get jobs and leads.

Lists job and lead information for the company passed.

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
    api_instance = openapi_client.JobsApi(api_client)
    company_id = 'company_id_example' # str | Database company Id.
search_model = openapi_client.SimpleDateSearchBindingModel() # SimpleDateSearchBindingModel | Model containing search parameters. numberOfRecords specifies the number of records to be returned. Defaulted to 50 if omitted.              fromDate specifies the datetime from which to begin your search.  Will return all records for that datetime and after.

    try:
        # Get jobs and leads.
        api_response = api_instance.jobs_get_jobs_and_leads(company_id, search_model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling JobsApi->jobs_get_jobs_and_leads: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| Database company Id. | 
 **search_model** | [**SimpleDateSearchBindingModel**](SimpleDateSearchBindingModel.md)| Model containing search parameters. numberOfRecords specifies the number of records to be returned. Defaulted to 50 if omitted.              fromDate specifies the datetime from which to begin your search.  Will return all records for that datetime and after. | 

### Return type

[**list[JobLeadResourceModel]**](JobLeadResourceModel.md)

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

# **jobs_search_jobs**
> object jobs_search_jobs(companyid, job)

Quickfind - Job Search

This is the job search used by the quickfind. Employee Id required in the bearer token

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
    api_instance = openapi_client.JobsApi(api_client)
    companyid = 'companyid_example' # str | 
job = openapi_client.JobSearchBindingModel() # JobSearchBindingModel | 

    try:
        # Quickfind - Job Search
        api_response = api_instance.jobs_search_jobs(companyid, job)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling JobsApi->jobs_search_jobs: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyid** | **str**|  | 
 **job** | [**JobSearchBindingModel**](JobSearchBindingModel.md)|  | 

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

# **jobs_search_jobs_0**
> object jobs_search_jobs_0(job)



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
    api_instance = openapi_client.JobsApi(api_client)
    job = openapi_client.JobSearchBindingModel() # JobSearchBindingModel | 

    try:
        api_response = api_instance.jobs_search_jobs_0(job)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling JobsApi->jobs_search_jobs_0: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job** | [**JobSearchBindingModel**](JobSearchBindingModel.md)|  | 

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

