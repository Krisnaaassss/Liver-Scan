import Swal from "sweetalert2";
const Positif = () => {
  Swal.fire({
    title: "Terindikasi Penyakit Liver ",
    text: "Ada indikasi Anda berisiko terkena penyakit liver. Segera lakukan pemeriksaan untuk memastikan diagnosis dan mendapatkan penanganan yang tepat.",
    icon: "warning",
    iconColor: "red",
    color: "red",
    showCloseButton: true,
    showConfirmButton: false,
  });
};

export default Positif;
