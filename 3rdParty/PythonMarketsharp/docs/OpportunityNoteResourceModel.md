# OpportunityNoteResourceModel

Response/resource model containing opportunity note information.
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Id of the note. Auto incremented identity field. | [optional] 
**note** | **str** | Field containing note text. | [optional] 
**updated_utc** | **datetime** | Date that the note record was last updated. | [optional] 
**updated_by** | **str** | Id of the employee who last updated the note record. | [optional] 
**created_utc** | **datetime** | Date that the note record was created. | [optional] 
**created_by** | **str** | Id of the employee who created the note record. | [optional] 
**updated_by_detail** | [**EmployeePictureResourceModel**](EmployeePictureResourceModel.md) |  | [optional] 
**created_by_detail** | [**EmployeePictureResourceModel**](EmployeePictureResourceModel.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


