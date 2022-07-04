import gql from "graphql-tag";

export const CURRENT_USER = gql `
    query ($id: String!) {
        user(query: { id: $id }) {
            _id
            id
            avatar
            fullname
            phone
            location
            data {
                email
            }
            created
        }
    }
`

export const ALL_BLOGS = gql `
    query AllBlogs {
        blogs {
            _id
            author {
                id
                data {
                    email
                }
            }
            description
            image
            title
        }
    }
`