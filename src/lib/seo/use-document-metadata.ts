"use client";

import { useEffect } from "react";

export const useDocumentMetadata = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  useEffect(() => {
    document.title = title;

    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );

    if (meta) meta.content = description;
  }, [title, description]);
};
