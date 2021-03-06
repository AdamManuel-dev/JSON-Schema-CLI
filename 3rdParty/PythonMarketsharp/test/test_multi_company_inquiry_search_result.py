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
from openapi_client.models.multi_company_inquiry_search_result import MultiCompanyInquirySearchResult  # noqa: E501
from openapi_client.rest import ApiException

class TestMultiCompanyInquirySearchResult(unittest.TestCase):
    """MultiCompanyInquirySearchResult unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test MultiCompanyInquirySearchResult
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.multi_company_inquiry_search_result.MultiCompanyInquirySearchResult()  # noqa: E501
        if include_optional :
            return MultiCompanyInquirySearchResult(
                ms_company = '0', 
                coy_oid = '0', 
                contact_type = '0', 
                oid = '0', 
                last_name = '0', 
                first_name = '0', 
                company = '0', 
                primary_email = '0', 
                secondary_email = '0', 
                teritiary_email = '0', 
                inquiry_date_time = '0', 
                inquiry_address_line_one = '0', 
                inquiry_address_line_two = '0', 
                inquiry_city = '0', 
                inquiry_state = '0', 
                inquiry_zip = '0', 
                primary_lead_source = '0', 
                secondary_lead_source = '0', 
                phone_numbers = [
                    '0'
                    ], 
                product_interest = '0'
            )
        else :
            return MultiCompanyInquirySearchResult(
        )

    def testMultiCompanyInquirySearchResult(self):
        """Test MultiCompanyInquirySearchResult"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
