import type { ContributePayload } from "@/lib/api/contribute";
import { formatPhoneNumber } from "@/lib/format/phone";
import type { FormValues } from "./schema";

export const toContributePayload = ({
  shelter,
  amount,
  firstName,
  lastName,
  email,
  phoneNumber
}: FormValues): ContributePayload => ({
  contributors: [
    {
      firstName,
      lastName,
      email,
      phone: formatPhoneNumber(phoneNumber)
    }
  ],
  ...(shelter && { shelterID: Number(shelter) }),
  value: amount
});
