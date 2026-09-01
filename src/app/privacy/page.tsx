import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | Revenue Orbit Marketing",
  description:
    "How Revenue Orbit Marketing collects, uses, protects and handles your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="[Effective date — e.g. January 1, 2026]"
      sections={[
        {
          title: "1. Introduction",
          body: [
            "Revenue Orbit Marketing LLC (\"ROM\", \"we\", \"us\", or \"our\") respects your privacy and is committed to protecting the personal information we collect. This Privacy Policy explains what information we collect, how we use it, and the choices you have.",
          ],
        },
        {
          title: "2. Information We Collect",
          body: [
            "We collect information you provide directly to us, such as when you fill out a contact or consultation form, email us, call us, or engage our services. This may include your name, company name, email address, phone number, and details about your business needs.",
            "We also automatically collect certain information when you visit our website, such as your IP address, browser type, device information, referring pages, and usage data (see our Cookie Policy for details).",
          ],
        },
        {
          title: "3. How We Use Your Information",
          body: [
            "We use the information we collect to:",
            "Respond to your inquiries and schedule consultations.",
            "Provide, maintain, and improve our marketing, sales, BPO, and automation services.",
            "Process billing, manage client accounts, and fulfill service agreements.",
            "Personalize your experience and improve our website content.",
            "Send you relevant communications, where you have opted in, with the ability to opt out at any time.",
            "Comply with legal obligations and enforce our agreements.",
          ],
        },
        {
          title: "4. How We Share Information",
          body: [
            "We do not sell your personal information. We share information only in limited circumstances: with service providers who help us operate our business (subject to confidentiality obligations), to comply with legal obligations, to protect our rights and safety, or with your consent.",
          ],
        },
        {
          title: "5. Data Security",
          body: [
            "We use reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, alteration, and disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.",
          ],
        },
        {
          title: "6. Data Retention",
          body: [
            "We retain personal information only for as long as necessary to fulfill the purposes described in this policy, comply with our legal obligations, resolve disputes, and enforce our agreements.",
          ],
        },
        {
          title: "7. Your Rights",
          body: [
            "Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal information, and to object to certain processing. To exercise any of these rights, contact us using the details below.",
            "[If you serve California residents, consider adding a CCPA/CPRA notice; if you serve EU/UK individuals, consider GDPR provisions.]",
          ],
        },
        {
          title: "8. Third-Party Links",
          body: [
            "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.",
          ],
        },
        {
          title: "9. Changes to This Policy",
          body: [
            "We may update this Privacy Policy from time to time. We will post any changes on this page and update the \"Last updated\" date. Your continued use of our services after changes take effect constitutes acceptance of the revised policy.",
          ],
        },
        {
          title: "10. Contact Us",
          body: [
            "If you have questions or concerns about this Privacy Policy or our privacy practices, contact us at:",
            "Revenue Orbit Marketing LLC — 17350 State Hwy 249, Ste 220 #37550, Houston, TX 77064. Phone: +1 (713) 919-7830. Email: Info@revenueorbitmarketing.com.",
          ],
        },
      ]}
    />
  );
}
