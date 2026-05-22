export function TrackingReady() {
  const metaVerification = process.env.NEXT_PUBLIC_META_DOMAIN_VERIFICATION ?? "meta-verification-placeholder";
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "META_PIXEL_ID_PLACEHOLDER";
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "GA_MEASUREMENT_ID_PLACEHOLDER";
  const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "google-site-verification-placeholder";

  return (
    <>
      <meta name="facebook-domain-verification" content={metaVerification} />
      <meta name="meta-pixel-id" content={metaPixelId} />
      <meta name="google-analytics-id" content={gaId} />
      <meta name="google-site-verification" content={gscVerification} />
    </>
  );
}
