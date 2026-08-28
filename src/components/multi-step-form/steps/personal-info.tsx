import { FormTextInput } from "@/components/form";
import { useT } from "next-i18next/client";
import { StyledFullWidthField, StyledWrapper } from "./personal-info.styles";
import { FormPhoneInput } from "@/components/form";

export default function PersonalInfoStep() {
  const { t } = useT();

  return (
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
  );
}
