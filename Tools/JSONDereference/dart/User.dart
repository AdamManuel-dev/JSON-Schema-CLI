// To parse this JSON data, do
//
//     final user = userFromJson(jsonString);

import 'dart:convert';

User userFromJson(String str) => User.fromJson(json.decode(str));

String userToJson(User data) => json.encode(data.toJson());

class User {
    final String companyId;
    final String companyTitle;
    final String contractId;
    final String createdBy;
    final int createdOn;
    final int dateOfBirth;
    final String email;
    final String faceListId;
    final String firstName;
    final String gender;
    final String group;
    final String id;
    final String intuitId;
    final String ipAddress;
    final String lastName;
    final List<String> noteIds;
    final String payrollId;
    final String permissionId;
    final String phoneNumber;
    final String ssn;
    final Theming theming;
    final String twillioId;
    final UserType type;
    final String updatedBy;
    final int updatedOn;
    final String user;
    final String userType;
    final bool verified;

    User({
        this.companyId,
        this.companyTitle,
        this.contractId,
        this.createdBy,
        this.createdOn,
        this.dateOfBirth,
        this.email,
        this.faceListId,
        this.firstName,
        this.gender,
        this.group,
        this.id,
        this.intuitId,
        this.ipAddress,
        this.lastName,
        this.noteIds,
        this.payrollId,
        this.permissionId,
        this.phoneNumber,
        this.ssn,
        this.theming,
        this.twillioId,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
        this.userType,
        this.verified,
    });

    factory User.fromJson(Map<String, dynamic> json) => User(
        companyId: json["companyId"] == null ? null : json["companyId"],
        companyTitle: json["companyTitle"] == null ? null : json["companyTitle"],
        contractId: json["contractId"] == null ? null : json["contractId"],
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        dateOfBirth: json["dateOfBirth"],
        email: json["email"],
        faceListId: json["faceListId"] == null ? null : json["faceListId"],
        firstName: json["firstName"],
        gender: json["gender"],
        group: json["group"],
        id: json["id"] == null ? null : json["id"],
        intuitId: json["intuitId"] == null ? null : json["intuitId"],
        ipAddress: json["ipAddress"] == null ? null : json["ipAddress"],
        lastName: json["lastName"],
        noteIds: json["noteIds"] == null ? null : List<String>.from(json["noteIds"].map((x) => x)),
        payrollId: json["payrollId"] == null ? null : json["payrollId"],
        permissionId: json["permissionId"] == null ? null : json["permissionId"],
        phoneNumber: json["phoneNumber"] == null ? null : json["phoneNumber"],
        ssn: json["ssn"] == null ? null : json["ssn"],
        theming: Theming.fromJson(json["theming"]),
        twillioId: json["twillioId"] == null ? null : json["twillioId"],
        type: userTypeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
        userType: json["userType"],
        verified: json["verified"],
    );

    Map<String, dynamic> toJson() => {
        "companyId": companyId == null ? null : companyId,
        "companyTitle": companyTitle == null ? null : companyTitle,
        "contractId": contractId == null ? null : contractId,
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "dateOfBirth": dateOfBirth,
        "email": email,
        "faceListId": faceListId == null ? null : faceListId,
        "firstName": firstName,
        "gender": gender,
        "group": group,
        "id": id == null ? null : id,
        "intuitId": intuitId == null ? null : intuitId,
        "ipAddress": ipAddress == null ? null : ipAddress,
        "lastName": lastName,
        "noteIds": noteIds == null ? null : List<dynamic>.from(noteIds.map((x) => x)),
        "payrollId": payrollId == null ? null : payrollId,
        "permissionId": permissionId == null ? null : permissionId,
        "phoneNumber": phoneNumber == null ? null : phoneNumber,
        "ssn": ssn == null ? null : ssn,
        "theming": theming.toJson(),
        "twillioId": twillioId == null ? null : twillioId,
        "type": userTypeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
        "userType": userType,
        "verified": verified,
    };
}

class Theming {
    final bool darkmode;
    final List<String> productIDs;
    final ThemingType type;

    Theming({
        this.darkmode,
        this.productIDs,
        this.type,
    });

    factory Theming.fromJson(Map<String, dynamic> json) => Theming(
        darkmode: json["darkmode"],
        productIDs: json["productIDs"] == null ? null : List<String>.from(json["productIDs"].map((x) => x)),
        type: json["type"] == null ? null : themingTypeValues.map[json["type"]],
    );

    Map<String, dynamic> toJson() => {
        "darkmode": darkmode,
        "productIDs": productIDs == null ? null : List<dynamic>.from(productIDs.map((x) => x)),
        "type": type == null ? null : themingTypeValues.reverse[type],
    };
}

enum ThemingType { USER_SETTINGS }

final themingTypeValues = EnumValues({
    "UserSettings": ThemingType.USER_SETTINGS
});

enum UserType { USER }

final userTypeValues = EnumValues({
    "User": UserType.USER
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
