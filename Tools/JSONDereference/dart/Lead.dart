// To parse this JSON data, do
//
//     final lead = leadFromJson(jsonString);

import 'dart:convert';

Lead leadFromJson(String str) => Lead.fromJson(json.decode(str));

String leadToJson(Lead data) => json.encode(data.toJson());

class Lead {
    final String createdBy;
    final int createdOn;
    final String emailAddress;
    final String firstName;
    final String firstName2;
    final String id;
    final String lastName;
    final String lastName2;
    final LeadSource leadSource;
    final List<String> noteIds;
    final Owner owner;
    final OwnerType ownerType;
    final String primaryPhone;
    final AryPhoneType primaryPhoneType;
    final String residence;
    final String secondaryPhone;
    final AryPhoneType secondaryPhoneType;
    final Status status;
    final Title title;
    final Title title2;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Lead({
        this.createdBy,
        this.createdOn,
        this.emailAddress,
        this.firstName,
        this.firstName2,
        this.id,
        this.lastName,
        this.lastName2,
        this.leadSource,
        this.noteIds,
        this.owner,
        this.ownerType,
        this.primaryPhone,
        this.primaryPhoneType,
        this.residence,
        this.secondaryPhone,
        this.secondaryPhoneType,
        this.status,
        this.title,
        this.title2,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Lead.fromJson(Map<String, dynamic> json) => Lead(
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        emailAddress: json["emailAddress"],
        firstName: json["firstName"],
        firstName2: json["firstName_2"] == null ? null : json["firstName_2"],
        id: json["id"] == null ? null : json["id"],
        lastName: json["lastName"],
        lastName2: json["lastName_2"] == null ? null : json["lastName_2"],
        leadSource: leadSourceValues.map[json["leadSource"]],
        noteIds: json["noteIds"] == null ? null : List<String>.from(json["noteIds"].map((x) => x)),
        owner: Owner.fromJson(json["owner"]),
        ownerType: ownerTypeValues.map[json["ownerType"]],
        primaryPhone: json["primaryPhone"] == null ? null : json["primaryPhone"],
        primaryPhoneType: aryPhoneTypeValues.map[json["primaryPhoneType"]],
        residence: json["residence"] == null ? null : json["residence"],
        secondaryPhone: json["secondaryPhone"] == null ? null : json["secondaryPhone"],
        secondaryPhoneType: json["secondaryPhoneType"] == null ? null : aryPhoneTypeValues.map[json["secondaryPhoneType"]],
        status: statusValues.map[json["status"]],
        title: titleValues.map[json["title"]],
        title2: json["title_2"] == null ? null : titleValues.map[json["title_2"]],
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "emailAddress": emailAddress,
        "firstName": firstName,
        "firstName_2": firstName2 == null ? null : firstName2,
        "id": id == null ? null : id,
        "lastName": lastName,
        "lastName_2": lastName2 == null ? null : lastName2,
        "leadSource": leadSourceValues.reverse[leadSource],
        "noteIds": noteIds == null ? null : List<dynamic>.from(noteIds.map((x) => x)),
        "owner": owner.toJson(),
        "ownerType": ownerTypeValues.reverse[ownerType],
        "primaryPhone": primaryPhone == null ? null : primaryPhone,
        "primaryPhoneType": aryPhoneTypeValues.reverse[primaryPhoneType],
        "residence": residence == null ? null : residence,
        "secondaryPhone": secondaryPhone == null ? null : secondaryPhone,
        "secondaryPhoneType": secondaryPhoneType == null ? null : aryPhoneTypeValues.reverse[secondaryPhoneType],
        "status": statusValues.reverse[status],
        "title": titleValues.reverse[title],
        "title_2": title2 == null ? null : titleValues.reverse[title2],
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum LeadSource { CANVAS, TELEMARKETING }

final leadSourceValues = EnumValues({
    "Canvas": LeadSource.CANVAS,
    "Telemarketing": LeadSource.TELEMARKETING
});

class Owner {
    final List<String> groups;
    final List<String> users;

    Owner({
        this.groups,
        this.users,
    });

    factory Owner.fromJson(Map<String, dynamic> json) => Owner(
        groups: json["groups"] == null ? null : List<String>.from(json["groups"].map((x) => x)),
        users: json["users"] == null ? null : List<String>.from(json["users"].map((x) => x)),
    );

    Map<String, dynamic> toJson() => {
        "groups": groups == null ? null : List<dynamic>.from(groups.map((x) => x)),
        "users": users == null ? null : List<dynamic>.from(users.map((x) => x)),
    };
}

enum OwnerType { SINGLE, DUAL }

final ownerTypeValues = EnumValues({
    "Dual": OwnerType.DUAL,
    "Single": OwnerType.SINGLE
});

enum AryPhoneType { CELL, WORK, HOME, FAX }

final aryPhoneTypeValues = EnumValues({
    "Cell": AryPhoneType.CELL,
    "Fax": AryPhoneType.FAX,
    "Home": AryPhoneType.HOME,
    "Work": AryPhoneType.WORK
});

enum Status { INTEREST, NEW, CUSTOMER, RECYCLE, PITCHING, ORDER, JOB }

final statusValues = EnumValues({
    "CUSTOMER": Status.CUSTOMER,
    "INTEREST": Status.INTEREST,
    "JOB": Status.JOB,
    "NEW": Status.NEW,
    "ORDER": Status.ORDER,
    "PITCHING": Status.PITCHING,
    "RECYCLE": Status.RECYCLE
});

enum Title { MR, MRS }

final titleValues = EnumValues({
    "Mr.": Title.MR,
    "Mrs.": Title.MRS
});

enum Type { LEAD }

final typeValues = EnumValues({
    "Lead": Type.LEAD
});

class EnumValues<T> {
    Map<String, T> map;
    Map<T, String> reverseMap;

    EnumValues(this.map);

    Map<T, String> get reverse {
        if (reverseMap == null) {
            reverseMap = map.map((k, v) => new MapEntry(v, k));
        }
        return reverseMap;
    }
}
