import React from 'react'
import {render} from 'react-dom'
import moment from 'moment'

import AppSegment from 'components/global/app-segment'

function _render(component, nodeID) {
  render(
    <AppSegment>
      	{component}
    </AppSegment>,
    document.getElementById(nodeID)
  )
}

export function renderComponent(component, nodeID, directory) {
  _render(component, nodeID)

  if (module.hot) {
    module.hot.accept(directory, () => {
      _render(component, nodeID)
    })
  }
}

export function sortByDate(a,b) {
  let dateA = moment(a.date_created, 'DD/MM/YYYY HH:mm:ss'),
  dateB = moment(b.date_created, 'DD/MM/YYYY HH:mm:ss'),
  secDiff = dateA.diff(dateB, 'seconds')
  return secDiff > 0 ? -1 : (secDiff < 0 ? 1 : 0)
}

export function getFilename(e) {
  let fileName = e.target.value,
  acceptableExtension = ['jpg','png'],
  fileExtension = fileName.slice(fileName.lastIndexOf('.') + 1)

  if (acceptableExtension.indexOf(fileExtension) !== -1) {
      this.image = fileName
      console.log(this.image)
  } else f7.alert('Please upload an image with png/jpg extension')
}

export function getLocationPromise() {
  if ('geolocation' in navigator) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(({coords}) => {
        let {latitude, longitude} = coords,
        lat = latitude.toFixed(6),
        long = longitude.toFixed(6)
        resolve(`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=18&size=800x450&sensor=false&markers=color:red|${lat},${long}`)
      }, error => {
        console.log(error)
        reject(null)
      }, {
        enableHighAccuracy: true
      })
    })
  } else return null
}
