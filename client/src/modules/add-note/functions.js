export function checkExtension(e) {
  let fileName = e.target.value,
  acceptableExtension = ['jpg','png'],
  fileExtension = fileName.slice(fileName.lastIndexOf('.') + 1).toLowerCase()

  if (acceptableExtension.indexOf(fileExtension) == -1) f7.alert('Please upload an image with png or jpg extension')
  else {
    let reader = new FileReader(),
    file = e.target.files[0]

    reader.onload = readerEvent => {
      let result = reader.result
      document.getElementById('image-preview').src = reader.result
      window.image = result
      console.log(result)
    }
    reader.readAsDataURL(file)
    if ($('#add-note-navbar').hasClass('navbar-transparent')) $('#add-note-navbar').removeClass('navbar-transparent')
    $('#add-note-navbar').addClass('navbar-transparent')
  }
}

export function changeNavbarColor() {
    let scrollableComponent = $('#add-note-page'),
    navbarContainer = $('#add-note-navbar');

    scrollableComponent.on('scroll', () => {
      if (window.image) {
        let imageHeight = $('.map').height() - 56,
        constant = scrollableComponent.scrollTop() / imageHeight,
        opacity = 1 - constant
        if (constant >= 1) {
          navbarContainer.removeClass('navbar-transparent')
        } else {
          navbarContainer.addClass('navbar-transparent')
        }
        // navbarContainer.css('background-color',`rgba(164,25,27,${constant})`)
        $('.map img').css('opacity', opacity >= 0 ? opacity : 0)
      }
    })
}
