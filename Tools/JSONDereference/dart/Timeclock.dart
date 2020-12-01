// To parse this JSON data, do
//
//     final timeclock = timeclockFromJson(jsonString);

import 'dart:convert';

Timeclock timeclockFromJson(String str) => Timeclock.fromJson(json.decode(str));

String timeclockToJson(Timeclock data) => json.encode(data.toJson());

class Timeclock {
    final int actualEndTime;
    final int actualStartTime;
    final String createdBy;
    final int createdOn;
    final int date;
    final String id;
    final List<String> noteIds;
    final int scheduledEndTime;
    final int scheduledStartTime;
    final TimeclockStatus status;
    final List<Timestamp> timestamps;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Timeclock({
        this.actualEndTime,
        this.actualStartTime,
        this.createdBy,
        this.createdOn,
        this.date,
        this.id,
        this.noteIds,
        this.scheduledEndTime,
        this.scheduledStartTime,
        this.status,
        this.timestamps,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Timeclock.fromJson(Map<String, dynamic> json) => Timeclock(
        actualEndTime: json["actualEndTime"] == null ? null : json["actualEndTime"],
        actualStartTime: json["actualStartTime"] == null ? null : json["actualStartTime"],
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        date: json["date"],
        id: json["id"] == null ? null : json["id"],
        noteIds: json["noteIds"] == null ? null : List<String>.from(json["noteIds"].map((x) => x)),
        scheduledEndTime: json["scheduledEndTime"] == null ? null : json["scheduledEndTime"],
        scheduledStartTime: json["scheduledStartTime"] == null ? null : json["scheduledStartTime"],
        status: timeclockStatusValues.map[json["status"]],
        timestamps: List<Timestamp>.from(json["timestamps"].map((x) => Timestamp.fromJson(x))),
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "actualEndTime": actualEndTime == null ? null : actualEndTime,
        "actualStartTime": actualStartTime == null ? null : actualStartTime,
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "date": date,
        "id": id == null ? null : id,
        "noteIds": noteIds == null ? null : List<dynamic>.from(noteIds.map((x) => x)),
        "scheduledEndTime": scheduledEndTime == null ? null : scheduledEndTime,
        "scheduledStartTime": scheduledStartTime == null ? null : scheduledStartTime,
        "status": timeclockStatusValues.reverse[status],
        "timestamps": List<dynamic>.from(timestamps.map((x) => x.toJson())),
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum TimeclockStatus { OFF_CLOCK, LATE, ON_CLOCK, OVERTIME, VACATION, SICK_LEAVE }

final timeclockStatusValues = EnumValues({
    "LATE": TimeclockStatus.LATE,
    "OFF_CLOCK": TimeclockStatus.OFF_CLOCK,
    "ON_CLOCK": TimeclockStatus.ON_CLOCK,
    "OVERTIME": TimeclockStatus.OVERTIME,
    "SICK_LEAVE": TimeclockStatus.SICK_LEAVE,
    "VACATION": TimeclockStatus.VACATION
});

class Timestamp {
    final int currentTime;
    final TimestampStatus status;

    Timestamp({
        this.currentTime,
        this.status,
    });

    factory Timestamp.fromJson(Map<String, dynamic> json) => Timestamp(
        currentTime: json["currentTime"] == null ? null : json["currentTime"],
        status: timestampStatusValues.map[json["status"]],
    );

    Map<String, dynamic> toJson() => {
        "currentTime": currentTime == null ? null : currentTime,
        "status": timestampStatusValues.reverse[status],
    };
}

enum TimestampStatus { CLOCK_IN, CLOCK_OUT, START_BREAK, END_BREAK }

final timestampStatusValues = EnumValues({
    "ClockIn": TimestampStatus.CLOCK_IN,
    "ClockOut": TimestampStatus.CLOCK_OUT,
    "EndBreak": TimestampStatus.END_BREAK,
    "StartBreak": TimestampStatus.START_BREAK
});

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
