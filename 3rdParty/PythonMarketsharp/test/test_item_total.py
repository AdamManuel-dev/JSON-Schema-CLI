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
from openapi_client.models.item_total import ItemTotal  # noqa: E501
from openapi_client.rest import ApiException

class TestItemTotal(unittest.TestCase):
    """ItemTotal unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test ItemTotal
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.item_total.ItemTotal()  # noqa: E501
        if include_optional :
            return ItemTotal(
                name = '0', 
                total = 1.337
            )
        else :
            return ItemTotal(
        )

    def testItemTotal(self):
        """Test ItemTotal"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()