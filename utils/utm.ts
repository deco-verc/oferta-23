/**
 * Função utilitária para capturar os parâmetros UTM e query strings
 * da URL atual do visitante e repassá-los para qualquer link de checkout.
 */
export function appendCurrentUtms(targetUrl: string): string {
  if (typeof window === "undefined") return targetUrl;

  const search = window.location.search;
  if (!search || search.length <= 1) return targetUrl;

  const cleanParams = search.startsWith("?") ? search.slice(1) : search;

  // Se for um link âncora/placeholder (ex: #LINK_CHECKOUT_14_90)
  if (targetUrl.startsWith("#")) {
    return `${targetUrl}?${cleanParams}`;
  }

  try {
    const url = new URL(targetUrl, window.location.origin);
    const params = new URLSearchParams(cleanParams);
    params.forEach((value, key) => {
      url.searchParams.set(key, value);
    });
    return url.toString();
  } catch {
    const separator = targetUrl.includes("?") ? "&" : "?";
    return `${targetUrl}${separator}${cleanParams}`;
  }
}
