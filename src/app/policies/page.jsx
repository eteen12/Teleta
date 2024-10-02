import React from "react";

export default function Page() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 mt-10 flex justify-center">
        Policies
      </h1>

      <section className="mb-8 bg-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-2">
          Privacy Policy for Teleta Development
        </h2>
        <p className="mb-2">
          <strong>Effective Date:</strong> 2024-10-01
        </p>
        <p className="mb-4">
          Your privacy is important; let me explain why and what we collect.
        </p>

        <h3 className="font-semibold mb-1">Information We Collect:</h3>
        <p className="mb-2">
          I collect any information you add when submitting forms or signing up
          for things like my newsletter.
        </p>

        <h3 className="font-semibold mb-1">How We Use Your Information:</h3>
        <p className="mb-2">
          The only reason I use your information is to contact you through
          email, my newsletter, or for questions you submitted through a form.
        </p>

        <h3 className="font-semibold mb-1">Your Rights:</h3>
        <p className="mb-2">
          You have the right to access and correct your personal information.
          You can request to have your email removed from my records at any
          time. Just email me at{" "}
          <a
            href="mailto:ethan@teletadevelopment.com"
            className="text-blue-500 hover:underline"
          >
            ethan@teletadevelopment.com
          </a>
        </p>

        <h3 className="font-semibold mb-1">Changes to This Policy:</h3>
        <p className="mb-2">
          I may update this Privacy Policy occasionally. I will notify you of
          any significant changes by posting the new policy on our website.
        </p>

        <h3 className="font-semibold mb-1">Contact Us:</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact me
          at{" "}
          <a
            href="mailto:ethan@teletadevelopment.com"
            className="text-blue-500 hover:underline"
          >
            ethan@teletadevelopment.com
          </a>
          .
        </p>
      </section>

      <section className="bg-white p-4 rounded shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Terms of Service for Teleta Development
        </h2>
        <p className="mb-2">
          <strong>Effective Date:</strong> 2024-10-01
        </p>
        <p className="mb-4">
          Welcome to Teleta Development! These Terms of Service govern your use
          of my website and services.
        </p>

        <h3 className="font-semibold mb-1">Acceptance of Terms:</h3>
        <p className="mb-2">
          By using my services, you agree to these Terms. If you do not agree,
          please refrain from using my services.
        </p>

        <h3 className="font-semibold mb-1">Services Provided:</h3>
        <p className="mb-2">
          Teleta Development provides web development services, including
          website design and maintenance.
        </p>

        <h3 className="font-semibold mb-1">User Responsibilities:</h3>
        <p className="mb-2">
          You agree to provide accurate information when signing up for my
          services. You agree not to misuse my services or violate any
          applicable laws.
        </p>

        <h3 className="font-semibold mb-1">Changes to These Terms:</h3>
        <p className="mb-2">
          I&apos;m going to update these Terms of Service pretty soon. So, I
          will notify you of any significant changes by posting the new terms on
          my website.
        </p>

        <h3 className="font-semibold mb-1">Contact Us:</h3>
        <p>
          If you have any questions about these Terms, please contact me at{" "}
          <a
            href="mailto:ethan@teletadevelopment.com"
            className="text-blue-500 hover:underline"
          >
            ethan@teletadevelopment.com
          </a>
          .
        </p>
      </section>

      <section className="bg-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-2">
          Thanks For Checking Out the Site!
        </h2>
        <p>
          I&apos;ve spent hundreds of hours building towards this moment. I hope
          you consider employing me for your next project.
        </p>
      </section>
    </div>
  );
}
