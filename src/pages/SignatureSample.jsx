import { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SignatureSample = () => {
  useEffect(() => {
    document.title = 'OPay Document | Signature Sample';
    return () => {
      document.title = 'OPay Document';
    };
  }, []);

  const [copied, setCopied] = useState(false);

  const codeString = `public static String signByPrivateKey(String body, String key) throws RuntimeException {
    try {
        byte[] keyBytes = Base64.decodeBase64(key.getBytes("UTF-8"));
        PKCS8EncodedKeySpec pkcs8KeySpec = new PKCS8EncodedKeySpec(keyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PrivateKey privateKey = keyFactory.generatePrivate(pkcs8KeySpec);
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initSign(privateKey);
        signature.update(body.getBytes("UTF-8"));
        byte[] signatureBytes = Base64.encodeBase64(signature.sign());
        return new String(signatureBytes, "UTF-8");
    } catch (Exception e) {
        throw new RuntimeException(e);
    }
}

public static boolean verify(String data, String publicKey, String sign) throws RuntimeException {
    try {
        byte[] keyBytes = Base64.decodeBase64(publicKey.getBytes("UTF-8"));
        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(keyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PublicKey pubKey = keyFactory.generatePublic(keySpec);
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initVerify(pubKey);
        signature.update(data.getBytes("UTF-8"));
        return signature.verify(Base64.decodeBase64(sign));
    } catch (Exception e) {
        throw new RuntimeException(e);
    }
}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <section className="text-justify">
        <div className="p-4">
          <h1 className="text-2xl font-bold capitalize mb-4 scroll-mt-32">Signature Sample</h1>
          <p className="mb-2">One of the key requirements when making requests to our API is the use of a secure <b>digital signature</b>. If you are a Java developer, this is a sample code to generate your digital signature.</p>
        </div>

        <div className="relative my-4">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 text-xs bg-[#26d99d] text-white px-2 py-1 rounded hover:bg-[#1dc891] transition"
          >
            Copy
          </button>

          {/* Copied Message */}
          {copied && (
            <div className="absolute top-[-1.8rem] right-2 bg-[#26d99d] text-white text-xs px-2 py-1 rounded shadow animate-fade-in-out">
              Copied to clipboard
            </div>
          )}

          <SyntaxHighlighter language="java" style={dracula} customStyle={{ borderRadius: '0.5rem', paddingTop: '2.5rem' }}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </section>
    </>
  );
};

export default SignatureSample;
