import { FormTextInput } from "@/components/form";
import { useT } from "next-i18next/client";

export default function ChooseShelterStep() {
  const { t } = useT();

  return (
    <div>
      <FormTextInput
        name="donationType"
        label={t("form.donationType")}
        placeholder={t("form.donationTypePlaceholder")}
        withAsterisk
      />
      <FormTextInput
        name="shelter"
        label={t("form.shelter")}
        placeholder={t("form.shelterPlaceholder")}
        withAsterisk
      />
      <FormTextInput
        name="amount"
        label={t("form.amount")}
        placeholder={t("form.amountPlaceholder")}
        withAsterisk
      />
    </div>
  );
}
