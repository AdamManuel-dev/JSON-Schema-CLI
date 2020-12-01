// To parse this JSON data, do
//
//     final residence = residenceFromJson(jsonString);

import 'dart:convert';

Residence residenceFromJson(String str) => Residence.fromJson(json.decode(str));

String residenceToJson(Residence data) => json.encode(data.toJson());

class Residence {
    final Address address;
    final String city;
    final String createdBy;
    final int createdOn;
    final String id;
    final Location location;
    final List<String> noteIds;
    final Owner owner;
    final String state;
    final String streetAddress;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;
    final String zip;

    Residence({
        this.address,
        this.city,
        this.createdBy,
        this.createdOn,
        this.id,
        this.location,
        this.noteIds,
        this.owner,
        this.state,
        this.streetAddress,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
        this.zip,
    });

    factory Residence.fromJson(Map<String, dynamic> json) => Residence(
        address: Address.fromJson(json["address"]),
        city: json["city"],
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        id: json["id"] == null ? null : json["id"],
        location: Location.fromJson(json["location"]),
        noteIds: json["noteIds"] == null ? null : List<String>.from(json["noteIds"].map((x) => x)),
        owner: Owner.fromJson(json["owner"]),
        state: json["state"],
        streetAddress: json["streetAddress"],
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
        zip: json["zip"],
    );

    Map<String, dynamic> toJson() => {
        "address": address.toJson(),
        "city": city,
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "id": id == null ? null : id,
        "location": location.toJson(),
        "noteIds": noteIds == null ? null : List<dynamic>.from(noteIds.map((x) => x)),
        "owner": owner.toJson(),
        "state": state,
        "streetAddress": streetAddress,
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
        "zip": zip,
    };
}

class Address {
    final String country;
    final String countryCode;
    final String countryCodeIso3;
    final String countrySecondarySubdivision;
    final String countrySubdivision;
    final String countrySubdivisionName;
    final String countryTertiarySubdivision;
    final String extendedPostalCode;
    final String freeformAddress;
    final String localName;
    final String municipality;
    final String postalCode;
    final String streetName;
    final String streetNumber;

    Address({
        this.country,
        this.countryCode,
        this.countryCodeIso3,
        this.countrySecondarySubdivision,
        this.countrySubdivision,
        this.countrySubdivisionName,
        this.countryTertiarySubdivision,
        this.extendedPostalCode,
        this.freeformAddress,
        this.localName,
        this.municipality,
        this.postalCode,
        this.streetName,
        this.streetNumber,
    });

    factory Address.fromJson(Map<String, dynamic> json) => Address(
        country: json["country"],
        countryCode: json["countryCode"],
        countryCodeIso3: json["countryCodeISO3"],
        countrySecondarySubdivision: json["countrySecondarySubdivision"],
        countrySubdivision: json["countrySubdivision"],
        countrySubdivisionName: json["countrySubdivisionName"],
        countryTertiarySubdivision: json["countryTertiarySubdivision"],
        extendedPostalCode: json["extendedPostalCode"],
        freeformAddress: json["freeformAddress"],
        localName: json["localName"],
        municipality: json["municipality"],
        postalCode: json["postalCode"],
        streetName: json["streetName"],
        streetNumber: json["streetNumber"],
    );

    Map<String, dynamic> toJson() => {
        "country": country,
        "countryCode": countryCode,
        "countryCodeISO3": countryCodeIso3,
        "countrySecondarySubdivision": countrySecondarySubdivision,
        "countrySubdivision": countrySubdivision,
        "countrySubdivisionName": countrySubdivisionName,
        "countryTertiarySubdivision": countryTertiarySubdivision,
        "extendedPostalCode": extendedPostalCode,
        "freeformAddress": freeformAddress,
        "localName": localName,
        "municipality": municipality,
        "postalCode": postalCode,
        "streetName": streetName,
        "streetNumber": streetNumber,
    };
}

class Location {
    final double lat;
    final double lon;

    Location({
        this.lat,
        this.lon,
    });

    factory Location.fromJson(Map<String, dynamic> json) => Location(
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

enum Type { ADDRESS }

final typeValues = EnumValues({
    "Address": Type.ADDRESS
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
