// To parse this JSON data, do
//
//     final message = messageFromJson(jsonString);

import 'dart:convert';

Message messageFromJson(String str) => Message.fromJson(json.decode(str));

String messageToJson(Message data) => json.encode(data.toJson());

class Message {
    final String createdBy;
    final int createdOn;
    final String id;
    final String message;
    final Owner owner;
    final int seenAt;
    final SendType sendType;
    final int sentAt;
    final Status status;
    final String to;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Message({
        this.createdBy,
        this.createdOn,
        this.id,
        this.message,
        this.owner,
        this.seenAt,
        this.sendType,
        this.sentAt,
        this.status,
        this.to,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Message.fromJson(Map<String, dynamic> json) => Message(
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        id: json["id"] == null ? null : json["id"],
        message: json["message"],
        owner: Owner.fromJson(json["owner"]),
        seenAt: json["seenAt"] == null ? null : json["seenAt"],
        sendType: sendTypeValues.map[json["sendType"]],
        sentAt: json["sentAt"] == null ? null : json["sentAt"],
        status: statusValues.map[json["status"]],
        to: json["to"],
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "id": id == null ? null : id,
        "message": message,
        "owner": owner.toJson(),
        "seenAt": seenAt == null ? null : seenAt,
        "sendType": sendTypeValues.reverse[sendType],
        "sentAt": sentAt == null ? null : sentAt,
        "status": statusValues.reverse[status],
        "to": to,
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

enum SendType { GROUP, USER }

final sendTypeValues = EnumValues({
    "Group": SendType.GROUP,
    "User": SendType.USER
});

enum Status { NEW, DRAFT, VIEWED, ARCHIVED }

final statusValues = EnumValues({
    "Archived": Status.ARCHIVED,
    "Draft": Status.DRAFT,
    "New": Status.NEW,
    "Viewed": Status.VIEWED
});

enum Type { MESSAGE }

final typeValues = EnumValues({
    "Message": Type.MESSAGE
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
