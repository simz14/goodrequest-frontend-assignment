"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Code } from "@mantine/core";
import { useT } from "next-i18next/client";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { FormTextInput } from "@/components/form";

const schema = z.object({
  name: z.string().min(2, "validation.minLength"),
  email: z.email("validation.email")
});

type TestFormValues = z.infer<typeof schema>;

export function TestForm() {
  const { t } = useT();
  const [submitted, setSubmitted] = useState<TestFormValues | null>(null);

  const methods = useForm<TestFormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { name: "", email: "" }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((values) => setSubmitted(values))}>
        <FormTextInput
          name="name"
          label={t("form.name")}
          placeholder={t("form.namePlaceholder")}
          withAsterisk
        />
        <FormTextInput
          name="email"
          label={t("form.email")}
          placeholder="you@example.com"
          withAsterisk
        />
        <Button type="submit">{t("form.submit")}</Button>
        {submitted ? (
          <Code block>{JSON.stringify(submitted, null, 2)}</Code>
        ) : null}
      </form>
    </FormProvider>
  );
}
