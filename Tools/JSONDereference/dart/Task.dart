// To parse this JSON data, do
//
//     final task = taskFromJson(jsonString);

import 'dart:convert';

Task taskFromJson(String str) => Task.fromJson(json.decode(str));

String taskToJson(Task data) => json.encode(data.toJson());

class Task {
    final String appointment;
    final List<String> assigned;
    final CallType callType;
    final String createdBy;
    final int createdOn;
    final String description;
    final int endTime;
    final GeoJson geoJson;
    final String id;
    final List<String> notes;
    final int startTime;
    final SubType subType;
    final String title;
    final TaskType type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Task({
        this.appointment,
        this.assigned,
        this.callType,
        this.createdBy,
        this.createdOn,
        this.description,
        this.endTime,
        this.geoJson,
        this.id,
        this.notes,
        this.startTime,
        this.subType,
        this.title,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Task.fromJson(Map<String, dynamic> json) => Task(
        appointment: json["appointment"] == null ? null : json["appointment"],
        assigned: List<String>.from(json["assigned"].map((x) => x)),
        callType: callTypeValues.map[json["callType"]],
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        description: json["description"],
        endTime: json["endTime"] == null ? null : json["endTime"],
        geoJson: GeoJson.fromJson(json["GeoJSON"]),
        id: json["id"] == null ? null : json["id"],
        notes: json["notes"] == null ? null : List<String>.from(json["notes"].map((x) => x)),
        startTime: json["startTime"] == null ? null : json["startTime"],
        subType: subTypeValues.map[json["subType"]],
        title: json["title"],
        type: taskTypeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "appointment": appointment == null ? null : appointment,
        "assigned": List<dynamic>.from(assigned.map((x) => x)),
        "callType": callTypeValues.reverse[callType],
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "description": description,
        "endTime": endTime == null ? null : endTime,
        "GeoJSON": geoJson.toJson(),
        "id": id == null ? null : id,
        "notes": notes == null ? null : List<dynamic>.from(notes.map((x) => x)),
        "startTime": startTime == null ? null : startTime,
        "subType": subTypeValues.reverse[subType],
        "title": title,
        "type": taskTypeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum CallType { NEW_LEAD, RESCHEDULE, REHASH, SURVEY }

final callTypeValues = EnumValues({
    "New Lead": CallType.NEW_LEAD,
    "Rehash": CallType.REHASH,
    "Reschedule": CallType.RESCHEDULE,
    "Survey": CallType.SURVEY
});

class GeoJson {
    final List<double> bbox;
    final List<List<double>> coordinates;
    final GeoJsonType type;

    GeoJson({
        this.bbox,
        this.coordinates,
        this.type,
    });

    factory GeoJson.fromJson(Map<String, dynamic> json) => GeoJson(
        bbox: json["bbox"] == null ? null : List<double>.from(json["bbox"].map((x) => x.toDouble())),
        coordinates: List<List<double>>.from(json["coordinates"].map((x) => List<double>.from(x.map((x) => x.toDouble())))),
        type: geoJsonTypeValues.map[json["type"]],
    );

    Map<String, dynamic> toJson() => {
        "bbox": bbox == null ? null : List<dynamic>.from(bbox.map((x) => x)),
        "coordinates": List<dynamic>.from(coordinates.map((x) => List<dynamic>.from(x.map((x) => x)))),
        "type": geoJsonTypeValues.reverse[type],
    };
}

enum GeoJsonType { POLYGON }

final geoJsonTypeValues = EnumValues({
    "Polygon": GeoJsonType.POLYGON
});

enum SubType { APPOINTMENT, AREA, PHONE_CALL, MEETING }

final subTypeValues = EnumValues({
    "Appointment": SubType.APPOINTMENT,
    "Area": SubType.AREA,
    "Meeting": SubType.MEETING,
    "Phone Call": SubType.PHONE_CALL
});

enum TaskType { TASK }

final taskTypeValues = EnumValues({
    "Task": TaskType.TASK
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
