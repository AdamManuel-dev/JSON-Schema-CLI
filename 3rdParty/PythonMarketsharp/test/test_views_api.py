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
from openapi_client.api.views_api import ViewsApi  # noqa: E501
from openapi_client.rest import ApiException


class TestViewsApi(unittest.TestCase):
    """ViewsApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.views_api.ViewsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_views_field_list_available_by_view_type(self):
        """Test case for views_field_list_available_by_view_type

        Get available fields to select by list view type  # noqa: E501
        """
        pass

    def test_views_field_list_by_view_id(self):
        """Test case for views_field_list_by_view_id

        Get a View By ID  # noqa: E501
        """
        pass

    def test_views_view_create(self):
        """Test case for views_view_create

        Create a new view  # noqa: E501
        """
        pass

    def test_views_view_delete(self):
        """Test case for views_view_delete

        Delete a view entirely  # noqa: E501
        """
        pass

    def test_views_view_update(self):
        """Test case for views_view_update

        Update an existing view  # noqa: E501
        """
        pass

    def test_views_views_by_type(self):
        """Test case for views_views_by_type

        Get available Views  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
