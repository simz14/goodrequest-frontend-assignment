import { FormTextInput } from "@/components/form";
import { useT } from "next-i18next/client";

export default function PersonalInfoStep() {
  const { t } = useT();

  return (
    <div>
      <FormTextInput
        name="firstName"
        label={t("form.firstName")}
        placeholder={t("form.firstNamePlaceholder")}
        withAsterisk
      />
      <FormTextInput
        name="lastName"
        label={t("form.lastName")}
        placeholder={t("form.lastNamePlaceholder")}
        withAsterisk
      />

      <FormTextInput
        name="email"
        label={t("form.email")}
        placeholder={t("form.emailPlaceholder")}
        withAsterisk
      />

      <FormTextInput
        name="phoneNumber"
        label={t("form.phoneNumber")}
        placeholder={t("form.phoneNumberPlaceholder")}
        withAsterisk
      />
    </div>
  );
}
