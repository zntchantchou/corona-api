import gql from "graphql-tag";

export default gql`
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
`