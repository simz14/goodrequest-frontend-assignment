export const contact = {
  email: "hello@goodrequest.com",
  phone: "+421 911 750 750",
  address: "Obchodná 3D, 010 08 Žilina"
} as const;

export const contactHrefs = {
  email: `mailto:${contact.email}`,
  phone: `tel:${contact.phone.replace(/\s/g, "")}`,
  address: `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`
} as const;
