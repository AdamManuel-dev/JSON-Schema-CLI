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
from openapi_client.models.appointment_resource_model import AppointmentResourceModel  # noqa: E501
from openapi_client.rest import ApiException

class TestAppointmentResourceModel(unittest.TestCase):
    """AppointmentResourceModel unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test AppointmentResourceModel
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.appointment_resource_model.AppointmentResourceModel()  # noqa: E501
        if include_optional :
            return AppointmentResourceModel(
                id = '0', 
                contact_id = '0', 
                inquiry_id = '0', 
                appointment_date_time = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                hide_in_scheduler = True, 
                salesperson = '0', 
                salesperson2 = '0', 
                type = '0', 
                set_by = '0', 
                date_issued = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                result = '0', 
                result_reason = '0', 
                notes = '0', 
                address = '0', 
                address_line2 = '0', 
                city = '0', 
                state = '0', 
                zip = '0', 
                directions = '0', 
                last_modified_date = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f')
            )
        else :
            return AppointmentResourceModel(
        )

    def testAppointmentResourceModel(self):
        """Test AppointmentResourceModel"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
