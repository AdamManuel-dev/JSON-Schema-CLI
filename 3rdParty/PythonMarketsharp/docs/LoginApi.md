# openapi_client.LoginApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login_create_authentication_cookie**](LoginApi.md#login_create_authentication_cookie) | **POST** /companies/{companyId}/login/authcookie | Get MS Login Cookie
[**login_validate_authentication_cookie**](LoginApi.md#login_validate_authentication_cookie) | **GET** /companies/{companyId}/login/isvalidcookie | Validate MS Login Cookie


# **login_create_authentication_cookie**
> list[LoginCookieResourceModel] login_create_authentication_cookie(company_id, model)

Get MS Login Cookie

Internal Endpoint. Can be used to get a login cookie for marketsharp

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
    api_instance = openapi_client.LoginApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.LoginBindingModel() # LoginBindingModel | rememberMe default value is false, restapiurl what the url is for generating the api cookie. default value of production url for now

    try:
        # Get MS Login Cookie
        api_response = api_instance.login_create_authentication_cookie(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling LoginApi->login_create_authentication_cookie: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**LoginBindingModel**](LoginBindingModel.md)| rememberMe default value is false, restapiurl what the url is for generating the api cookie. default value of production url for now | 

### Return type

[**list[LoginCookieResourceModel]**](LoginCookieResourceModel.md)

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

# **login_validate_authentication_cookie**
> bool login_validate_authentication_cookie(company_id, cookie)

Validate MS Login Cookie

Internal Endpoint. Validates the MS Login Cookie

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
    api_instance = openapi_client.LoginApi(api_client)
    company_id = 'company_id_example' # str | 
cookie = 'cookie_example' # str | 

    try:
        # Validate MS Login Cookie
        api_response = api_instance.login_validate_authentication_cookie(company_id, cookie)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling LoginApi->login_validate_authentication_cookie: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **cookie** | **str**|  | 

### Return type

**bool**

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

