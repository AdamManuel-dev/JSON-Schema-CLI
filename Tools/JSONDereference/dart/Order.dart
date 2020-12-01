// To parse this JSON data, do
//
//     final order = orderFromJson(jsonString);

import 'dart:convert';

Order orderFromJson(String str) => Order.fromJson(json.decode(str));

String orderToJson(Order data) => json.encode(data.toJson());

class Order {
    final Alive alive;
    final String createdBy;
    final int createdOn;
    final Financial financial;
    final List<FinancialTotal> financialTotals;
    final String id;
    final Legal legal;
    final List<MaterialTotal> materialTotals;
    final List<MeasurementTotal> measurementTotals;
    final Sales sales;
    final Status status;
    final Type type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Order({
        this.alive,
        this.createdBy,
        this.createdOn,
        this.financial,
        this.financialTotals,
        this.id,
        this.legal,
        this.materialTotals,
        this.measurementTotals,
        this.sales,
        this.status,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Order.fromJson(Map<String, dynamic> json) => Order(
        alive: aliveValues.map[json["alive"]],
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        financial: financialValues.map[json["financial"]],
        financialTotals: List<FinancialTotal>.from(json["financialTotals"].map((x) => FinancialTotal.fromJson(x))),
        id: json["id"] == null ? null : json["id"],
        legal: Legal.fromJson(json["legal"]),
        materialTotals: List<MaterialTotal>.from(json["materialTotals"].map((x) => MaterialTotal.fromJson(x))),
        measurementTotals: List<MeasurementTotal>.from(json["measurementTotals"].map((x) => MeasurementTotal.fromJson(x))),
        sales: Sales.fromJson(json["sales"]),
        status: statusValues.map[json["status"]],
        type: typeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "alive": aliveValues.reverse[alive],
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "financial": financialValues.reverse[financial],
        "financialTotals": List<dynamic>.from(financialTotals.map((x) => x.toJson())),
        "id": id == null ? null : id,
        "legal": legal.toJson(),
        "materialTotals": List<dynamic>.from(materialTotals.map((x) => x.toJson())),
        "measurementTotals": List<dynamic>.from(measurementTotals.map((x) => x.toJson())),
        "sales": sales.toJson(),
        "status": statusValues.reverse[status],
        "type": typeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum Alive { DEAD, RECYCLE, ACTIVE }

final aliveValues = EnumValues({
    "ACTIVE": Alive.ACTIVE,
    "DEAD": Alive.DEAD,
    "RECYCLE": Alive.RECYCLE
});

enum Financial { ACCEPTED, REJECTED }

final financialValues = EnumValues({
    "ACCEPTED": Financial.ACCEPTED,
    "REJECTED": Financial.REJECTED
});

class FinancialTotal {
    final double extraPrice;
    final double perSection;
    final double sectionItem;
    final double total;

    FinancialTotal({
        this.extraPrice,
        this.perSection,
        this.sectionItem,
        this.total,
    });

    factory FinancialTotal.fromJson(Map<String, dynamic> json) => FinancialTotal(
        extraPrice: json["extraPrice"].toDouble(),
        perSection: json["perSection"].toDouble(),
        sectionItem: json["sectionItem"].toDouble(),
        total: json["total"].toDouble(),
    );

    Map<String, dynamic> toJson() => {
        "extraPrice": extraPrice,
        "perSection": perSection,
        "sectionItem": sectionItem,
        "total": total,
    };
}

class Legal {
    final Map<String, dynamic> contract;
    final Map<String, dynamic> digright;
    final Map<String, dynamic> lienWaver;
    final Map<String, dynamic> permit;
    final Map<String, dynamic> signature;

    Legal({
        this.contract,
        this.digright,
        this.lienWaver,
        this.permit,
        this.signature,
    });

    factory Legal.fromJson(Map<String, dynamic> json) => Legal(
        contract: Map.from(json["contract"]).map((k, v) => MapEntry<String, dynamic>(k, v)),
        digright: Map.from(json["digright"]).map((k, v) => MapEntry<String, dynamic>(k, v)),
        lienWaver: Map.from(json["lienWaver"]).map((k, v) => MapEntry<String, dynamic>(k, v)),
        permit: Map.from(json["permit"]).map((k, v) => MapEntry<String, dynamic>(k, v)),
        signature: Map.from(json["signature"]).map((k, v) => MapEntry<String, dynamic>(k, v)),
    );

    Map<String, dynamic> toJson() => {
        "contract": Map.from(contract).map((k, v) => MapEntry<String, dynamic>(k, v)),
        "digright": Map.from(digright).map((k, v) => MapEntry<String, dynamic>(k, v)),
        "lienWaver": Map.from(lienWaver).map((k, v) => MapEntry<String, dynamic>(k, v)),
        "permit": Map.from(permit).map((k, v) => MapEntry<String, dynamic>(k, v)),
        "signature": Map.from(signature).map((k, v) => MapEntry<String, dynamic>(k, v)),
    };
}

class MaterialTotal {
    final double costPerUnit;
    final double total;
    final double unit;
    final double unitsPerSection;

    MaterialTotal({
        this.costPerUnit,
        this.total,
        this.unit,
        this.unitsPerSection,
    });

    factory MaterialTotal.fromJson(Map<String, dynamic> json) => MaterialTotal(
        costPerUnit: json["costPerUnit"].toDouble(),
        total: json["total"].toDouble(),
        unit: json["unit"].toDouble(),
        unitsPerSection: json["unitsPerSection"].toDouble(),
    );

    Map<String, dynamic> toJson() => {
        "costPerUnit": costPerUnit,
        "total": total,
        "unit": unit,
        "unitsPerSection": unitsPerSection,
    };
}

class MeasurementTotal {
    final Map<String, dynamic> extras;
    final double unit;
    final double unitsPerSection;

    MeasurementTotal({
        this.extras,
        this.unit,
        this.unitsPerSection,
    });

    factory MeasurementTotal.fromJson(Map<String, dynamic> json) => MeasurementTotal(
        extras: Map.from(json["extras"]).map((k, v) => MapEntry<String, dynamic>(k, v)),
        unit: json["unit"].toDouble(),
        unitsPerSection: json["unitsPerSection"].toDouble(),
    );

    Map<String, dynamic> toJson() => {
        "extras": Map.from(extras).map((k, v) => MapEntry<String, dynamic>(k, v)),
        "unit": unit,
        "unitsPerSection": unitsPerSection,
    };
}

class Sales {
    final double commission;
    final List<String> users;

    Sales({
        this.commission,
        this.users,
    });

    factory Sales.fromJson(Map<String, dynamic> json) => Sales(
        commission: json["commission"].toDouble(),
        users: List<String>.from(json["users"].map((x) => x)),
    );

    Map<String, dynamic> toJson() => {
        "commission": commission,
        "users": List<dynamic>.from(users.map((x) => x)),
    };
}

enum Status { SALE_CONFIRMED, SIGNED_CONTRACT, CONTRACT_APPROVE, ADD_PRODUCTION, ORDER_CANCEL, MEASURE_PRODUCT, ADD_QUICKBOOKS, FINANCE_REJECTED, DEAD_LEAD, PERMIT, LIEN_WAVER, DIGRIGHT, EXECUTE_ORDER, INTUIT_BOOK_CONDFIRMATION, DELIVER_MATERIAL, ORDER_PROGRESS, PROBLEM_ORDER, ORDER_COMPLETED, CUSTOMER_SURVER, RECYCLE }

final statusValues = EnumValues({
    "addProduction": Status.ADD_PRODUCTION,
    "addQuickbooks": Status.ADD_QUICKBOOKS,
    "contractApprove": Status.CONTRACT_APPROVE,
    "customerSurver": Status.CUSTOMER_SURVER,
    "deadLead": Status.DEAD_LEAD,
    "deliverMaterial": Status.DELIVER_MATERIAL,
    "digright": Status.DIGRIGHT,
    "executeOrder": Status.EXECUTE_ORDER,
    "financeRejected": Status.FINANCE_REJECTED,
    "intuitBookCondfirmation": Status.INTUIT_BOOK_CONDFIRMATION,
    "lienWaver": Status.LIEN_WAVER,
    "measureProduct": Status.MEASURE_PRODUCT,
    "orderCancel": Status.ORDER_CANCEL,
    "orderCompleted": Status.ORDER_COMPLETED,
    "orderProgress": Status.ORDER_PROGRESS,
    "permit": Status.PERMIT,
    "problemOrder": Status.PROBLEM_ORDER,
    "recycle": Status.RECYCLE,
    "saleConfirmed": Status.SALE_CONFIRMED,
    "signedContract": Status.SIGNED_CONTRACT
});

enum Type { ORDER }

final typeValues = EnumValues({
    "Order": Type.ORDER
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
