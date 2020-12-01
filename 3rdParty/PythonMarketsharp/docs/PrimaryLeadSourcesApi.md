# openapi_client.PrimaryLeadSourcesApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**primary_lead_sources_get_active_primary_lead_sources**](PrimaryLeadSourcesApi.md#primary_lead_sources_get_active_primary_lead_sources) | **GET** /companies/{companyId}/primaryleadsources/active | List active primary lead sources
[**primary_lead_sources_get_active_secondary_lead_sources**](PrimaryLeadSourcesApi.md#primary_lead_sources_get_active_secondary_lead_sources) | **GET** /companies/{companyId}/primaryleadsources/{primaryLeadSourceId}/secondaryleadsources/active | List active secondary lead sources for a given primary lead source
[**primary_lead_sources_get_primary_lead_sources**](PrimaryLeadSourcesApi.md#primary_lead_sources_get_primary_lead_sources) | **GET** /companies/{companyId}/primaryleadsources | List all primary lead sources
[**primary_lead_sources_get_secondary_lead_sources**](PrimaryLeadSourcesApi.md#primary_lead_sources_get_secondary_lead_sources) | **GET** /companies/{companyId}/primaryleadsources/{primaryLeadSourceId}/secondaryleadsources | List all secondary lead sources for a given primary lead source


# **primary_lead_sources_get_active_primary_lead_sources**
> list[SimplePrimaryLeadSourceResourceModel] primary_lead_sources_get_active_primary_lead_sources(company_id)

List active primary lead sources

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
    api_instance = openapi_client.PrimaryLeadSourcesApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # List active primary lead sources
        api_response = api_instance.primary_lead_sources_get_active_primary_lead_sources(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PrimaryLeadSourcesApi->primary_lead_sources_get_active_primary_lead_sources: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

### Return type

[**list[SimplePrimaryLeadSourceResourceModel]**](SimplePrimaryLeadSourceResourceModel.md)

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

# **primary_lead_sources_get_active_secondary_lead_sources**
> list[SimpleSecondaryLeadSourceResourceModel] primary_lead_sources_get_active_secondary_lead_sources(company_id, primary_lead_source_id)

List active secondary lead sources for a given primary lead source

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
    api_instance = openapi_client.PrimaryLeadSourcesApi(api_client)
    company_id = 'company_id_example' # str | 
primary_lead_source_id = 'primary_lead_source_id_example' # str | 

    try:
        # List active secondary lead sources for a given primary lead source
        api_response = api_instance.primary_lead_sources_get_active_secondary_lead_sources(company_id, primary_lead_source_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PrimaryLeadSourcesApi->primary_lead_sources_get_active_secondary_lead_sources: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **primary_lead_source_id** | **str**|  | 

### Return type

[**list[SimpleSecondaryLeadSourceResourceModel]**](SimpleSecondaryLeadSourceResourceModel.md)

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

# **primary_lead_sources_get_primary_lead_sources**
> list[SimplePrimaryLeadSourceResourceModel] primary_lead_sources_get_primary_lead_sources(company_id)

List all primary lead sources

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
    api_instance = openapi_client.PrimaryLeadSourcesApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # List all primary lead sources
        api_response = api_instance.primary_lead_sources_get_primary_lead_sources(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PrimaryLeadSourcesApi->primary_lead_sources_get_primary_lead_sources: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

### Return type

[**list[SimplePrimaryLeadSourceResourceModel]**](SimplePrimaryLeadSourceResourceModel.md)

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

# **primary_lead_sources_get_secondary_lead_sources**
> list[SimpleSecondaryLeadSourceResourceModel] primary_lead_sources_get_secondary_lead_sources(company_id, primary_lead_source_id)

List all secondary lead sources for a given primary lead source

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
    api_instance = openapi_client.PrimaryLeadSourcesApi(api_client)
    company_id = 'company_id_example' # str | 
primary_lead_source_id = 'primary_lead_source_id_example' # str | 

    try:
        # List all secondary lead sources for a given primary lead source
        api_response = api_instance.primary_lead_sources_get_secondary_lead_sources(company_id, primary_lead_source_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PrimaryLeadSourcesApi->primary_lead_sources_get_secondary_lead_sources: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **primary_lead_source_id** | **str**|  | 

### Return type

[**list[SimpleSecondaryLeadSourceResourceModel]**](SimpleSecondaryLeadSourceResourceModel.md)

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

