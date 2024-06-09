import Swal from "sweetalert2";

const Negatif = () => {
  Swal.fire({
    title: "Tidak Terindikasi Penyakit Liver ",
    text: "Hasil pemeriksaan menunjukkan bahwa tidak ada indikasi Anda berisiko terkena penyakit liver. Namun, tetap jaga kesehatan Anda dengan pola makan yang baik dan berolahraga secara biteratur",
    icon: "info",
    iconColor: "blue",
    color: "blue",
    showCloseButton: true,
    closeOnClickOutside: false,
    showConfirmButton: true,
  });
};

export default Negatif;
