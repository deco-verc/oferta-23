"use client";

import { useEffect } from "react";

/**
 * Script de Rastreamento Global de UTMs para links da Cakto (pay.cakto.com.br).
 * Captura todos os parâmetros da URL atual (window.location.search: utm_source, utm_medium,
 * utm_campaign, utm_content, utm_term, src, sck, etc.) e anexa automaticamente a todos os
 * links da Cakto antes do redirecionamento.
 */
export default function CaktoUtmTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    function appendUtmsToUrl(rawUrl: string): string {
      const search = window.location.search;
      if (!search || search.length <= 1) return rawUrl;

      const currentParams = new URLSearchParams(search);

      try {
        const urlObj = new URL(rawUrl, window.location.origin);
        currentParams.forEach((value, key) => {
          urlObj.searchParams.set(key, value);
        });
        return urlObj.toString();
      } catch {
        const separator = rawUrl.includes("?") ? "&" : "?";
        const cleanParams = search.startsWith("?") ? search.slice(1) : search;
        return `${rawUrl}${separator}${cleanParams}`;
      }
    }

    function syncAllCaktoLinks() {
      const links = document.querySelectorAll<HTMLAnchorElement>(
        'a[href*="pay.cakto.com.br"]'
      );
      links.forEach((link) => {
        link.href = appendUtmsToUrl(link.href);
      });
    }

    // 1. Executa sincronização inicial no DOM
    syncAllCaktoLinks();

    // 2. Intercepta no momento exato do clique para garantir links gerados dinamicamente
    const handleGlobalClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest(
        'a[href*="pay.cakto.com.br"]'
      ) as HTMLAnchorElement | null;

      if (target) {
        target.href = appendUtmsToUrl(target.href);
      }
    };

    document.addEventListener("click", handleGlobalClick, { capture: true });

    // 3. Observa adições no DOM (ex: quando o modal de upgrade é aberto)
    const observer = new MutationObserver(() => {
      syncAllCaktoLinks();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("click", handleGlobalClick, { capture: true });
      observer.disconnect();
    };
  }, []);

  return null;
}
