import { useState, useEffect, useRef } from 'react';
import RightBar from "../components/RightBar";
import { LinkIcon } from "../assets/images/icons";
import { useTheme } from "../context/ThemeContext";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const AccordionItem = ({ title, id, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null);
  const { theme } = useTheme();

  const toggleAccordion = () => setIsOpen(!isOpen);

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

const introNavLinks = [
  { id: "request-rules", label: "Request Rules" },
  { id: "request-path", label: "Request Path" },
  { id: "request-parameter", label: "Request Parameter" },
  { id: "response-parameter", label: "Response Parameter" },
  { id: "return-data-description", label: "Return Data Description" },
];



const CreateOrder = () => {
  useEffect(() => {
    document.title = 'OPay Document | Create Order';
    return () => {
      document.title = 'OPay Document';
    };
  }, []);

  const { theme } = useTheme();

  const [copied, setCopied] = useState(false);

  const codeString = `{
  "code": "00000",
  "message": "SUCCESSFUL",
  "data": {
    "orderNo": "210927510356272646",
    "reference": "203333311213200005",
    "orderStatus": "INITIAL"
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

  const numberedList = [
    "HTTP post request.",

    "sign = signByPrivateKey (The request body is binary data and is merchant's private key).",

    "Authorization = {Bearer} + sign.",
  ];

  const requestRulesTable = [
    {
      text: 'Fill in the registration form information. The following table illustrates the information you need to have ready in hand.',
      table: `<table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Authorization</td>
              <td>String</td>
              <td>Bearer {sign}</td>
            </tr>
            <tr>
              <td>MerchantId</td>
              <td>String</td>
              <td>Merchant ID on merchant dashboard</td>
            </tr>
            <tr>
              <td>Content-Type</td>
              <td>String</td>
              <td>application/json</td>
            </tr>
            <tr>
              <td>Request Method</td>
              <td>String</td>
              <td>POST</td>
            </tr>
          </tbody>
        </table>`,
    },
  ];


  const requestParameterTable = [
    {
      text: 'Fill in the registration form information. The following table illustrates the information you need to have ready in hand.',
      table: `<table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Mandatory</th>
              <th>Example Value</th>
              <th>Field Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>payoutType</td>
              <td>String</td>
              <td>Yes</td>
              <td>BankTransfer</td>
              <td>Nigeria supports: BankTransfer, OpayWalletNg,Betting</td>
            </tr>
            <tr>
              <td>notifyUrl</td>
              <td>String</td>
              <td>Yes</td>
              <td></td>
              <td>Notify merchants result (length less than 256) order result will be notified via this url with order status</td>
            </tr>
            <tr>
              <td>merchantOrderNo</td>
              <td>String</td>
              <td>Yes</td>
              <td>1000000000000000001</td>
              <td>Merchant request details Not more than 32 digits</td>
            </tr>
            <tr>
              <td>country</td>
              <td>String</td>
              <td>Yes</td>
              <td>NG</td>
              <td>Country NG for Nigeria</td>
            </tr>
            <tr>
              <td>amount</td>
              <td>Long</td>
              <td>Yes</td>
              <td>100</td>
              <td>Cent unit. 100 Kobo = 1 NGN</td>
            </tr>
            <tr>
              <td>currency</td>
              <td>String</td>
              <td>Yes</td>
              <td>NGN</td>
              <td>Currency: NGN for Nigeria</td>
            </tr>
            <tr>
              <td>language</td>
              <td>String</td>
              <td>Yes</td>
              <td></td>
              <td>Language: "en_US" for English,
                "alb" for Arabic etc.</td>
            </tr>
            <tr>
              <td>remark</td>
              <td>String</td>
              <td>No</td>
              <td></td>
              <td>Notes: no more than 128 digits</td>
            </tr>
            <tr>
              <td>metaData</td>
              <td>Map</td>
              <td>Yes</td>
              <td></td>
              <td>
                <ul>
                  <li class='pb-3'>Please note the phone number rule is +2 as the Nigeria phone number: +234 1 xxxxxxx (11 digits). For example: Nigeria: +2341234567890</li>

                  <li class='pb-3 mt-3'>If pass BankTransfer for payoutType <br />
                  { <br />
                  "accountBankCode": "MIDB", <br />
                  "accountName": "David", <br />
                  "accountNo": "0123334535390" <br />
                  }</li>
                  <li class='pb-3 mt-3'>If pass OpayWallet or OpayWalletNg for payoutType <br />
                  { <br />
                    "customerName": "David", <br />
                    "phone": "+23412345678" <br />
                  }</li>
                  <li class='pb-3 mt-3'>If pass MobileRecharge for payoutType <br />
                  { <br />
                  "serviceProvider": "Etisalat", <br />
                  "phone": "+201234567891", <br />
                  "customerName": "David" <br />
                  }</li>
                  <li class='pb-3 mt-3'>If pass TelecomVoucher for payoutType <br />
                  { <br />
                  "opayServiceCode": "call voucher query API to access", <br />
                  "serviceProvider": "Etisalat", <br />
                  "voucherId": "call voucher queryAPI to access", <br />
                  "phone": "+201234567891", <br />
                  "customerName": "David" <br />
                  }</li>
                  <li class='pb-3 mt-3'>If pass Betting for payoutType <br />
                  { <br />
                  "provider": "BET9JA", <br />
                  "customerId": "1259257649121" <br />
                  }</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>`,
    },
  ];


  const responseParameterTable = [
    {
      text: 'Fill in the registration form information. The following table illustrates the information you need to have ready in hand.',
      table: `<table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Example value</th>
              <th>Field Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>code</td>
              <td>String</td>
              <td>00000</td>
              <td>Transaction return code: for details please refer to <a href='http://localhost:5173/error-codes' class='font-bold text-[#26d99d] hover:text-[#53af90]'>Error Codes</a></td>
            </tr>
            <tr>
              <td>message</td>
              <td>String</td>
              <td>Transaction success</td>
              <td>Return code description</td>
            </tr>
            <tr>
              <td>data</td>
              <td>Object</td>
              <td></td>
              <td>{ <br />
              "orderNo": "210927510356272646", <br />
              "reference": "203333311213200005", <br />
              "orderStatus": "INITIAL" <br />
              }</td>
            </tr>
          </tbody>
        </table>`,
    },
  ];


  const returnDataDescriptionTable = [
    {
      text: 'Fill in the registration form information. The following table illustrates the information you need to have ready in hand.',
      table: `<table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Field Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>orderNo</td>
              <td>String</td>
              <td>Opay order number</td>
            </tr>
            <tr>
              <td>reference</td>
              <td>String</td>
              <td>Merchant order number</td>
            </tr>
            <tr>
              <td>orderStatus</td>
              <td>String</td>
              <td>Order status</td>
            </tr>
          </tbody>
        </table>`,
    },
  ];


  return (
    <>
      <section className="text-justify">
        <div className="p-4">
          <h1 className="text-2xl font-bold capitalize mb-4 scroll-mt-32">Create Order</h1>
          <p className="mb-2">To begin integrating with our <b>API</b> and initiate the process of creating orders, please ensure that you have reviewed the necessary authentication and security protocols. One of the key requirements when making requests to our API is the use of a secure <b>digital signature</b>.</p>
          <p className="mb-2">Specifically, the payload within the Request Body must be signed using the <b>RSA256 algorithm</b>.</p>
          <p className="mb-2">This signature is crucial for verifying the authenticity the integrity of the request being sent to our system. The RSA256 algorithm, which is based on the <b>RSA public-key cryptosystem</b> and <b>SHA-256 hashing function</b>, ensures a high level of cryptographic security.</p>
          <p className="mb-2">Before proceeding, make sure you have access to your <b>private key</b>, which will be used to generate the signature. Correspondingly, our system will validate the signature using the public key you provided during onboarding.</p>
          <p className="mb-2">Requests that are not properly signed or that fail signature verification will be rejected for security reasons. It is highly recommended to test your implementation in a <b>sandbox environment</b> to verify that signatures are being generated and validated correctly.</p>
        </div>

        <AccordionItem title="Request Rules" id="request-rules">
          <div>
            <ul className="space-y-2 pl-10 pt-1">
              {numberedList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0 mt-1">
                    <circle cx="12" cy="12" r="12" fill="#26d99d" />
                    <text x="12" y="18" textAnchor="middle" fontSize="16" fill="white"
                    >
                      {index + 1}
                    </text>
                  </svg>
                  <p className="leading-6">{item}</p>
                </li>
              ))}
            </ul>
            <p className='mb-2 mt-5'>Please refer to the java sample. See: <a href='http://localhost:5173/signature-sample' className='text-[#26d99d] font-bold hover:text-[#53af90]'>Signature sample</a> for Java</p>
          </div>
          <div className='mt-5'>
            <ul className="space-y-9 pt-2">
              {requestRulesTable.map((item, index) => (
                <li key={index} className="flex flex-col gap-5">

                  {item.table && (
                    <div className={`[&_table]:w-full [&_table]:text-left [&_table]:border-collapse [&_tbody]:text-sm [&_thead]:bg-[#26d99d] [&_th]:py-2 [&_th]:px-2 [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_th]:text-[14px] [&_th]:uppercase mt-2 overflow-x-auto [&_td]:text-[16px] [&_td]:py-4 [&_td]:border-b ${theme === "dark" ? "dark [&_td]:border-slate-800" : "[&_td]:border-slate-200"} [&_td]:text-left [&_td]:px-2 [&_tbody_td:nth-child(2)]:text-red-500 [&_tbody_td:nth-child(1)]:font-semibold`}>
                      <div
                        className="[&_table]:w-full"
                        dangerouslySetInnerHTML={{ __html: item.table }}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Request Path" id="request-path">
          <div>
            <p className='mt-1'>To get started with OPay Payout, you need to call the payment API endpoint. In case you are still in development phase, you will need to call the payment API using POST method at the following <b>staging</b> endpoint API point URL:</p>
            <div className={`w-full border-l-5 ${theme === "dark" ? "dark border-[#F9FBFC]" : "border-blue-950"} rounded-lg p-5 py-8 bg-[#26d99d] mt-4`}>
              <div className='flex m-auto gap-3 mb-5'>
                <img src={LinkIcon} alt="Link Icon" className='h-6' />
                <p className='text-xl text-blue-950 font-bold leading-6'>Staging</p>
              </div>
              <p className='bg-[#F9FBFC] text-gray-900 inline wrap-anywhere rounded-md p-1'>https://testapi.opaycheckout.com/api/v1/international/payout/createSingleOrder</p>
            </div>

            <p className='mt-8'>Once you have a fully tested payment flow and you are ready for production, you should use the following production API endpoint URL instead:</p>
            <div className={`w-full border-l-5 ${theme === "dark" ? "dark border-[#F9FBFC]" : "border-blue-950"} rounded-lg p-5 py-8 bg-[#26d99d] mt-4`}>
              <div className='flex m-auto gap-3 mb-5'>
                <img src={LinkIcon} alt="Link Icon" className='h-6' />
                <p className='text-xl text-blue-950 font-bold leading-6'>Production</p>
              </div>
              <p className='bg-[#F9FBFC] text-gray-900 inline wrap-anywhere rounded-md p-1'>https://liveapi.opaycheckout.com/api/v1/international/payout/createSingleOrder</p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Request Parameter" id="request-parameter">
          <div className='mt-0'>
            <ul className="space-y-9 pt-2">
              {requestParameterTable.map((item, index) => (
                <li key={index} className="flex flex-col gap-5">

                  {item.table && (
                    <div className={`[&_table]:w-full [&_table]:text-left [&_table]:border-collapse [&_tbody]:text-sm [&_thead]:bg-[#26d99d] [&_th]:py-2 [&_th]:px-2 [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_th]:text-[14px] [&_th]:uppercase overflow-x-auto [&_td]:text-[16px] [&_td]:py-4 [&_td]:border-b ${theme === "dark" ? "dark [&_td]:border-slate-800" : "[&_td]:border-slate-200"} [&_td]:text-left [&_td]:px-2 [&_tbody_td:nth-child(2)]:text-red-500 [&_tbody_td:nth-child(1)]:font-semibold`}>
                      <div
                        className="[&_table]:w-full"
                        dangerouslySetInnerHTML={{ __html: item.table }}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Response Parameter" id="response-parameter">
          <div className='mt-0'>
            <ul className="space-y-9 pt-2">
              {responseParameterTable.map((item, index) => (
                <li key={index} className="flex flex-col gap-5">

                  {item.table && (
                    <div className={`[&_table]:w-full [&_table]:text-left [&_table]:border-collapse [&_tbody]:text-sm [&_thead]:bg-[#26d99d] [&_th]:py-2 [&_th]:px-2 [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_th]:text-[14px] [&_th]:uppercase overflow-x-auto [&_td]:text-[16px] [&_td]:py-4 [&_td]:border-b ${theme === "dark" ? "dark [&_td]:border-slate-800" : "[&_td]:border-slate-200"} [&_td]:text-left [&_td]:px-2 [&_tbody_td:nth-child(2)]:text-red-500 [&_tbody_td:nth-child(1)]:font-semibold`}>
                      <div
                        className="[&_table]:w-full"
                        dangerouslySetInnerHTML={{ __html: item.table }}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Return Data Description" id="return-data-description">
          <div className='mt-0'>
            <ul className="space-y-9 pt-2">
              {returnDataDescriptionTable.map((item, index) => (
                <li key={index} className="flex flex-col gap-5">

                  {item.table && (
                    <div className={`[&_table]:w-full [&_table]:text-left [&_table]:border-collapse [&_tbody]:text-sm [&_thead]:bg-[#26d99d] [&_th]:py-2 [&_th]:px-2 [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_th]:text-[14px] [&_th]:uppercase overflow-x-auto [&_td]:text-[16px] [&_td]:py-4 [&_td]:border-b ${theme === "dark" ? "dark [&_td]:border-slate-800" : "[&_td]:border-slate-200"} [&_td]:text-left [&_td]:px-2 [&_tbody_td:nth-child(2)]:text-red-500 [&_tbody_td:nth-child(1)]:font-semibold`}>
                      <div
                        className="[&_table]:w-full"
                        dangerouslySetInnerHTML={{ __html: item.table }}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div>
              <h3 className='pt-10 pb-5'>Example of Successfully Returned Values</h3>

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
            </div>
          </div>
        </AccordionItem>

        <div className="mt-20" />
        <RightBar navLinks={introNavLinks} />
      </section>
    </>
  );
};

export default CreateOrder;
