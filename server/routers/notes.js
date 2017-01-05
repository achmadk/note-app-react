const express = require('express'),
      router = express.Router(),
      note = require('./../database/models/note'),
      postNote = require('./../database/queries/post-note'),
      getNote = require('./../database/queries/get-note'),
      updateNote = require('./../database/queries/update-note'),
      deleteNote = require('./../database/queries/delete-note')

router.post('/', postNote)
router.get('/', getNote.all)
router.get('/:id', getNote.byId)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)

module.exports = router;
