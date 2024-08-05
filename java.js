function validasi1()
{
    var cek = document.forms["amb"]["nama"].value;
    if (!/^[a-zA-Z]+$/.test(cek))
    {
        alert("Silakan isi form terlebih dahulu dengan huruf");
        document.getElementById("nama").focus();
        document.amb.nama.value="";
        return false;
    }
    var cek = document.forms["amb"]["buku"].value;
    if (!/^[a-zA-Z]+$/.test(cek))
    {
        alert("Dimohon pilih buku yang tercantum");
        document.getElementById("buku").focus();
        document.amb.nama.value="";
        return false;
    }
    var cek = document.forms["amb"]["Pekerjaan"].value;
    if (!/^[a-zA-Z]+$/.test(cek))
    {
        alert("Pilih pekerjaanmu");
        document.getElementById("Pekerjaan").focus();
        document.amb.nama.value="";
        return false;
    }
    var cek = document.forms["amb"]["jenis_kelamin"].value;
    if (!/^[a-zA-Z]+$/.test(cek))
    {
        alert("Silakan pilih jenis kelamin");
        document.getElementById("jenis kelamin").focus();
        document.amb.nama.value="";
        return false;
    }
}
