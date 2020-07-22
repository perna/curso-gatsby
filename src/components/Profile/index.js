import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Profile = () => (
  <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            description
            title
            position
          }
        }
      }
    `}

    render={data => (
      <div className="profile-wrapper">
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>{data.site.siteMetadata.position}</h2>
        <p>{data.site.siteMetadata.description}</p>
      </div>
    )} 
  />
)

export default Profile