import React, {Component} from 'react'
import {connect} from 'react-redux'

import NoteList from './note-list'
import LoadingPage from 'components/global/loading-page'

import {getNotes} from 'actions/notes'
import {sortByDate} from 'modules/utils/functions'

import {getSortedNotes, checkLoadingNotes, getError} from 'selectors/notes'

class NoteLists extends Component {
  constructor (props) {
    super(props)
    this.searchNote = null
  }
  componentDidMount() {
    this.props.getNotes()
  }
  componentDidUpdate() {
    let {error, loading} = this.props
    if (error && !loading) {
      switch (error.status) {
        case 400:
          var errorMessage = null
          if (/Firefox/.test(navigator.userAgent)) {
            errorMessage = "Tambahkan https:\\localhost:3000 ke security exception pada Firefox"
          } else if (/Chrome/.test(navigator.userAgent)) {
            errorMessage = "aktifkan \"Allow invalid certificates for resources loaded from localhost\" pada Chrome (chrome://flags)"
          }
          f7.alert(errorMessage, "Gangguan pada server", () => {
            this.props.getNotes()
          })
          break;
        default:
          f7.alert("Terjadi gangguan")
      }
    } else {
      if (typeof f7 === 'object') this.searchNote = f7.searchbar('.searchbar', {
        searchList: '.note-lists',
        searchIn: 'a'
      })
    }
  }
  render() {
    let {notes, loading, error} = this.props
    if (loading) return <LoadingPage />
    if (error) return <div />
    return (
      <div className="list-block media-list note-lists searchbar-found">
        <ul>
        {
          notes.map(note => <NoteList key={note._id} list={note} />)
        }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notes: getSortedNotes(state),
  loading: checkLoadingNotes(state),
  error: getError(state)
}),
mapDispatchToProps = dispatch => ({
  getNotes() {
    dispatch(getNotes())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(NoteLists)
