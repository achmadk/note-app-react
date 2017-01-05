import React, {Component} from 'react'
import {connect} from 'react-redux'

import NoteFilterContent from './note-filter-content'
import LoadingPage from 'components/global/loading-page'

class NoteFilters extends Component {
  render() {
    let {filters, loading} = this.props
    if (loading) return <LoadingPage />
    return (
      <div>
        {
          filters.map((content,i) => <NoteFilterContent key={i} content={content} />)
        }
        <div className="list-block">
          <ul>
            <li>
              <a href="#" className="item-link item-content close-panel open-popup" data-popup=".about-app">
                <div className="item-media">
                  <i className="icon ion-md-information-circle" />
                </div>
                <div className="item-inner">
                  <div className="item-title">About App</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({categories, tags, loading_notes}) => ({
  filters: [{
    name: "category",
    values: categories
  }, {
    name: "priority tag",
    values: tags
  }],
  loading: loading_notes
})

export default connect(mapStateToProps)(NoteFilters)
