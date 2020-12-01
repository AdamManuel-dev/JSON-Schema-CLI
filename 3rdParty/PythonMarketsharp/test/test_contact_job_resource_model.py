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
from openapi_client.models.contact_job_resource_model import ContactJobResourceModel  # noqa: E501
from openapi_client.rest import ApiException

class TestContactJobResourceModel(unittest.TestCase):
    """ContactJobResourceModel unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test ContactJobResourceModel
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.contact_job_resource_model.ContactJobResourceModel()  # noqa: E501
        if include_optional :
            return ContactJobResourceModel(
                last_appointment_date = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                jobs = [
                    openapi_client.models.job.Job(
                        id = '0', 
                        job_name = '0', 
                        job_type = '0', 
                        job_status = '0', 
                        lead_id = '0', 
                        contact_id = '0', 
                        sale_date = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                        completion_date = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                        lead_appointment_sold_id = '0', 
                        lead_appointment_sold_date = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                        contract_total = 1.337, 
                        contract_date = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                        created_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                        created_by = '0', 
                        updated_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                        updated_by = '0', )
                    ], 
                phone_numbers = [
                    openapi_client.models.simple_phone_resource_model.SimplePhoneResourceModel(
                        phone_number = '0', 
                        do_not_call = True, )
                    ], 
                id = '0', 
                company_id = '0', 
                first_name = '0', 
                last_name = '0', 
                contact_business_name = '0', 
                address = '0', 
                address_line2 = '0', 
                city = '0', 
                state = '0', 
                zip = '0', 
                email1 = '0', 
                email2 = '0', 
                email3 = '0', 
                last_modified_date_time = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                contact_type = '0'
            )
        else :
            return ContactJobResourceModel(
        )

    def testContactJobResourceModel(self):
        """Test ContactJobResourceModel"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()