// To parse this JSON data, do
//
//     final corporation = corporationFromJson(jsonString);

import 'dart:convert';

Corporation corporationFromJson(String str) => Corporation.fromJson(json.decode(str));

String corporationToJson(Corporation data) => json.encode(data.toJson());

class Corporation {
    final List<String> businessAddress;
    final String businessClassification;
    final String businessName;
    final String businessType;
    final String corporationId;
    final String createdBy;
    final int createdOn;
    final String ein;
    final String id;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Corporation({
        this.businessAddress,
        this.businessClassification,
        this.businessName,
        this.businessType,
        this.corporationId,
        this.createdBy,
        this.createdOn,
        this.ein,
        this.id,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Corporation.fromJson(Map<String, dynamic> json) => Corporation(
        businessAddress: List<String>.from(json["businessAddress"].map((x) => x)),
        businessClassification: json["businessClassification"],
        businessName: json["businessName"],
        businessType: json["businessType"],
        corporationId: json["corporationID"] == null ? null : json["corporationID"],
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        ein: json["ein"],
        id: json["id"] == null ? null : json["id"],
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "businessAddress": List<dynamic>.from(businessAddress.map((x) => x)),
        "businessClassification": businessClassification,
        "businessName": businessName,
        "businessType": businessType,
        "corporationID": corporationId == null ? null : corporationId,
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "ein": ein,
        "id": id == null ? null : id,
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum Type { CORPORATION }

final typeValues = EnumValues({
    "Corporation": Type.CORPORATION
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
