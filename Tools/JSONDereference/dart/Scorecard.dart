// To parse this JSON data, do
//
//     final scorecard = scorecardFromJson(jsonString);

import 'dart:convert';

Scorecard scorecardFromJson(String str) => Scorecard.fromJson(json.decode(str));

String scorecardToJson(Scorecard data) => json.encode(data.toJson());

class Scorecard {
    final String createdBy;
    final int createdOn;
    final String description;
    final Display display;
    final String id;
    final ScorecardType scorecardType;
    final List<Score> scores;
    final Series series;
    final String title;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Scorecard({
        this.createdBy,
        this.createdOn,
        this.description,
        this.display,
        this.id,
        this.scorecardType,
        this.scores,
        this.series,
        this.title,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Scorecard.fromJson(Map<String, dynamic> json) => Scorecard(
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        description: json["description"],
        display: displayValues.map[json["display"]],
        id: json["id"] == null ? null : json["id"],
        scorecardType: scorecardTypeValues.map[json["scorecardType"]],
        scores: List<Score>.from(json["scores"].map((x) => Score.fromJson(x))),
        series: seriesValues.map[json["series"]],
        title: json["title"],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "description": description,
        "display": displayValues.reverse[display],
        "id": id == null ? null : id,
        "scorecardType": scorecardTypeValues.reverse[scorecardType],
        "scores": List<dynamic>.from(scores.map((x) => x.toJson())),
        "series": seriesValues.reverse[series],
        "title": title,
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum Display { AREA_CHART, BAR_CHART, COMPLEX_GAUGE, GROUPED_BAR_CHART, HEAT_MAP, LINE_CHART, NUMBER_CARD, PIE_CHART, POLAR_CHART }

final displayValues = EnumValues({
    "AREA_CHART": Display.AREA_CHART,
    "BAR_CHART": Display.BAR_CHART,
    "COMPLEX_GAUGE": Display.COMPLEX_GAUGE,
    "GROUPED_BAR_CHART": Display.GROUPED_BAR_CHART,
    "HEAT_MAP": Display.HEAT_MAP,
    "LINE_CHART": Display.LINE_CHART,
    "NUMBER_CARD": Display.NUMBER_CARD,
    "PIE_CHART": Display.PIE_CHART,
    "POLAR_CHART": Display.POLAR_CHART
});

enum ScorecardType { GROUP, INDIVIDUAL }

final scorecardTypeValues = EnumValues({
    "GROUP": ScorecardType.GROUP,
    "INDIVIDUAL": ScorecardType.INDIVIDUAL
});

class Score {
    final String createdBy;
    final int createdOn;
    final String id;
    final String updatedBy;
    final int updatedOn;
    final String user;

    Score({
        this.createdBy,
        this.createdOn,
        this.id,
        this.updatedBy,
        this.updatedOn,
        this.user,
    });

    factory Score.fromJson(Map<String, dynamic> json) => Score(
        createdBy: json["createdBy"] == null ? null : json["createdBy"],
        createdOn: json["createdOn"] == null ? null : json["createdOn"],
        id: json["id"] == null ? null : json["id"],
        updatedBy: json["updatedBy"] == null ? null : json["updatedBy"],
        updatedOn: json["updatedOn"] == null ? null : json["updatedOn"],
        user: json["user"] == null ? null : json["user"],
    );

    Map<String, dynamic> toJson() => {
        "createdBy": createdBy == null ? null : createdBy,
        "createdOn": createdOn == null ? null : createdOn,
        "id": id == null ? null : id,
        "updatedBy": updatedBy == null ? null : updatedBy,
        "updatedOn": updatedOn == null ? null : updatedOn,
        "user": user == null ? null : user,
    };
}

enum Series { SINGLE, TIME }

final seriesValues = EnumValues({
    "SINGLE": Series.SINGLE,
    "TIME": Series.TIME
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
