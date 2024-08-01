function validasi()
{
    var cek = document.forms["amb"]["nama"].value;
    if (!/^[a-zA-Z]+$/.test(cek))
    {
        alert("Silakan isi form terlebih dahulu dengan huruf");
        document.getElementById("nama").focus();
        document.amb.nama.value="";
        return false;
    }
}