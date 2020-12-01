// To parse this JSON data, do
//
//     final userLocation = userLocationFromJson(jsonString);

import 'dart:convert';

UserLocation userLocationFromJson(String str) => UserLocation.fromJson(json.decode(str));

String userLocationToJson(UserLocation data) => json.encode(data.toJson());

class UserLocation {
    final String createdBy;
    final int createdOn;
    final String currentArea;
    final int date;
    final String id;
    final List<Location> locations;
    final Owner owner;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    UserLocation({
        this.createdBy,
        this.createdOn,
        this.currentArea,
        this.date,
        this.id,
        this.locations,
        this.owner,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory UserLocation.fromJson(Map<String, dynamic> json) => UserLocation(
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        currentArea: json["currentArea"] == null ? null : json["currentArea"],
        date: json["date"],
        id: json["id"] == null ? null : json["id"],
        locations: List<Location>.from(json["locations"].map((x) => Location.fromJson(x))),
        owner: Owner.fromJson(json["owner"]),
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "currentArea": currentArea == null ? null : currentArea,
        "date": date,
        "id": id == null ? null : id,
        "locations": List<dynamic>.from(locations.map((x) => x.toJson())),
        "owner": owner.toJson(),
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

class Location {
    final Clocked clocked;
    final Position position;
    final int ts;

    Location({
        this.clocked,
        this.position,
        this.ts,
    });

    factory Location.fromJson(Map<String, dynamic> json) => Location(
        clocked: clockedValues.map[json["clocked"]],
        position: Position.fromJson(json["position"]),
        ts: json["ts"] == null ? null : json["ts"],
    );

    Map<String, dynamic> toJson() => {
        "clocked": clockedValues.reverse[clocked],
        "position": position.toJson(),
        "ts": ts == null ? null : ts,
    };
}

enum Clocked { IN, OUT }

final clockedValues = EnumValues({
    "IN": Clocked.IN,
    "OUT": Clocked.OUT
});

class Position {
    final double lat;
    final double lon;

    Position({
        this.lat,
        this.lon,
    });

    factory Position.fromJson(Map<String, dynamic> json) => Position(
        lat: json["lat"].toDouble(),
        lon: json["lon"].toDouble(),
    );

    Map<String, dynamic> toJson() => {
        "lat": lat,
        "lon": lon,
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

enum Type { TIMECLOCK }

final typeValues = EnumValues({
    "Timeclock": Type.TIMECLOCK
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
