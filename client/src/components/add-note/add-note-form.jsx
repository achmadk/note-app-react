import React, {Component} from 'react'
import {connect} from 'react-redux'

import FormInput from 'components/global/form-input'
import RadioListForm from 'components/global/radio-list-form'
import FileUploader from './file-uploader'

import {addNoteInput} from 'modules/add-note/attributes'
import {checkExtension} from 'modules/add-note/functions'
import {renameTag} from 'modules/panel/functions'
import {getNoteTags, getNoteCategories, getSelectedNote} from 'selectors/notes'

class AddNoteForm extends Component {
  componentDidMount() {
    let {note} = this.props
    if (note._id) f7.formFromJSON('#add-note-form', note)
    if (window.image) {
      document.getElementById('image-preview').src = window.image
      $('#add-note-navbar').addClass('navbar-transparent')
    }
  }
  render() {
    let {tags, categories} = this.props,
    tagOptions = tags.map(value => ({
        title: renameTag(value),
        name: "tag",
        value: value
      })
    ),
    categoryOptions = categories.map(value => ({
        title: value,
        name: "category",
        value: value
      })
    ),
    listStyle = window.image ? {} : { marginTop: 56 }
    return (
      <form id="add-note-form">
        <div className="map">
          <img id="image-preview" src={window.image} />
        </div>
        <div className="list-block inputs-list" style={listStyle}>
          <ul>
            {
              addNoteInput.map((input,i) => <FormInput key={i} input={input} />)
            }
          </ul>
        </div>
        <div className="content-block-title">Category</div>
        <div className="list-block">
          <ul>
            {
              categoryOptions.map((option,i) => <RadioListForm key={i} option={option} index={i} />)
            }
          </ul>
        </div>
        <div className="content-block-title">Tag priority</div>
        <div className="list-block">
          <ul>
            {
              tagOptions.map((option,i) => <RadioListForm key={i} option={option} index={i} />)
            }
          </ul>
        </div>
        <div className="content-block-title">Image attachment (png or jpg)</div>
        <FileUploader />
      </form>
    )
  }
}

// const mapStateToProps = ({tags, categories, selected_note}) => ({
//   tags,
//   categories,
//   note: selected_note
// })

const mapStateToProps = (state) => ({
  tags: getNoteTags(state),
  categories: getNoteCategories(state),
  note: getSelectedNote(state)
})

export default connect(mapStateToProps)(AddNoteForm)
