import { gql } from "@apollo/client";

// Mutation for site visits recording
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

// Mutation for insertion questions and answers.
export const INSERT_QNAS = gql`
  mutation InsertQnA($answer: String, $question: String) {
    insert_questions_one(object: { answer: $answer, question: $question }) {
      id
      created_at
    }
  }
`;

// QnA Mutations

export const UPDATE_QNA = gql`
  mutation UpdateQna(
    $id: uuid = ""
    $answer: String = ""
    $question: String = ""
  ) {
    update_questions_by_pk(
      pk_columns: { id: $id }
      _set: { answer: $answer, question: $question }
    ) {
      id
      updated_at
    }
  }
`;

export const DELETE_QNA = gql`
  mutation DeleteQna($id: uuid = "") {
    delete_questions_by_pk(id: $id) {
      id
    }
  }
`;
