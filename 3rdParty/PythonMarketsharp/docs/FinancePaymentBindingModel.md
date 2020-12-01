# FinancePaymentBindingModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the payment history to update | [optional] 
**contract_id** | **str** |  | 
**payment_type** | **str** | Downpayment, payment, .... user defined data | 
**payment_method** | **str** | The payment method of cash, credit card, check, ach. User defined data, but PaySimple gurantees &#39;Credit Card&#39; and &#39;ACH&#39; will be available | [optional] 
**description** | **str** | An optional bit of user entered text that can be said provides additional information about a payment. | [optional] 
**payment_date** | **datetime** | Date of Payment | [optional] 
**amount** | **float** | Stored as negative values in the database | 
**cash_finance** | **str** | Used as part of Applies to Contract for finance or cash.  NONE: does not apply to the contract  CASH: applies to contract  FINANCE: applies to contract | 
**pay_simple_payment_id** | **int** | ID of PaySimple Payment if applicable | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


