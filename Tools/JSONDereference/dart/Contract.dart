// To parse this JSON data, do
//
//     final contract = contractFromJson(jsonString);

import 'dart:convert';

Contract contractFromJson(String str) => Contract.fromJson(json.decode(str));

String contractToJson(Contract data) => json.encode(data.toJson());

class Contract {
    final String contract;
    final String createdBy;
    final int createdOn;
    final int datetime;
    final String id;
    final int lastRequested;
    final String lead;
    final String name;
    final String order;
    final Status status;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Contract({
        this.contract,
        this.createdBy,
        this.createdOn,
        this.datetime,
        this.id,
        this.lastRequested,
        this.lead,
        this.name,
        this.order,
        this.status,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Contract.fromJson(Map<String, dynamic> json) => Contract(
        contract: json["contract"] == null ? null : json["contract"],
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        datetime: json["datetime"] == null ? null : json["datetime"],
        id: json["id"] == null ? null : json["id"],
        lastRequested: json["lastRequested"] == null ? null : json["lastRequested"],
        lead: json["lead"] == null ? null : json["lead"],
        name: json["name"],
        order: json["order"] == null ? null : json["order"],
        status: statusValues.map[json["status"]],
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "contract": contract == null ? null : contract,
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "datetime": datetime == null ? null : datetime,
        "id": id == null ? null : id,
        "lastRequested": lastRequested == null ? null : lastRequested,
        "lead": lead == null ? null : lead,
        "name": name,
        "order": order == null ? null : order,
        "status": statusValues.reverse[status],
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum Status { SIGNED, APPROVED, PENDING, SENT, DRAFT }

final statusValues = EnumValues({
    "APPROVED": Status.APPROVED,
    "DRAFT": Status.DRAFT,
    "PENDING": Status.PENDING,
    "SENT": Status.SENT,
    "SIGNED": Status.SIGNED
});

enum Type { CONTRACT }

final typeValues = EnumValues({
    "Contract": Type.CONTRACT
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
