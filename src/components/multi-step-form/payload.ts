import type { ContributePayload } from "@/lib/api/contribute";
import { formatPhoneNumber } from "@/lib/format/phone";
import type { FormValues } from "./schema";
import { DonationType } from "./types";

export const toContributePayload = ({
  donationType,
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
  ...(donationType === DonationType.SHELTER &&
    shelter && { shelterID: Number(shelter) }),
  value: amount
});
