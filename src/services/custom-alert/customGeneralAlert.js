import Swal from "sweetalert2"

export function alertSuccess(message) {
  Swal.fire({
      title: 'Success',
      text: message,
      icon: 'success',
      confirmButtonText: 'ok'
  });
}

export function alertWarning(message) {
  Swal.fire({
      title: 'Warning',
      text: message,
      icon: 'warning',
      confirmButtonText: 'ok'
  });
}

export function alertError(message) {
  Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      confirmButtonText: 'ok'
  });
}

export function alertInfo(message) {
  Swal.fire({
      title: 'Info',
      text: message,
      icon: 'info',
      confirmButtonText: 'ok'
  });
}