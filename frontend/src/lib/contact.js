export const PHONE = "9934092237";
export const PHONE_DISPLAY = "993 409 2237";
export const BUSINESS_NAME = "J&H Electricidad y Plomería";
export const OWNER = "Ing. Luis Miguel Jiménez";
export const CITY = "Villahermosa, Tabasco";

export const buildWaLink = (message) => {
  const text = encodeURIComponent(
    message || "Hola, vi su página web y necesito un servicio. ¿Están disponibles?"
  );
  return `https://wa.me/521${PHONE}?text=${text}`;
};

export const TEL_LINK = `tel:+521${PHONE}`;

export const SOCIAL = {
  facebook: "https://www.facebook.com/tecnicolmjc?locale=es_LA",
  instagram: "https://www.instagram.com/tecnicolmjc",
  whatsappCatalog: "https://www.whatsapp.com/catalog/5219934092237/?app_absent=0",
};
