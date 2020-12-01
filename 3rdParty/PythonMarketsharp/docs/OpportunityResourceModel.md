# OpportunityResourceModel

This is the Opportunity resource model. It's a mix of Inquiry/Job Information. It may be used in the Inquiries/Jobs Controller
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inquiry_id** | **str** | The lead/inquiry id | [optional] 
**contact_id** | **str** | The contact this lead and job is tied to | [optional] 
**job_id** | **str** | Will be null if no job has been created.  A lead may be tied to more than one job, but we&#39;re choosing to make each job/lead a single opportunity | [optional] 
**inquiry_description** | **str** | Description field. Not used by classic marketsharp. Lead Capture can insert some description here sometimes | [optional] 
**inquiry_notes** | **str** | Notes | [optional] 
**inquiry_date_time** | **datetime** | Inquiry Date Time. Usually set by an employee when the inquiry came in | [optional] 
**inquiry_division** | **str** | Text containing inquiry division if any | [optional] 
**inquiry_status_id** | **int** | Inquiry status id if any | [optional] 
**job_site_address** | [**AddressResourceModel**](AddressResourceModel.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


