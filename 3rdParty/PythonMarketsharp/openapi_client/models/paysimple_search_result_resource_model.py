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


class PaysimpleSearchResultResourceModel(object):
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
        'search_result_by_customer_id': 'list[ContactJobResourceModel]',
        'search_result_by_name_fields': 'list[ContactJobResourceModel]'
    }

    attribute_map = {
        'search_result_by_customer_id': 'searchResultByCustomerId',
        'search_result_by_name_fields': 'searchResultByNameFields'
    }

    def __init__(self, search_result_by_customer_id=None, search_result_by_name_fields=None, local_vars_configuration=None):  # noqa: E501
        """PaysimpleSearchResultResourceModel - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._search_result_by_customer_id = None
        self._search_result_by_name_fields = None
        self.discriminator = None

        if search_result_by_customer_id is not None:
            self.search_result_by_customer_id = search_result_by_customer_id
        if search_result_by_name_fields is not None:
            self.search_result_by_name_fields = search_result_by_name_fields

    @property
    def search_result_by_customer_id(self):
        """Gets the search_result_by_customer_id of this PaysimpleSearchResultResourceModel.  # noqa: E501

        Filled out when searching by paysimple customer id  # noqa: E501

        :return: The search_result_by_customer_id of this PaysimpleSearchResultResourceModel.  # noqa: E501
        :rtype: list[ContactJobResourceModel]
        """
        return self._search_result_by_customer_id

    @search_result_by_customer_id.setter
    def search_result_by_customer_id(self, search_result_by_customer_id):
        """Sets the search_result_by_customer_id of this PaysimpleSearchResultResourceModel.

        Filled out when searching by paysimple customer id  # noqa: E501

        :param search_result_by_customer_id: The search_result_by_customer_id of this PaysimpleSearchResultResourceModel.  # noqa: E501
        :type: list[ContactJobResourceModel]
        """

        self._search_result_by_customer_id = search_result_by_customer_id

    @property
    def search_result_by_name_fields(self):
        """Gets the search_result_by_name_fields of this PaysimpleSearchResultResourceModel.  # noqa: E501

        filled out when searching by other fields  # noqa: E501

        :return: The search_result_by_name_fields of this PaysimpleSearchResultResourceModel.  # noqa: E501
        :rtype: list[ContactJobResourceModel]
        """
        return self._search_result_by_name_fields

    @search_result_by_name_fields.setter
    def search_result_by_name_fields(self, search_result_by_name_fields):
        """Sets the search_result_by_name_fields of this PaysimpleSearchResultResourceModel.

        filled out when searching by other fields  # noqa: E501

        :param search_result_by_name_fields: The search_result_by_name_fields of this PaysimpleSearchResultResourceModel.  # noqa: E501
        :type: list[ContactJobResourceModel]
        """

        self._search_result_by_name_fields = search_result_by_name_fields

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
        if not isinstance(other, PaysimpleSearchResultResourceModel):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PaysimpleSearchResultResourceModel):
            return True

        return self.to_dict() != other.to_dict()
