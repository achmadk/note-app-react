import React, {PureComponent} from 'react'

export default class AboutContent extends PureComponent {
  render() {
    return (
      <div className="content-block">
        <div className="content-block-inner">
          <p><strong>Note App React</strong> adalah aplikasi web yang digunakan untuk pengelolaan catatan (<em>note</em>). Beberapa pengelolaan catatan tersebut antara lain:</p>
          <ul>
            <li>Melihat semua catatan yang dimiliki pengguna.</li>
            <li>Melihat salah satu catatan, yang terdiri dari judul, isi, tanggal dibuat, gambar, prioritas, dan kategori, dari pengguna.</li>
            <li>Membuat catatan baru.</li>
            <li>Menghapus salah satu catatan dari pengguna.</li>
            <li>Memperbarui salah satu catatan pengguna.</li>
            <li>Mencari catatan pengguna berdasarkan judul, isi, kategori, dan prioritas catatan yang dimilikinya.</li>
          </ul>
          <p>Aplikasi <strong>Note App React</strong> ini dibuat oleh Achmad Kurnianto dalam rangka menjawab ProblemSet dari Codepolitan untuk <em>instructor recruitment</em> di HACKTIV8</p>
        </div>
      </div>
    )
  }
}
