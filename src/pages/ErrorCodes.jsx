import { useEffect } from 'react';
import { useTheme } from "../context/ThemeContext";


const ErrorCodes = () => {
  useEffect(() => {
    document.title = 'OPay Document | Error Codes';
    return () => {
      document.title = 'OPay Document';
    };
  }, []);

  const { theme } = useTheme();

  const errorCodesTable = [
    {
      table: `<table>
          <thead>
            <tr>
              <th>Error Code</th>
              <th>Error Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01001</td>
              <td>Closed Account</td>
            </tr>
            <tr>
              <td>01002</td>
              <td>Dormant Account</td>
            </tr>
            <tr>
              <td>01003</td>
              <td>Missing Account Number</td>
            </tr>
            <tr>
              <td>01004</td>
              <td>Insufficient Payment Details</td>
            </tr>
            <tr>
              <td>01005</td>
              <td>Incorrect Account Number</td>
            </tr>
            <tr>
              <td>01006</td>
              <td>Invalid Currency</td>
            </tr>
            <tr>
              <td>01007</td>
              <td>Frozen or Blocked Account</td>
            </tr>
            <tr>
              <td>01008</td>
              <td>Rejected By Beneficiary</td>
            </tr>
            <tr>
              <td>01009</td>
              <td>Regulatory Reason</td>
            </tr>
            <tr>
              <td>01010</td>
              <td>Insufficient Fund</td>
            </tr>
            <tr>
              <td>01011</td>
              <td>Invalid Credit Instructions</td>
            </tr>
            <tr>
              <td>01012</td>
              <td>Invalid Account Details</td>
            </tr>
            <tr>
              <td>01013</td>
              <td>Duplicate Payment</td>
            </tr>
            <tr>
              <td>01014</td>
              <td>Customer Deceased</td>
            </tr>
            <tr>
              <td>01101</td>
              <td>Duplicate Message Id</td>
            </tr>
            <tr>
              <td>01102</td>
              <td>Invalid Bank Code</td>
            </tr>
            <tr>
              <td>01103</td>
              <td>Duplicate Transaction Id</td>
            </tr>
            <tr>
              <td>01104</td>
              <td>Invalid Corporate Code</td>
            </tr>
            <tr>
              <td>01105</td>
              <td>Invalid Debtor Account</td>
            </tr>
            <tr>
              <td>01107</td>
              <td>Invalid Branch</td>
            </tr>
            <tr>
              <td>01108</td>
              <td>Invalid Signature</td>
            </tr>
            <tr>
              <td>01111</td>
              <td>Invalid Category Code</td>
            </tr>
            <tr>
              <td>01188</td>
              <td>Internal Error</td>
            </tr>
            <tr>
              <td>02000</td>
              <td>Authentication failed</td>
            </tr>
            <tr>
              <td>02007</td>
              <td>Merchant has not gone live</td>
            </tr>
            <tr>
              <td>02016</td>
              <td>IP verification failed</td>
            </tr>
            <tr>
              <td>02017</td>
              <td>The payment method has not been opened yet</td>
            </tr>
            <tr>
              <td>02812</td>
              <td>Transaction does not exist</td>
            </tr>
            <tr>
              <td>51004</td>
              <td>Account Name cannot be empty</td>
            </tr>
            <tr>
              <td>51005</td>
              <td>Account No cannot be empty</td>
            </tr>
            <tr>
              <td>51006</td>
              <td>Account Bank Code cannot be empty</td>
            </tr>
            <tr>
              <td>51007</td>
              <td>Customer Name cannot be empty</td>
            </tr>
            <tr>
              <td>51008</td>
              <td>VoucherId cannot be empty</td>
            </tr>
            <tr>
              <td>51009</td>
              <td>Service Provider cannot be empty</td>
            </tr>
            <tr>
              <td>51010</td>
              <td>Payout Type cannot be empty</td>
            </tr>
            <tr>
              <td>51011</td>
              <td>Country cannot be empty</td>
            </tr>
            <tr>
              <td>51012</td>
              <td>Notification URL cannot be empty</td>
            </tr>
            <tr>
              <td>51013</td>
              <td>MerchantId cannot be empty</td>
            </tr>
            <tr>
              <td>51014</td>
              <td>Currency cannot be empty</td>
            </tr>
            <tr>
              <td>51015</td>
              <td>Language cannot be empty</td>
            </tr>
            <tr>
              <td>51016</td>
              <td>Amount cannot be empty</td>
            </tr>
            <tr>
              <td>51017</td>
              <td>Merchant Order No cannot be empty</td>
            </tr>
            <tr>
              <td>51018</td>
              <td>Opay Service Code cannot be empty</td>
            </tr>
            <tr>
              <td>5001</td>
              <td>Order is Exist</td>
            </tr>
            <tr>
              <td>5006</td>
              <td>Balance Not Enough</td>
            </tr>
            <tr>
              <td>5011</td>
              <td>Account Name Not Empty</td>
            </tr>
          </tbody>
        </table>`,
    },
  ];


  return (
    <>
      <section className="text-justify">
        <div className="p-4">
          <h1 className="text-2xl font-bold capitalize mb-4 scroll-mt-32">Error Codes</h1>
          <p className="mb-2">A comprehensive list of system-generated error codes and their meanings are outlined below. This will help to quickly identify and troubleshoot issues during the API integration. It is essential for maintaining smooth communication between applications and the platform.</p>
        </div>

          <div className='mt-0'>
            <ul className="space-y-9 pt-2">
              {errorCodesTable.map((item, index) => (
                <li key={index} className="flex flex-col gap-5">

                  {item.table && (
                    <div className={`[&_table]:w-full [&_table]:text-left [&_table]:border-collapse [&_tbody]:text-sm [&_thead]:bg-[#26d99d] [&_th]:py-2 [&_th]:px-2 [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_th]:text-[14px] [&_th]:uppercase overflow-x-auto [&_td]:text-[16px] [&_td]:py-4 [&_td]:border-b ${theme === "dark" ? "dark [&_td]:border-slate-800" : "[&_td]:border-slate-200"} [&_td]:text-left [&_td]:px-2 [&_tbody_td:nth-child(1)]:font-semibold`}>
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
      </section>
    </>
  );
};

export default ErrorCodes;
