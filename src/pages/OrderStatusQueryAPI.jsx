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
        <div className="px-4 pt-2 pb-4">{children}</div> {/*The color here*/}
      </div>
    </div>
  );
};

const introNavLinks = [
  { id: "request-path", label: "Request Path" },
  { id: "request-method", label: "Request Method" },
  { id: "request-parameter", label: "Request Parameter" },
  { id: "response-parameter", label: "Response Parameter" },
];



const OrderStatusQueryAPI = () => {
  useEffect(() => {
    document.title = 'OPay Document | Order Status Query API';
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
    "reference": "303333311213100008",
    "orderNo": "210914140336850425",
    "orderStatus": "SUCCESS",
    "errorCode": "",
    "errorMsg": "",
    "additionalField": {
    "referenceCode": "123456"
    },
    "amount": {
    "total": 700,
    "currency": "NGN"
    }
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
              <td>reference</td>
              <td>String</td>
              <td>No</td>
              <td>10000100</td>
              <td>Merchant order number (at least pass one order number, Opay or merchant order number)</td>
            </tr>
            <tr>
              <td>orderNo</td>
              <td>String</td>
              <td>No</td>
              <td>10000100</td>
              <td>Opay order number</td>
            </tr>
            <tr>
              <td>country</td>
              <td>String</td>
              <td>No</td>
              <td>NG</td>
              <td>Country NG for Nigeria</td>
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
              <td>
                <ul>
                  <li>
                    { <br />
                      "reference":"303333311213100008", <br />
                      "orderNo":"210914140336850425", <br />
                      "orderStatus":"SUCCESS", <br />
                      "errorCode":"", <br />
                      "errorMsg":"", <br />
                      "additionalField": { <br />
                      "referenceCode":"123456" <br />
                      }, <br />
                      "amount":{ <br />
                      "total":700, <br />
                      "currency":"NGN" <br />
                      } <br />
                    }
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>`,
    },
  ];



  return (
    <>
      <section className="text-justify">
        <div className="p-4">
          <h1 className="text-2xl font-bold capitalize mb-4 scroll-mt-32">Order Status Query</h1>
          <p className="mb-2">The Order Status Query API allows merchants to retrieve the real-time status of an order using either the <b>orderNo</b> or <b>reference identifier</b>.</p>
          <p className="mb-2">This is essential for tracking transactions after payment initiation, especially in cases where the client is unsure of the payment outcome. The API uses a secure <b>RSA256</b> signature to validate the request body and ensure communication integrity.</p>
          <p className="mb-2">When calling the endpoint, the request must include your merchant-specific identifiers in the correct format. A successful response returns a status such as <b>INITIAL</b>, <b>SUCCESS</b>, <b>CLOSED</b>, or <b>FAIL</b>, helping you to act accordingly. Always handle the response programmatically to update your backend order status accurately.</p>
        </div>

        <AccordionItem title="Request Path" id="request-path">
          <div>
            <p className='mt-1'>You can get the status of a payout order by using the Order Status Query API endpoint. For calling the API using the POST method you can use this endpoint URL. In case you are still in the developing phase, use the following <b>staging</b> API endpoint URL:</p>
            <div className={`w-full border-l-5 ${theme === "dark" ? "dark border-[#F9FBFC]" : "border-blue-950"} rounded-lg p-5 py-8 bg-[#26d99d] mt-4`}>
              <div className='flex m-auto gap-3 mb-5'>
                <img src={LinkIcon} alt="Link Icon" className='h-6' />
                <p className='text-xl text-blue-950 font-bold leading-6'>Staging</p>
              </div>
              <p className='bg-[#F9FBFC] text-gray-900 inline wrap-anywhere rounded-md p-1'>https://testapi.opaycheckout.com/api/v1/international/payout/queryorder</p>
            </div>

            <p className='mt-8'>Once you have a fully tested payment flow and you are ready for production, you should use the following production API endpoint URL instead:</p>
            <div className={`w-full border-l-5 ${theme === "dark" ? "dark border-[#F9FBFC]" : "border-blue-950"} rounded-lg p-5 py-8 bg-[#26d99d] mt-4`}>
              <div className='flex m-auto gap-3 mb-5'>
                <img src={LinkIcon} alt="Link Icon" className='h-6' />
                <p className='text-xl text-blue-950 font-bold leading-6'>Production</p>
              </div>
              <p className='bg-[#F9FBFC] text-gray-900 inline wrap-anywhere rounded-md p-1'>https://liveapi.opaycheckout.com/api/v1/international/payout/queryorder</p>
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

export default OrderStatusQueryAPI;
