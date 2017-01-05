import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

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
    let {note} = this.props,
    image = (note.image) ? (<img className="note-image" src={note.image} />) : false,
    date = moment(note.date_created, 'DD/MM/YYYY HH:mm:ss').format('D MMMM YYYY HH:mm')
    return (
      <div>
        {image}
        <div className="content-block-title">Content</div>
        <div className="content-block">
          <div className="content-block-inner">
            <p>{note.content}</p>
            <p>
              <span>{renameTag(note.tag)} priority</span>
              <span>#{note.category}</span>
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

const mapStateToProps = ({selected_note}) => ({ note: selected_note })

export default connect(mapStateToProps)(ViewNoteContent)
