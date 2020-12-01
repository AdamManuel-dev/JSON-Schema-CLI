// To parse this JSON data, do
//
//     final payment = paymentFromJson(jsonString);

import 'dart:convert';

Payment paymentFromJson(String str) => Payment.fromJson(json.decode(str));

String paymentToJson(Payment data) => json.encode(data.toJson());

class Payment {
    final String contractId;
    final String contractStatus;
    final String createdBy;
    final int createdOn;
    final String id;
    final List<String> noteIds;
    final Owner owner;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Payment({
        this.contractId,
        this.contractStatus,
        this.createdBy,
        this.createdOn,
        this.id,
        this.noteIds,
        this.owner,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Payment.fromJson(Map<String, dynamic> json) => Payment(
        contractId: json["contractId"],
        contractStatus: json["contractStatus"],
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        id: json["id"] == null ? null : json["id"],
        noteIds: json["noteIds"] == null ? null : List<String>.from(json["noteIds"].map((x) => x)),
        owner: Owner.fromJson(json["owner"]),
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "contractId": contractId,
        "contractStatus": contractStatus,
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "id": id == null ? null : id,
        "noteIds": noteIds == null ? null : List<dynamic>.from(noteIds.map((x) => x)),
        "owner": owner.toJson(),
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

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

enum Type { CONTRACT_STATUS }

final typeValues = EnumValues({
    "ContractStatus": Type.CONTRACT_STATUS
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
