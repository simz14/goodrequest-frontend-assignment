"use client";

import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { useT } from "next-i18next/client";
import {
  StyledContactDescription,
  StyledContactIcon,
  StyledContactLink,
  StyledContactMethod,
  StyledContactMethods,
  StyledContactTitle
} from "./contact-methods.styles";

const ICON_SIZE = 24;

const CONTACT_METHODS = [
  { key: "email", Icon: IconMail, href: "mailto:hello@goodrequest.com" },
  {
    key: "office",
    Icon: IconMapPin,
    href: "https://maps.google.com/?q=Obchodn%C3%A1+3D,+010+08+%C5%BDilina"
  },
  { key: "phone", Icon: IconPhone, href: "tel:+421911750750" }
] as const;

export default function ContactMethods() {
  const { t } = useT();

  return (
    <StyledContactMethods>
      {CONTACT_METHODS.map(({ key, Icon, href }) => (
        <StyledContactMethod key={key}>
          <StyledContactIcon aria-hidden>
            <Icon size={ICON_SIZE} />
          </StyledContactIcon>

          <StyledContactTitle
            $variant="text-xl-semibold"
            $color="primary"
            as="h2"
          >
            {t(`contact.methods.${key}.title`)}
          </StyledContactTitle>

          <StyledContactDescription $variant="text-md" $color="secondary">
            {t(`contact.methods.${key}.description`)}
          </StyledContactDescription>

          <StyledContactLink
            as="a"
            $variant="text-md-medium"
            $color="brand"
            href={href}
            {...(href.startsWith("https://") && {
              target: "_blank",
              rel: "noreferrer"
            })}
          >
            {t(`contact.methods.${key}.value`)}
          </StyledContactLink>
        </StyledContactMethod>
      ))}
    </StyledContactMethods>
  );
}
