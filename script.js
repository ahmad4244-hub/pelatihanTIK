// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.gelEmentById('sapaButton');
// 2. Tambahkan 'event Listener' untuk aksi 'click'
tombolSapa.addEventlistener('click',function() {
    // 3. Jalankan kode ini ketika tombol di-klik
    alert('Halo! Terima kasih sudah berkunjung!');
});
