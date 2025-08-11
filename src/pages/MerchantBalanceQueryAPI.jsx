import { useState, useEffect, useRef } from 'react';
import RightBar from "../components/RightBar";
import { LinkIcon } from "../assets/images/icons";
import { useTheme } from "../context/ThemeContext";

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
  { id: "response-parameter", label: "Response Parameter" },
];



const MerchantBalanceQueryAPI = () => {
  useEffect(() => {
    document.title = 'OPay Document | Merchant Balance Query API';
    return () => {
      document.title = 'OPay Document';
    };
  }, []);

  const { theme } = useTheme();

  const [copied, setCopied] = useState(false);
  const jsonText = `{
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
    await navigator.clipboard.writeText(jsonText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};


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
              <th>Example Value</th>
              <th>Field Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>country</td>
              <td>String</td>
              <td>Yes</td>
              <td>NG</td>
              <td>Country</td>
            </tr>
            <tr>
              <td>currency</td>
              <td>String</td>
              <td>Yes</td>
              <td>NGN</td>
              <td>Currency</td>
            </tr>
            <tr>
              <td>type</td>
              <td>String</td>
              <td>Yes</td>
              <td>CASH_ACCOUNT</td>
              <td>CASH_ACCOUNT <br />
              UNSETTLED_ACCOUNT</td>
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
              <td>Transaction return code, for details please refer to <a href='http://localhost:5173/error-codes' class='font-bold text-[#26d99d] hover:text-[#53af90]'>Error Codes</a></td>
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
                "country": "NG", <br />
                "balance": { <br />
                  "total": 700, <br />
                  "currency": "NGN" <br />
                } <br />
              }</td>
            </tr>
              <td>country</td>
              <td>String</td>
              <td></td>
              <td>Yes</td>
            </tr>
              <td>balance</td>
              <td>Object</td>
              <td></td>
              <td></td>
            </tr>
              <td>total</td>
              <td>Long</td>
              <td></td>
              <td>Yes</td>
            </tr>
              <td>currency</td>
              <td>String</td>
              <td></td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>`,
    },
  ];


  return (
    <>
      <section className="text-justify">
        <div className="p-4">
          <h1 className="text-2xl font-bold capitalize mb-4 scroll-mt-32">Merchant Balance Query</h1>
          <p className="mb-2">This API allows authorized merchants to retrieve the current balance of their account in real time. It is typically used for monitoring available funds before initiating transactions such as payouts, settlements, or refunds.</p>
          <p className="mb-2">OPay will authenticate your request using secure credentials (your API keys and signed tokens) to ensure integrity. The response usually includes details such as available balance, ledger balance, currency type, and timestamp. Rate limits and access controls may apply to prevent abuse or excessive polling.</p>
        </div>

        <AccordionItem title="Request Path" id="request-path">
          <div>
            <p className='mt-1'>In case you are still in the developing phase, use the following <b>staging</b> API endpoint URL:</p>
            <div className={`w-full border-l-5 ${theme === "dark" ? "dark border-[#F9FBFC]" : "border-blue-950"} rounded-lg p-5 py-8 bg-[#26d99d] mt-4`}>
              <div className='flex m-auto gap-3 mb-5'>
                <img src={LinkIcon} alt="Link Icon" className='h-6' />
                <p className='text-xl text-blue-950 font-bold leading-6'>Staging</p>
              </div>
              <p className='bg-[#F9FBFC] text-gray-900 inline wrap-anywhere rounded-md p-1'>https://testapi.opaycheckout.com/api/v1/international/payout/balance</p>
            </div>

            <p className='mt-8'>Once you have a fully tested payment flow and you are ready for production, you should use the following production API endpoint URL instead:</p>
            <div className={`w-full border-l-5 ${theme === "dark" ? "dark border-[#F9FBFC]" : "border-blue-950"} rounded-lg p-5 py-8 bg-[#26d99d] mt-4`}>
              <div className='flex m-auto gap-3 mb-5'>
                <img src={LinkIcon} alt="Link Icon" className='h-6' />
                <p className='text-xl text-blue-950 font-bold leading-6'>Production</p>
              </div>
              <p className='bg-[#F9FBFC] text-gray-900 inline wrap-anywhere rounded-md p-1'>https://liveapi.opaycheckout.com/api/v1/international/payout/balance</p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Request Method" id="request-method">
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
          </div>
        </AccordionItem>

        <div className="mt-20" />
        <RightBar navLinks={introNavLinks} />
      </section>
    </>
  );
};

export default MerchantBalanceQueryAPI;
