import { useState, useEffect, useRef } from 'react';
import RightBar from "../components/RightBar";
import { LinkIcon } from "../assets/images/icons";
import { OPayVerifySignature } from "../assets/images/account";
import { useTheme } from "../context/ThemeContext";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope, dracula, xt256 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
  { id: "request-path", label: "Request Path" },
  { id: "request-method", label: "Request Method" },
  { id: "request-parameter", label: "Request Parameter" },
  { id: "payload-parameter", label: "Payload Parameter" },
  { id: "response-parameter", label: "Response Parameter" },
];



const OrderNotificationAPI = () => {
  useEffect(() => {
    document.title = 'OPay Document | Order Notification API';
    return () => {
      document.title = 'OPay Document';
    };
  }, []);
  
  const { theme } = useTheme();

  const [copied, setCopied] = useState(false);

  const codeString = `{
    "payload": {
    "amount": "2000.00",
    "bussinessType": "MUAATransfer",
    "channel": "Web",
    "country": "NG",
    "currency": "NGN",
    "displayedFailure": "",
    "fee": "4.00",
    "instrument-id": "useless",
    "instrumentId": "useless",
    "instrumentType": "coins",
    "instrument_id": "useless",
    "payChannel": "BalancePayment",
    "reference": "107517656_8447373960485900288",
    "refunded": false,
    "remark": "Withdraw from iLOTBet",
    "status": "SUCCESS",
    "timestamp": "2024-02-18T01:51:50Z",
    "token": "240218515666064406256",
    "transactionId": "240218515666064406256",
    "updated_at": "2024-02-18T01:51:50Z"
    },
    sha512": "983bfa5c79f67541b94333e73492c448ad644f75f739f766b314a4f682eb978aee2ee7f324b058f1af7e3ba7249d6b386fc472b5d8d1af492ad5996e77fd4321",
    type": "transaction-status"
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

  const requestMethodTable = [
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
              <th>Example value</th>
              <th>Field Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>payload</td>
              <td>JSONObject</td>
              <td>Yes</td>
              <td>See Payload Parameter</td>
              <td>Notification payload with JSONObject format</td>
            </tr>
            <tr>
              <td>sha512</td>
              <td>String</td>
              <td>No</td>
              <td>10000100</td>
              <td>Signature merchant should verification</td>
            </tr>
            <tr>
              <td>type</td>
              <td>String</td>
              <td>No</td>
              <td>NG</td>
              <td>Notification type: transaction-status</td>
            </tr>
          </tbody>
        </table>`,
    },
  ];


  const payloadParameterTable = [
    {
      text: 'Fill in the registration form information. The following table illustrates the information you need to have ready in hand.',
      table: `<table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Mandatory</th>
              <th>Example value</th>
              <th>Field Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>country</td>
              <td>String</td>
              <td>Yes</td>
              <td>NG</td>
              <td>Country NG for Nigeria</td>
            </tr>
            <tr>
              <td>amount</td>
              <td>String</td>
              <td>Yes</td>
              <td>100</td>
              <td>Naira Unit</td>
            </tr>
            <tr>
              <td>bussinessType</td>
              <td>String</td>
              <td>No</td>
              <td>MUAATransfer</td>
              <td></td>
            </tr>
            <tr>
              <td>currency</td>
              <td>String</td>
              <td>Yes</td>
              <td>NGN</td>
              <td>Currency: NGN for Nigeria</td>
            </tr>
            <tr>
              <td>channel</td>
              <td>String</td>
              <td>No</td>
              <td>Web</td>
              <td></td>
            </tr>
            <tr>
              <td>channelOrderNo</td>
              <td>String</td>
              <td>No</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>displayedFailure</td>
              <td>String</td>
              <td>No</td>
              <td></td>
              <td>The error message for failed transaction.</td>
            </tr>
            <tr>
              <td>fee</td>
              <td>String</td>
              <td>No</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>payChannel</td>
              <td>String</td>
              <td>No</td>
              <td>BalancePayment</td>
              <td></td>
            </tr>
            <tr>
              <td>reference</td>
              <td>String</td>
              <td>Yes</td>
              <td></td>
              <td>Merchant order no</td>
            </tr>
            <tr>
              <td>status</td>
              <td>String</td>
              <td>Yes</td>
              <td></td>
              <td>successful, failed</td>
            </tr>
            <tr>
              <td>timestamp</td>
              <td>String</td>
              <td>Yes</td>
              <td></td>
              <td>Notification time</td>
            </tr>
            <tr>
              <td>transactionId</td>
              <td>String</td>
              <td>Yes</td>
              <td></td>
              <td>OPay transaction ID</td>
            </tr>
            <tr>
              <td>token</td>
              <td>String</td>
              <td>Yes</td>
              <td></td>
              <td>Transaction token, default: same as transactionId</td>
            </tr>
          </tbody>
        </table>`,
    },
  ];



  return (
    <>
      <section className="text-justify">
        <div className="p-4">
          <h1 className="text-2xl font-bold capitalize mb-4 scroll-mt-32">Order Notification Query</h1>
          <p className="mb-2">The Order Notification API, <b>provided by the merchant</b>, is designed to notify the payment platform whenever a new order is created or updated. It ensures that transaction details are automatically communicated to streamline order processing.</p>
          <p className="mb-2">When an order is placed, this API sends real-time data such as order ID, amount, status, and timestamps. This helps synchronize order information between the merchant's system and OPay. It also allows automated reconciliation and tracking of order life cycles.</p>
        </div>

        <AccordionItem title="Request Path" id="request-path">
          <div>
            <p className='mt-1'>You can get the status of an order by using the Order Notification API endpoint URL.</p>
            <div className={`w-full border-l-5 ${theme === "dark" ? "dark border-[#F9FBFC]" : "border-blue-950"} rounded-lg p-5 py-8 bg-[#26d99d] mt-4`}>
              <div className='flex m-auto gap-3 mb-5'>
                <img src={LinkIcon} alt="Link Icon" className='h-6' />
                <p className='text-xl text-blue-950 font-bold leading-6'>Endpoint</p>
              </div>
              <p className='bg-[#F9FBFC] text-gray-900 inline wrap-anywhere rounded-md p-1'>URL: Merchant notifyUrl based on the created order</p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Request Method" id="request-method">
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
              {requestMethodTable.map((item, index) => (
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

        <AccordionItem title="Payload Parameter" id="payload-parameter">
          <div className='mt-0'>
            <ul className="space-y-9 pt-2">
              {payloadParameterTable.map((item, index) => (
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
              <p className='mt-10'><b>Note:</b> to verify notification signature please refer to <a href="https://documentation.opaycheckout.com/callback-signature" className='font-bold text-[#26d99d] hover:text-[#53af90]'>Callback Signature</a>. Merchant can get the key for verify notification signature from MD as below screenshot:</p>
              <img src={OPayVerifySignature} alt="Verify Signature" className='w-auto rounded shadow mt-10' />
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Response Parameter" id="response-parameter">
          <div>
            <h3 className='pt-1 pb-5'>Example of Successfully Returned Values</h3>

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

                <SyntaxHighlighter language="JSON" style={xt256} customStyle={{ borderRadius: '0.5rem', paddingTop: '2.5rem' }}>
                  {codeString}
                </SyntaxHighlighter>
              </div>
          </div>
        </AccordionItem>


        <div className="mt-20" />
        <RightBar navLinks={introNavLinks} />
      </section>
    </>
  );
};

export default OrderNotificationAPI;
