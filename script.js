// 1. pilih tombol berdasarkan ID-nya
const tombolsapa = document.getElementByID('sapabutton');
// 2. Tambahkan 'event listerner' untuk aksi 'click'
tombolsapa .addEventListener('click',function() {
  // 3. jalankan kode ini ketika tombol di klik
  alert('Halo! Terima kasih sudah berkunjung!');
});
