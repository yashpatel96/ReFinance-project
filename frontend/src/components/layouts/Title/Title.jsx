import { useEffect } from "react";
export const useDocumentTitle = (title) => {

  useEffect(() => {
    document.title = `ReFinance ${title}`;
  }, [title]);

  return null;
}