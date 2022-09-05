import { gql } from "@apollo/client";

export const INSERT_SITE_VISIT = gql`
  mutation SiteVisits(
    $mac: String
    $code: String
    $country: String
    $coordinates: jsonb
    $city: String
    $ip: String
    $platform: String
  ) {
    insert_site_visits(
      objects: {
        MAC: $mac
        country_code: $code
        country: $country
        coordinates: $coordinates
        city: $city
        IPv4: $ip
        platform: $platform
      }
    ) {
      affected_rows
    }
  }
`;