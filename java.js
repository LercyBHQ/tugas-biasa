function validasi1() 
{

    var konfirmasi = confirm('Apakah akan dilanjutkan untuk mengirim pesan?');

    if (konfirmasi == true) {
        var nama = document.forms["amb"]["nama"].value;
        var buku = document.forms["amb"]["buku"].value;
        var Pekerjaan = document.forms["amb"]["Pekerjaan"].value;
        var jenis_kelamin = document.forms["amb"]["jenis_kelamin"].value;
        console.log(nama);
        console.log(buku);
        console.log(Pekerjaan);
        console.log(jenis_kelamin);

        if (nama == '') {
            alert('Isi nama anda...!!');
        }
        if (buku == '') {
            alert('Pilih Buku yang tercantum di daftar buku...!!');
        }
        if (Pekerjaan == '') {
            alert('Pilih Pekerjaan...!!');
        }
        if (jenis_kelamin == '') {
            alert('Isi jenis kelamin...!!');
        }
    } else {
        alert('kirim pesan dibatalkan...!!');
    }
}
