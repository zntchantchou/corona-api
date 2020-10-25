"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.default = graphql_tag_1.default `
type Country {
 coordinates: Coordinates
 name: String
 code: String
 population: Int
 updated_at: String
 latest_data: LatestData
 timeline: [ TimeLine ]
} 

type Coordinates {
    latitude: Int
    longitude: Int 
}
type Today {
  deaths: Int
  confirmed: Int
}
type LatestData {
deaths: Int
confirmed: Int
recovered: Int
critical: Int
calculated: Calculated
}

type Calculated {
  death_rate: Float
  recovery_rate: Float
  recovered_vs_death_ratio: Float
  cases_per_million_population: Int
}
`;
//# sourceMappingURL=Countries.js.map