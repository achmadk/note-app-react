export * from 'framework7';

export const $ = Dom7;
window.$ = $

export default function initRouter() {
    $(document).on('pageBeforeInit', e => {
        let page = e.detail.page;
        load(page.name, page.query);
    });

    $(document).on('pageBack', e => {
      let page = e.detail.page;
      afterBack(page.name)
    })
}

export function load(moduleName, query) {
    let page = selectModule(moduleName)
    page.init(query)
}

export function sendMessage(moduleName, message) {
    let page = selectModule(moduleName)
    page.sendMessage(message)
}

export function afterBack(moduleName) {
    let page = selectModule(moduleName)
    page.afterBack()
}

function selectModule(moduleName) {
  var page
  switch (moduleName) {
    case 'index':
      page = require('./index/index')
      break;
    case 'panel':
      page = require('./panel/panel')
      break;
    case 'view-note':
      page = require('./view-note/view-note')
      break;
    case 'add-note':
      page = require('./add-note/add-note')
      break;
    case 'about':
      page = require('./about/about')
      break;
  }
  return page
}
