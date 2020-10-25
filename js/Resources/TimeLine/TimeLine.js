"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.default = graphql_tag_1.default `
type TimeLine {
    updated_at: String
    date: String
    deaths: Boolean
    confirmed: Int
    recovered: Int
    active: Int
    new_confirmed: Int
    new_recovered: Int
    new_deaths: Int
    is_in_progress: Boolean
  }
`;
//# sourceMappingURL=TimeLine.js.map