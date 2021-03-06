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


class SimplePhoneResourceModel(object):
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
        'phone_number': 'str',
        'do_not_call': 'bool'
    }

    attribute_map = {
        'phone_number': 'phoneNumber',
        'do_not_call': 'doNotCall'
    }

    def __init__(self, phone_number=None, do_not_call=None, local_vars_configuration=None):  # noqa: E501
        """SimplePhoneResourceModel - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._phone_number = None
        self._do_not_call = None
        self.discriminator = None

        if phone_number is not None:
            self.phone_number = phone_number
        if do_not_call is not None:
            self.do_not_call = do_not_call

    @property
    def phone_number(self):
        """Gets the phone_number of this SimplePhoneResourceModel.  # noqa: E501

        Full Phone Number  # noqa: E501

        :return: The phone_number of this SimplePhoneResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._phone_number

    @phone_number.setter
    def phone_number(self, phone_number):
        """Sets the phone_number of this SimplePhoneResourceModel.

        Full Phone Number  # noqa: E501

        :param phone_number: The phone_number of this SimplePhoneResourceModel.  # noqa: E501
        :type: str
        """

        self._phone_number = phone_number

    @property
    def do_not_call(self):
        """Gets the do_not_call of this SimplePhoneResourceModel.  # noqa: E501

        Do Not Call Bit Flag. True/False or null for not loaded  # noqa: E501

        :return: The do_not_call of this SimplePhoneResourceModel.  # noqa: E501
        :rtype: bool
        """
        return self._do_not_call

    @do_not_call.setter
    def do_not_call(self, do_not_call):
        """Sets the do_not_call of this SimplePhoneResourceModel.

        Do Not Call Bit Flag. True/False or null for not loaded  # noqa: E501

        :param do_not_call: The do_not_call of this SimplePhoneResourceModel.  # noqa: E501
        :type: bool
        """

        self._do_not_call = do_not_call

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
        if not isinstance(other, SimplePhoneResourceModel):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, SimplePhoneResourceModel):
            return True

        return self.to_dict() != other.to_dict()
