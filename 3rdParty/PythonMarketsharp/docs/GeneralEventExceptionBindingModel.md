# GeneralEventExceptionBindingModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**type_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**all_day_event** | **bool** |  | [optional] 
**start** | **datetime** |  | [optional] 
**end** | **datetime** |  | [optional] 
**category_ids** | **list[int]** |  | [optional] 
**last_update_date** | **datetime** |  | [optional] 
**last_update_by** | **str** |  | [optional] 
**created_date** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**send_email** | **bool** |  | [optional] 
**event_details** | **str** |  | [optional] 
**additional_details** | **dict(str, str)** |  | [optional] 
**event_type** | **int** |  | [optional] [readonly] 
**additional_resource_ids** | **list[int]** |  | [optional] [readonly] 
**resource_ids** | **list[int]** |  | [optional] [readonly] 
**recurrence_id** | **int** |  | [optional] [readonly] 
**r_rule** | **str** |  | [optional] [readonly] 
**rule_exception** | **str** |  | [optional] [readonly] 
**recurrence_start_date_time** | **datetime** |  | [optional] [readonly] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


