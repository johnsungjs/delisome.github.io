import Swal from "sweetalert2";

export function alertSuccessApi(message) {
  Swal.fire({
      title: 'Message From Server',
      text: message,
      icon: 'success',
      confirmButtonText: 'ok'
  });

}
export function alertErrorApi(message) {
  Swal.fire({
      title: 'Error Message from Server',
      text: message,
      icon: 'error',
      confirmButtonText: 'ok'
  });

}
export function alertWarningApi(message) {
  Swal.fire({
      title: 'Message From Server',
      text: message,
      icon: 'warning',
      confirmButtonText: 'ok'
  });
}