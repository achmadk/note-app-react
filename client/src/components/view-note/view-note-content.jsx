import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import LoadingPage from 'components/global/loading-page'

import {renameTag} from 'modules/panel/functions'

class ViewNoteContent extends Component {
  componentDidUpdate() {
    let {tag, image} = this.props.note,
    pageContainer = $('#view-note-page')
    /**
     * prevent framework7 to add navbar-undefined class into #view-note-navbar
     */
    if (tag) {
      if (image) $('#view-note-navbar').addClass(`navbar-transparent`)
      /**
       * remove existing content-green/content-red/content-yellow class before adding updated class
       */
      if (pageContainer.hasClass('content-green')) pageContainer.removeClass('content-green')
      else if (pageContainer.hasClass('content-yellow')) pageContainer.removeClass('content-yellow')
      else if (pageContainer.hasClass('content-red')) pageContainer.removeClass('content-red')
      pageContainer.addClass(`content-${tag}`)
    }
    window.image = image
    console.log(window.image)
  }
  render() {
    let {loading, note} = this.props
    let {image, date_created, content, tag, category} = note,
    noteImage = (image) && (<img className="note-image" src={image} />),
    date = moment(date_created, 'DD/MM/YYYY HH:mm:ss').format('D MMMM YYYY HH:mm')

    if (loading) return <LoadingPage />
    return (
      <div>
        {noteImage}
        <div className="content-block-title">Content</div>
        <div className="content-block">
          <div className="content-block-inner">
            <p>{content}</p>
            <p>
              <span>{renameTag(tag)} priority</span>
              <span>#{category}</span>
            </p>
          </div>
        </div>
        <div className="content-block">
          <p>created at {date}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({selected_note, loading_note}) => ({ loading: loading_note, note: selected_note })

export default connect(mapStateToProps)(ViewNoteContent)
