// To parse this JSON data, do
//
//     final product = productFromJson(jsonString);

import 'dart:convert';

Product productFromJson(String str) => Product.fromJson(json.decode(str));

String productToJson(Product data) => json.encode(data.toJson());

class Product {
    final String category;
    final String createdBy;
    final int createdOn;
    final String id;
    final List<Map<String, dynamic>> materials;
    final List<Map<String, dynamic>> measurements;
    final String orderId;
    final String productType;
    final Status status;
    final List<double> totals;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;
    final Vendor vendor;

    Product({
        this.category,
        this.createdBy,
        this.createdOn,
        this.id,
        this.materials,
        this.measurements,
        this.orderId,
        this.productType,
        this.status,
        this.totals,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
        this.vendor,
    });

    factory Product.fromJson(Map<String, dynamic> json) => Product(
        category: json["category"],
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        id: json["id"] == null ? null : json["id"],
        materials: List<Map<String, dynamic>>.from(json["materials"].map((x) => Map.from(x).map((k, v) => MapEntry<String, dynamic>(k, v)))),
        measurements: List<Map<String, dynamic>>.from(json["measurements"].map((x) => Map.from(x).map((k, v) => MapEntry<String, dynamic>(k, v)))),
        orderId: json["orderId"] == null ? null : json["orderId"],
        productType: json["productType"],
        status: statusValues.map[json["status"]],
        totals: List<double>.from(json["totals"].map((x) => x.toDouble())),
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
        vendor: Vendor.fromJson(json["vendor"]),
    );

    Map<String, dynamic> toJson() => {
        "category": category,
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "id": id == null ? null : id,
        "materials": List<dynamic>.from(materials.map((x) => Map.from(x).map((k, v) => MapEntry<String, dynamic>(k, v)))),
        "measurements": List<dynamic>.from(measurements.map((x) => Map.from(x).map((k, v) => MapEntry<String, dynamic>(k, v)))),
        "orderId": orderId == null ? null : orderId,
        "productType": productType,
        "status": statusValues.reverse[status],
        "totals": List<dynamic>.from(totals.map((x) => x)),
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
        "vendor": vendor.toJson(),
    };
}

enum Status { NEW_PRODUCT, PRODUCT_MEASURED, PURCHASED_PRODUCT, PRODUCT_COMPLETE, PRODUCT_CANCELED }

final statusValues = EnumValues({
    "NEW_PRODUCT": Status.NEW_PRODUCT,
    "PRODUCT_CANCELED": Status.PRODUCT_CANCELED,
    "PRODUCT_COMPLETE": Status.PRODUCT_COMPLETE,
    "PRODUCT_MEASURED": Status.PRODUCT_MEASURED,
    "PURCHASED_PRODUCT": Status.PURCHASED_PRODUCT
});

enum Type { PRODUCT }

final typeValues = EnumValues({
    "Product": Type.PRODUCT
});

class Vendor {
    final String id;
    final String name;

    Vendor({
        this.id,
        this.name,
    });

    factory Vendor.fromJson(Map<String, dynamic> json) => Vendor(
        id: json["id"] == null ? null : json["id"],
        name: json["name"],
    );

    Map<String, dynamic> toJson() => {
        "id": id == null ? null : id,
        "name": name,
    };
}

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
