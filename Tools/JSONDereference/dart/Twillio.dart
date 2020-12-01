// To parse this JSON data, do
//
//     final twillio = twillioFromJson(jsonString);

import 'dart:convert';

Twillio twillioFromJson(String str) => Twillio.fromJson(json.decode(str));

String twillioToJson(Twillio data) => json.encode(data.toJson());

class Twillio {
    final List<String> applicationSid;
    final List<String> callSid;
    final List<String> conferenceSid;
    final String createdBy;
    final int createdOn;
    final String id;
    final List<String> incomingPhoneNumberSid;
    final List<String> isoCountryCode;
    final List<String> messageSid;
    final List<String> outgoingCallerIdSid;
    final List<String> recordingSid;
    final List<String> twillioUrl;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Twillio({
        this.applicationSid,
        this.callSid,
        this.conferenceSid,
        this.createdBy,
        this.createdOn,
        this.id,
        this.incomingPhoneNumberSid,
        this.isoCountryCode,
        this.messageSid,
        this.outgoingCallerIdSid,
        this.recordingSid,
        this.twillioUrl,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Twillio.fromJson(Map<String, dynamic> json) => Twillio(
        applicationSid: List<String>.from(json["ApplicationSid"].map((x) => x)),
        callSid: List<String>.from(json["CallSid"].map((x) => x)),
        conferenceSid: List<String>.from(json["ConferenceSid"].map((x) => x)),
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        id: json["id"] == null ? null : json["id"],
        incomingPhoneNumberSid: List<String>.from(json["IncomingPhoneNumberSid"].map((x) => x)),
        isoCountryCode: List<String>.from(json["isoCountryCode"].map((x) => x)),
        messageSid: List<String>.from(json["messageSid"].map((x) => x)),
        outgoingCallerIdSid: List<String>.from(json["OutgoingCallerIdSid"].map((x) => x)),
        recordingSid: List<String>.from(json["recordingSid"].map((x) => x)),
        twillioUrl: List<String>.from(json["TwillioURL"].map((x) => x)),
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "ApplicationSid": List<dynamic>.from(applicationSid.map((x) => x)),
        "CallSid": List<dynamic>.from(callSid.map((x) => x)),
        "ConferenceSid": List<dynamic>.from(conferenceSid.map((x) => x)),
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "id": id == null ? null : id,
        "IncomingPhoneNumberSid": List<dynamic>.from(incomingPhoneNumberSid.map((x) => x)),
        "isoCountryCode": List<dynamic>.from(isoCountryCode.map((x) => x)),
        "messageSid": List<dynamic>.from(messageSid.map((x) => x)),
        "OutgoingCallerIdSid": List<dynamic>.from(outgoingCallerIdSid.map((x) => x)),
        "recordingSid": List<dynamic>.from(recordingSid.map((x) => x)),
        "TwillioURL": List<dynamic>.from(twillioUrl.map((x) => x)),
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum Type { TWILLIO }

final typeValues = EnumValues({
    "Twillio": Type.TWILLIO
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
