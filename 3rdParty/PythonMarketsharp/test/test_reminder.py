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
from openapi_client.models.reminder import Reminder  # noqa: E501
from openapi_client.rest import ApiException

class TestReminder(unittest.TestCase):
    """Reminder unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test Reminder
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.reminder.Reminder()  # noqa: E501
        if include_optional :
            return Reminder(
                activity_id = '0', 
                contact_id = '0', 
                activity_type = '0', 
                activity_reference_name = '0', 
                due_date = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                contact_first_name = '0', 
                contact_last_name = '0', 
                contact_type = '0', 
                past_due = True, 
                created_date = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                viewed = True
            )
        else :
            return Reminder(
        )

    def testReminder(self):
        """Test Reminder"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()