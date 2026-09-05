import { useEffect } from 'react';

export default function PrivacyPolicy() {
  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-[#222] pb-8">
          <h1 className="text-4xl font-display font-bold text-[#ededed] mb-4">Aeclone Privacy Policy</h1>
          <p className="text-[#555]">Last Updated: September 4, 2026</p>
        </div>

        <div className="max-w-none text-[#888] prose-headings:text-[#ededed]">
          
          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[#ededed]">1. Introduction</h2>
          <p className="mb-6 leading-relaxed">
            Welcome to Aeclone. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Aeclone application and website. Please read this Privacy Policy carefully.
          </p>

          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[#ededed]">2. Information We Collect</h2>
          <p className="mb-6 leading-relaxed">
            As a decentralized cloud-storage management tool, Aeclone is designed to run locally and interact directly with your cloud providers. We do not maintain central servers that collect your personal files or browsing history. The application only requests permissions necessary for the functionality selected by the user.
          </p>

          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[#ededed]">3. Google API / OAuth Data</h2>
          <p className="mb-6 leading-relaxed">
            Aeclone may request access to Google Drive data when a user explicitly authorizes the application via OAuth.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>We only request access to read, write, or modify files that you explicitly command Aeclone to manage.</li>
            <li>OAuth credentials and tokens are handled securely on your local machine and are not intentionally sold, transferred, or shared with third parties.</li>
            <li>Use of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.</li>
          </ul>

          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[#ededed]">4. How We Use Information</h2>
          <p className="mb-6 leading-relaxed">
            The information authorized through third-party APIs (like Google Drive) is used exclusively to provide the core functionality of Aeclone: syncing, backing up, mounting, and transferring your files as per your commands.
          </p>

          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[#ededed]">5. Data Storage and Security</h2>
          <p className="mb-6 leading-relaxed">
            Configuration files and OAuth tokens are stored locally on the device where Aeclone is executed. It is your responsibility to secure the physical device and operating system environment where these configuration files reside.
          </p>

          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[#ededed]">6. Data Sharing</h2>
          <p className="mb-6 leading-relaxed">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Your files are transferred directly between your local machine and your chosen cloud providers.
          </p>

          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[#ededed]">7. Data Retention</h2>
          <p className="mb-6 leading-relaxed">
            Tokens and configuration data are retained locally until you choose to delete them or revoke access from the third-party provider's security settings.
          </p>

          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[#ededed]">8. User Rights</h2>
          <p className="mb-6 leading-relaxed">
            You maintain full control over your data. You can revoke Aeclone's access to your cloud accounts at any time through the respective provider's account security settings.
          </p>

          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[#ededed]">9. Third-Party Services</h2>
          <p className="mb-6 leading-relaxed">
            Aeclone interacts with third-party cloud services. This privacy policy does not apply to the practices of those third parties. We encourage you to review the privacy policies of any cloud provider you connect to Aeclone.
          </p>

          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[#ededed]">10. Cookies</h2>
          <p className="mb-6 leading-relaxed">
            The Aeclone website may use basic cookies or local storage strictly for functional purposes, such as maintaining user preferences or basic site analytics. We do not use tracking cookies for advertising.
          </p>

          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[#ededed]">11. Children's Privacy</h2>
          <p className="mb-6 leading-relaxed">
            Aeclone is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13.
          </p>

          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[#ededed]">12. Changes to This Policy</h2>
          <p className="mb-6 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>

          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[#ededed]">13. Contact</h2>
          <p className="mb-6 leading-relaxed">
            If you have questions or comments about this Privacy Policy, please contact us through our official project repository or communication channels.
          </p>
        </div>
      </div>
    </div>
  );
}
