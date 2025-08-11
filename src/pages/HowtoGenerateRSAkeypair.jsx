import { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const HowtoGenerateRSAkeypair = () => {
  useEffect(() => {
    document.title = 'OPay Document | How to Generate RSA key pair';
    return () => {
      document.title = 'OPay Document';
    };
  }, []);

  const [copiedIndex, setCopiedIndex] = useState(null);

  const codeString = [
    {
      text: 'Generating the private key:',
      codeBlock: `openssl genrsa -out client_private_key_php_dotnet.pem 2048`,
    },
    {
      text: 'If you are a Java developer, convert the private key to PKCS8 format:',
      codeBlock: `openssl pkcs8 -topk8 -inform PEM -in client_private_key_php_dotnet.pem -outform PEM -nocrypt -out client_private_key_pkcs8.pem`,
    },
    {
      text: 'Generate the public key:',
      codeBlock: `openssl rsa -in client_private_key_php_dotnet.pem -pubout -out client_public_key_php_dotnet.pem`,
    },
    {
      text: 'Generate the private key that can be used in Java:',
      codeBlock: `cat client_private_key_pkcs8.pem | grep -v "^\-" | tr -d "\n" | sed 's/%$//' > client_private_key_java.pem`,
    },
    {
      text: 'Generate the public key that can be used in Java:',
      codeBlock: `cat client_public_key_php_dotnet.pem | grep -v "^\-" | tr -d "\n" | sed 's/%$//' > client_public_key_java.pem`,
    },
  ];

  const handleCopy = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000); // Reset copied index after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className="text-justify p-4">
      <h1
        className="text-2xl font-bold capitalize mb-4 scroll-mt-32"
        id="how-to-generate-rsa-key-pair"
      >
        How to Generate RSA key pair
      </h1>

      <p className="mb-4">
        An RSA key pair contains the private key and the public key. The private key is required for
        generating the signature, while the public key is used for verifying the signature. Many
        tools can be used to generate the RSA key pair. The following steps assume that you use
        OpenSSL to generate the RSA key pair.
      </p>

      <p className="mb-4">
        To read more on how to generate your own public and private key pair, visit{' '}
        <a
          href="https://en.wikipedia.org/wiki/RSA_cryptosystem"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#26d99d] font-bold hover:text-[#53af90]"
        >
          WikiPedia
        </a>
        .
      </p>

      <ul className="space-y-6 pt-1 text-left">
        {codeString.map((item, index) => (
          <li key={index} className="flex flex-col gap-2 relative">
            <div className="flex gap-3 items-start">
              <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0 mt-1">
                <circle cx="12" cy="12" r="12" fill="#26d99d" />
                <text x="12" y="16" textAnchor="middle" fontSize="12" fill="white">
                  {index + 1}
                </text>
              </svg>
              <p className="leading-7">{item.text}</p>
            </div>

            <div className="relative my-4">
              {/* Copy Button */}
              <button
                onClick={() => handleCopy(item.codeBlock, index)}
                className="absolute top-2 right-2 text-xs bg-[#26d99d] text-white px-2 py-1 rounded hover:bg-[#1dc891] transition"
              >
                Copy
              </button>

              {/* Copied Message */}
              {copiedIndex === index && (
                <div className="absolute top-[-1.8rem] right-2 bg-[#26d99d] text-white text-xs px-2 py-1 rounded shadow animate-fade-in-out">
                  Copied to clipboard
                </div>
              )}

              <SyntaxHighlighter
                language="bash"
                style={dracula}
                customStyle={{ borderRadius: '0.5rem', paddingTop: '2.5rem' }}
              >
                {item.codeBlock}
              </SyntaxHighlighter>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-8">
        <b>Note:</b> Remember to use single or double quotes where necessary to avoid running into
        errors.
      </p>
    </section>
  );
};

export default HowtoGenerateRSAkeypair;
