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


class CCResponse(object):
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
        'credit_card_number': 'str',
        'expiration_date': 'str',
        'issuer': 'str',
        'billing_zip_code': 'str',
        'customer_id': 'int',
        'is_default': 'bool',
        'id': 'int',
        'last_modified': 'str',
        'created_on': 'str'
    }

    attribute_map = {
        'credit_card_number': 'creditCardNumber',
        'expiration_date': 'expirationDate',
        'issuer': 'issuer',
        'billing_zip_code': 'billingZipCode',
        'customer_id': 'customerId',
        'is_default': 'isDefault',
        'id': 'id',
        'last_modified': 'lastModified',
        'created_on': 'createdOn'
    }

    def __init__(self, credit_card_number=None, expiration_date=None, issuer=None, billing_zip_code=None, customer_id=None, is_default=None, id=None, last_modified=None, created_on=None, local_vars_configuration=None):  # noqa: E501
        """CCResponse - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._credit_card_number = None
        self._expiration_date = None
        self._issuer = None
        self._billing_zip_code = None
        self._customer_id = None
        self._is_default = None
        self._id = None
        self._last_modified = None
        self._created_on = None
        self.discriminator = None

        if credit_card_number is not None:
            self.credit_card_number = credit_card_number
        if expiration_date is not None:
            self.expiration_date = expiration_date
        if issuer is not None:
            self.issuer = issuer
        if billing_zip_code is not None:
            self.billing_zip_code = billing_zip_code
        if customer_id is not None:
            self.customer_id = customer_id
        if is_default is not None:
            self.is_default = is_default
        if id is not None:
            self.id = id
        if last_modified is not None:
            self.last_modified = last_modified
        if created_on is not None:
            self.created_on = created_on

    @property
    def credit_card_number(self):
        """Gets the credit_card_number of this CCResponse.  # noqa: E501


        :return: The credit_card_number of this CCResponse.  # noqa: E501
        :rtype: str
        """
        return self._credit_card_number

    @credit_card_number.setter
    def credit_card_number(self, credit_card_number):
        """Sets the credit_card_number of this CCResponse.


        :param credit_card_number: The credit_card_number of this CCResponse.  # noqa: E501
        :type: str
        """

        self._credit_card_number = credit_card_number

    @property
    def expiration_date(self):
        """Gets the expiration_date of this CCResponse.  # noqa: E501


        :return: The expiration_date of this CCResponse.  # noqa: E501
        :rtype: str
        """
        return self._expiration_date

    @expiration_date.setter
    def expiration_date(self, expiration_date):
        """Sets the expiration_date of this CCResponse.


        :param expiration_date: The expiration_date of this CCResponse.  # noqa: E501
        :type: str
        """

        self._expiration_date = expiration_date

    @property
    def issuer(self):
        """Gets the issuer of this CCResponse.  # noqa: E501


        :return: The issuer of this CCResponse.  # noqa: E501
        :rtype: str
        """
        return self._issuer

    @issuer.setter
    def issuer(self, issuer):
        """Sets the issuer of this CCResponse.


        :param issuer: The issuer of this CCResponse.  # noqa: E501
        :type: str
        """

        self._issuer = issuer

    @property
    def billing_zip_code(self):
        """Gets the billing_zip_code of this CCResponse.  # noqa: E501


        :return: The billing_zip_code of this CCResponse.  # noqa: E501
        :rtype: str
        """
        return self._billing_zip_code

    @billing_zip_code.setter
    def billing_zip_code(self, billing_zip_code):
        """Sets the billing_zip_code of this CCResponse.


        :param billing_zip_code: The billing_zip_code of this CCResponse.  # noqa: E501
        :type: str
        """

        self._billing_zip_code = billing_zip_code

    @property
    def customer_id(self):
        """Gets the customer_id of this CCResponse.  # noqa: E501


        :return: The customer_id of this CCResponse.  # noqa: E501
        :rtype: int
        """
        return self._customer_id

    @customer_id.setter
    def customer_id(self, customer_id):
        """Sets the customer_id of this CCResponse.


        :param customer_id: The customer_id of this CCResponse.  # noqa: E501
        :type: int
        """

        self._customer_id = customer_id

    @property
    def is_default(self):
        """Gets the is_default of this CCResponse.  # noqa: E501


        :return: The is_default of this CCResponse.  # noqa: E501
        :rtype: bool
        """
        return self._is_default

    @is_default.setter
    def is_default(self, is_default):
        """Sets the is_default of this CCResponse.


        :param is_default: The is_default of this CCResponse.  # noqa: E501
        :type: bool
        """

        self._is_default = is_default

    @property
    def id(self):
        """Gets the id of this CCResponse.  # noqa: E501


        :return: The id of this CCResponse.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this CCResponse.


        :param id: The id of this CCResponse.  # noqa: E501
        :type: int
        """

        self._id = id

    @property
    def last_modified(self):
        """Gets the last_modified of this CCResponse.  # noqa: E501


        :return: The last_modified of this CCResponse.  # noqa: E501
        :rtype: str
        """
        return self._last_modified

    @last_modified.setter
    def last_modified(self, last_modified):
        """Sets the last_modified of this CCResponse.


        :param last_modified: The last_modified of this CCResponse.  # noqa: E501
        :type: str
        """

        self._last_modified = last_modified

    @property
    def created_on(self):
        """Gets the created_on of this CCResponse.  # noqa: E501


        :return: The created_on of this CCResponse.  # noqa: E501
        :rtype: str
        """
        return self._created_on

    @created_on.setter
    def created_on(self, created_on):
        """Sets the created_on of this CCResponse.


        :param created_on: The created_on of this CCResponse.  # noqa: E501
        :type: str
        """

        self._created_on = created_on

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
        if not isinstance(other, CCResponse):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CCResponse):
            return True

        return self.to_dict() != other.to_dict()
