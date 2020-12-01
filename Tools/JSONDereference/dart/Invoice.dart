// To parse this JSON data, do
//
//     final invoice = invoiceFromJson(jsonString);

import 'dart:convert';

Invoice invoiceFromJson(String str) => Invoice.fromJson(json.decode(str));

String invoiceToJson(Invoice data) => json.encode(data.toJson());

class Invoice {
    final String amount;
    final String createdBy;
    final int createdOn;
    final String description;
    final String detailType;
    final String id;
    final String qty;
    final String salesId;
    final String salesItemLineDetail;
    final String taxCodeRef;
    final Type type;
    final String unitPrice;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Invoice({
        this.amount,
        this.createdBy,
        this.createdOn,
        this.description,
        this.detailType,
        this.id,
        this.qty,
        this.salesId,
        this.salesItemLineDetail,
        this.taxCodeRef,
        this.type,
        this.unitPrice,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Invoice.fromJson(Map<String, dynamic> json) => Invoice(
        amount: json["Amount"],
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        description: json["Description"],
        detailType: json["DetailType"],
        id: json["id"] == null ? null : json["id"],
        qty: json["Qty"],
        salesId: json["salesID"] == null ? null : json["salesID"],
        salesItemLineDetail: json["salesItemLineDetail"],
        taxCodeRef: json["TaxCodeRef"],
        type: typeValues.map[json["type"]],
        unitPrice: json["UnitPrice"],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "Amount": amount,
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "Description": description,
        "DetailType": detailType,
        "id": id == null ? null : id,
        "Qty": qty,
        "salesID": salesId == null ? null : salesId,
        "salesItemLineDetail": salesItemLineDetail,
        "TaxCodeRef": taxCodeRef,
        "type": typeValues.reverse[type],
        "UnitPrice": unitPrice,
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum Type { SALES }

final typeValues = EnumValues({
    "Sales": Type.SALES
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
