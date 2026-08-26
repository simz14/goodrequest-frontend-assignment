import { FormCheckbox } from "@/components/form";
import { useT } from "next-i18next/client";

export default function SummaryStep() {
  const { t } = useT();

  return (
    <div>
      <FormCheckbox name="consent" label={t("form.consent")} />
    </div>
  );
}
