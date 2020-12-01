// To parse this JSON data, do
//
//     final paidTimeOff = paidTimeOffFromJson(jsonString);

import 'dart:convert';

PaidTimeOff paidTimeOffFromJson(String str) => PaidTimeOff.fromJson(json.decode(str));

String paidTimeOffToJson(PaidTimeOff data) => json.encode(data.toJson());

class PaidTimeOff {
    final String createdBy;
    final int createdOn;
    final String hours;
    final String id;
    final String name;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    PaidTimeOff({
        this.createdBy,
        this.createdOn,
        this.hours,
        this.id,
        this.name,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory PaidTimeOff.fromJson(Map<String, dynamic> json) => PaidTimeOff(
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        hours: json["hours"],
        id: json["id"] == null ? null : json["id"],
        name: json["name"],
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "hours": hours,
        "id": id == null ? null : id,
        "name": name,
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum Type { PAID_TIME_OFF }

final typeValues = EnumValues({
    "PaidTimeOff": Type.PAID_TIME_OFF
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
