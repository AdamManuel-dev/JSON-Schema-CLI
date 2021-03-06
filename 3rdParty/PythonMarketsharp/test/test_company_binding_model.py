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
from openapi_client.models.company_binding_model import CompanyBindingModel  # noqa: E501
from openapi_client.rest import ApiException

class TestCompanyBindingModel(unittest.TestCase):
    """CompanyBindingModel unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test CompanyBindingModel
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.company_binding_model.CompanyBindingModel()  # noqa: E501
        if include_optional :
            return CompanyBindingModel(
                name = '0', 
                address = '0', 
                address2 = '0', 
                city = '0', 
                state = '0', 
                zip = '0', 
                phonenumber = '0', 
                fax = '0', 
                timezone = '0', 
                country = '0', 
                email = '0', 
                website = '0', 
                contact_name = '0', 
                contact_title = '0', 
                saturday_is_workday = True, 
                sunday_is_workday = True, 
                workday_start_time = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                workday_end_time = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f')
            )
        else :
            return CompanyBindingModel(
        )

    def testCompanyBindingModel(self):
        """Test CompanyBindingModel"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
