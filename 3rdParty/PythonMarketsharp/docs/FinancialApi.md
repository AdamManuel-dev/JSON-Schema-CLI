# openapi_client.FinancialApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financial_get_loan_types**](FinancialApi.md#financial_get_loan_types) | **GET** /companies/{companyId}/financial/loantypes | List active loan types
[**financial_save_payment**](FinancialApi.md#financial_save_payment) | **POST** /companies/{companyId}/financial/payments | Save Payment history


# **financial_get_loan_types**
> object financial_get_loan_types(company_id)

List active loan types

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
    api_instance = openapi_client.FinancialApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # List active loan types
        api_response = api_instance.financial_get_loan_types(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling FinancialApi->financial_get_loan_types: %s\n" % e)
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

# **financial_save_payment**
> object financial_save_payment(company_id, model)

Save Payment history

Saves the payment history record for a job/contract

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
    api_instance = openapi_client.FinancialApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.FinancePaymentBindingModel() # FinancePaymentBindingModel | 

    try:
        # Save Payment history
        api_response = api_instance.financial_save_payment(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling FinancialApi->financial_save_payment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**FinancePaymentBindingModel**](FinancePaymentBindingModel.md)|  | 

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

