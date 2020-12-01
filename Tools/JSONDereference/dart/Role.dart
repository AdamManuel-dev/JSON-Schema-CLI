// To parse this JSON data, do
//
//     final role = roleFromJson(jsonString);

import 'dart:convert';

Role roleFromJson(String str) => Role.fromJson(json.decode(str));

String roleToJson(Role data) => json.encode(data.toJson());

class Role {
    final String createdBy;
    final int createdOn;
    final String detailId;
    final String id;
    final List<String> roleId;
    final List<String> roleName;
    final String updatedBy;
    final int updatedOn;
    final String user;
    final String vendorId;

    Role({
        this.createdBy,
        this.createdOn,
        this.detailId,
        this.id,
        this.roleId,
        this.roleName,
        this.updatedBy,
        this.updatedOn,
        this.user,
        this.vendorId,
    });

    factory Role.fromJson(Map<String, dynamic> json) => Role(
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        detailId: json["detailID"] == null ? null : json["detailID"],
        id: json["id"] == null ? null : json["id"],
        roleId: List<String>.from(json["roleId"].map((x) => x)),
        roleName: List<String>.from(json["roleName"].map((x) => x)),
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
        vendorId: json["vendorID"] == null ? null : json["vendorID"],
    );

    Map<String, dynamic> toJson() => {
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "detailID": detailId == null ? null : detailId,
        "id": id == null ? null : id,
        "roleId": List<dynamic>.from(roleId.map((x) => x)),
        "roleName": List<dynamic>.from(roleName.map((x) => x)),
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
        "vendorID": vendorId == null ? null : vendorId,
    };
}
