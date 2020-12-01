// To parse this JSON data, do
//
//     final timeoff = timeoffFromJson(jsonString);

import 'dart:convert';

Timeoff timeoffFromJson(String str) => Timeoff.fromJson(json.decode(str));

String timeoffToJson(Timeoff data) => json.encode(data.toJson());

class Timeoff {
    final String createdBy;
    final int createdOn;
    final String customReason;
    final Department department;
    final String fullDay;
    final String halfDayTime;
    final String halfDayTime2;
    final String id;
    final int oneTimeRequest;
    final Reason reason;
    final int recurringRequest;
    final String repeatFor;
    final RequestType requestType;
    final Status status;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;
    final WorkDays workDays;

    Timeoff({
        this.createdBy,
        this.createdOn,
        this.customReason,
        this.department,
        this.fullDay,
        this.halfDayTime,
        this.halfDayTime2,
        this.id,
        this.oneTimeRequest,
        this.reason,
        this.recurringRequest,
        this.repeatFor,
        this.requestType,
        this.status,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
        this.workDays,
    });

    factory Timeoff.fromJson(Map<String, dynamic> json) => Timeoff(
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        customReason: json["customReason"],
        department: departmentValues.map[json["department"]],
        fullDay: json["fullDay"],
        halfDayTime: json["halfDayTime"],
        halfDayTime2: json["halfDayTime_2"],
        id: json["id"] == null ? null : json["id"],
        oneTimeRequest: json["oneTimeRequest"] == null ? null : json["oneTimeRequest"],
        reason: reasonValues.map[json["reason"]],
        recurringRequest: json["recurringRequest"] == null ? null : json["recurringRequest"],
        repeatFor: json["repeatFor"],
        requestType: requestTypeValues.map[json["requestType"]],
        status: statusValues.map[json["status"]],
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
        workDays: workDaysValues.map[json["workDays"]],
    );

    Map<String, dynamic> toJson() => {
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "customReason": customReason,
        "department": departmentValues.reverse[department],
        "fullDay": fullDay,
        "halfDayTime": halfDayTime,
        "halfDayTime_2": halfDayTime2,
        "id": id == null ? null : id,
        "oneTimeRequest": oneTimeRequest == null ? null : oneTimeRequest,
        "reason": reasonValues.reverse[reason],
        "recurringRequest": recurringRequest == null ? null : recurringRequest,
        "repeatFor": repeatFor,
        "requestType": requestTypeValues.reverse[requestType],
        "status": statusValues.reverse[status],
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
        "workDays": workDaysValues.reverse[workDays],
    };
}

enum Department { FINANCE, MARKETING, PRODUCTION, SALES }

final departmentValues = EnumValues({
    "Finance": Department.FINANCE,
    "Marketing": Department.MARKETING,
    "Production": Department.PRODUCTION,
    "Sales": Department.SALES
});

enum Reason { VACATION, PERSONAL_LEAVE, FUNERAL_BEREAVEMENT, JURY_DUTY, FAMILY_REASONS, MEDICAL_LEAVE, TO_VOTE, SALES_90_DAYS, CUSTOM }

final reasonValues = EnumValues({
    "custom": Reason.CUSTOM,
    "Family Reasons": Reason.FAMILY_REASONS,
    "Funeral/Bereavement": Reason.FUNERAL_BEREAVEMENT,
    "Jury Duty": Reason.JURY_DUTY,
    "Medical Leave": Reason.MEDICAL_LEAVE,
    "Personal Leave": Reason.PERSONAL_LEAVE,
    "Sales (90 days)": Reason.SALES_90_DAYS,
    "To Vote": Reason.TO_VOTE,
    "Vacation": Reason.VACATION
});

enum RequestType { ONE_TIME_REQUEST, RECURRING_REQUEST }

final requestTypeValues = EnumValues({
    "oneTimeRequest": RequestType.ONE_TIME_REQUEST,
    "recurringRequest": RequestType.RECURRING_REQUEST
});

enum Status { PENDING, ACCEPTED, REJECTED }

final statusValues = EnumValues({
    "ACCEPTED": Status.ACCEPTED,
    "PENDING": Status.PENDING,
    "REJECTED": Status.REJECTED
});

enum Type { TIMEOFF }

final typeValues = EnumValues({
    "Timeoff": Type.TIMEOFF
});

enum WorkDays { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY }

final workDaysValues = EnumValues({
    "Friday": WorkDays.FRIDAY,
    "Monday": WorkDays.MONDAY,
    "Saturday": WorkDays.SATURDAY,
    "Thursday": WorkDays.THURSDAY,
    "Tuesday": WorkDays.TUESDAY,
    "Wednesday": WorkDays.WEDNESDAY
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
