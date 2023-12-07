export const whatsAppLink = "https://wa.me/+62895323939955";

export function whatsAppLinkWithMessage(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/+62895323939955?text=${encodedMessage}`;
}

export function whatsAppLinkWithMessage2(message) {
  const encodedMessage = encodeURI(message);
  return `https://wa.me/+62895323939955?text=${encodedMessage}`;
}
