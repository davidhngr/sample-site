import gql from "graphql-tag";

const ALL_BLOGS = gql `
    query AllBlogs {
        blogs {
            _id
            title
            description
        }
    }
`

export { ALL_BLOGS };