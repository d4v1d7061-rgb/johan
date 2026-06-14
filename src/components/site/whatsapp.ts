// Centralized WhatsApp config. Update WHATSAPP_NUMBER with the real number.
export const WHATSAPP_NUMBER = "584140000000"; // Reemplazar con el número real
export const WHATSAPP_MESSAGE = "Hola By:Johan, quiero reservar una cita.";

export const whatsappUrl = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
