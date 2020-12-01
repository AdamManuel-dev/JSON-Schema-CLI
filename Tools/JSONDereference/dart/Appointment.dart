// To parse this JSON data, do
//
//     final appointment = appointmentFromJson(jsonString);

import 'dart:convert';

Appointment appointmentFromJson(String str) => Appointment.fromJson(json.decode(str));

String appointmentToJson(Appointment data) => json.encode(data.toJson());

class Appointment {
    final String appointmentTime;
    final AppointmentType appointmentType;
    final String createdBy;
    final int createdOn;
    final double date;
    final String id;
    final String lead;
    final List<String> notes;
    final Status status;
    final int stepNumber;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Appointment({
        this.appointmentTime,
        this.appointmentType,
        this.createdBy,
        this.createdOn,
        this.date,
        this.id,
        this.lead,
        this.notes,
        this.status,
        this.stepNumber,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Appointment.fromJson(Map<String, dynamic> json) => Appointment(
        appointmentTime: json["appointmentTime"],
        appointmentType: appointmentTypeValues.map[json["appointmentType"]],
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        date: json["date"].toDouble(),
        id: json["id"] == null ? null : json["id"],
        lead: json["lead"] == null ? null : json["lead"],
        notes: json["notes"] == null ? null : List<String>.from(json["notes"].map((x) => x)),
        status: statusValues.map[json["status"]],
        stepNumber: json["stepNumber"] == null ? null : json["stepNumber"],
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "appointmentTime": appointmentTime,
        "appointmentType": appointmentTypeValues.reverse[appointmentType],
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "date": date,
        "id": id == null ? null : id,
        "lead": lead == null ? null : lead,
        "notes": notes == null ? null : List<dynamic>.from(notes.map((x) => x)),
        "status": statusValues.reverse[status],
        "stepNumber": stepNumber == null ? null : stepNumber,
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum AppointmentType { WINDOWS_DOOR, SIDING_SOFFIT_FASCIA, ROOF, FENCE, DECK, BATH, BASEMENT, KITCHEN }

final appointmentTypeValues = EnumValues({
    "Basement": AppointmentType.BASEMENT,
    "Bath": AppointmentType.BATH,
    "Deck": AppointmentType.DECK,
    "Fence": AppointmentType.FENCE,
    "Kitchen": AppointmentType.KITCHEN,
    "Roof": AppointmentType.ROOF,
    "Siding/Soffit-Fascia": AppointmentType.SIDING_SOFFIT_FASCIA,
    "Windows/Door": AppointmentType.WINDOWS_DOOR
});

enum Status { NEW, TO_CONFIRM, COULD_NOT_REACH, CONFIRMED, UNASSIGNED, CALL_CANCEL, EXTRA, ASSIGNED, ONE_LEG, NO_SHOW, SALE, REP_TIE, PITCH_MISS, BLOWOUT, RESCHEDULE, REHASH }

final statusValues = EnumValues({
    "ASSIGNED": Status.ASSIGNED,
    "BLOWOUT": Status.BLOWOUT,
    "CALL_CANCEL": Status.CALL_CANCEL,
    "CONFIRMED": Status.CONFIRMED,
    "COULD_NOT_REACH": Status.COULD_NOT_REACH,
    "EXTRA": Status.EXTRA,
    "NEW": Status.NEW,
    "NO_SHOW": Status.NO_SHOW,
    "ONE_LEG": Status.ONE_LEG,
    "PITCH_MISS": Status.PITCH_MISS,
    "REHASH": Status.REHASH,
    "REP_TIE": Status.REP_TIE,
    "RESCHEDULE": Status.RESCHEDULE,
    "SALE": Status.SALE,
    "TO_CONFIRM": Status.TO_CONFIRM,
    "UNASSIGNED": Status.UNASSIGNED
});

enum Type { APPOINTMENT }

final typeValues = EnumValues({
    "Appointment": Type.APPOINTMENT
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
