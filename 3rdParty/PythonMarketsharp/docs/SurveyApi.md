# openapi_client.SurveyApi

All URIs are relative to *https://restapi1aws.marketsharpm.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**survey_get_guild_quality_jobs_for_export**](SurveyApi.md#survey_get_guild_quality_jobs_for_export) | **GET** /companies/{companyId}/guildquality/contacts | GuildQuality Get Contacts To Survey
[**survey_mark_quild_quality_job_surveyed**](SurveyApi.md#survey_mark_quild_quality_job_surveyed) | **PUT** /companies/{companyId}/guildquality/jobs/surveyed | GuildQuality Mark Job as Surveyed/Exported


# **survey_get_guild_quality_jobs_for_export**
> GuildQualityJob survey_get_guild_quality_jobs_for_export(company_id)

GuildQuality Get Contacts To Survey

This method may called as often as needed and will not cause any data modifications.  <br />Returns a list of contacts that are valid to send surveys to.   <br />If a contact has multiple jobs that are valid to survey, there will be multiple records with the same contact information, but different UniqueJobId  <br /><br />SurveyQueueDate: This date will be the date after it is valid to send the survey. It should not be possible to have dates in the future. Will never be null, but it could be DateTime.MaxValue as an exception case

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
    api_instance = openapi_client.SurveyApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # GuildQuality Get Contacts To Survey
        api_response = api_instance.survey_get_guild_quality_jobs_for_export(company_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SurveyApi->survey_get_guild_quality_jobs_for_export: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

### Return type

[**GuildQualityJob**](GuildQualityJob.md)

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

# **survey_mark_quild_quality_job_surveyed**
> str survey_mark_quild_quality_job_surveyed(company_id, model)

GuildQuality Mark Job as Surveyed/Exported

This method may called as often as needed. Contacts will only be marked as surveyed the first time. Subsequent calls have no effect.  <br /><br />This endpoint is used to exclude contacts to be returned from the \"GuildQuality Get Contacts To Survey\" endpoint

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
    api_instance = openapi_client.SurveyApi(api_client)
    company_id = 'company_id_example' # str | 
model = [openapi_client.GuildQualityJobSurveyedBindingModel()] # list[GuildQualityJobSurveyedBindingModel] | 

    try:
        # GuildQuality Mark Job as Surveyed/Exported
        api_response = api_instance.survey_mark_quild_quality_job_surveyed(company_id, model)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SurveyApi->survey_mark_quild_quality_job_surveyed: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **model** | [**list[GuildQualityJobSurveyedBindingModel]**](GuildQualityJobSurveyedBindingModel.md)|  | 

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

