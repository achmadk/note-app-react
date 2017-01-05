import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import {postNewNote, updateNote} from 'actions/notes'

class AddNoteNavbar extends Component {
  constructor(props) {
    super(props)
    this.sendNote = this.sendNote.bind(this)
    this.note = this.props.note
  }
  sendNote() {
    let { dispatch, error, loading, location } = this.props,
    data = Object.assign(f7.formToJSON('#add-note-form'), {
      date_created: moment().format('DD/MM/YYYY HH:mm:ss'),
      image: (window.image !== '') ? window.image : null,
      location
    }),
    alertTextSuccess = this.note._id ? `Your note has been update` : `You have added new note`
    console.log(data)
    dispatch(!this.note._id ? postNewNote(data) : updateNote(this.note._id, data))
    if (loading) {
      f7.showPreloader()
    } else {
      f7.hidePreloader()
      f7.alert(error ? `Sorry` : alertTextSuccess, () => {
        main.router.back()
      })
    }
  }
  componentDidUpdate() {
    let selectedNote = this.note,
    {_id} = selectedNote
    if (_id) f7.formFromJSON('#add-note-form', JSON.stringify(selectedNote))
  }
  render() {
    let title = this.note._id ? "Update" : "Add"
    return (
      <div className="navbar-inner">
        <div className="left">
          <a href="#" className="back link icon-only">
            <i className="icon ion-md-arrow-back" />
          </a>
        </div>
        <div className="center">{title} Note</div>
        <div className="right">
          <a href="#" className="link icon-only" onClick={this.sendNote}>
            <i className="icon ion-md-send" />
          </a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({loading_note, selected_note, error, location}) => ({
    loading:loading_note,
    note: selected_note,
    error,
    location
})

export default connect(mapStateToProps)(AddNoteNavbar)
