import {Env, forge, VannilaGateway} from 'mappersmith'

import returnData from './processors'

Env.USE_PROMISES = true

const manifest = {
  host: 'https://localhost:3000',
  resources: {
    Note: {
      all: {
        path: '/notes',
        processor: returnData
      },
      byId: {
        path: '/notes/{id}',
        processor: returnData
      },
      post: {
        method: 'POST',
        path: '/notes',
        processor: returnData
      },
      update: {
        method: 'PUT',
        path: '/notes/{id}',
        processor: returnData
      },
      delete: {
        method: 'DELETE',
        path: '/notes/{id}',
        processor: returnData
      }
    }
  }
}

const API = forge(manifest, VannilaGateway, 'data')

export default API
