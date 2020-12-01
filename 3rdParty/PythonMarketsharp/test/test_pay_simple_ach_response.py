# coding: utf-8

"""
    MarketSharp CRM API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest
import datetime

import openapi_client
from openapi_client.models.pay_simple_ach_response import PaySimpleACHResponse  # noqa: E501
from openapi_client.rest import ApiException

class TestPaySimpleACHResponse(unittest.TestCase):
    """PaySimpleACHResponse unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test PaySimpleACHResponse
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.pay_simple_ach_response.PaySimpleACHResponse()  # noqa: E501
        if include_optional :
            return PaySimpleACHResponse(
                response = openapi_client.models.ach_response.ACHResponse(
                    is_checking_account = True, 
                    routing_number = '0', 
                    account_number = '0', 
                    bank_name = '0', 
                    customer_id = 56, 
                    is_default = True, 
                    id = 56, 
                    last_modified = '0', 
                    created_on = '0', ), 
                meta = openapi_client.models.meta.Meta(
                    errors = openapi_client.models.errors.Errors(
                        error_code = '0', 
                        error_messages = [
                            openapi_client.models.error_message.ErrorMessage(
                                field = '0', 
                                message = '0', )
                            ], 
                        trace_code = '0', ), 
                    http_status = '0', 
                    http_status_code = 56, 
                    paging_details = openapi_client.models.paging_details.PagingDetails(
                        total_items = 56, 
                        page = 56, 
                        items_per_page = 56, ), )
            )
        else :
            return PaySimpleACHResponse(
        )

    def testPaySimpleACHResponse(self):
        """Test PaySimpleACHResponse"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()