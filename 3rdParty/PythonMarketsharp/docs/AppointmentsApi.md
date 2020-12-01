# openapi_client.AppointmentsApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appointments_appt_results**](AppointmentsApi.md#appointments_appt_results) | **GET** /appointments/results | List active appointment results - Deprecated
[**appointments_filter_appointments**](AppointmentsApi.md#appointments_filter_appointments) | **POST** /companies/{companyId}/appointments/filter | Filter for appointments
[**appointments_get**](AppointmentsApi.md#appointments_get) | **GET** /appointments/{appointmentId} | Retrieve an appointment - Deprecated
[**appointments_get_appoinment_results**](AppointmentsApi.md#appointments_get_appoinment_results) | **GET** /companies/{companyId}/appointments/results/active | List active appointment results
[**appointments_get_appointment_by_id**](AppointmentsApi.md#appointments_get_appointment_by_id) | **GET** /companies/{companyId}/appointments/{appointmentId} | Retrieve an appointment
[**appointments_get_appointment_result_reasons**](AppointmentsApi.md#appointments_get_appointment_result_reasons) | **GET** /companies/{companyId}/appointments/resultreasons/active | List active appointment result reasons
[**appointments_rejection_reasons**](AppointmentsApi.md#appointments_rejection_reasons) | **GET** /appointments/reasons | List active appointment result reasons - Deprecated
[**appointments_result_appointment**](AppointmentsApi.md#appointments_result_appointment) | **POST** /companies/{companyId}/appointments/{appointmentId}/result | Result an appointment
[**appointments_search_appointments**](AppointmentsApi.md#appointments_search_appointments) | **POST** /appointments/search | Filter for appointments - Deprecated
[**appointments_update_appt_result**](AppointmentsApi.md#appointments_update_appt_result) | **POST** /appointments/resultAppt | Result an appointment - Deprecated


# **appointments_appt_results**
> ApptResultResourceModel appointments_appt_results()

List active appointment results - Deprecated

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
    api_instance = openapi_client.AppointmentsApi(api_client)
    
    try:
        # List active appointment results - Deprecated
        api_response = api_instance.appointments_appt_results()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AppointmentsApi->appointments_appt_results: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApptResultResourceModel**](ApptResultResourceModel.md)

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

# **appointments_filter_appointments**
> AppointmentResourceModel appointments_filter_appointments(company_id, query)

Filter for appointments

The result will be returned as JSON as shown below with the following key/value pairs. <br />  id: The oid representing the appointment<br />  contactId: The id of the associated contact<br />  inquiryId: The id of the lead inquiry record<br />  appointmentDateTime: The time the appointment is scheduled for.  Timezone is company Timezone.<br />  salesperson: The saleperson of for the appointment as set in the Salesperson 1 field<br />  salesperson2: The saleperson of for the appointment as set in the Salesperson 2 field<br />  type: The type of appointment as set in the Add/Edit Lead Appointment modal<br />  setBy: The name of the employee that set the appointment<br />  dateIssued: User editable field when appointment was issued<br />  result: Appointment result<br />  resultReason: The result reason for the appointment, description of what happened<br />  notes: The notes for the appointment<br />  address: The jobsite address if any part of the jobsite address is present otherwise the contact address<br />  addressLine2: The jobsite address line 2 if any part of the jobsite address is present otherwise the contact address<br />  city: The jobsite city if any part of the jobsite address info is present otherwise the contact city<br />  state: The jobsite state if any part of the jobsite address info is present otherwise the contact state<br />  zip: The jobsite zip if any part of the jobsite address info is present otherwise the contact zip<br />  directions: Directions to the job site address<br />  lastModifiedDate: This represents the most recent last updated date when looking at all the data (each appointment) returned excluding  setBy<br />

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
    api_instance = openapi_client.AppointmentsApi(api_client)
    company_id = 'company_id_example' # str | 
query = openapi_client.AppointmentsBindingModel() # AppointmentsBindingModel | 

    try:
        # Filter for appointments
        api_response = api_instance.appointments_filter_appointments(company_id, query)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AppointmentsApi->appointments_filter_appointments: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **query** | [**AppointmentsBindingModel**](AppointmentsBindingModel.md)|  | 

### Return type

[**AppointmentResourceModel**](AppointmentResourceModel.md)

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

# **appointments_get**
> AppointmentResourceModel appointments_get(appointment_id)

Retrieve an appointment - Deprecated

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
    api_instance = openapi_client.AppointmentsApi(api_client)
    appointment_id = 'appointment_id_example' # str | 

    try:
        # Retrieve an appointment - Deprecated
        api_response = api_instance.appointments_get(appointment_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AppointmentsApi->appointments_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appointment_id** | **str**|  | 

### Return type

[**AppointmentResourceModel**](AppointmentResourceModel.md)

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

# **appointments_get_appoinment_results**
> ApptResultResourceModel appointments_get_appoinment_results(company_id)

List active appointment results

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
    api_instance = openapi_client.AppointmentsApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # List active appointment results
        api_response = api_instance.appointments_get_appoinment_results(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AppointmentsApi->appointments_get_appoinment_results: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

### Return type

[**ApptResultResourceModel**](ApptResultResourceModel.md)

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

# **appointments_get_appointment_by_id**
> AppointmentResourceModel appointments_get_appointment_by_id(appointment_id, company_id)

Retrieve an appointment

See the Filter for appointments endpoint for more information

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
    api_instance = openapi_client.AppointmentsApi(api_client)
    appointment_id = 'appointment_id_example' # str | 
company_id = 'company_id_example' # str | 

    try:
        # Retrieve an appointment
        api_response = api_instance.appointments_get_appointment_by_id(appointment_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AppointmentsApi->appointments_get_appointment_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appointment_id** | **str**|  | 
 **company_id** | **str**|  | 

### Return type

[**AppointmentResourceModel**](AppointmentResourceModel.md)

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

# **appointments_get_appointment_result_reasons**
> RejectReasonResourceModel appointments_get_appointment_result_reasons(company_id)

List active appointment result reasons

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
    api_instance = openapi_client.AppointmentsApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # List active appointment result reasons
        api_response = api_instance.appointments_get_appointment_result_reasons(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AppointmentsApi->appointments_get_appointment_result_reasons: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

### Return type

[**RejectReasonResourceModel**](RejectReasonResourceModel.md)

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

# **appointments_rejection_reasons**
> RejectReasonResourceModel appointments_rejection_reasons()

List active appointment result reasons - Deprecated

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
    api_instance = openapi_client.AppointmentsApi(api_client)
    
    try:
        # List active appointment result reasons - Deprecated
        api_response = api_instance.appointments_rejection_reasons()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AppointmentsApi->appointments_rejection_reasons: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RejectReasonResourceModel**](RejectReasonResourceModel.md)

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

# **appointments_result_appointment**
> AppointmentResourceModel appointments_result_appointment(appointment_id, company_id, model)

Result an appointment

See the Filter for appointments endpoint for more information

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
    api_instance = openapi_client.AppointmentsApi(api_client)
    appointment_id = 'appointment_id_example' # str | 
company_id = 'company_id_example' # str | 
model = openapi_client.ApptResultBindingModel() # ApptResultBindingModel | 

    try:
        # Result an appointment
        api_response = api_instance.appointments_result_appointment(appointment_id, company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AppointmentsApi->appointments_result_appointment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appointment_id** | **str**|  | 
 **company_id** | **str**|  | 
 **model** | [**ApptResultBindingModel**](ApptResultBindingModel.md)|  | 

### Return type

[**AppointmentResourceModel**](AppointmentResourceModel.md)

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

# **appointments_search_appointments**
> object appointments_search_appointments(query)

Filter for appointments - Deprecated

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
    api_instance = openapi_client.AppointmentsApi(api_client)
    query = openapi_client.AppointmentsBindingModel() # AppointmentsBindingModel | 

    try:
        # Filter for appointments - Deprecated
        api_response = api_instance.appointments_search_appointments(query)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AppointmentsApi->appointments_search_appointments: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**AppointmentsBindingModel**](AppointmentsBindingModel.md)|  | 

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

# **appointments_update_appt_result**
> AppointmentResourceModel appointments_update_appt_result(model)

Result an appointment - Deprecated

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
    api_instance = openapi_client.AppointmentsApi(api_client)
    model = openapi_client.ApptResultBindingModel() # ApptResultBindingModel | 

    try:
        # Result an appointment - Deprecated
        api_response = api_instance.appointments_update_appt_result(model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AppointmentsApi->appointments_update_appt_result: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**ApptResultBindingModel**](ApptResultBindingModel.md)|  | 

### Return type

[**AppointmentResourceModel**](AppointmentResourceModel.md)

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

