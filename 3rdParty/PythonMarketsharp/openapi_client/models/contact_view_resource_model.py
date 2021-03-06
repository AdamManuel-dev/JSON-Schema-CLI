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


class ContactViewResourceModel(object):
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
        'oid': 'str',
        'age_group': 'str',
        'age_of_home': 'str',
        'company': 'str',
        'do_not_mail': 'bool',
        'email': 'str',
        'email2': 'str',
        'email3': 'str',
        'last_name': 'str',
        'first_name': 'str',
        'home_value': 'str',
        'income_level': 'str',
        'length_of_residence': 'str',
        'marital_status': 'str',
        'created_date': 'datetime',
        'contact_last_updated': 'datetime',
        'last_updated_by': 'str',
        'record_source': 'str',
        'style_of_home': 'str',
        'contact_tagged': 'bool',
        'contact_title': 'str',
        'contact_website': 'str',
        'contact_website2': 'str',
        'contact_website3': 'str',
        'year_home_built': 'str'
    }

    attribute_map = {
        'oid': 'oid',
        'age_group': 'ageGroup',
        'age_of_home': 'ageOfHome',
        'company': 'company',
        'do_not_mail': 'doNotMail',
        'email': 'email',
        'email2': 'email2',
        'email3': 'email3',
        'last_name': 'lastName',
        'first_name': 'firstName',
        'home_value': 'homeValue',
        'income_level': 'incomeLevel',
        'length_of_residence': 'lengthOfResidence',
        'marital_status': 'maritalStatus',
        'created_date': 'createdDate',
        'contact_last_updated': 'contactLastUpdated',
        'last_updated_by': 'lastUpdatedBy',
        'record_source': 'recordSource',
        'style_of_home': 'styleOfHome',
        'contact_tagged': 'contactTagged',
        'contact_title': 'contactTitle',
        'contact_website': 'contactWebsite',
        'contact_website2': 'contactWebsite2',
        'contact_website3': 'contactWebsite3',
        'year_home_built': 'yearHomeBuilt'
    }

    def __init__(self, oid=None, age_group=None, age_of_home=None, company=None, do_not_mail=None, email=None, email2=None, email3=None, last_name=None, first_name=None, home_value=None, income_level=None, length_of_residence=None, marital_status=None, created_date=None, contact_last_updated=None, last_updated_by=None, record_source=None, style_of_home=None, contact_tagged=None, contact_title=None, contact_website=None, contact_website2=None, contact_website3=None, year_home_built=None, local_vars_configuration=None):  # noqa: E501
        """ContactViewResourceModel - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._oid = None
        self._age_group = None
        self._age_of_home = None
        self._company = None
        self._do_not_mail = None
        self._email = None
        self._email2 = None
        self._email3 = None
        self._last_name = None
        self._first_name = None
        self._home_value = None
        self._income_level = None
        self._length_of_residence = None
        self._marital_status = None
        self._created_date = None
        self._contact_last_updated = None
        self._last_updated_by = None
        self._record_source = None
        self._style_of_home = None
        self._contact_tagged = None
        self._contact_title = None
        self._contact_website = None
        self._contact_website2 = None
        self._contact_website3 = None
        self._year_home_built = None
        self.discriminator = None

        if oid is not None:
            self.oid = oid
        if age_group is not None:
            self.age_group = age_group
        if age_of_home is not None:
            self.age_of_home = age_of_home
        if company is not None:
            self.company = company
        if do_not_mail is not None:
            self.do_not_mail = do_not_mail
        if email is not None:
            self.email = email
        if email2 is not None:
            self.email2 = email2
        if email3 is not None:
            self.email3 = email3
        if last_name is not None:
            self.last_name = last_name
        if first_name is not None:
            self.first_name = first_name
        if home_value is not None:
            self.home_value = home_value
        if income_level is not None:
            self.income_level = income_level
        if length_of_residence is not None:
            self.length_of_residence = length_of_residence
        if marital_status is not None:
            self.marital_status = marital_status
        if created_date is not None:
            self.created_date = created_date
        if contact_last_updated is not None:
            self.contact_last_updated = contact_last_updated
        if last_updated_by is not None:
            self.last_updated_by = last_updated_by
        if record_source is not None:
            self.record_source = record_source
        if style_of_home is not None:
            self.style_of_home = style_of_home
        if contact_tagged is not None:
            self.contact_tagged = contact_tagged
        if contact_title is not None:
            self.contact_title = contact_title
        if contact_website is not None:
            self.contact_website = contact_website
        if contact_website2 is not None:
            self.contact_website2 = contact_website2
        if contact_website3 is not None:
            self.contact_website3 = contact_website3
        if year_home_built is not None:
            self.year_home_built = year_home_built

    @property
    def oid(self):
        """Gets the oid of this ContactViewResourceModel.  # noqa: E501


        :return: The oid of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._oid

    @oid.setter
    def oid(self, oid):
        """Sets the oid of this ContactViewResourceModel.


        :param oid: The oid of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._oid = oid

    @property
    def age_group(self):
        """Gets the age_group of this ContactViewResourceModel.  # noqa: E501


        :return: The age_group of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._age_group

    @age_group.setter
    def age_group(self, age_group):
        """Sets the age_group of this ContactViewResourceModel.


        :param age_group: The age_group of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._age_group = age_group

    @property
    def age_of_home(self):
        """Gets the age_of_home of this ContactViewResourceModel.  # noqa: E501


        :return: The age_of_home of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._age_of_home

    @age_of_home.setter
    def age_of_home(self, age_of_home):
        """Sets the age_of_home of this ContactViewResourceModel.


        :param age_of_home: The age_of_home of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._age_of_home = age_of_home

    @property
    def company(self):
        """Gets the company of this ContactViewResourceModel.  # noqa: E501


        :return: The company of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._company

    @company.setter
    def company(self, company):
        """Sets the company of this ContactViewResourceModel.


        :param company: The company of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._company = company

    @property
    def do_not_mail(self):
        """Gets the do_not_mail of this ContactViewResourceModel.  # noqa: E501


        :return: The do_not_mail of this ContactViewResourceModel.  # noqa: E501
        :rtype: bool
        """
        return self._do_not_mail

    @do_not_mail.setter
    def do_not_mail(self, do_not_mail):
        """Sets the do_not_mail of this ContactViewResourceModel.


        :param do_not_mail: The do_not_mail of this ContactViewResourceModel.  # noqa: E501
        :type: bool
        """

        self._do_not_mail = do_not_mail

    @property
    def email(self):
        """Gets the email of this ContactViewResourceModel.  # noqa: E501


        :return: The email of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this ContactViewResourceModel.


        :param email: The email of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._email = email

    @property
    def email2(self):
        """Gets the email2 of this ContactViewResourceModel.  # noqa: E501


        :return: The email2 of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._email2

    @email2.setter
    def email2(self, email2):
        """Sets the email2 of this ContactViewResourceModel.


        :param email2: The email2 of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._email2 = email2

    @property
    def email3(self):
        """Gets the email3 of this ContactViewResourceModel.  # noqa: E501


        :return: The email3 of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._email3

    @email3.setter
    def email3(self, email3):
        """Sets the email3 of this ContactViewResourceModel.


        :param email3: The email3 of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._email3 = email3

    @property
    def last_name(self):
        """Gets the last_name of this ContactViewResourceModel.  # noqa: E501


        :return: The last_name of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name):
        """Sets the last_name of this ContactViewResourceModel.


        :param last_name: The last_name of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._last_name = last_name

    @property
    def first_name(self):
        """Gets the first_name of this ContactViewResourceModel.  # noqa: E501


        :return: The first_name of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name):
        """Sets the first_name of this ContactViewResourceModel.


        :param first_name: The first_name of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._first_name = first_name

    @property
    def home_value(self):
        """Gets the home_value of this ContactViewResourceModel.  # noqa: E501


        :return: The home_value of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._home_value

    @home_value.setter
    def home_value(self, home_value):
        """Sets the home_value of this ContactViewResourceModel.


        :param home_value: The home_value of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._home_value = home_value

    @property
    def income_level(self):
        """Gets the income_level of this ContactViewResourceModel.  # noqa: E501


        :return: The income_level of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._income_level

    @income_level.setter
    def income_level(self, income_level):
        """Sets the income_level of this ContactViewResourceModel.


        :param income_level: The income_level of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._income_level = income_level

    @property
    def length_of_residence(self):
        """Gets the length_of_residence of this ContactViewResourceModel.  # noqa: E501


        :return: The length_of_residence of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._length_of_residence

    @length_of_residence.setter
    def length_of_residence(self, length_of_residence):
        """Sets the length_of_residence of this ContactViewResourceModel.


        :param length_of_residence: The length_of_residence of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._length_of_residence = length_of_residence

    @property
    def marital_status(self):
        """Gets the marital_status of this ContactViewResourceModel.  # noqa: E501


        :return: The marital_status of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._marital_status

    @marital_status.setter
    def marital_status(self, marital_status):
        """Sets the marital_status of this ContactViewResourceModel.


        :param marital_status: The marital_status of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._marital_status = marital_status

    @property
    def created_date(self):
        """Gets the created_date of this ContactViewResourceModel.  # noqa: E501


        :return: The created_date of this ContactViewResourceModel.  # noqa: E501
        :rtype: datetime
        """
        return self._created_date

    @created_date.setter
    def created_date(self, created_date):
        """Sets the created_date of this ContactViewResourceModel.


        :param created_date: The created_date of this ContactViewResourceModel.  # noqa: E501
        :type: datetime
        """

        self._created_date = created_date

    @property
    def contact_last_updated(self):
        """Gets the contact_last_updated of this ContactViewResourceModel.  # noqa: E501


        :return: The contact_last_updated of this ContactViewResourceModel.  # noqa: E501
        :rtype: datetime
        """
        return self._contact_last_updated

    @contact_last_updated.setter
    def contact_last_updated(self, contact_last_updated):
        """Sets the contact_last_updated of this ContactViewResourceModel.


        :param contact_last_updated: The contact_last_updated of this ContactViewResourceModel.  # noqa: E501
        :type: datetime
        """

        self._contact_last_updated = contact_last_updated

    @property
    def last_updated_by(self):
        """Gets the last_updated_by of this ContactViewResourceModel.  # noqa: E501


        :return: The last_updated_by of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._last_updated_by

    @last_updated_by.setter
    def last_updated_by(self, last_updated_by):
        """Sets the last_updated_by of this ContactViewResourceModel.


        :param last_updated_by: The last_updated_by of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._last_updated_by = last_updated_by

    @property
    def record_source(self):
        """Gets the record_source of this ContactViewResourceModel.  # noqa: E501


        :return: The record_source of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._record_source

    @record_source.setter
    def record_source(self, record_source):
        """Sets the record_source of this ContactViewResourceModel.


        :param record_source: The record_source of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._record_source = record_source

    @property
    def style_of_home(self):
        """Gets the style_of_home of this ContactViewResourceModel.  # noqa: E501


        :return: The style_of_home of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._style_of_home

    @style_of_home.setter
    def style_of_home(self, style_of_home):
        """Sets the style_of_home of this ContactViewResourceModel.


        :param style_of_home: The style_of_home of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._style_of_home = style_of_home

    @property
    def contact_tagged(self):
        """Gets the contact_tagged of this ContactViewResourceModel.  # noqa: E501


        :return: The contact_tagged of this ContactViewResourceModel.  # noqa: E501
        :rtype: bool
        """
        return self._contact_tagged

    @contact_tagged.setter
    def contact_tagged(self, contact_tagged):
        """Sets the contact_tagged of this ContactViewResourceModel.


        :param contact_tagged: The contact_tagged of this ContactViewResourceModel.  # noqa: E501
        :type: bool
        """

        self._contact_tagged = contact_tagged

    @property
    def contact_title(self):
        """Gets the contact_title of this ContactViewResourceModel.  # noqa: E501


        :return: The contact_title of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._contact_title

    @contact_title.setter
    def contact_title(self, contact_title):
        """Sets the contact_title of this ContactViewResourceModel.


        :param contact_title: The contact_title of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._contact_title = contact_title

    @property
    def contact_website(self):
        """Gets the contact_website of this ContactViewResourceModel.  # noqa: E501


        :return: The contact_website of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._contact_website

    @contact_website.setter
    def contact_website(self, contact_website):
        """Sets the contact_website of this ContactViewResourceModel.


        :param contact_website: The contact_website of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._contact_website = contact_website

    @property
    def contact_website2(self):
        """Gets the contact_website2 of this ContactViewResourceModel.  # noqa: E501


        :return: The contact_website2 of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._contact_website2

    @contact_website2.setter
    def contact_website2(self, contact_website2):
        """Sets the contact_website2 of this ContactViewResourceModel.


        :param contact_website2: The contact_website2 of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._contact_website2 = contact_website2

    @property
    def contact_website3(self):
        """Gets the contact_website3 of this ContactViewResourceModel.  # noqa: E501


        :return: The contact_website3 of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._contact_website3

    @contact_website3.setter
    def contact_website3(self, contact_website3):
        """Sets the contact_website3 of this ContactViewResourceModel.


        :param contact_website3: The contact_website3 of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._contact_website3 = contact_website3

    @property
    def year_home_built(self):
        """Gets the year_home_built of this ContactViewResourceModel.  # noqa: E501


        :return: The year_home_built of this ContactViewResourceModel.  # noqa: E501
        :rtype: str
        """
        return self._year_home_built

    @year_home_built.setter
    def year_home_built(self, year_home_built):
        """Sets the year_home_built of this ContactViewResourceModel.


        :param year_home_built: The year_home_built of this ContactViewResourceModel.  # noqa: E501
        :type: str
        """

        self._year_home_built = year_home_built

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
        if not isinstance(other, ContactViewResourceModel):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ContactViewResourceModel):
            return True

        return self.to_dict() != other.to_dict()
