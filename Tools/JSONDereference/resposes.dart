// To parse this JSON data, do
//
//     final resposes = resposesFromJson(jsonString);

import 'dart:convert';

Resposes resposesFromJson(String str) => Resposes.fromJson(json.decode(str));

String resposesToJson(Resposes data) => json.encode(data.toJson());

class Resposes {
    final String success;
    final List<Response> response;

    Resposes({
        this.success,
        this.response,
    });

    factory Resposes.fromJson(Map<String, dynamic> json) => Resposes(
        success: json["success"],
        response: List<Response>.from(json["response"].map((x) => Response.fromJson(x))),
    );

    Map<String, dynamic> toJson() => {
        "success": success,
        "response": List<dynamic>.from(response.map((x) => x.toJson())),
    };
}

class Response {
    final String emailAddress;
    final Title title;
    final String firstName;
    final String lastName;
    final int primaryPhone;
    final AryPhoneType primaryPhoneType;
    final int secondaryPhone;
    final AryPhoneType secondaryPhoneType;
    final LeadSources leadSources;
    final String id;
    final String residence;
    final Type type;
    final int createdOn;
    final Title title2;
    final String firstName2;
    final String lastName2;

    Response({
        this.emailAddress,
        this.title,
        this.firstName,
        this.lastName,
        this.primaryPhone,
        this.primaryPhoneType,
        this.secondaryPhone,
        this.secondaryPhoneType,
        this.leadSources,
        this.id,
        this.residence,
        this.type,
        this.createdOn,
        this.title2,
        this.firstName2,
        this.lastName2,
    });

    factory Response.fromJson(Map<String, dynamic> json) => Response(
        emailAddress: json["emailAddress"],
        title: titleValues.map[json["title"]],
        firstName: json["firstName"],
        lastName: json["lastName"],
        primaryPhone: json["primaryPhone"],
        primaryPhoneType: aryPhoneTypeValues.map[json["primaryPhoneType"]],
        secondaryPhone: json["secondaryPhone"],
        secondaryPhoneType: aryPhoneTypeValues.map[json["secondaryPhoneType"]],
        leadSources: leadSourcesValues.map[json["leadSources"]],
        id: json["id"],
        residence: json["residence"],
        type: typeValues.map[json["type"]],
        createdOn: json["createdOn"],
        title2: json["title_2"] == null ? null : titleValues.map[json["title_2"]],
        firstName2: json["firstName_2"] == null ? null : json["firstName_2"],
        lastName2: json["lastName_2"] == null ? null : json["lastName_2"],
    );

    Map<String, dynamic> toJson() => {
        "emailAddress": emailAddress,
        "title": titleValues.reverse[title],
        "firstName": firstName,
        "lastName": lastName,
        "primaryPhone": primaryPhone,
        "primaryPhoneType": aryPhoneTypeValues.reverse[primaryPhoneType],
        "secondaryPhone": secondaryPhone,
        "secondaryPhoneType": aryPhoneTypeValues.reverse[secondaryPhoneType],
        "leadSources": leadSourcesValues.reverse[leadSources],
        "id": id,
        "residence": residence,
        "type": typeValues.reverse[type],
        "createdOn": createdOn,
        "title_2": title2 == null ? null : titleValues.reverse[title2],
        "firstName_2": firstName2 == null ? null : firstName2,
        "lastName_2": lastName2 == null ? null : lastName2,
    };
}

enum LeadSources { TELEMARKETING, CANVAS }

final leadSourcesValues = EnumValues({
    "Canvas": LeadSources.CANVAS,
    "Telemarketing": LeadSources.TELEMARKETING
});

enum AryPhoneType { WORK, HOME, CELL }

final aryPhoneTypeValues = EnumValues({
    "Cell": AryPhoneType.CELL,
    "Home": AryPhoneType.HOME,
    "Work": AryPhoneType.WORK
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
