// To parse this JSON data, do
//
//     final payrollTotals = payrollTotalsFromJson(jsonString);

import 'dart:convert';

PayrollTotals payrollTotalsFromJson(String str) => PayrollTotals.fromJson(json.decode(str));

String payrollTotalsToJson(PayrollTotals data) => json.encode(data.toJson());

class PayrollTotals {
    final String payrollTotalsBenefits;
    final List<Benefit> benefits;
    final String companyDebit;
    final String correction;
    final String createdBy;
    final int createdOn;
    final String employeeBenefitsDeductions;
    final List<EmployeeComponensation> employeeComponensations;
    final String employeeTaxes;
    final String employerTaxes;
    final List<FixedCompensation> fixedCompensation;
    final List<HourlyCompensation> hourlyCompensations;
    final String id;
    final String netPay;
    final List<PayrollDeduction> payrollDeductions;
    final String reimbursements;
    final List<Tax> taxes;
    final PayrollTotalsType type;
    final String updatedBy;
    final int updatedOn;
    final String user;

    PayrollTotals({
        this.payrollTotalsBenefits,
        this.benefits,
        this.companyDebit,
        this.correction,
        this.createdBy,
        this.createdOn,
        this.employeeBenefitsDeductions,
        this.employeeComponensations,
        this.employeeTaxes,
        this.employerTaxes,
        this.fixedCompensation,
        this.hourlyCompensations,
        this.id,
        this.netPay,
        this.payrollDeductions,
        this.reimbursements,
        this.taxes,
        this.type,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory PayrollTotals.fromJson(Map<String, dynamic> json) => PayrollTotals(
        payrollTotalsBenefits: json["benefits"],
        benefits: List<Benefit>.from(json["Benefits"].map((x) => Benefit.fromJson(x))),
        companyDebit: json["companyDebit"],
        correction: json["correction"],
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        employeeBenefitsDeductions: json["employeeBenefitsDeductions"],
        employeeComponensations: json["employeeComponensations"] == null ? null : List<EmployeeComponensation>.from(json["employeeComponensations"].map((x) => EmployeeComponensation.fromJson(x))),
        employeeTaxes: json["employeeTaxes"],
        employerTaxes: json["employerTaxes"],
        fixedCompensation: json["FixedCompensation"] == null ? null : List<FixedCompensation>.from(json["FixedCompensation"].map((x) => FixedCompensation.fromJson(x))),
        hourlyCompensations: json["HourlyCompensations"] == null ? null : List<HourlyCompensation>.from(json["HourlyCompensations"].map((x) => HourlyCompensation.fromJson(x))),
        id: json["id"] == null ? null : json["id"],
        netPay: json["netPay"],
        payrollDeductions: List<PayrollDeduction>.from(json["PayrollDeductions"].map((x) => PayrollDeduction.fromJson(x))),
        reimbursements: json["reimbursements"],
        taxes: List<Tax>.from(json["Taxes"].map((x) => Tax.fromJson(x))),
        type: payrollTotalsTypeValues.map[json["type"]],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "benefits": payrollTotalsBenefits,
        "Benefits": List<dynamic>.from(benefits.map((x) => x.toJson())),
        "companyDebit": companyDebit,
        "correction": correction,
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "employeeBenefitsDeductions": employeeBenefitsDeductions,
        "employeeComponensations": employeeComponensations == null ? null : List<dynamic>.from(employeeComponensations.map((x) => x.toJson())),
        "employeeTaxes": employeeTaxes,
        "employerTaxes": employerTaxes,
        "FixedCompensation": fixedCompensation == null ? null : List<dynamic>.from(fixedCompensation.map((x) => x.toJson())),
        "HourlyCompensations": hourlyCompensations == null ? null : List<dynamic>.from(hourlyCompensations.map((x) => x.toJson())),
        "id": id == null ? null : id,
        "netPay": netPay,
        "PayrollDeductions": List<dynamic>.from(payrollDeductions.map((x) => x.toJson())),
        "reimbursements": reimbursements,
        "Taxes": List<dynamic>.from(taxes.map((x) => x.toJson())),
        "type": payrollTotalsTypeValues.reverse[type],
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

class Benefit {
    final String companyContribution;
    final String employeeDeduction;
    final bool imputed;
    final String name;
    final BenefitType type;

    Benefit({
        this.companyContribution,
        this.employeeDeduction,
        this.imputed,
        this.name,
        this.type,
    });

    factory Benefit.fromJson(Map<String, dynamic> json) => Benefit(
        companyContribution: json["companyContribution"],
        employeeDeduction: json["employeeDeduction"],
        imputed: json["imputed"],
        name: json["name"],
        type: benefitTypeValues.map[json["type"]],
    );

    Map<String, dynamic> toJson() => {
        "companyContribution": companyContribution,
        "employeeDeduction": employeeDeduction,
        "imputed": imputed,
        "name": name,
        "type": benefitTypeValues.reverse[type],
    };
}

enum BenefitType { BENEFITS }

final benefitTypeValues = EnumValues({
    "Benefits": BenefitType.BENEFITS
});

class EmployeeComponensation {
    final List<String> fixedCompensationid;
    final List<String> grossPay;
    final List<String> hourlyid;
    final List<String> netPay;
    final List<String> paymentMethod;
    final EmployeeComponensationType type;

    EmployeeComponensation({
        this.fixedCompensationid,
        this.grossPay,
        this.hourlyid,
        this.netPay,
        this.paymentMethod,
        this.type,
    });

    factory EmployeeComponensation.fromJson(Map<String, dynamic> json) => EmployeeComponensation(
        fixedCompensationid: List<String>.from(json["fixedCompensationid"].map((x) => x)),
        grossPay: List<String>.from(json["grossPay"].map((x) => x)),
        hourlyid: List<String>.from(json["hourlyid"].map((x) => x)),
        netPay: List<String>.from(json["netPay"].map((x) => x)),
        paymentMethod: List<String>.from(json["paymentMethod"].map((x) => x)),
        type: employeeComponensationTypeValues.map[json["type"]],
    );

    Map<String, dynamic> toJson() => {
        "fixedCompensationid": List<dynamic>.from(fixedCompensationid.map((x) => x)),
        "grossPay": List<dynamic>.from(grossPay.map((x) => x)),
        "hourlyid": List<dynamic>.from(hourlyid.map((x) => x)),
        "netPay": List<dynamic>.from(netPay.map((x) => x)),
        "paymentMethod": List<dynamic>.from(paymentMethod.map((x) => x)),
        "type": employeeComponensationTypeValues.reverse[type],
    };
}

enum EmployeeComponensationType { EMPLOYEE_COMPENSATIONS }

final employeeComponensationTypeValues = EnumValues({
    "EmployeeCompensations": EmployeeComponensationType.EMPLOYEE_COMPENSATIONS
});

class FixedCompensation {
    final String amount;
    final String jobId;
    final String name;
    final FixedCompensationType type;

    FixedCompensation({
        this.amount,
        this.jobId,
        this.name,
        this.type,
    });

    factory FixedCompensation.fromJson(Map<String, dynamic> json) => FixedCompensation(
        amount: json["amount"],
        jobId: json["jobId"],
        name: json["name"],
        type: fixedCompensationTypeValues.map[json["type"]],
    );

    Map<String, dynamic> toJson() => {
        "amount": amount,
        "jobId": jobId,
        "name": name,
        "type": fixedCompensationTypeValues.reverse[type],
    };
}

enum FixedCompensationType { FIXED_COMPENSATION }

final fixedCompensationTypeValues = EnumValues({
    "FixedCompensation": FixedCompensationType.FIXED_COMPENSATION
});

class HourlyCompensation {
    final String compensationMultiplier;
    final String hours;
    final String jobId;
    final String name;
    final HourlyCompensationType type;

    HourlyCompensation({
        this.compensationMultiplier,
        this.hours,
        this.jobId,
        this.name,
        this.type,
    });

    factory HourlyCompensation.fromJson(Map<String, dynamic> json) => HourlyCompensation(
        compensationMultiplier: json["compensation_multiplier"],
        hours: json["hours"],
        jobId: json["jobId"],
        name: json["name"],
        type: hourlyCompensationTypeValues.map[json["type"]],
    );

    Map<String, dynamic> toJson() => {
        "compensation_multiplier": compensationMultiplier,
        "hours": hours,
        "jobId": jobId,
        "name": name,
        "type": hourlyCompensationTypeValues.reverse[type],
    };
}

enum HourlyCompensationType { HOURLY_COMPENSATIONS }

final hourlyCompensationTypeValues = EnumValues({
    "HourlyCompensations": HourlyCompensationType.HOURLY_COMPENSATIONS
});

class PayrollDeduction {
    final String amount;
    final String name;
    final PayrollDeductionType type;

    PayrollDeduction({
        this.amount,
        this.name,
        this.type,
    });

    factory PayrollDeduction.fromJson(Map<String, dynamic> json) => PayrollDeduction(
        amount: json["amount"],
        name: json["name"],
        type: payrollDeductionTypeValues.map[json["type"]],
    );

    Map<String, dynamic> toJson() => {
        "amount": amount,
        "name": name,
        "type": payrollDeductionTypeValues.reverse[type],
    };
}

enum PayrollDeductionType { PAYROLL_DEDUCTIONS }

final payrollDeductionTypeValues = EnumValues({
    "PayrollDeductions": PayrollDeductionType.PAYROLL_DEDUCTIONS
});

class Tax {
    final String amount;
    final bool employer;
    final String name;
    final Status status;
    final TaxType type;

    Tax({
        this.amount,
        this.employer,
        this.name,
        this.status,
        this.type,
    });

    factory Tax.fromJson(Map<String, dynamic> json) => Tax(
        amount: json["amount"],
        employer: json["employer"],
        name: json["name"],
        status: statusValues.map[json["status"]],
        type: taxTypeValues.map[json["type"]],
    );

    Map<String, dynamic> toJson() => {
        "amount": amount,
        "employer": employer,
        "name": name,
        "status": statusValues.reverse[status],
        "type": taxTypeValues.reverse[type],
    };
}

enum Status { OWED, PAYED }

final statusValues = EnumValues({
    "OWED": Status.OWED,
    "PAYED": Status.PAYED
});

enum TaxType { TAXES }

final taxTypeValues = EnumValues({
    "Taxes": TaxType.TAXES
});

enum PayrollTotalsType { PAYROLL_TOTAL }

final payrollTotalsTypeValues = EnumValues({
    "PayrollTotal": PayrollTotalsType.PAYROLL_TOTAL
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
