document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        kirimData();
    });
});

function kirimData(){
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value;

    alert(
        "Nama Mahasiswa: " + nama + "\n" +
        "NIM: " + nim + "\n" +
        "Peminatan: " + peminatan + "\n" +
        "Alamat: " + alamat
    );
}
