# coding: utf-8

"""
    MarketSharp CRM API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import openapi_client
from openapi_client.api.activity_references_api import ActivityReferencesApi  # noqa: E501
from openapi_client.rest import ApiException


class TestActivityReferencesApi(unittest.TestCase):
    """ActivityReferencesApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.activity_references_api.ActivityReferencesApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_activity_references_get_activity_references(self):
        """Test case for activity_references_get_activity_references

        Get activity references for a company.  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
