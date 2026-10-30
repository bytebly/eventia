import LegalPage from '@/components/ui/LegalPage';
import { site } from '@/data/site';

export const metadata = {
  title: 'Disclaimer',
  description: `Important information about the product and medical content on the ${site.name} website.`,
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="October 2026">
      <div>
        <h2>For healthcare professionals</h2>
        <p>
          Product information on this website, including compositions, indications and promotional material, is intended for registered medical practitioners
          and healthcare professionals. It is provided for general information only.
        </p>
      </div>
      <div>
        <h2>Not medical advice</h2>
        <p>
          Nothing on this website is medical advice, diagnosis or treatment. Patients should always consult a qualified doctor before starting, changing or
          stopping any medicine. Always refer to the pack and the full prescribing information before use.
        </p>
      </div>
      <div>
        <h2>Accuracy of information</h2>
        <p>
          We take care to keep information accurate and current, but product details, availability and packaging can change without notice. Please confirm
          details with {site.name} before relying on them.
        </p>
      </div>
      <div>
        <h2>Trademarks and content</h2>
        <p>
          Eventia, the Eventia logo and product brand names are the property of their respective owners. Website content may not be copied or reused without
          permission.
        </p>
      </div>
      <div>
        <h2>External links</h2>
        <p>Our site may link to third-party websites such as maps. We are not responsible for the content or privacy practices of those sites.</p>
      </div>
    </LegalPage>
  );
}
