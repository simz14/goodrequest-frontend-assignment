import { FormTextInput } from "@/components/form";
import { useT } from "next-i18next/client";
import { StyledFullWidthField, StyledWrapper } from "./personal-info.styles";
import { FormPhoneInput } from "@/components/form";
import { StyledTypography } from "@/components/ui/typography.styles";
import { StyledFieldGroup, StyledSection } from "../shared.styles";

export default function PersonalInfoStep() {
  const { t } = useT();

  return (
    <StyledSection>
      <StyledTypography $variant="heading-lg" $color="primary" as="h1">
        {t("personalInfo.title")}
      </StyledTypography>

      <StyledFieldGroup>
        <StyledTypography $variant="text-md-semibold" $color="primary" as="h2">
          {t("form.sectionAboutYou")}
        </StyledTypography>

        <StyledWrapper>
          <FormTextInput
            name="firstName"
            label={t("form.firstName")}
            placeholder={t("form.firstNamePlaceholder")}
          />
          <FormTextInput
            name="lastName"
            label={t("form.lastName")}
            placeholder={t("form.lastNamePlaceholder")}
          />

          <StyledFullWidthField
            name="email"
            label={t("form.email")}
            placeholder={t("form.emailPlaceholder")}
          />

          <FormPhoneInput name="phoneNumber" />
        </StyledWrapper>
      </StyledFieldGroup>
    </StyledSection>
  );
}
