# openapi_client.PaySimpleApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pay_simple_get_checkout_token**](PaySimpleApi.md#pay_simple_get_checkout_token) | **GET** /companies/{companyId}/paysimple/checkouttoken | Get PaySimple Checkout Token.
[**pay_simple_get_customer_accounts**](PaySimpleApi.md#pay_simple_get_customer_accounts) | **GET** /companies/{companyId}/paysimple/customers/{customerId}/accounts | Get PaySimple Customer Accounts.
[**pay_simple_get_customer_token**](PaySimpleApi.md#pay_simple_get_customer_token) | **GET** /companies/{companyId}/paysimple/customers/{customerId}/token | Get PaySimple Customer Token.
[**pay_simple_get_merchant_payment_options**](PaySimpleApi.md#pay_simple_get_merchant_payment_options) | **GET** /companies/{companyId}/paysimple/merchant/paymentoptions | Get Merchant Payment Options.
[**pay_simple_get_paysimple_reconciliation_payments**](PaySimpleApi.md#pay_simple_get_paysimple_reconciliation_payments) | **POST** /companies/{companyId}/paysimple/reconciliation/payments | Get PaySimple payment reconciliation records.
[**pay_simple_is_sandbox**](PaySimpleApi.md#pay_simple_is_sandbox) | **GET** /companies/{companyId}/paysimple/IsSandbox | Check for Sandbox or Production Paysimple Credentials
[**pay_simple_link_market_sharp_contact_to_pay_simple_customer**](PaySimpleApi.md#pay_simple_link_market_sharp_contact_to_pay_simple_customer) | **POST** /companies/{companyId}/paysimple/customers/{customerId}/contacts/{contactId} | Link PaySimple Customer to Contact.
[**pay_simple_list_customers**](PaySimpleApi.md#pay_simple_list_customers) | **GET** /companies/{companyId}/paysimple/contact/{contactId}/customers | List Paysimple Customers for a Contact
[**pay_simple_make_payment**](PaySimpleApi.md#pay_simple_make_payment) | **POST** /companies/{companyId}/paysimple/payment | Make a Payment
[**pay_simple_reconcile_payment**](PaySimpleApi.md#pay_simple_reconcile_payment) | **POST** /companies/{companyId}/paysimple/reconciliation/matchpayment | Reconcile PaySimple payment.
[**pay_simple_search_contacts_jobs**](PaySimpleApi.md#pay_simple_search_contacts_jobs) | **POST** /companies/{companyId}/paysimple/contactJobSearch | Contact Job Search
[**pay_simple_unlink_payment**](PaySimpleApi.md#pay_simple_unlink_payment) | **POST** /companies/{companyId}/paysimple/reconciliation/unlinkpayment | Unlink a PaySimple payment.
[**pay_simple_update_ach_account_info**](PaySimpleApi.md#pay_simple_update_ach_account_info) | **PUT** /companies/{companyId}/paysimple/account/ach | Update ACH Account Info.
[**pay_simple_update_credit_card**](PaySimpleApi.md#pay_simple_update_credit_card) | **PUT** /companies/{companyId}/paysimple/account/creditcard | Update Credit Card


# **pay_simple_get_checkout_token**
> str pay_simple_get_checkout_token(company_id)

Get PaySimple Checkout Token.

The checkout token uniquely identifies your merchant account to PaySimple. While the token expires in 5 minutes, it is recommended you generate a new token on each checkout.

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # Get PaySimple Checkout Token.
        api_response = api_instance.pay_simple_get_checkout_token(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_get_checkout_token: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

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

# **pay_simple_get_customer_accounts**
> PaySimpleAccountsResponse pay_simple_get_customer_accounts(customer_id, company_id)

Get PaySimple Customer Accounts.

Retrieve all of the Payment Account Objects associated with a Customer Record.

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    customer_id = 56 # int | The Id of the Customer whose accounts you want to list.
company_id = 'company_id_example' # str | 

    try:
        # Get PaySimple Customer Accounts.
        api_response = api_instance.pay_simple_get_customer_accounts(customer_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_get_customer_accounts: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **int**| The Id of the Customer whose accounts you want to list. | 
 **company_id** | **str**|  | 

### Return type

[**PaySimpleAccountsResponse**](PaySimpleAccountsResponse.md)

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

# **pay_simple_get_customer_token**
> PaySimpleCustomerTokenResponse pay_simple_get_customer_token(customer_id, company_id)

Get PaySimple Customer Token.

Retrieves a customer token that uniquely identifies a customer to PaySimpleJS.

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    customer_id = 56 # int | PaySimple Customer Id
company_id = 'company_id_example' # str | 

    try:
        # Get PaySimple Customer Token.
        api_response = api_instance.pay_simple_get_customer_token(customer_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_get_customer_token: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **int**| PaySimple Customer Id | 
 **company_id** | **str**|  | 

### Return type

[**PaySimpleCustomerTokenResponse**](PaySimpleCustomerTokenResponse.md)

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

# **pay_simple_get_merchant_payment_options**
> PaySimpleMerchantOptionsResponse pay_simple_get_merchant_payment_options(company_id)

Get Merchant Payment Options.

Get enabled credit card and payment types for merchant.

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # Get Merchant Payment Options.
        api_response = api_instance.pay_simple_get_merchant_payment_options(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_get_merchant_payment_options: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

### Return type

[**PaySimpleMerchantOptionsResponse**](PaySimpleMerchantOptionsResponse.md)

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

# **pay_simple_get_paysimple_reconciliation_payments**
> list[PaymentReconciliationData] pay_simple_get_paysimple_reconciliation_payments(company_id, model)

Get PaySimple payment reconciliation records.

Optionally pass in the from date to limit the results of the reconciliation records returned.

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.PaySimpleGetReconciliationBindingModel() # PaySimpleGetReconciliationBindingModel | 

    try:
        # Get PaySimple payment reconciliation records.
        api_response = api_instance.pay_simple_get_paysimple_reconciliation_payments(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_get_paysimple_reconciliation_payments: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**PaySimpleGetReconciliationBindingModel**](PaySimpleGetReconciliationBindingModel.md)|  | 

### Return type

[**list[PaymentReconciliationData]**](PaymentReconciliationData.md)

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

# **pay_simple_is_sandbox**
> object pay_simple_is_sandbox(company_id)

Check for Sandbox or Production Paysimple Credentials

Check if the api credentials in the admin are used for production payment processing or for the paysimple sandbox environment.  Sandbox api credentials are needed from PaySimple to be able to use the sandbox. Marketsharp can enable/disable the sandbox flag on the entered credentials.  <br /><br /> Returns true if credentials are for the sandbox  <br /> Return false if the credentials are for the production environment  <br /> Returns null if there are no credentials specified

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # Check for Sandbox or Production Paysimple Credentials
        api_response = api_instance.pay_simple_is_sandbox(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_is_sandbox: %s\n" % e)
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

# **pay_simple_link_market_sharp_contact_to_pay_simple_customer**
> str pay_simple_link_market_sharp_contact_to_pay_simple_customer(customer_id, contact_id, company_id)

Link PaySimple Customer to Contact.

Links the PaySimple customer to the MarketSharp contact.  If the link already exists no record will be inserted.

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    customer_id = 56 # int | PaySimple Customer Id
contact_id = 'contact_id_example' # str | Contact OID
company_id = 'company_id_example' # str | 

    try:
        # Link PaySimple Customer to Contact.
        api_response = api_instance.pay_simple_link_market_sharp_contact_to_pay_simple_customer(customer_id, contact_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_link_market_sharp_contact_to_pay_simple_customer: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **int**| PaySimple Customer Id | 
 **contact_id** | **str**| Contact OID | 
 **company_id** | **str**|  | 

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

# **pay_simple_list_customers**
> list[CustomerResourceModel] pay_simple_list_customers(contact_id, company_id)

List Paysimple Customers for a Contact

Lists all paysimple customers that are associated with a marketsharp contact

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    contact_id = 'contact_id_example' # str | 
company_id = 'company_id_example' # str | 

    try:
        # List Paysimple Customers for a Contact
        api_response = api_instance.pay_simple_list_customers(contact_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_list_customers: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**|  | 
 **company_id** | **str**|  | 

### Return type

[**list[CustomerResourceModel]**](CustomerResourceModel.md)

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

# **pay_simple_make_payment**
> PaySimplePaymentResponse pay_simple_make_payment(company_id, payment_request)

Make a Payment

Makes a payment to the specified account for the specified amount. Does not save the results in MarketsharpM.               See /companies/{companyId}/financial/payments to save the results in marketsharp.

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    company_id = 'company_id_example' # str | 
payment_request = openapi_client.PSPaymentRequest() # PSPaymentRequest | 

    try:
        # Make a Payment
        api_response = api_instance.pay_simple_make_payment(company_id, payment_request)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_make_payment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **payment_request** | [**PSPaymentRequest**](PSPaymentRequest.md)|  | 

### Return type

[**PaySimplePaymentResponse**](PaySimplePaymentResponse.md)

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

# **pay_simple_reconcile_payment**
> str pay_simple_reconcile_payment(company_id, reconcile_payment_request)

Reconcile PaySimple payment.

This endpoint will match the PaySimple payment with a Marketsharp contact and job.

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    company_id = 'company_id_example' # str | 
reconcile_payment_request = openapi_client.ReconcilePaymentRequest() # ReconcilePaymentRequest | 

    try:
        # Reconcile PaySimple payment.
        api_response = api_instance.pay_simple_reconcile_payment(company_id, reconcile_payment_request)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_reconcile_payment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **reconcile_payment_request** | [**ReconcilePaymentRequest**](ReconcilePaymentRequest.md)|  | 

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

# **pay_simple_search_contacts_jobs**
> PaysimpleSearchResultResourceModel pay_simple_search_contacts_jobs(company_id, model)

Contact Job Search

List any contacts associated to a paysimple customer ID if any. Job information is included as well.              <br />If paysimple customer id is filled in, then it prefers searching only by that field. If no results are returned by customer id, the rest of the fields are searched.              Does partial matching on name and email. For the appointment date, the time part is ignored.              <br />Pass in null or empty string to not include that parameter in the search.

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    company_id = 'company_id_example' # str | 
model = openapi_client.PaysimpleContactJobSearchBindingModel() # PaysimpleContactJobSearchBindingModel | 

    try:
        # Contact Job Search
        api_response = api_instance.pay_simple_search_contacts_jobs(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_search_contacts_jobs: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**PaysimpleContactJobSearchBindingModel**](PaysimpleContactJobSearchBindingModel.md)|  | 

### Return type

[**PaysimpleSearchResultResourceModel**](PaysimpleSearchResultResourceModel.md)

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

# **pay_simple_unlink_payment**
> str pay_simple_unlink_payment(company_id, unlink_payment_request)

Unlink a PaySimple payment.

This endpoint will unlink a PaySimple payment that was previously linked to a marketsharp contact and job.

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    company_id = 'company_id_example' # str | 
unlink_payment_request = openapi_client.UnlinkPaymentRequest() # UnlinkPaymentRequest | 

    try:
        # Unlink a PaySimple payment.
        api_response = api_instance.pay_simple_unlink_payment(company_id, unlink_payment_request)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_unlink_payment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **unlink_payment_request** | [**UnlinkPaymentRequest**](UnlinkPaymentRequest.md)|  | 

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

# **pay_simple_update_ach_account_info**
> PaySimpleACHResponse pay_simple_update_ach_account_info(company_id, update_ach_request)

Update ACH Account Info.

Updates the IsCheckingAccount on the ACH Account object for the account specified in the request body.

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    company_id = 'company_id_example' # str | 
update_ach_request = openapi_client.ACHRequest() # ACHRequest | 

    try:
        # Update ACH Account Info.
        api_response = api_instance.pay_simple_update_ach_account_info(company_id, update_ach_request)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_update_ach_account_info: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **update_ach_request** | [**ACHRequest**](ACHRequest.md)|  | 

### Return type

[**PaySimpleACHResponse**](PaySimpleACHResponse.md)

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

# **pay_simple_update_credit_card**
> PaySimpleMerchantOptionsResponse pay_simple_update_credit_card(company_id, cc_request)

Update Credit Card

 Makes a request to https://documentation.paysimple.com/reference#update-credit-card <br />    to update a credit card. Per Paysimple documentation: Only the ExpirationDate and BillingZipCode fields can be modified; changes to other fields will be ignored. <br /><br />    Request:<br />    { <br />     \"creditCardNumber\": \"9999999999999999\", //required but unused <br />     \"expirationDate\": \"03/2022\", //required in this format <br />     \"issuer\": \"Discover\", //required, must be ANY valid issuer, not updated <br />     \"billingZipCode\": \"54601\", <br /> // if this is not specified, the billing zip code will be set to null in the API regardless of current value    \"id\": 660832 //required account id <br />      // customerId: not shown, can be passed in, value is submitted to PaySimple API and entirely ignored <br />    } <br /><br />       Response: <br />   notice correct Issuer, customer Id, and Credit card returned compared to the Request <br />    { <br />       \"response\": { <br />           \"creditCardNumber\": \"\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*1111\", <br />           \"expirationDate\": \"03/2022\", <br />           \"issuer\": \"Visa\", <br />           \"billingZipCode\": \"54601\", <br />           \"customerId\": 476184, <br />           \"isDefault\": true, <br />           \"id\": 660832, <br />           \"lastModified\": \"2018-08-23T13:57:24.6298317Z\", <br />           \"createdOn\": \"2018-07-25T20:24:33Z\" <br />       }, <br />       \"meta\": { <br />           \"errors\": null, <br />           \"httpStatus\": \"OK\", <br />           \"httpStatusCode\": 200, <br />           \"pagingDetails\": null <br />       } <br />    } <br />

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
    api_instance = openapi_client.PaySimpleApi(api_client)
    company_id = 'company_id_example' # str | 
cc_request = openapi_client.CreditCardRequest() # CreditCardRequest | 

    try:
        # Update Credit Card
        api_response = api_instance.pay_simple_update_credit_card(company_id, cc_request)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling PaySimpleApi->pay_simple_update_credit_card: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **cc_request** | [**CreditCardRequest**](CreditCardRequest.md)|  | 

### Return type

[**PaySimpleMerchantOptionsResponse**](PaySimpleMerchantOptionsResponse.md)

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

