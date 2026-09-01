import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Cookie Policy | Revenue Orbit Marketing",
  description:
    "How Revenue Orbit Marketing uses cookies and similar technologies on its website, and how you can control them.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      updated="[Effective date — e.g. January 1, 2026]"
      sections={[
        {
          title: "1. What Are Cookies",
          body: [
            "Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide information to site owners.",
          ],
        },
        {
          title: "2. Cookies We Use",
          body: [
            "We use the following categories of cookies on our website:",
            "Strictly Necessary Cookies — required for the website to function, such as remembering your theme (light/dark) preference and admin session authentication. These cannot be switched off.",
            "Performance & Analytics Cookies — help us understand how visitors interact with our site (e.g., which pages are visited, how long users stay), so we can improve it. These collect aggregated, anonymised information.",
            "Functional Cookies — remember choices you make (such as language or region) to provide a more personalised experience.",
            "Advertising / Targeting Cookies — used to deliver relevant advertisements and measure campaign effectiveness, where applicable.",
          ],
        },
        {
          title: "3. Managing & Disabling Cookies",
          body: [
            "You can control and/or delete cookies as you wish. You can delete all cookies already on your device and set most browsers to prevent them from being placed. If you do this, you may have to manually adjust some preferences each time you visit, and some services or features may not work.",
            "To manage cookies in your browser, refer to your browser's help section or visit www.allaboutcookies.org.",
          ],
        },
        {
          title: "4. Analytics & Third-Party Tools",
          body: [
            "We may use third-party analytics providers (such as website analytics services) that set their own cookies to measure site traffic and usage. These providers process data under their own privacy policies. [List your specific tools here, e.g., Google Analytics, Meta Pixel, before publishing.]",
          ],
        },
        {
          title: "5. Marketing & Advertising",
          body: [
            "Where we run advertising campaigns, advertising partners may use cookies and web beacons to deliver and measure ads, and to build audiences. You can opt out of personalised advertising through the relevant advertising platforms' settings (e.g., Google Ads Settings, Meta Ad Preferences).",
          ],
        },
        {
          title: "6. Your Consent",
          body: [
            "Where required by law, we obtain your consent before placing non-essential cookies. You may withdraw or change your consent at any time by adjusting your browser settings or using any cookie-consent controls we provide on our website.",
          ],
        },
        {
          title: "7. Changes to This Policy",
          body: [
            "We may update this Cookie Policy from time to time to reflect changes in technology, law, or our practices. We will post updates on this page and update the \"Last updated\" date.",
          ],
        },
        {
          title: "8. Contact Us",
          body: [
            "If you have questions about this Cookie Policy, contact us at:",
            "Revenue Orbit Marketing LLC — 17350 State Hwy 249, Ste 220 #37550, Houston, TX 77064. Phone: +1 (713) 919-7830. Email: Info@revenueorbitmarketing.com.",
          ],
        },
      ]}
    />
  );
}
