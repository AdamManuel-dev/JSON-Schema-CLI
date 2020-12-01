# openapi_client.InquiriesApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inquiries_delete_opportunity_note**](InquiriesApi.md#inquiries_delete_opportunity_note) | **DELETE** /companies/{companyId}/opportunities/{inquiryId}/notes/{noteId} | Delete opportunity note.
[**inquiries_filter_inquiries**](InquiriesApi.md#inquiries_filter_inquiries) | **POST** /companies/{companyId}/inquiries/filter | Filter for inquiries
[**inquiries_get_inquiry**](InquiriesApi.md#inquiries_get_inquiry) | **GET** /inquiries/{inquiryId} | Retrieve an inquiry - Deprecated
[**inquiries_get_inquiry_by_id**](InquiriesApi.md#inquiries_get_inquiry_by_id) | **GET** /companies/{companyId}/inquiries/{inquiryId} | Retrieve an inquiry by Id
[**inquiries_get_inquiry_job_address**](InquiriesApi.md#inquiries_get_inquiry_job_address) | **GET** /companies/{companyId}/opportunities/address/{inquiryId}/{jobId} | Get inquiry or job address.
[**inquiries_get_opportunity**](InquiriesApi.md#inquiries_get_opportunity) | **GET** /companies/{companyId}/opportunities/{inquiryId} | Get Opportunity By Id
[**inquiries_get_opportunity_note**](InquiriesApi.md#inquiries_get_opportunity_note) | **GET** /companies/{companyId}/opportunities/{inquiryId}/note/{opportunityNoteId} | Get opportunity note.
[**inquiries_get_opportunity_notes**](InquiriesApi.md#inquiries_get_opportunity_notes) | **GET** /companies/{companyId}/opportunities/{inquiryId}/notes/{noteType} | Get opportunity notes.
[**inquiries_get_opportunity_or_job_name**](InquiriesApi.md#inquiries_get_opportunity_or_job_name) | **GET** /companies/{companyId}/opportunities/name/{inquiryId}/{jobId} | Get Opportunity Name by Id
[**inquiries_save_opportunity_notes**](InquiriesApi.md#inquiries_save_opportunity_notes) | **POST** /companies/{companyId}/opportunities/notes | Save opportunity notes.
[**inquiries_search_inquiries**](InquiriesApi.md#inquiries_search_inquiries) | **POST** /companies/{companyid}/inquiries/search | Search for inquiries
[**inquiries_search_inquiries_0**](InquiriesApi.md#inquiries_search_inquiries_0) | **POST** /inquiries/search2 | Search for inquiries
[**inquiries_search_inquiries_1**](InquiriesApi.md#inquiries_search_inquiries_1) | **POST** /inquiries/search | Filter for inquiries - Deprecated
[**inquiries_update_inquiry_job_address**](InquiriesApi.md#inquiries_update_inquiry_job_address) | **PUT** /companies/{companyId}/opportunities/address/{inquiryId}/{jobId} | Update inquiry or job address.
[**inquiries_update_inquiry_qualification**](InquiriesApi.md#inquiries_update_inquiry_qualification) | **PUT** /companies/{companyId}/opportunities/qualification/{inquiryId} | Qualify an Inquiry/Opportunity
[**inquiries_update_opportunity_or_job_name**](InquiriesApi.md#inquiries_update_opportunity_or_job_name) | **PUT** /companies/{companyId}/opportunities/name/{inquiryId}/{jobId} | Update opportunity or job name.


# **inquiries_delete_opportunity_note**
> str inquiries_delete_opportunity_note(note_id, inquiry_id, company_id)

Delete opportunity note.

Deletes the opportunity note based on the note id and inquiry id passed.

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
    api_instance = openapi_client.InquiriesApi(api_client)
    note_id = 56 # int | Id of the note to be deleted.
inquiry_id = 'inquiry_id_example' # str | Id of the inquiry that the note is associated with.
company_id = 'company_id_example' # str | 

    try:
        # Delete opportunity note.
        api_response = api_instance.inquiries_delete_opportunity_note(note_id, inquiry_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_delete_opportunity_note: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note_id** | **int**| Id of the note to be deleted. | 
 **inquiry_id** | **str**| Id of the inquiry that the note is associated with. | 
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

# **inquiries_filter_inquiries**
> list[InquiryResourceModel] inquiries_filter_inquiries(company_id, query)

Filter for inquiries

filter parameters are optional  <br />pageNumber and rowsPerPage default to 1st page and 1000 inquiries

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
    api_instance = openapi_client.InquiriesApi(api_client)
    company_id = 'company_id_example' # str | 
query = openapi_client.InquiriesBindingModel() # InquiriesBindingModel | 

    try:
        # Filter for inquiries
        api_response = api_instance.inquiries_filter_inquiries(company_id, query)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_filter_inquiries: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **query** | [**InquiriesBindingModel**](InquiriesBindingModel.md)|  | 

### Return type

[**list[InquiryResourceModel]**](InquiryResourceModel.md)

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

# **inquiries_get_inquiry**
> object inquiries_get_inquiry(inquiry_id)

Retrieve an inquiry - Deprecated

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
    api_instance = openapi_client.InquiriesApi(api_client)
    inquiry_id = 'inquiry_id_example' # str | 

    try:
        # Retrieve an inquiry - Deprecated
        api_response = api_instance.inquiries_get_inquiry(inquiry_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_get_inquiry: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inquiry_id** | **str**|  | 

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

# **inquiries_get_inquiry_by_id**
> list[InquiryResourceModel] inquiries_get_inquiry_by_id(inquiry_id, company_id)

Retrieve an inquiry by Id

Return a single inquiry by id

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
    api_instance = openapi_client.InquiriesApi(api_client)
    inquiry_id = 'inquiry_id_example' # str | 
company_id = 'company_id_example' # str | 

    try:
        # Retrieve an inquiry by Id
        api_response = api_instance.inquiries_get_inquiry_by_id(inquiry_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_get_inquiry_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inquiry_id** | **str**|  | 
 **company_id** | **str**|  | 

### Return type

[**list[InquiryResourceModel]**](InquiryResourceModel.md)

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

# **inquiries_get_inquiry_job_address**
> AddressResourceModel inquiries_get_inquiry_job_address(inquiry_id, job_id, company_id)

Get inquiry or job address.

Gets either the inquiry or job address.    If a job id is passed in addition to the inquiry id then the job address will be grabbed.    If only an inquiry id is passed then the inquiry address is grabbed.

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
    api_instance = openapi_client.InquiriesApi(api_client)
    inquiry_id = 'inquiry_id_example' # str | Inquiry Id.
job_id = 'job_id_example' # str | Job id. Optional.
company_id = 'company_id_example' # str | 

    try:
        # Get inquiry or job address.
        api_response = api_instance.inquiries_get_inquiry_job_address(inquiry_id, job_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_get_inquiry_job_address: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inquiry_id** | **str**| Inquiry Id. | 
 **job_id** | **str**| Job id. Optional. | 
 **company_id** | **str**|  | 

### Return type

[**AddressResourceModel**](AddressResourceModel.md)

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

# **inquiries_get_opportunity**
> OpportunityResourceModel inquiries_get_opportunity(inquiry_id, company_id, job_id=job_id)

Get Opportunity By Id

This is an inquiry combined with a job. The jobsite address comes from the job if specified. JobId is optional

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
    api_instance = openapi_client.InquiriesApi(api_client)
    inquiry_id = 'inquiry_id_example' # str | 
company_id = 'company_id_example' # str | 
job_id = 'job_id_example' # str |  (optional)

    try:
        # Get Opportunity By Id
        api_response = api_instance.inquiries_get_opportunity(inquiry_id, company_id, job_id=job_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_get_opportunity: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inquiry_id** | **str**|  | 
 **company_id** | **str**|  | 
 **job_id** | **str**|  | [optional] 

### Return type

[**OpportunityResourceModel**](OpportunityResourceModel.md)

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

# **inquiries_get_opportunity_note**
> OpportunityNoteResourceModel inquiries_get_opportunity_note(inquiry_id, opportunity_note_id, company_id)

Get opportunity note.

Retrieves a single note based on the information passed.

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
    api_instance = openapi_client.InquiriesApi(api_client)
    inquiry_id = 'inquiry_id_example' # str | Inquiry Id.
opportunity_note_id = 56 # int | Id of the note.
company_id = 'company_id_example' # str | 

    try:
        # Get opportunity note.
        api_response = api_instance.inquiries_get_opportunity_note(inquiry_id, opportunity_note_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_get_opportunity_note: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inquiry_id** | **str**| Inquiry Id. | 
 **opportunity_note_id** | **int**| Id of the note. | 
 **company_id** | **str**|  | 

### Return type

[**OpportunityNoteResourceModel**](OpportunityNoteResourceModel.md)

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

# **inquiries_get_opportunity_notes**
> list[OpportunityNoteResourceModel] inquiries_get_opportunity_notes(inquiry_id, note_type, company_id)

Get opportunity notes.

Retrieves all notes for a lead based on the type of note passed.

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
    api_instance = openapi_client.InquiriesApi(api_client)
    inquiry_id = 'inquiry_id_example' # str | Inquiry Id.
note_type = 56 # int | Type of note. Inquiry notes = 1 and Job notes = 2.
company_id = 'company_id_example' # str | 

    try:
        # Get opportunity notes.
        api_response = api_instance.inquiries_get_opportunity_notes(inquiry_id, note_type, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_get_opportunity_notes: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inquiry_id** | **str**| Inquiry Id. | 
 **note_type** | **int**| Type of note. Inquiry notes &#x3D; 1 and Job notes &#x3D; 2. | 
 **company_id** | **str**|  | 

### Return type

[**list[OpportunityNoteResourceModel]**](OpportunityNoteResourceModel.md)

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

# **inquiries_get_opportunity_or_job_name**
> str inquiries_get_opportunity_or_job_name(inquiry_id, job_id, company_id)

Get Opportunity Name by Id

Retrieves the Opportunity name by Inquiry or Job Id. If Job Id is specified, then Job Name is returned. If only Inquiry Id is specified, then Opportunity Name is returned

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
    api_instance = openapi_client.InquiriesApi(api_client)
    inquiry_id = 'inquiry_id_example' # str | Inquiry Id
job_id = 'job_id_example' # str | Job Id. Optional.
company_id = 'company_id_example' # str | 

    try:
        # Get Opportunity Name by Id
        api_response = api_instance.inquiries_get_opportunity_or_job_name(inquiry_id, job_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_get_opportunity_or_job_name: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inquiry_id** | **str**| Inquiry Id | 
 **job_id** | **str**| Job Id. Optional. | 
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

# **inquiries_save_opportunity_notes**
> OpportunityNoteResourceModel inquiries_save_opportunity_notes(company_id, opportunity_note_to_save)

Save opportunity notes.

Saves the opportunity note record.  If a note id is passed then the existing note will be updated.  If the note id is omitted then a new record will be inserted. The save will return the updated opportunity note record.<br /><br />   Request:<br />   { <br />    \"id\": 1, // Optional. Id of the note. Pass the Id of the note to update an existing note.  Omit the note id to insert a new note record.<br />    \"inquiryId\": \"BC0607CC-CB12-48BD-AE27-95848710BF24\", // Required. Id of the inquiry that the note is being saved to.<br />    \"note\": \"Sample note text.\", // Required. Note text. <br />    \"opportunityNoteType\": 1 // Optional. Required for insert and ignored when updating. Opportunity note type. Inquiry = 1. Job = 2.  <br /> }

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
    api_instance = openapi_client.InquiriesApi(api_client)
    company_id = 'company_id_example' # str | 
opportunity_note_to_save = openapi_client.OpportunityNoteBindingModel() # OpportunityNoteBindingModel | Model containing opportunity note information to be saved.

    try:
        # Save opportunity notes.
        api_response = api_instance.inquiries_save_opportunity_notes(company_id, opportunity_note_to_save)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_save_opportunity_notes: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **opportunity_note_to_save** | [**OpportunityNoteBindingModel**](OpportunityNoteBindingModel.md)| Model containing opportunity note information to be saved. | 

### Return type

[**OpportunityNoteResourceModel**](OpportunityNoteResourceModel.md)

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

# **inquiries_search_inquiries**
> list[InquirySearchResult] inquiries_search_inquiries(companyid, inquiry)

Search for inquiries

QuickFind - Inquiry Search. Find inquiries with permissions by checking employee id in the bearer token.              <br /><br /> Employee Id in the bearer token is required

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
    api_instance = openapi_client.InquiriesApi(api_client)
    companyid = 'companyid_example' # str | 
inquiry = openapi_client.InquirySearchBindingModel() # InquirySearchBindingModel | 

    try:
        # Search for inquiries
        api_response = api_instance.inquiries_search_inquiries(companyid, inquiry)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_search_inquiries: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyid** | **str**|  | 
 **inquiry** | [**InquirySearchBindingModel**](InquirySearchBindingModel.md)|  | 

### Return type

[**list[InquirySearchResult]**](InquirySearchResult.md)

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

# **inquiries_search_inquiries_0**
> list[MultiCompanyInquirySearchResult] inquiries_search_inquiries_0(inquiry)

Search for inquiries

Search inquiries across all companies in marketsharp database with employee permissions.              This uses the employeeId in the bearer token.              In order to access all the databases, the employee must be shared down from the parent down to the child.              <br /><br />companyId parameter looks to accept a comma delimited list of company id: eg 3,2,1              <br /><br /> Employee Id in the bearer token is required

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
    api_instance = openapi_client.InquiriesApi(api_client)
    inquiry = openapi_client.InquirySearchBindingModel() # InquirySearchBindingModel | 

    try:
        # Search for inquiries
        api_response = api_instance.inquiries_search_inquiries_0(inquiry)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_search_inquiries_0: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inquiry** | [**InquirySearchBindingModel**](InquirySearchBindingModel.md)|  | 

### Return type

[**list[MultiCompanyInquirySearchResult]**](MultiCompanyInquirySearchResult.md)

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

# **inquiries_search_inquiries_1**
> object inquiries_search_inquiries_1(query)

Filter for inquiries - Deprecated

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
    api_instance = openapi_client.InquiriesApi(api_client)
    query = openapi_client.InquiriesBindingModel() # InquiriesBindingModel | 

    try:
        # Filter for inquiries - Deprecated
        api_response = api_instance.inquiries_search_inquiries_1(query)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_search_inquiries_1: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**InquiriesBindingModel**](InquiriesBindingModel.md)|  | 

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

# **inquiries_update_inquiry_job_address**
> str inquiries_update_inquiry_job_address(company_id, inquiry_id, job_id, address_to_update)

Update inquiry or job address.

Updates either the inquiry or job address.  If a job id is passed in addition to the inquiry id then the job address will be updated.  If only an inquiry id is passed then the inquiry address is updated.

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
    api_instance = openapi_client.InquiriesApi(api_client)
    company_id = 'company_id_example' # str | Database company id.
inquiry_id = 'inquiry_id_example' # str | Inquiry Id.
job_id = 'job_id_example' # str | Job id. Optional.
address_to_update = openapi_client.AddressBindingModel() # AddressBindingModel | Model containing address information to be updated.

    try:
        # Update inquiry or job address.
        api_response = api_instance.inquiries_update_inquiry_job_address(company_id, inquiry_id, job_id, address_to_update)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_update_inquiry_job_address: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| Database company id. | 
 **inquiry_id** | **str**| Inquiry Id. | 
 **job_id** | **str**| Job id. Optional. | 
 **address_to_update** | [**AddressBindingModel**](AddressBindingModel.md)| Model containing address information to be updated. | 

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

# **inquiries_update_inquiry_qualification**
> str inquiries_update_inquiry_qualification(inquiry_id, company_id)

Qualify an Inquiry/Opportunity

Qualifies an Inquiry/Opportunity. Sets the Qualified_By and Qualified_Date_Utc fields on the Lead table.

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
    api_instance = openapi_client.InquiriesApi(api_client)
    inquiry_id = 'inquiry_id_example' # str | 
company_id = 'company_id_example' # str | 

    try:
        # Qualify an Inquiry/Opportunity
        api_response = api_instance.inquiries_update_inquiry_qualification(inquiry_id, company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_update_inquiry_qualification: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inquiry_id** | **str**|  | 
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

# **inquiries_update_opportunity_or_job_name**
> str inquiries_update_opportunity_or_job_name(company_id, inquiry_id, job_id, name_to_be_updated)

Update opportunity or job name.

Updates either the opportunity or job name. If a job id is passed in addition to the inquiry id the the job name will be updated. If only an inquiry id is passed then the opportunity name is updated.

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
    api_instance = openapi_client.InquiriesApi(api_client)
    company_id = 'company_id_example' # str | Database company id.
inquiry_id = 'inquiry_id_example' # str | Inquiry Id.
job_id = 'job_id_example' # str | Job id. Optional.
name_to_be_updated = openapi_client.SimpleOpportunityBindingModel() # SimpleOpportunityBindingModel | Model containing name to be updated to.

    try:
        # Update opportunity or job name.
        api_response = api_instance.inquiries_update_opportunity_or_job_name(company_id, inquiry_id, job_id, name_to_be_updated)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling InquiriesApi->inquiries_update_opportunity_or_job_name: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| Database company id. | 
 **inquiry_id** | **str**| Inquiry Id. | 
 **job_id** | **str**| Job id. Optional. | 
 **name_to_be_updated** | [**SimpleOpportunityBindingModel**](SimpleOpportunityBindingModel.md)| Model containing name to be updated to. | 

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

