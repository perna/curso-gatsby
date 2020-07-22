import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Profile = () => {
  const query = graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          description
          title
          position
        }
      }
    }
  `

  const { site: { siteMetadata: { title, position, description }}} = useStaticQuery(query)

  return (
    <div className="profile-wrapper">
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Profile