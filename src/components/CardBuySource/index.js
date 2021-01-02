import React, { Component } from "react"
import { string, number, object } from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./style.scss"

class CardBuySource extends Component {
  static propTypes = {
    title: string,
    description: string,
    coverImage: object,
    dateTime: string,
    readTime: number,
    linkPost: string,
  }

  render() {
    const {
      title,
      description,
      coverImage,
      dateTime,
      readTime,
      linkPost,
    } = this.props

    return (
      <div className="card-buysource">
        <div className="bg-img"><Img fluid={coverImage} /></div>
        <div className="content">
          <h4><Link to={linkPost} className="mr-20">{title}</Link></h4>
        </div>
      </div>
    )
  }
}

export default CardBuySource
