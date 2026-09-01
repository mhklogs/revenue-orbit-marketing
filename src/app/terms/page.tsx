import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms & Conditions | Revenue Orbit Marketing",
  description:
    "Terms and conditions governing the use of Revenue Orbit Marketing's marketing, sales, BPO and technology services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="[Effective date — e.g. January 1, 2026]"
      sections={[
        {
          title: "1. Agreement to Terms",
          body: [
            "These Terms & Conditions (\"Terms\") govern your access to and use of the websites, services, and products provided by Revenue Orbit Marketing LLC (\"ROM\", \"we\", \"us\", or \"our\"). By accessing our website, engaging our services, or contacting us, you agree to be bound by these Terms.",
            "If you do not agree with any part of these Terms, you must not use our website or services.",
          ],
        },
        {
          title: "2. Our Services",
          body: [
            "Revenue Orbit Marketing provides customer acquisition, digital marketing, sales development, business process outsourcing (BPO), real estate marketing, AI and automation, contact center, and CRM/business automation services.",
            "Specific deliverables, timelines, metrics, and fees are set out in a separate written Statement of Work (SOW) or service agreement signed by both parties. In the event of any conflict, the signed agreement takes precedence over these general Terms.",
          ],
        },
        {
          title: "3. Intellectual Property",
          body: [
            "All content on our website, including text, graphics, logos, images, and the \"Revenue Orbit Marketing\" and \"ROM\" branding, is our property or licensed to us and is protected by applicable intellectual property laws.",
            "You may not copy, reproduce, distribute, or create derivative works from our content without our prior written consent.",
          ],
        },
        {
          title: "4. Client Responsibilities",
          body: [
            "Where we handle campaigns, leads, data, or operations on your behalf, you agree to provide accurate information, obtain all necessary consents and authorizations, and comply with all applicable laws including but not limited to data protection, telemarketing (TCPA/Do Not Call), and CAN-SPAM regulations.",
            "You are responsible for the accuracy and legality of the materials, data, and instructions you provide to us.",
          ],
        },
        {
          title: "5. Limitation of Liability",
          body: [
            "To the maximum extent permitted by law, Revenue Orbit Marketing shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of our services.",
            "Our total aggregate liability arising out of or relating to these Terms or our services shall not exceed the amounts actually paid by you to us during the twelve (12) months preceding the claim.",
          ],
        },
        {
          title: "6. Disclaimers",
          body: [
            "Our website and services are provided on an \"as is\" and \"as available\" basis without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
            "Performance results and metrics showcased on our website (including statistical claims) are illustrative of prior or target outcomes and are not a guarantee of future results for any specific client.",
          ],
        },
        {
          title: "7. Governing Law & Disputes",
          body: [
            "These Terms are governed by the laws of the State of [STATE], United States, without regard to conflict of law principles. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in [COUNTY], [STATE].",
            "[Insert your preferred jurisdiction and any mandatory arbitration clause here before publishing.]",
          ],
        },
        {
          title: "8. Changes to These Terms",
          body: [
            "We may update these Terms from time to time. We will post any changes on this page and update the \"Last updated\" date at the top. Your continued use of our website or services after changes take effect constitutes acceptance of the revised Terms.",
          ],
        },
        {
          title: "9. Contact Us",
          body: [
            "For questions about these Terms & Conditions, contact us at:",
            "Revenue Orbit Marketing LLC — 17350 State Hwy 249, Ste 220 #37550, Houston, TX 77064. Phone: +1 (713) 919-7830. Email: Info@revenueorbitmarketing.com.",
          ],
        },
      ]}
    />
  );
}
