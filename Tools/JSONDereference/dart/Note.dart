// To parse this JSON data, do
//
//     final note = noteFromJson(jsonString);

import 'dart:convert';

Note noteFromJson(String str) => Note.fromJson(json.decode(str));

String noteToJson(Note data) => json.encode(data.toJson());

class Note {
    final String createdBy;
    final int createdOn;
    final String id;
    final String imageUrl;
    final String noteText;
    final Status status;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Note({
        this.createdBy,
        this.createdOn,
        this.id,
        this.imageUrl,
        this.noteText,
        this.status,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Note.fromJson(Map<String, dynamic> json) => Note(
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        id: json["id"] == null ? null : json["id"],
        imageUrl: json["imageURL"] == null ? null : json["imageURL"],
        noteText: json["noteText"] == null ? null : json["noteText"],
        status: statusValues.map[json["status"]],
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "id": id == null ? null : id,
        "imageURL": imageUrl == null ? null : imageUrl,
        "noteText": noteText == null ? null : noteText,
        "status": statusValues.reverse[status],
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum Status { DRAFT, SAVED, REMOVED }

final statusValues = EnumValues({
    "DRAFT": Status.DRAFT,
    "REMOVED": Status.REMOVED,
    "SAVED": Status.SAVED
});

enum Type { NOTE }

final typeValues = EnumValues({
    "Note": Type.NOTE
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
