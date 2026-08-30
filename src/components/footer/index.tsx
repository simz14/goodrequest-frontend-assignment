"use client";

import Image from "next/image";
import { useT } from "next-i18next/client";
import {
  StyledFooter,
  StyledLogoLink,
  StyledNav,
  StyledNavLink
} from "./index.styles";

const LOGO_HEIGHT = 24;
const LOGO_ASPECT_RATIO = 217 / 56;

const NAV_LINKS = [
  { key: "contact", href: "/contact" },
  { key: "about", href: "/about" }
] as const;

export default function Footer() {
  const { t } = useT();

  return (
    <StyledFooter>
      <StyledLogoLink href="/">
        <Image
          src="/logo.svg"
          alt={t("footer.logoAlt")}
          height={LOGO_HEIGHT}
          width={Math.round(LOGO_HEIGHT * LOGO_ASPECT_RATIO)}
        />
      </StyledLogoLink>

      <StyledNav aria-label={t("footer.navLabel")}>
        {NAV_LINKS.map(({ key, href }) => (
          <StyledNavLink key={key} href={href}>
            {t(`footer.links.${key}`)}
          </StyledNavLink>
        ))}
      </StyledNav>
    </StyledFooter>
  );
}
