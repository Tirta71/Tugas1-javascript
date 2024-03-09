document.addEventListener("DOMContentLoaded", function () {
  const pegawaiData = document.getElementById("pegawaiData");
  const totalGajiElement = document.getElementById("totalGaji");

  const dataPegawai = [
    { nama: "Ridwan", jabatan: "Manager", status: "Menikah" },
  ];

  let totalGaji = 0;
  dataPegawai.forEach((pegawai) => {
    let gajiPokok = 0;
    let tunjanganJabatan = 0;
    let bpjs = 0;
    let tunjanganKeluarga = 0;

    switch (pegawai.jabatan) {
      case "Manager":
        gajiPokok = 15000000;
        break;
      case "Asisten Manager":
        gajiPokok = 10000000;
        break;
      case "Staff":
        gajiPokok = 5000000;
        break;
      default:
        gajiPokok = 0;
    }

    tunjanganJabatan = 0.15 * gajiPokok;
    bpjs = 0.1 * gajiPokok;
    tunjanganKeluarga = pegawai.status === "Menikah" ? 0.2 * gajiPokok : 0;

    const totalGajiPegawai =
      gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;
    totalGaji += totalGajiPegawai;

    const row = `
            <tr>
                <td>${pegawai.nama}</td>
                <td>${pegawai.jabatan}</td>
                <td>${pegawai.status}</td>
                <td>Rp ${formatCurrency(gajiPokok)}</td>
                <td>Rp ${formatCurrency(tunjanganJabatan)}</td>
                <td>Rp ${formatCurrency(bpjs)}</td>
                <td>Rp ${formatCurrency(tunjanganKeluarga)}</td>
                <td>Rp ${formatCurrency(totalGajiPegawai)}</td>
            </tr>
        `;
    pegawaiData.innerHTML += row;
  });

  totalGajiElement.textContent = "Rp " + formatCurrency(totalGaji);
});

function formatCurrency(amount) {
  return amount.toLocaleString("id-ID");
}
