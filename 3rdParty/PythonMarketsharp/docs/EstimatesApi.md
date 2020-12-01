# openapi_client.EstimatesApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**estimates_create_estimate**](EstimatesApi.md#estimates_create_estimate) | **POST** /companies/{companyId}/estimates | Create an estimate
[**estimates_create_estimate_deprecated**](EstimatesApi.md#estimates_create_estimate_deprecated) | **POST** /estimates | Create an estimate - Deprecated
[**estimates_get_estimate_status_codes**](EstimatesApi.md#estimates_get_estimate_status_codes) | **GET** /estimates/status | List active estimate statuses - Deprecated
[**estimates_get_estimate_statuses**](EstimatesApi.md#estimates_get_estimate_statuses) | **GET** /companies/{companyId}/estimates/statuses/active | List active estimate statuses
[**estimates_get_estimate_types**](EstimatesApi.md#estimates_get_estimate_types) | **GET** /companies/{companyId}/estimates/types/active | 
[**estimates_get_unit_of_measure**](EstimatesApi.md#estimates_get_unit_of_measure) | **GET** /estimates/units | List active units of measure - Deprecated
[**estimates_get_units_of_measure**](EstimatesApi.md#estimates_get_units_of_measure) | **GET** /companies/{companyId}/estimates/unitsofmeasure/active | List active units of measure
[**estimates_update_estimate**](EstimatesApi.md#estimates_update_estimate) | **PUT** /companies/{companyId}/estimates/{estimateId} | Update an estimate
[**estimates_upload_attachment**](EstimatesApi.md#estimates_upload_attachment) | **POST** /companies/{companyId}/estimates/{estimateId}/attachments | Upload an attachment
[**estimates_upload_file**](EstimatesApi.md#estimates_upload_file) | **POST** /estimates/{estimateId}/attachment | Upload an attachment - Deprecated


# **estimates_create_estimate**
> object estimates_create_estimate(company_id, model)

Create an estimate

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
    api_instance = openapi_client.EstimatesApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.EstimatesResourceModel() # EstimatesResourceModel | 

    try:
        # Create an estimate
        api_response = api_instance.estimates_create_estimate(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EstimatesApi->estimates_create_estimate: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**EstimatesResourceModel**](EstimatesResourceModel.md)|  | 

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

# **estimates_create_estimate_deprecated**
> object estimates_create_estimate_deprecated(model)

Create an estimate - Deprecated

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
    api_instance = openapi_client.EstimatesApi(api_client)
    model = openapi_client.EstimatesResourceModel() # EstimatesResourceModel | 

    try:
        # Create an estimate - Deprecated
        api_response = api_instance.estimates_create_estimate_deprecated(model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EstimatesApi->estimates_create_estimate_deprecated: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**EstimatesResourceModel**](EstimatesResourceModel.md)|  | 

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

# **estimates_get_estimate_status_codes**
> object estimates_get_estimate_status_codes()

List active estimate statuses - Deprecated

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
    api_instance = openapi_client.EstimatesApi(api_client)
    
    try:
        # List active estimate statuses - Deprecated
        api_response = api_instance.estimates_get_estimate_status_codes()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EstimatesApi->estimates_get_estimate_status_codes: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

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

# **estimates_get_estimate_statuses**
> object estimates_get_estimate_statuses(company_id)

List active estimate statuses

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
    api_instance = openapi_client.EstimatesApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # List active estimate statuses
        api_response = api_instance.estimates_get_estimate_statuses(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EstimatesApi->estimates_get_estimate_statuses: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

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

# **estimates_get_estimate_types**
> object estimates_get_estimate_types(company_id)



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
    api_instance = openapi_client.EstimatesApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        api_response = api_instance.estimates_get_estimate_types(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EstimatesApi->estimates_get_estimate_types: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

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

# **estimates_get_unit_of_measure**
> object estimates_get_unit_of_measure()

List active units of measure - Deprecated

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
    api_instance = openapi_client.EstimatesApi(api_client)
    
    try:
        # List active units of measure - Deprecated
        api_response = api_instance.estimates_get_unit_of_measure()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EstimatesApi->estimates_get_unit_of_measure: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

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

# **estimates_get_units_of_measure**
> object estimates_get_units_of_measure(company_id)

List active units of measure

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
    api_instance = openapi_client.EstimatesApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # List active units of measure
        api_response = api_instance.estimates_get_units_of_measure(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EstimatesApi->estimates_get_units_of_measure: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

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

# **estimates_update_estimate**
> object estimates_update_estimate(estimate_id, company_id, model)

Update an estimate

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
    api_instance = openapi_client.EstimatesApi(api_client)
    estimate_id = 'estimate_id_example' # str | 
company_id = 'company_id_example' # str | 
model = openapi_client.EstimatesResourceModel() # EstimatesResourceModel | 

    try:
        # Update an estimate
        api_response = api_instance.estimates_update_estimate(estimate_id, company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EstimatesApi->estimates_update_estimate: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **estimate_id** | **str**|  | 
 **company_id** | **str**|  | 
 **model** | [**EstimatesResourceModel**](EstimatesResourceModel.md)|  | 

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

# **estimates_upload_attachment**
> list[str] estimates_upload_attachment(estimate_id, company_id)

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
    api_instance = openapi_client.EstimatesApi(api_client)
    estimate_id = 'estimate_id_example' # str | 
company_id = 'company_id_example' # str | 

    try:
        # Upload an attachment
        api_response = api_instance.estimates_upload_attachment(estimate_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EstimatesApi->estimates_upload_attachment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **estimate_id** | **str**|  | 
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

# **estimates_upload_file**
> list[str] estimates_upload_file(estimate_id, unknown_base_type)

Upload an attachment - Deprecated

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
    api_instance = openapi_client.EstimatesApi(api_client)
    estimate_id = 'estimate_id_example' # str | 
unknown_base_type = openapi_client.UNKNOWN_BASE_TYPE() # UNKNOWN_BASE_TYPE | 

    try:
        # Upload an attachment - Deprecated
        api_response = api_instance.estimates_upload_file(estimate_id, unknown_base_type)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EstimatesApi->estimates_upload_file: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **estimate_id** | **str**|  | 
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

