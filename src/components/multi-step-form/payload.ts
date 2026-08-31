import type { ContributePayload } from "@/lib/api/contribute";
import { formatPhoneNumber } from "@/lib/format/phone";
import type { FormValues } from "./schema";

export const toContributePayload = ({
  shelter,
  amount,
  donors
}: FormValues): ContributePayload => ({
  contributors: donors.map((donor) => ({
    ...donor,
    phone: formatPhoneNumber(donor.phone)
  })),
  ...(shelter && { shelterID: Number(shelter) }),
  value: amount
});
