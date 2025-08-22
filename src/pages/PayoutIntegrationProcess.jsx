import { useState, useEffect, useRef } from 'react';
import { useTheme } from "../context/ThemeContext";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula, xt256 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const AccordionItem = ({ title, id, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null);

  const toggleAccordion = () => setIsOpen(!isOpen);
  const { theme } = useTheme();

  return (
    <div className={`mb-2 overflow-hidden border-b ${theme === "dark" ? "dark border-slate-800" : "border-slate-200"}`}>
      <div
        id={id}
        className="cursor-pointer px-4 py-6 font-semibold flex justify-between items-center transition scroll-mt-32"
        onClick={toggleAccordion}
      >
        <h2 className="text-3xl">{title}</h2>
        <span className="text-xl">{isOpen ? '' : ''}</span>
      </div>

      <div
        ref={contentRef}
        className="transition-all duration-200 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div className="px-4 pt-2 pb-4">{children}</div>
      </div>
    </div>
  );
};


const PayoutIntegrationProcess = () => {
  useEffect(() => {
    document.title = 'OPay Document | Payout Integration Process';
    return () => {
      document.title = 'OPay Document';
    };
  }, []);

  const [copied, setCopied] = useState(false);

  const codeString = `"OPay Test IP Address": 119.13.76.156
  
"OPay Live IP Address": 159.138.170.59`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };


  const integrationProcessList = [
    "Register a merchant account on the OPay online gateway, refer to the MD User Guide",
    "Merchant generates RSA public and private keys in the test environment and production environment",
    "Merchant submits the public key of the test environment and the production environment on Merchant's dashboard-Account Details-API Keys & Web Hook. If submitted, the merchant needs to tell Opay to review.",
    "Merchant configures their IP into the whitelist of the test environment and the production environment on Merchant's dashboard-Account Details-IP WhiteListing",
    "Refer to the Payout interface document for integration Test. For the test information of sandbox environment, please refer to the OPay Payout Test Info.xlsx",
    "Whether you are still in development or production phase, if merchant also need to configure OPay IP list to whitelist, please refer to the following IP Address:",
  ];

  const payoutBalanceChangeLogicList = [
    "Firstly, merchants need to transfer money to OPay's finance team, pre-charge mode, and OPay finance team will deposit to merchants' available balance account.",
    "All Payout shall be deducted from the merchant's available balance account.",
    "Payout MDR are determined by the business team.",
    "Payout rules, from the available balance account for external deduction. For example, if the Payout payment amount is 100NGN, the MDR is 1% and the available balance account has 1000NGN, then 101NGN will be deducted from the available balance account of the merchant after the successful payment, and the remaining amount of the available balance account will be 899NGN.",
  ];


  return (
    <>
      <section className="text-justify">
        <div className="p-4">
          <h1 className="text-2xl font-bold capitalise mb-4 scroll-mt-32">Payout Integration Procedure</h1>
          <p className="mb-2">The payout integration process begins with authenticating your system using secure API keys or tokens. Next, you'll configure your payout settings, including bank details, currencies, and payment channels.</p>
          <p className="mb-2">Ensure your system formats and sends API requests with all required fields, such as amount, beneficiary info, and reference IDs. Each request must be securely signed using <b>RSA256</b> or <b>HMAC</b> for validation and authorization.</p>
          <p className="mb-2">After submission, the response will include transaction status, session ID, or error messages if validation fails. Implement webhook listeners to receive real-time updates on payout status changes (e.g., success, failure, pending).</p>
          <p>It's crucial to handle retries and reconciliation logic for failed or delayed transactions. Finally, test thoroughly in <b>sandbox mode</b> before going live to ensure seamless and secure payout operations.</p>
        </div>

        <AccordionItem title="Integration Process" id="integration-process">
          <div>
            <ul className="space-y-4 pl-1 pt-1 pb-5">
              {integrationProcessList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0 mt-1">
                    <circle cx="12" cy="12" r="12" fill="#26d99d" />
                    <text x="12" y="18" textAnchor="middle" fontSize="16" fill="white">
                      {index + 1}
                    </text>
                  </svg>
                  <p className="leading-6">{item}</p>
                </li>
              ))}
            </ul>        <div className="relative my-4">
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

              <SyntaxHighlighter language="JSON" style={xt256} customStyle={{ borderRadius: '0.5rem', paddingTop: '2.5rem' }}>
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Payout Balance Change Logic" id="payout-balance-change-logic">
          <div>
            <ul className="space-y-4 pl-1 pt-1 pb-5">
              {payoutBalanceChangeLogicList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0 mt-1">
                    <circle cx="12" cy="12" r="12" fill="#26d99d" />
                    <text x="12" y="18" textAnchor="middle" fontSize="16" fill="white">
                      {index + 1}
                    </text>
                  </svg>
                  <p className="leading-6">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </AccordionItem>

      </section>
    </>
  );
};

export default PayoutIntegrationProcess;
