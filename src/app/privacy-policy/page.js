import LegalPage from '@/components/ui/LegalPage';
import { site } from '@/data/site';

export const metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses and protects information submitted through this website.`,
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 2026">
      <p>
        This policy explains how {site.name} (&ldquo;Eventia&rdquo;, &ldquo;we&rdquo;) handles information when you use this website. We keep it simple: we collect
        only what you choose to send us.
      </p>
      <div>
        <h2>Information we collect</h2>
        <p>When you use our contact form we collect the details you enter: your first and last name, email address, phone number, subject and message.</p>
      </div>
      <div>
        <h2>How we use it</h2>
        <ul>
          <li>To respond to your enquiry and follow up with you about products, partnerships or services.</li>
          <li>To keep a record of enquiries so that our team can respond properly.</li>
        </ul>
        <p className="mt-3">We do not sell your information and we do not use it for unrelated advertising.</p>
      </div>
      <div>
        <h2>Where it is stored</h2>
        <p>
          Enquiries are stored in a private Google Sheet accessible only to authorised Eventia staff. Google processes this data on our behalf under its own
          security and privacy terms.
        </p>
      </div>
      <div>
        <h2>Cookies and tracking</h2>
        <p>This website does not set advertising or analytics cookies. If this changes, we will update this policy.</p>
      </div>
      <div>
        <h2>Security</h2>
        <p>
          The website is served over HTTPS, form submissions are validated and rate-limited, and access to stored enquiries is restricted. No method of
          transmission over the internet is completely secure, so we cannot guarantee absolute security.
        </p>
      </div>
      <div>
        <h2>Your choices</h2>
        <p>You can ask us to access, correct or delete the information you sent us at any time by contacting us using the details below.</p>
      </div>
      <div>
        <h2>Changes to this policy</h2>
        <p>We may update this policy from time to time. The date at the top of this page shows when it was last changed.</p>
      </div>
    </LegalPage>
  );
}
