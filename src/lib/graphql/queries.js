import gql from "graphql-tag";

export const ALL_USERS = gql `
    query AllUsers {
        users {
            _id
            id
            data {
                email
            }
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