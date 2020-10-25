"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.types = graphql_tag_1.default `
type Country {
    coordinates: {
            latitude: Int,
            longitude: Int
          },
        name: String,
        code: String,
        population: Int,
        updated_at: String,
        today: {
            deaths: Int,
            confirmed: Int
        },
        latest_data: {
            deaths: Int,
            confirmed: Int,
            recovered: Int,
            critical: Int,
            calculated: {
                death_rate: Float,
                recovery_rate: Float,
                recovered_vs_death_ratio: Float,
                cases_per_million_population: Int
            }
        },
        timeline: [ TimeLine ] 
} 
`;
//# sourceMappingURL=Country.js.map