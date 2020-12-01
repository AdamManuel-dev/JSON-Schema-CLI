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


class CustomerResourceModel(object):
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
        'customer_id': 'int',
        'first_name': 'str',
        'last_name': 'str',
        'email': 'str',
        'meta': 'Meta'
    }

    attribute_map = {
        'customer_id': 'customerId',
        'first_name': 'firstName',
        'last_name': 'lastName',
        'email': 'email',
        'meta': 'meta'
    }

    def __init__(self, customer_id=None, first_name=None, last_name=None, email=None, meta=None, local_vars_configuration=None):  # noqa: E501
        """CustomerResourceModel - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._customer_id = None
        self._first_name = None
        self._last_name = None
        self._email = None
        self._meta = None
        self.discriminator = None

        if customer_id is not None:
            self.customer_id = customer_id
        if first_name is not None:
            self.first_name = first_name
        if last_name is not None:
            self.last_name = last_name
        if email is not None:
            self.email = email
        if meta is not None:
            self.meta = meta

    @property
    def customer_id(self):
        """Gets the customer_id of this CustomerResourceModel.  # noqa: E501


        :return: The customer_id of this CustomerResourceModel.  # noqa: E501
        :rtype: int
        """
        return self._customer_id

    @customer_id.setter
    def customer_id(self, customer_id):
        """Sets the customer_id of this CustomerResourceModel.


        :param customer_id: The customer_id of this CustomerResourceModel.  # noqa: E501
        :type: int
        """

        self._customer_id = customer_id

    @property
    def first_name(self):
        """Gets the first_name of this CustomerResourceModel.  # noqa: E501


        :return: The first_name of this CustomerResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name):
        """Sets the first_name of this CustomerResourceModel.


        :param first_name: The first_name of this CustomerResourceModel.  # noqa: E501
        :type: str
        """

        self._first_name = first_name

    @property
    def last_name(self):
        """Gets the last_name of this CustomerResourceModel.  # noqa: E501


        :return: The last_name of this CustomerResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name):
        """Sets the last_name of this CustomerResourceModel.


        :param last_name: The last_name of this CustomerResourceModel.  # noqa: E501
        :type: str
        """

        self._last_name = last_name

    @property
    def email(self):
        """Gets the email of this CustomerResourceModel.  # noqa: E501


        :return: The email of this CustomerResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this CustomerResourceModel.


        :param email: The email of this CustomerResourceModel.  # noqa: E501
        :type: str
        """

        self._email = email

    @property
    def meta(self):
        """Gets the meta of this CustomerResourceModel.  # noqa: E501


        :return: The meta of this CustomerResourceModel.  # noqa: E501
        :rtype: Meta
        """
        return self._meta

    @meta.setter
    def meta(self, meta):
        """Sets the meta of this CustomerResourceModel.


        :param meta: The meta of this CustomerResourceModel.  # noqa: E501
        :type: Meta
        """

        self._meta = meta

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
        if not isinstance(other, CustomerResourceModel):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CustomerResourceModel):
            return True

        return self.to_dict() != other.to_dict()