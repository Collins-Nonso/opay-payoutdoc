import { useState, useEffect, useRef } from 'react';
import RightBar from "../components/RightBar";
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
  { id: "security-control", label: "Security Control" },
  { id: "integration-process", label: "Integration Process" },
];

const Introduction = () => {
  useEffect(() => {
    document.title = 'OPay Document';
    return () => {
      document.title = 'OPay Document';
    };
  }, []);
  const { theme } = useTheme();


  const numberedList = [
  "INITIAL: The transaction has been created in the system but processing has not yet started.",

  "PENDING: The transaction is awaiting processing, either in queue or awaiting required inputs.",

  "CHECKING: The transaction is under validation or undergoing compliance or fraud checks.",

  "SUCCESS: The transaction has been completed successfully, and the funds disbursed to the recipient.",

  "FAIL: The transaction could not be completed due to an error or rejection.",

  "CLOSE: The transaction has been manually closed or canceled by the user or system before completion.",

  "RETURN: The funds from the transaction have been returned or reversed.",
];


  const numberedTable = [
    {
      text: 'Fill in the registration form information. The following table illustrates the information you need to have ready in hand.',
      table: `<table>
          <thead>
            <tr>
              <th>Rule</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Testing environment domain</td>
              <td>https://testapi.opaycheckout.com</td>
            </tr>
            <tr>
              <td>Production environment domain</td>
              <td>https://liveapi.opaycheckout.com</td>
            </tr>
            <tr>
              <td>Request method</td>
              <td>POST</td>
            </tr>
            <tr>
              <td>Parameter format</td>
              <td>application/json</td>
            </tr>
            <tr>
              <td>Character encoding</td>
              <td>apply UTF-8 character code</td>
            </tr>
            <tr>
              <td>Encryption method</td>
              <td>RSA 256</td>
            </tr>
            <tr>
              <td>RSA Key Size</td>
              <td>2048 bits</td>
            </tr>
          </tbody>
        </table>`,
    },
  ];

  return (
    <>
    <section className="text-justify">
      <div className="p-4 mb-2">
        <h1 className="text-2xl font-bold capitalize mb-4 scroll-mt-32">OPay Payout Documentation</h1>

        <p className="mb-2">This API interface specification is the protocol specification between the platform and the product demander, by providing a comprehensive technical guide for developers and system integrators seeking to implement and integrate OPay payout functionalities within their applications or platforms. The purpose of the Payout API is to enable automated, secure, and scalable disbursement of funds to recipients, such as vendors, employees, partners, or customers, across different payment channels including bank accounts, wallets, and mobile money platforms.</p>
        <p className="mb-2">By following industry-standard protocols such as <b>RESTful architecture</b> and using secure methods like token-based authentication (e.g. API keys), the API ensures reliable communication and transaction processing. This documentation serves as a blueprint for initiating, verifying, and tracking payout transactions while handling exceptions and errors gracefully.</p>
        <p className="font-bold pb-3">Please Note:</p>

        <ul className="list-disc">
          <li className='flex mb-2'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>To maintain flexibility and support continuous improvement of our payout systems, our company reserves the right to modify the list of return codes at any time. This means that new return codes may be added to handle emerging scenarios, while outdated or redundant codes may be deprecated or removed.</p>
            </li>
          <li className='flex mb-2'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>In situations where an unfamiliar return code is received (e.g one that is not currently listed in this documentation), it is critical not to automatically treat the associated transaction as failed. Instead, your system should log the unexpected code, and a technical personnel should reach out promptly to the appropriate contacts within our company for clarification.</p>
            </li>
          <li className='flex mb-2'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>It is essential to rely strictly on the transaction status as returned by our system when interpreting or displaying the order state. Our system is the source of truth for the current state of any payout transaction, and attempts to infer or override the returned status based on internal logic may lead to errors or discrepancies.</p>
            </li>
          <li className='flex mb-2'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>The order status values provided by our API reflect real-time processing and business logic handled by our backend, including validations, approvals, settlements, and error handling. Therefore, it is crucial that your application or system does not attempt to reinterpret the result independently but instead processes the returned status according to the definitions provided in this documentation.</p>
            </li>
          <li className='mb-2 list-none'>
            <div className='flex'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>The transaction lifecycle is defined by a set of enumerated order statuses that reflect the current state of the payout request:</p>
            </div>
            <div>
              <ul className="space-y-3 pl-8 pt-3 pb-3">
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
              <p className='my-2'>These status codes must be monitored and handled appropriately in your system to ensure accurate tracking, user notification, and reconciliation of each transaction.</p>
            </div>
          </li>
        </ul>
      </div>

      <AccordionItem title="Request Rules" id="request-rules">
        <div className='mt-1'>
        <ul className="space-y-9 pt-2">
          {numberedTable.map((item, index) => (
            <li key={index} className="flex flex-col gap-5">

              {item.table && (
                <div className={`[&_table]:text-left [&_table]:border-collapse [&_tbody]:text-sm [&_thead]:bg-[#26d99d] [&_th]:py-2 [&_th]:px-2 [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_th]:text-[14px] [&_th]:uppercase overflow-x-auto [&_td]:text-[16px] [&_td]:py-4 [&_td]:border-b ${theme === "dark" ? "dark [&_td]:border-slate-800" : "[&_td]:border-slate-200"} [&_td]:text-left [&_td]:px-2 [&_tbody_td:nth-child(1)]:font-bold`}>
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

      <AccordionItem title="Security Control" id="security-control">
        <p className="mb-4 font-bold text-xl">The system adopts the following methods to ensure security:</p>
        <ul className="list-none pl-1 pb-2 text-[17px]">
          <li className='flex mb-2'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>The merchant and Opay shall exchange public keys and keep their own private keys to prevent the disclosure of private keys.</p>
            </li>
          <li className='flex mb-2'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>The API platform uses the public key provided by the merchant to verify whether the data source payout was initiated by the merchant side.</p>
            </li>
          <li className='flex mb-2'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>The maximum order number submitted by the Merchant side is <b>32 digits</b>, and the Merchant shall guarantee its uniqueness.</p>
            </li>
          <li className='flex mb-2'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>The merchant shall provide the IP address of the requesting side to the API platform, and the platform will perform whitelist verification on the IP address.</p>
            </li>
          <li className='flex mb-2'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>Merchants need to open the payout payment method on MD platform. During the payout transaction, API will verify whether the payment method is open.</p>
            </li>
          <li className='flex mb-2'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>The user's bank account and bank code provided by the merchant shall be correct, and the API side will verify the user's account information.</p>
            </li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Integration Business Process" id="integration-process">
        <ul className="list-none pl-1 pb-5 text-[17px]">
          <li className='flex mb-2'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>To initiate a payout transaction, the merchant system sends a request to the Opay API by invoking the designated endpoint to create a single order. This request includes all necessary transaction details e.g beneficiary information, amount, currency, and the merchant's callback URL for receiving updates. Opay API service will verify the request and perform some verification steps to ensure the request is well formatted with valid parameters, and the transaction complies with regulatory and system requirements.</p>
          </li>
          <li className='flex mb-2'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>Once the information has passed validation, the API places the order into the processing pipeline and immediately returns a response to the merchant containing the initial status of the order, typically marked as <b>INITIAL</b> or <b>PENDING</b>. It's important to understand that order placement and actual fund disbursement are asynchronous operations, meaning they do not happen at the same time. The transaction may still be undergoing internal processing, verification, or awaiting third-party response (e.g. from a bank or payment provider).</p>
          </li>
          <li className='flex mb-2'>
            <svg className="h-3 w-3 rounded-full shrink-0 mt-2" viewBox="0 0 20 15" fill="none" strokeLinecap="square">
              <circle cx="8" cy="8" r="8" className="fill-[#26d99d]" />
            </svg>
            <p className='ml-4'>When the transaction has reached a final status (such as <b>SUCCESS</b>, <b>FAIL</b>, or <b>RETURN</b>), the result will be automatically pushed to the merchant's system via the callback URL that was specified in the original request. This mechanism allows the merchant to be notified in near real-time of the transaction outcome. However, to enhance reliability and support scenarios where the callback might fail (e.g. due to network issues), the merchant is also encouraged to implement the order status query API. This allows the merchant to proactively poll or fetch the latest status of any transaction at any time.</p>
          </li>
        </ul>
      </AccordionItem>

      <div className="mt-20" />
      <RightBar navLinks={introNavLinks} />
    </section>
    </>
  );
};

export default Introduction;
