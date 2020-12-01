# coding: utf-8

"""
    MarketSharp CRM API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from openapi_client.api_client import ApiClient
from openapi_client.exceptions import (  # noqa: F401
    ApiTypeError,
    ApiValueError
)


class LeadCapturesApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def lead_captures_get_contacts(self, company_id, application_internal_name, model, **kwargs):  # noqa: E501
        """List active contacts submitted by lead capture app since latest updated date/time  # noqa: E501

        ContactId: The id representing the contact <br />  ThirdPartyId: Id generated by the third party. Populated via POST request to a MarketSharp lead capture endpoint and using thirdPartyId or MSM_thirdPartyId <br />  InquiryDateTime: Date/time of when the inquiry was created (this can be modified by the user <br />  AppointmentDate: Date/time of the appointment <br />  AppointmentSetDateTime: Date/time of when the appointment was set.  Time will always be 12:00am <br />  AppointmentResult: The current result of the appointment that was scheduled <br />  AppointmentPresenteDateTime: Populated when the current appointment result counts towards a presentation in MarketSharp.  Populates with appointment date/time <br />  AppointmentSoldDateTime: Populated when the current appointment result counts towards a sold appointment in MarketSharp.  Populates with appointment date/time <br />  ContractApprovedDateTime: Populated when the current contract status is marked Approved.  Returns contract date.  Time will always be 12:00am <br />  ContractStatus: Is a required field in MarketSharp <br />  LatestUpdatedTime: Takes the latest updated time between the inquiry, appointment, job or job product <br />  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.lead_captures_get_contacts(company_id, application_internal_name, model, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str company_id: (required)
        :param str application_internal_name: (required)
        :param LeadCaptureContactBindingModel model: (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: list[LeadCaptureContactResourceModel]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.lead_captures_get_contacts_with_http_info(company_id, application_internal_name, model, **kwargs)  # noqa: E501

    def lead_captures_get_contacts_with_http_info(self, company_id, application_internal_name, model, **kwargs):  # noqa: E501
        """List active contacts submitted by lead capture app since latest updated date/time  # noqa: E501

        ContactId: The id representing the contact <br />  ThirdPartyId: Id generated by the third party. Populated via POST request to a MarketSharp lead capture endpoint and using thirdPartyId or MSM_thirdPartyId <br />  InquiryDateTime: Date/time of when the inquiry was created (this can be modified by the user <br />  AppointmentDate: Date/time of the appointment <br />  AppointmentSetDateTime: Date/time of when the appointment was set.  Time will always be 12:00am <br />  AppointmentResult: The current result of the appointment that was scheduled <br />  AppointmentPresenteDateTime: Populated when the current appointment result counts towards a presentation in MarketSharp.  Populates with appointment date/time <br />  AppointmentSoldDateTime: Populated when the current appointment result counts towards a sold appointment in MarketSharp.  Populates with appointment date/time <br />  ContractApprovedDateTime: Populated when the current contract status is marked Approved.  Returns contract date.  Time will always be 12:00am <br />  ContractStatus: Is a required field in MarketSharp <br />  LatestUpdatedTime: Takes the latest updated time between the inquiry, appointment, job or job product <br />  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.lead_captures_get_contacts_with_http_info(company_id, application_internal_name, model, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str company_id: (required)
        :param str application_internal_name: (required)
        :param LeadCaptureContactBindingModel model: (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(list[LeadCaptureContactResourceModel], status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'company_id',
            'application_internal_name',
            'model'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method lead_captures_get_contacts" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'company_id' is set
        if self.api_client.client_side_validation and ('company_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['company_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `company_id` when calling `lead_captures_get_contacts`")  # noqa: E501
        # verify the required parameter 'application_internal_name' is set
        if self.api_client.client_side_validation and ('application_internal_name' not in local_var_params or  # noqa: E501
                                                        local_var_params['application_internal_name'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `application_internal_name` when calling `lead_captures_get_contacts`")  # noqa: E501
        # verify the required parameter 'model' is set
        if self.api_client.client_side_validation and ('model' not in local_var_params or  # noqa: E501
                                                        local_var_params['model'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `model` when calling `lead_captures_get_contacts`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'company_id' in local_var_params:
            path_params['companyId'] = local_var_params['company_id']  # noqa: E501
        if 'application_internal_name' in local_var_params:
            path_params['applicationInternalName'] = local_var_params['application_internal_name']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'model' in local_var_params:
            body_params = local_var_params['model']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json', 'text/json', 'application/xml', 'text/xml'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json', 'text/json', 'application/x-www-form-urlencoded'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/companies/{companyId}/leadcaptures/{applicationInternalName}/contacts/filter', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[LeadCaptureContactResourceModel]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def lead_captures_get_custom_lead_captures(self, company_id, **kwargs):  # noqa: E501
        """List all custom lead captures  # noqa: E501

        Returns a list of all of a company's custom lead captures  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.lead_captures_get_custom_lead_captures(company_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str company_id: (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: list[SimpleLeadCaptureResourceModel]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.lead_captures_get_custom_lead_captures_with_http_info(company_id, **kwargs)  # noqa: E501

    def lead_captures_get_custom_lead_captures_with_http_info(self, company_id, **kwargs):  # noqa: E501
        """List all custom lead captures  # noqa: E501

        Returns a list of all of a company's custom lead captures  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.lead_captures_get_custom_lead_captures_with_http_info(company_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str company_id: (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(list[SimpleLeadCaptureResourceModel], status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'company_id'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method lead_captures_get_custom_lead_captures" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'company_id' is set
        if self.api_client.client_side_validation and ('company_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['company_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `company_id` when calling `lead_captures_get_custom_lead_captures`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'company_id' in local_var_params:
            path_params['companyId'] = local_var_params['company_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json', 'text/json', 'application/xml', 'text/xml'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/companies/{companyId}/leadcaptures/custom', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[SimpleLeadCaptureResourceModel]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def lead_captures_get_global_lead_capture_contacts(self, application_internal_name, model, **kwargs):  # noqa: E501
        """List global active contacts submitted by lead capture app since latest updated date/time  # noqa: E501

        CompanyId: The company id the contact is tied to <br />  ContactId: The id representing the contact <br />  ThirdPartyId: Id generated by the third party. Populated via POST request to a MarketSharp lead capture endpoint and using thirdPartyId or MSM_thirdPartyId <br />  InquiryDateTime: Date/time of when the inquiry was created (this can be modified by the user <br />  AppointmentDate: Date/time of the appointment <br />  AppointmentSetDateTime: Date/time of when the appointment was set.  Time will always be 12:00am <br />  AppointmentResult: The current result of the appointment that was scheduled <br />  AppointmentPresenteDateTime: Populated when the current appointment result counts towards a presentation in MarketSharp.  Populates with appointment date/time <br />  AppointmentSoldDateTime: Populated when the current appointment result counts towards a sold appointment in MarketSharp.  Populates with appointment date/time <br />  ContractApprovedDateTime: Populated when the current contract status is marked Approved.  Returns contract date.  Time will always be 12:00am <br />  ContractStatus: Is a required field in MarketSharp <br />  LatestUpdatedTime: Takes the latest updated time between the inquiry, appointment, job or job product <br />  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.lead_captures_get_global_lead_capture_contacts(application_internal_name, model, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str application_internal_name: (required)
        :param GlobalLeadCaptureContactBindingModel model: (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: list[GlobalLeadCaptureContactResourceModel]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.lead_captures_get_global_lead_capture_contacts_with_http_info(application_internal_name, model, **kwargs)  # noqa: E501

    def lead_captures_get_global_lead_capture_contacts_with_http_info(self, application_internal_name, model, **kwargs):  # noqa: E501
        """List global active contacts submitted by lead capture app since latest updated date/time  # noqa: E501

        CompanyId: The company id the contact is tied to <br />  ContactId: The id representing the contact <br />  ThirdPartyId: Id generated by the third party. Populated via POST request to a MarketSharp lead capture endpoint and using thirdPartyId or MSM_thirdPartyId <br />  InquiryDateTime: Date/time of when the inquiry was created (this can be modified by the user <br />  AppointmentDate: Date/time of the appointment <br />  AppointmentSetDateTime: Date/time of when the appointment was set.  Time will always be 12:00am <br />  AppointmentResult: The current result of the appointment that was scheduled <br />  AppointmentPresenteDateTime: Populated when the current appointment result counts towards a presentation in MarketSharp.  Populates with appointment date/time <br />  AppointmentSoldDateTime: Populated when the current appointment result counts towards a sold appointment in MarketSharp.  Populates with appointment date/time <br />  ContractApprovedDateTime: Populated when the current contract status is marked Approved.  Returns contract date.  Time will always be 12:00am <br />  ContractStatus: Is a required field in MarketSharp <br />  LatestUpdatedTime: Takes the latest updated time between the inquiry, appointment, job or job product <br />  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.lead_captures_get_global_lead_capture_contacts_with_http_info(application_internal_name, model, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str application_internal_name: (required)
        :param GlobalLeadCaptureContactBindingModel model: (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(list[GlobalLeadCaptureContactResourceModel], status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'application_internal_name',
            'model'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method lead_captures_get_global_lead_capture_contacts" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'application_internal_name' is set
        if self.api_client.client_side_validation and ('application_internal_name' not in local_var_params or  # noqa: E501
                                                        local_var_params['application_internal_name'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `application_internal_name` when calling `lead_captures_get_global_lead_capture_contacts`")  # noqa: E501
        # verify the required parameter 'model' is set
        if self.api_client.client_side_validation and ('model' not in local_var_params or  # noqa: E501
                                                        local_var_params['model'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `model` when calling `lead_captures_get_global_lead_capture_contacts`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'application_internal_name' in local_var_params:
            path_params['applicationInternalName'] = local_var_params['application_internal_name']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'model' in local_var_params:
            body_params = local_var_params['model']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json', 'text/json', 'application/xml', 'text/xml'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/leadcaptures/{applicationInternalName}/contacts/filter', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[GlobalLeadCaptureContactResourceModel]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def lead_captures_geti_capture_lead_captures(self, company_id, **kwargs):  # noqa: E501
        """List iCapture lead captures  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.lead_captures_geti_capture_lead_captures(company_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str company_id: (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: list[LeadCaptureResourceModel]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.lead_captures_geti_capture_lead_captures_with_http_info(company_id, **kwargs)  # noqa: E501

    def lead_captures_geti_capture_lead_captures_with_http_info(self, company_id, **kwargs):  # noqa: E501
        """List iCapture lead captures  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.lead_captures_geti_capture_lead_captures_with_http_info(company_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str company_id: (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(list[LeadCaptureResourceModel], status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'company_id'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method lead_captures_geti_capture_lead_captures" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'company_id' is set
        if self.api_client.client_side_validation and ('company_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['company_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `company_id` when calling `lead_captures_geti_capture_lead_captures`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'company_id' in local_var_params:
            path_params['companyId'] = local_var_params['company_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json', 'text/json', 'application/xml', 'text/xml'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/companies/{companyId}/leadcaptures/iCapture', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[LeadCaptureResourceModel]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)