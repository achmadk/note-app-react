# Note App React  

[![Known Vulnerabilities](https://snyk.io/test/github/achmadk/note-app-react/badge.svg)](https://snyk.io/test/github/achmadk/note-app-react)  

### Deskripsi  
**Note App React** adalah aplikasi web yang digunakan untuk pengelolaan catatan (_note_). Beberapa pengelolaan catatan tersebut antara lain:  
* Melihat semua catatan yang dimiliki pengguna.  
* Melihat salah satu catatan, yang terdiri dari judul, isi, tanggal dibuat, gambar, prioritas, dan kategori, dari pengguna.
* Membuat catatan baru.
* Menghapus salah satu catatan dari pengguna.
* Memperbarui salah satu catatan pengguna.
* Mencari catatan pengguna berdasarkan judul, isi, kategori, dan tag prioritas catatan yang dimilikinya.  

Selain itu, pada saat membuat dan memperbarui catatan, pengguna dapat mengunggah gambar berekstensi jpg atau png. Gambar tersebut dikonversi menjadi format base64 sehingga memungkinkan untuk dapat disimpan ke _database_.  

**Note App React** juga dapat mengirimkan lokasi tiap kali membuat/ memperbarui catatan. Pengguna harus setuju jika **Note App React** menampilkan perijinan penggunaan _geolocation_ untuk mendapatkan lokasi pengguna. Jika pengguna telah setuju perijinan lokasi tersebut, **Note App React** menyimpan _latitude_ dan _longitude_ pengguna dalam bentuk URL Google Static Map. Akan tetapi, URL tersebut tidak ditampilkan ke aplikasi **Note App React**.   
![alt text][example image]

### Arsitektur Sistem
Arsitektur sistem pada **Note App React** terdiri dari tiga bagian, yaitu basis data/_database_, _API server_, dan _client_.

1. Basis data **Note App React**  
 Basis data yang digunakan adalah [mongoDB][mongodb link]. Penggunaan mongoDB lebih cepat, efisien dan _scalable_ jika sewaktu-waktu terjadi perubahan kebutuhan penyimpanan data suatu sistem.  

2. _API Server_ **Note App React**  
 _API server_ pada **Note App React** memungkinkan _client_ untuk dapat berkomunikasi dengan basis data menggunakan protokol HTTP versi 2. Isi tanggapan yang dikirim _API server_ ke _client_ berupa JSON (_JavaScript Object Notation_). _JavaScript library_ yang digunakan untuk memenuhi kebutuhan tersebut adalah [express][express link] dan [spdy][spdy link]. Adapun _library_ lain yang digunakan untuk menghubungkan _API server_ dengan _database_ adalah [mongoose][mongoose link]

3. _Client_ **Note App React**  

 Client pada **Note App React** digunakan sebagai penghubung antara pengguna dengan sistem. Beberapa _JavaScript library_ utama beserta kegunaannya yang digunakan pada **Note App React** ini antara lain:  
 * [Framework7][f7 link]  
Framework7  memungkinkan **Note App React** memiliki antarmuka dan fungsionalitas yang mirip dengan aplikasi berbasis android. Selain itu, Framework7 dengan _searchbar_ bawaannya digunakan untuk mencari catatan pengguna berdasarkan judul, isi, kategori, dan tag prioritas.
 * [Mappersmith][mappersmith link]  
 Mappersmith digunakan untuk melakukan _AJAX (Asynchronous JavaScript And XML) call_ dari _client_ ke _API server_
 * [React][react link]  
React digunakan untuk mempercepat _rendering_ data dari _API server_ ke _client_
 * [Redux][redux link]  
Redux digunakan untuk pengelolaan _state_ pada React supaya dapat digunakan kembali sewaktu-waktu/ _reusable_. Adapun beberapa _middleware_ yang dipakai antara lain:  
    * [redux thunk][redux thunk link] untuk menangani fungsi yang bersifat asinkron
    * [redux promise middleware][redux promise link] untuk menangani fungsi _promise_, dalam aplikasi ini digunakan untuk menangani keluaran _promise_ dari [mappersmith][mappersmith link] dan _geolocation_.  

 * [Webpack][webpack link]  
   Webpack digunakan untuk menghimpun _source code_ yang ada pada _client_ menjadi 1 _file_. Selain itu, webpack pada _client_ ini digunakan untuk menyalin beberapa file ke folder tujuan, memungkinkan _inline style_, dan _code splitting_.


### Instalasi  
Ada beberapa hal yang perlu dilakukan sebelum menggunakan aplikasi **Note App React** ini, diantaranya:  

1. Install [node.js][nodejs link]. Disarankan menggunakan node.js versi 6 LTS  

2. Install [MongoDB driver][mongodb driver link], kemudian aktifkan MongoDB sesuai sistem operasi yang digunakan.  

3. Install [concurrently][concurrently link] untuk mengaktifkan _API server_ dan _client_ secara paralel, tanpa harus membuka dua _tab console_ dengan menuliskan `npm install concurrently -g`  

4. Install [webpack][webpack link] dan [webpack-dev-server][webpack dev link] dengan menuliskan `npm install webpack webpack-dev-server -g`  

Selanjutnya, install semua _dependency_ yang digunakan pada **Note App React** ini dengan mengetikkan
`npm install`  

Aktifkan _API server_ dan _client_ dengan mengetikkan `npm start`  
_API server_ dan _client_ masing-masing aktif pada URL https://localhost:3000 dan http://localhost:8070  

Tambahkan _security exception_ pada URL `https://localhost:3000` di _browser_ supaya _server API_ **Note App React** dapat diakses oleh _client_  

Aplikasi **Note App React** ini dibuat oleh Achmad Kurnianto dalam rangka menjawab ProblemSet dari CodePolitan untuk [_instructor recruitment_ di HACKTIV8][instructor recruitment link]. Walaupun saya tidak diterima sebagai _instructor_ di HACKTIV8, saya mendapatkan react t-shirt dari CodePolitan.

[concurrently link]: https://www.npmjs.com/package/concurrently
[express link]: https://expressjs.com/
[f7 link]: http://framework7.io/
[mappersmith link]: http://tulios.github.io/mappersmith/
[mongodb link]: https://www.mongodb.com/
[mongodb driver link]: https://www.mongodb.com/download-center
[mongoose link]: http://mongoosejs.com/
[nodejs link]: https://nodejs.org/en/download/
[react link]: https://facebook.github.io/react/
[redux link]: http://redux.js.org/
[redux thunk link]: https://github.com/gaearon/redux-thunk
[redux promise link]: https://github.com/pburtchaell/redux-promise-middleware
[spdy link]: https://www.npmjs.com/package/spdy
[webpack link]: https://webpack.github.io/docs/
[webpack dev link]: https://github.com/webpack/webpack-dev-server

[instructor recruitment link]: https://www.codepolitan.com/job-vacancy-problemset-instructor-hacktiv8

[example image]: https://maps.googleapis.com/maps/api/staticmap?center=-6.160382,106.847349&zoom=18&size=800x450&sensor=false&markers=color:red|-6.160382,106.847349
