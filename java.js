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
        alert("Silakan isi form terlebih dahulu dengan huruf");
        document.getElementById("buku").focus();
        document.amb.nama.value="";
        return false;
    }
}
