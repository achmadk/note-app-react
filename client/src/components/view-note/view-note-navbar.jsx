import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

import {removeSelectedNote, getNote, deleteNote} from 'actions/notes'

class ViewNoteNavbar extends PureComponent {
  constructor(props) {
    super(props)
    this.removeCurrentNote = this.removeCurrentNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
  }
  componentDidMount() {
    let { dispatch, id } = this.props
    console.log(dispatch, id)
    dispatch(getNote(id))
  }
  componentDidUpdate() {
    let {color} = this.props,
    navbarContainer = $('#view-note-navbar')
    if (color) {
      if (navbarContainer.hasClass('navbar-green')) navbarContainer.removeClass('navbar-green')
      else if (navbarContainer.hasClass('navbar-yellow')) navbarContainer.removeClass('navbar-yellow')
      else if (navbarContainer.hasClass('navbar-red')) navbarContainer.removeClass('navbar-red')
      navbarContainer.addClass(`navbar-${color}`)
    }
  }
  removeCurrentNote(e) {
    let {dispatch} = this.props
    dispatch(removeSelectedNote())
    main.router.back()
  }
  deleteNote(e) {
    let {title, dispatch, id} = this.props
    f7.confirm(`Are you sure delete this note titled "${title}"`, () => {
        dispatch(deleteNote(id))
        main.router.back()
        f7.alert("A note has been deleted", () => {
          dispatch(removeSelectedNote())
        })
      }
    )
  }
  render() {
    let {id, title, loading} = this.props
    if (loading) return <div />
    return (
      <div className="navbar-inner">
        <div className="left">
          <a href="#" className="link icon-only" onClick={this.removeCurrentNote}>
            <i className="icon ion-md-arrow-back" />
          </a>
        </div>
        <div className="center">{title}</div>
        <div className="right">
          <a href="#" className="link icon-only" data-id={id} onClick={this.deleteNote} >
            <i className="icon ion-md-trash" />
          </a>
          <a href={`add-note.html?id=${id}`} className="link icon-only">
            <i className="icon ion-md-brush" />
          </a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({selected_note, loading_note}) => {
  let {title, tag} = selected_note
  return {
    loading: loading_note,
    color: tag,
    title
  }
}

export default connect(mapStateToProps)(ViewNoteNavbar)
