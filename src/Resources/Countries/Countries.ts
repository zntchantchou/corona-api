import gql from "graphql-tag";
import TimeLine from "../TimeLine/TimeLine";

export default gql`
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
`
/*

*/