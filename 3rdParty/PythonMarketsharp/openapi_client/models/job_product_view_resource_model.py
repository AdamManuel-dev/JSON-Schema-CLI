# coding: utf-8

"""
    MarketSharp CRM API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from openapi_client.configuration import Configuration


class JobProductViewResourceModel(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'company_id': 'str',
        'job_product_id': 'str',
        'product_notes': 'str',
        'product_production_notes': 'str',
        'product_price': 'float',
        'product_price_adjustment': 'float',
        'product_completed_date': 'datetime',
        'product_sale_date': 'datetime',
        'product_salesperson1': 'str',
        'product_salesperson2': 'str',
        'product_service_expiration_date': 'datetime',
        'product_service_start_date': 'datetime',
        'product_warranty_expiration_date': 'datetime',
        'product_warranty_start_date': 'datetime',
        'product_project_manager': 'str',
        'product_process_type_id': 'str',
        'detail_task_list': 'list[BaseProductionStepModel]',
        'product_workers': 'list[KeyValueResourceModel]',
        'has_custom_steps': 'bool',
        'product_work_crew': 'str'
    }

    attribute_map = {
        'company_id': 'companyId',
        'job_product_id': 'jobProductId',
        'product_notes': 'productNotes',
        'product_production_notes': 'productProductionNotes',
        'product_price': 'productPrice',
        'product_price_adjustment': 'productPriceAdjustment',
        'product_completed_date': 'productCompletedDate',
        'product_sale_date': 'productSaleDate',
        'product_salesperson1': 'productSalesperson1',
        'product_salesperson2': 'productSalesperson2',
        'product_service_expiration_date': 'productServiceExpirationDate',
        'product_service_start_date': 'productServiceStartDate',
        'product_warranty_expiration_date': 'productWarrantyExpirationDate',
        'product_warranty_start_date': 'productWarrantyStartDate',
        'product_project_manager': 'productProjectManager',
        'product_process_type_id': 'productProcessTypeId',
        'detail_task_list': 'DetailTaskList',
        'product_workers': 'productWorkers',
        'has_custom_steps': 'HasCustomSteps',
        'product_work_crew': 'productWorkCrew'
    }

    def __init__(self, company_id=None, job_product_id=None, product_notes=None, product_production_notes=None, product_price=None, product_price_adjustment=None, product_completed_date=None, product_sale_date=None, product_salesperson1=None, product_salesperson2=None, product_service_expiration_date=None, product_service_start_date=None, product_warranty_expiration_date=None, product_warranty_start_date=None, product_project_manager=None, product_process_type_id=None, detail_task_list=None, product_workers=None, has_custom_steps=None, product_work_crew=None, local_vars_configuration=None):  # noqa: E501
        """JobProductViewResourceModel - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._company_id = None
        self._job_product_id = None
        self._product_notes = None
        self._product_production_notes = None
        self._product_price = None
        self._product_price_adjustment = None
        self._product_completed_date = None
        self._product_sale_date = None
        self._product_salesperson1 = None
        self._product_salesperson2 = None
        self._product_service_expiration_date = None
        self._product_service_start_date = None
        self._product_warranty_expiration_date = None
        self._product_warranty_start_date = None
        self._product_project_manager = None
        self._product_process_type_id = None
        self._detail_task_list = None
        self._product_workers = None
        self._has_custom_steps = None
        self._product_work_crew = None
        self.discriminator = None

        if company_id is not None:
            self.company_id = company_id
        if job_product_id is not None:
            self.job_product_id = job_product_id
        if product_notes is not None:
            self.product_notes = product_notes
        if product_production_notes is not None:
            self.product_production_notes = product_production_notes
        if product_price is not None:
            self.product_price = product_price
        if product_price_adjustment is not None:
            self.product_price_adjustment = product_price_adjustment
        if product_completed_date is not None:
            self.product_completed_date = product_completed_date
        if product_sale_date is not None:
            self.product_sale_date = product_sale_date
        if product_salesperson1 is not None:
            self.product_salesperson1 = product_salesperson1
        if product_salesperson2 is not None:
            self.product_salesperson2 = product_salesperson2
        if product_service_expiration_date is not None:
            self.product_service_expiration_date = product_service_expiration_date
        if product_service_start_date is not None:
            self.product_service_start_date = product_service_start_date
        if product_warranty_expiration_date is not None:
            self.product_warranty_expiration_date = product_warranty_expiration_date
        if product_warranty_start_date is not None:
            self.product_warranty_start_date = product_warranty_start_date
        if product_project_manager is not None:
            self.product_project_manager = product_project_manager
        if product_process_type_id is not None:
            self.product_process_type_id = product_process_type_id
        if detail_task_list is not None:
            self.detail_task_list = detail_task_list
        if product_workers is not None:
            self.product_workers = product_workers
        if has_custom_steps is not None:
            self.has_custom_steps = has_custom_steps
        if product_work_crew is not None:
            self.product_work_crew = product_work_crew

    @property
    def company_id(self):
        """Gets the company_id of this JobProductViewResourceModel.  # noqa: E501


        :return: The company_id of this JobProductViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._company_id

    @company_id.setter
    def company_id(self, company_id):
        """Sets the company_id of this JobProductViewResourceModel.


        :param company_id: The company_id of this JobProductViewResourceModel.  # noqa: E501
        :type: str
        """

        self._company_id = company_id

    @property
    def job_product_id(self):
        """Gets the job_product_id of this JobProductViewResourceModel.  # noqa: E501


        :return: The job_product_id of this JobProductViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._job_product_id

    @job_product_id.setter
    def job_product_id(self, job_product_id):
        """Sets the job_product_id of this JobProductViewResourceModel.


        :param job_product_id: The job_product_id of this JobProductViewResourceModel.  # noqa: E501
        :type: str
        """

        self._job_product_id = job_product_id

    @property
    def product_notes(self):
        """Gets the product_notes of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_notes of this JobProductViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._product_notes

    @product_notes.setter
    def product_notes(self, product_notes):
        """Sets the product_notes of this JobProductViewResourceModel.


        :param product_notes: The product_notes of this JobProductViewResourceModel.  # noqa: E501
        :type: str
        """

        self._product_notes = product_notes

    @property
    def product_production_notes(self):
        """Gets the product_production_notes of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_production_notes of this JobProductViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._product_production_notes

    @product_production_notes.setter
    def product_production_notes(self, product_production_notes):
        """Sets the product_production_notes of this JobProductViewResourceModel.


        :param product_production_notes: The product_production_notes of this JobProductViewResourceModel.  # noqa: E501
        :type: str
        """

        self._product_production_notes = product_production_notes

    @property
    def product_price(self):
        """Gets the product_price of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_price of this JobProductViewResourceModel.  # noqa: E501
        :rtype: float
        """
        return self._product_price

    @product_price.setter
    def product_price(self, product_price):
        """Sets the product_price of this JobProductViewResourceModel.


        :param product_price: The product_price of this JobProductViewResourceModel.  # noqa: E501
        :type: float
        """

        self._product_price = product_price

    @property
    def product_price_adjustment(self):
        """Gets the product_price_adjustment of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_price_adjustment of this JobProductViewResourceModel.  # noqa: E501
        :rtype: float
        """
        return self._product_price_adjustment

    @product_price_adjustment.setter
    def product_price_adjustment(self, product_price_adjustment):
        """Sets the product_price_adjustment of this JobProductViewResourceModel.


        :param product_price_adjustment: The product_price_adjustment of this JobProductViewResourceModel.  # noqa: E501
        :type: float
        """

        self._product_price_adjustment = product_price_adjustment

    @property
    def product_completed_date(self):
        """Gets the product_completed_date of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_completed_date of this JobProductViewResourceModel.  # noqa: E501
        :rtype: datetime
        """
        return self._product_completed_date

    @product_completed_date.setter
    def product_completed_date(self, product_completed_date):
        """Sets the product_completed_date of this JobProductViewResourceModel.


        :param product_completed_date: The product_completed_date of this JobProductViewResourceModel.  # noqa: E501
        :type: datetime
        """

        self._product_completed_date = product_completed_date

    @property
    def product_sale_date(self):
        """Gets the product_sale_date of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_sale_date of this JobProductViewResourceModel.  # noqa: E501
        :rtype: datetime
        """
        return self._product_sale_date

    @product_sale_date.setter
    def product_sale_date(self, product_sale_date):
        """Sets the product_sale_date of this JobProductViewResourceModel.


        :param product_sale_date: The product_sale_date of this JobProductViewResourceModel.  # noqa: E501
        :type: datetime
        """

        self._product_sale_date = product_sale_date

    @property
    def product_salesperson1(self):
        """Gets the product_salesperson1 of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_salesperson1 of this JobProductViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._product_salesperson1

    @product_salesperson1.setter
    def product_salesperson1(self, product_salesperson1):
        """Sets the product_salesperson1 of this JobProductViewResourceModel.


        :param product_salesperson1: The product_salesperson1 of this JobProductViewResourceModel.  # noqa: E501
        :type: str
        """

        self._product_salesperson1 = product_salesperson1

    @property
    def product_salesperson2(self):
        """Gets the product_salesperson2 of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_salesperson2 of this JobProductViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._product_salesperson2

    @product_salesperson2.setter
    def product_salesperson2(self, product_salesperson2):
        """Sets the product_salesperson2 of this JobProductViewResourceModel.


        :param product_salesperson2: The product_salesperson2 of this JobProductViewResourceModel.  # noqa: E501
        :type: str
        """

        self._product_salesperson2 = product_salesperson2

    @property
    def product_service_expiration_date(self):
        """Gets the product_service_expiration_date of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_service_expiration_date of this JobProductViewResourceModel.  # noqa: E501
        :rtype: datetime
        """
        return self._product_service_expiration_date

    @product_service_expiration_date.setter
    def product_service_expiration_date(self, product_service_expiration_date):
        """Sets the product_service_expiration_date of this JobProductViewResourceModel.


        :param product_service_expiration_date: The product_service_expiration_date of this JobProductViewResourceModel.  # noqa: E501
        :type: datetime
        """

        self._product_service_expiration_date = product_service_expiration_date

    @property
    def product_service_start_date(self):
        """Gets the product_service_start_date of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_service_start_date of this JobProductViewResourceModel.  # noqa: E501
        :rtype: datetime
        """
        return self._product_service_start_date

    @product_service_start_date.setter
    def product_service_start_date(self, product_service_start_date):
        """Sets the product_service_start_date of this JobProductViewResourceModel.


        :param product_service_start_date: The product_service_start_date of this JobProductViewResourceModel.  # noqa: E501
        :type: datetime
        """

        self._product_service_start_date = product_service_start_date

    @property
    def product_warranty_expiration_date(self):
        """Gets the product_warranty_expiration_date of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_warranty_expiration_date of this JobProductViewResourceModel.  # noqa: E501
        :rtype: datetime
        """
        return self._product_warranty_expiration_date

    @product_warranty_expiration_date.setter
    def product_warranty_expiration_date(self, product_warranty_expiration_date):
        """Sets the product_warranty_expiration_date of this JobProductViewResourceModel.


        :param product_warranty_expiration_date: The product_warranty_expiration_date of this JobProductViewResourceModel.  # noqa: E501
        :type: datetime
        """

        self._product_warranty_expiration_date = product_warranty_expiration_date

    @property
    def product_warranty_start_date(self):
        """Gets the product_warranty_start_date of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_warranty_start_date of this JobProductViewResourceModel.  # noqa: E501
        :rtype: datetime
        """
        return self._product_warranty_start_date

    @product_warranty_start_date.setter
    def product_warranty_start_date(self, product_warranty_start_date):
        """Sets the product_warranty_start_date of this JobProductViewResourceModel.


        :param product_warranty_start_date: The product_warranty_start_date of this JobProductViewResourceModel.  # noqa: E501
        :type: datetime
        """

        self._product_warranty_start_date = product_warranty_start_date

    @property
    def product_project_manager(self):
        """Gets the product_project_manager of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_project_manager of this JobProductViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._product_project_manager

    @product_project_manager.setter
    def product_project_manager(self, product_project_manager):
        """Sets the product_project_manager of this JobProductViewResourceModel.


        :param product_project_manager: The product_project_manager of this JobProductViewResourceModel.  # noqa: E501
        :type: str
        """

        self._product_project_manager = product_project_manager

    @property
    def product_process_type_id(self):
        """Gets the product_process_type_id of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_process_type_id of this JobProductViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._product_process_type_id

    @product_process_type_id.setter
    def product_process_type_id(self, product_process_type_id):
        """Sets the product_process_type_id of this JobProductViewResourceModel.


        :param product_process_type_id: The product_process_type_id of this JobProductViewResourceModel.  # noqa: E501
        :type: str
        """

        self._product_process_type_id = product_process_type_id

    @property
    def detail_task_list(self):
        """Gets the detail_task_list of this JobProductViewResourceModel.  # noqa: E501


        :return: The detail_task_list of this JobProductViewResourceModel.  # noqa: E501
        :rtype: list[BaseProductionStepModel]
        """
        return self._detail_task_list

    @detail_task_list.setter
    def detail_task_list(self, detail_task_list):
        """Sets the detail_task_list of this JobProductViewResourceModel.


        :param detail_task_list: The detail_task_list of this JobProductViewResourceModel.  # noqa: E501
        :type: list[BaseProductionStepModel]
        """

        self._detail_task_list = detail_task_list

    @property
    def product_workers(self):
        """Gets the product_workers of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_workers of this JobProductViewResourceModel.  # noqa: E501
        :rtype: list[KeyValueResourceModel]
        """
        return self._product_workers

    @product_workers.setter
    def product_workers(self, product_workers):
        """Sets the product_workers of this JobProductViewResourceModel.


        :param product_workers: The product_workers of this JobProductViewResourceModel.  # noqa: E501
        :type: list[KeyValueResourceModel]
        """

        self._product_workers = product_workers

    @property
    def has_custom_steps(self):
        """Gets the has_custom_steps of this JobProductViewResourceModel.  # noqa: E501


        :return: The has_custom_steps of this JobProductViewResourceModel.  # noqa: E501
        :rtype: bool
        """
        return self._has_custom_steps

    @has_custom_steps.setter
    def has_custom_steps(self, has_custom_steps):
        """Sets the has_custom_steps of this JobProductViewResourceModel.


        :param has_custom_steps: The has_custom_steps of this JobProductViewResourceModel.  # noqa: E501
        :type: bool
        """

        self._has_custom_steps = has_custom_steps

    @property
    def product_work_crew(self):
        """Gets the product_work_crew of this JobProductViewResourceModel.  # noqa: E501


        :return: The product_work_crew of this JobProductViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._product_work_crew

    @product_work_crew.setter
    def product_work_crew(self, product_work_crew):
        """Sets the product_work_crew of this JobProductViewResourceModel.


        :param product_work_crew: The product_work_crew of this JobProductViewResourceModel.  # noqa: E501
        :type: str
        """

        self._product_work_crew = product_work_crew

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, JobProductViewResourceModel):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, JobProductViewResourceModel):
            return True

        return self.to_dict() != other.to_dict()
