export function renameTag(tag) {
  var name
  switch (tag) {
    case "red":
      name = "high"
      break;
    case "yellow":
      name = "medium"
      break;
    case "green":
      name = "low"
      break;
    default:
      name = tag
  }
  return name
}

export function filterNote(e) {
  let searchbar = $('.searchbar')[0].f7Searchbar,
  query = e.currentTarget.dataset.name
  searchbar.search(query)
}
