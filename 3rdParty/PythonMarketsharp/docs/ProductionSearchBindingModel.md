# ProductionSearchBindingModel

This is the model used on the production process list page to hold the search options
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**view_id** | **str** |  | [optional] 
**assigned_to** | **str** |  | [optional] 
**salesperson** | **str** |  | [optional] 
**process** | **str** |  | [optional] 
**product** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**page_number** | **int** |  | [optional] 
**pagesize** | **int** |  | [optional] 
**company_id** | **str** |  | [optional] 
**logged_in_employee_id** | **str** |  | [optional] 
**calculated_date_field_type** | **str** |  | [optional] 
**calculated_start_comparison** | **str** |  | [optional] 
**calculated_end_comparison** | **str** |  | [optional] 
**calculated_start_date** | **datetime** |  | [optional] 
**calculated_end_date** | **datetime** |  | [optional] 
**date_range_type** | **str** | The selected dropdown, will be a user friendly date search name (this week) or set to customDateRange | [optional] 
**custom_date_field** | **str** | If set, will tell us what date field custom start and end will pertain to | [optional] 
**custom_start** | **datetime** |  | [optional] 
**custom_end** | **datetime** |  | [optional] 
**is_custom_date** | **bool** | True for when custom dates should be respected | [optional] [readonly] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


