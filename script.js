      var tanggalInput = document.getElementById('tanggal');
flatpickr(tanggalInput,{
    enableTime: false,
    dateFormat: 'd-m-Y', // 'Y' is capital for 4-digit year
});

function showFormData() {
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector('input[name="peminatan"]:checked').value;
    var alamat = document.querySelector('textarea[name="alamat"]').value;
    var tanggal = document.getElementById("tanggal").value;
    var angakatna = document.getElementById("angkatan").value;

    alert(
        "Nama: " + nama +
        "\nNIM: " + nim +
        "\nPeminatan: " + peminatan +
        "\nAlamat: " + alamat +
        "\nTanggal: " + tanggal +
        "\nAngkatan: " + angakatna
    );
}