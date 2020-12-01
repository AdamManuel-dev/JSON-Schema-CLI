// To parse this JSON data, do
//
//     final phonecall = phonecallFromJson(jsonString);

import 'dart:convert';

Phonecall phonecallFromJson(String str) => Phonecall.fromJson(json.decode(str));

String phonecallToJson(Phonecall data) => json.encode(data.toJson());

class Phonecall {
    final String createdBy;
    final int createdOn;
    final Direction direction;
    final String id;
    final Status status;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Phonecall({
        this.createdBy,
        this.createdOn,
        this.direction,
        this.id,
        this.status,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Phonecall.fromJson(Map<String, dynamic> json) => Phonecall(
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        direction: directionValues.map[json["direction"]],
        id: json["id"] == null ? null : json["id"],
        status: statusValues.map[json["status"]],
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "direction": directionValues.reverse[direction],
        "id": id == null ? null : id,
        "status": statusValues.reverse[status],
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum Direction { OUTBOUND, INBOUND }

final directionValues = EnumValues({
    "INBOUND": Direction.INBOUND,
    "OUTBOUND": Direction.OUTBOUND
});

enum Status { REHASH, REHASH_2, MEDIA1, CV_CALLBACK, HOME_SHOWS, CR1, CR2, PC1, HS1, NH1, SURVEY1, RS1, PC2, PC3, PC4, PC5, HS2, HS3, HS4, HS5, HS6, MEDIA2, MEDIA3, MEDIA4, NH2, NH3, NH4, SURVEY2, SURVEY3, SURVEY4, SURVEY5, SURVEY6, RS2, RS3, RS4, RH_CANCEL, BLOWOUT, COMPLETE, RESURECTION1, RESURECTION2, CUSTOMER_SURVEY, NOT_NET, CONFIRM1 }

final statusValues = EnumValues({
    "BLOWOUT": Status.BLOWOUT,
    "COMPLETE": Status.COMPLETE,
    "CONFIRM1": Status.CONFIRM1,
    "CR1": Status.CR1,
    "CR2": Status.CR2,
    "CUSTOMER_SURVEY": Status.CUSTOMER_SURVEY,
    "CV_CALLBACK": Status.CV_CALLBACK,
    "HOME_SHOWS": Status.HOME_SHOWS,
    "HS1": Status.HS1,
    "HS2": Status.HS2,
    "HS3": Status.HS3,
    "HS4": Status.HS4,
    "HS5": Status.HS5,
    "HS6": Status.HS6,
    "MEDIA1": Status.MEDIA1,
    "MEDIA2": Status.MEDIA2,
    "MEDIA3": Status.MEDIA3,
    "MEDIA4": Status.MEDIA4,
    "NH1": Status.NH1,
    "NH2": Status.NH2,
    "NH3": Status.NH3,
    "NH4": Status.NH4,
    "NOT_NET": Status.NOT_NET,
    "PC1": Status.PC1,
    "PC2": Status.PC2,
    "PC3": Status.PC3,
    "PC4": Status.PC4,
    "PC5": Status.PC5,
    "REHASH": Status.REHASH,
    "REHASH_2": Status.REHASH_2,
    "RESURECTION1": Status.RESURECTION1,
    "RESURECTION2": Status.RESURECTION2,
    "RH_CANCEL": Status.RH_CANCEL,
    "RS1": Status.RS1,
    "RS2": Status.RS2,
    "RS3": Status.RS3,
    "RS4": Status.RS4,
    "SURVEY1": Status.SURVEY1,
    "SURVEY2": Status.SURVEY2,
    "SURVEY3": Status.SURVEY3,
    "SURVEY4": Status.SURVEY4,
    "SURVEY5": Status.SURVEY5,
    "SURVEY6": Status.SURVEY6
});

enum Type { PHONECALL }

final typeValues = EnumValues({
    "Phonecall": Type.PHONECALL
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
