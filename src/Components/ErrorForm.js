import Swal from "sweetalert2";

const ErrorForm = () => {
  Swal.fire({
    title: "Form Wajib Diisi",
    text: "Mohon Lengkapi Form Terlebih Dahulu",
    icon: "error",
    showCloseButton: true,
    color: "red",
    confirmButtonColor: "red",
  });
};

export default ErrorForm;
