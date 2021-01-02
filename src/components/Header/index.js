import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import "./style.scss"

class Header extends Component {
  render() {
    const ListLink = props => (
      <li className="mr-16">
        <Link to={props.to}>
          <h4>{props.children}</h4>
        </Link>
      </li>
    )

    return (
      <StaticQuery
        query={headerQuery}
        render={data => {
          return (
            <nav className="header-wrapper">
              <Link to="/">
                <h4 className="mb-0">
                  {data.markdownRemark.frontmatter.websiteTitle}
                </h4>
              </Link>
              
              <ul>
                <ListLink to="/downloads/">
                  {data.markdownRemark.frontmatter.downloadsTitle}
                </ListLink>
                <ListLink to="/buysource/">
                  {data.markdownRemark.frontmatter.sourceforsaleTitle}
                </ListLink>
                
                <li>
                  <ThemeToggler>
                    {({ theme, toggleTheme }) => (
                      <label className="theme-checkbox">
                        <input
                          type="checkbox"
                          onChange={e =>
                            toggleTheme(e.target.checked ? "dark" : "light")
                          }
                          checked={theme === "dark"}
                        />
                        <h3>{theme === "light" ? `🌖️` : `🌘`}</h3>
                      </label>
                    )}
                  </ThemeToggler>
                </li>
              </ul>
            </nav>
          )
        }}
      />
    )
  }
}

export default Header

const headerQuery = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/components/Header/" } }) {
      frontmatter {
        websiteTitle
        aboutTitle
        downloadsTitle
        sourceforsaleTitle
      }
    }
  }
`
