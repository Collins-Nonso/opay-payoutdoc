import { useEffect } from 'react';
import RightBar from '../components/RightBar';
import {
    Dashboard1, Dashboard2, Dashboard3, Dashboard4, Dashboard5,
    Dashboard6, Dashboard7, Dashboard8, Dashboard9, Dashboard10,
    Dashboard11, Dashboard12, Dashboard13, Dashboard14, Dashboard15,
    Dashboard16, Dashboard17, Dashboard18, Dashboard19, Dashboard20, 
    Dashboard22, Dashboard2326, Dashboard27, Dashboard28, Dashboard29, 
    Dashboard30,
    Dashboard31, Dashboard32, Dashboard33, Dashboard34, Dashboard35,
    Dashboard36, Dashboard37, Dashboard38, Dashboard39, Dashboard40,
    Dashboard41, Dashboard42, Dashboard43, Dashboard4445,
    Dashboard46, Dashboard47, Dashboard48, Dashboard49, Dashboard50,
    Dashboard51, Dashboard52, Dashboard53, Dashboard54, Dashboard55,
    Dashboard56, Dashboard57, Dashboard58, Dashboard59, Dashboard60,
    Dashboard61, Dashboard62, Dashboard63, Dashboard64, Dashboard65,
    Dashboard66, Dashboard67, Dashboard68, Dashboard69, Dashboard70,
} from "../assets/images/dashboardGuide";
import addUserGuide from "../assets/images/dashboardGuide/add-user.mp4";

const introNavLinks = [
  { id: "dashboard-menu", label: "Dashboard Menu" },
  { id: "sharelink-menu", label: "Sharelink Menu" },
  { id: "balance-menu", label: "Balance Menu" },
  { id: "transactions-menu", label: "Transactions Menu" },
  { id: "settlements-menu", label: "Settlements Menu" },
  { id: "account-details-menu", label: "Account Details Menu" },
  { id: "users-menu", label: "Users Menu" },
  { id: "roles-menu", label: "Roles Menu" },
  { id: "chargeback-menu", label: "Chargeback Menu" },
  { id: "payouts-menu", label: "Payouts Menu" },
  { id: "single-payout-review-menu", label: "Single Payout Review Menu" },
  { id: "bulk-payout-review-menu", label: "Bulk Payout Review Menu" },
  { id: "withdraw-menu", label: "Withdraw Menu" },
  { id: "withdraw-transactions-menu", label: "Withdraw Transactions Menu" },
];

const MDUserGuideNigeria = () => {
  useEffect(() => {
    document.title = 'OPay Document | Merchant Dashboard User Guide Nigeria';
    return () => {
      document.title = 'OPay Document';
    };
  }, []);

  const mdUserGuideNigeriaList = [
    {
      id: "dashboard-menu",
      text: '<b>Dashboard Menu</b>',
      content: [
        {
          type: "text",
          value: "Dashboard menu displays merchant sale data, including conversion rate, sale progress, account balance, etc.",
        },
        { type: "image", src: Dashboard1 },
      ],
    },
    {
      id: "sharelink-menu",
      text: '<b>Sharelink Menu</b>',
      content: [
        {
          type: "text",
          value: "Sharelink menu displays sharelink detail page and allows you to create new share links for collecting payments.",
        },
        { type: "image", src: Dashboard2 },
        {
          type: "text",
          value: 'Click “Create Share Link” to create new payment link.',
        },
        { type: "image", src: Dashboard3 },
        { type: "image", src: Dashboard4 },
        {
          type: "text",
          value: "Click the share button under Actions to download the file template, edit the user phone number and email that will receive the link, upload user file and then click confirm.",
        },
        { type: "image", src: Dashboard5 },
        { type: "image", src: Dashboard6 },
        {
          type: "text",
          value: "Click the green view button under Actions to view the details of each link",
        },
        { type: "image", src: Dashboard7 },
        {
          type: 'Click copy button after “Payment Link” to copy the link, open it in the browser, enter user information and click “pay”',
        },
        { type: "image", src: Dashboard8 },
        {
          type: "text", value: "Click the delete button under Actions to delete the payment link.",
        },
        { type: "image", src: Dashboard9 },
      ],
    },
    {
      id: "balance-menu",
      text: "<b>Balance Menu</b>",
      content: [
        {
          type: "text",
          value: "Balance menu shows the capital flow. Available Balance represents available balance of merchants, while Upcoming Balance shows the amount to be settled to the merchant",
        },
        { type: "image", src: Dashboard10 },
        { type: "image", src: Dashboard11 },
        {
          type: "text",
          value: "Click “Advanced Search” to choose date, transaction type and account type",
        },
        { type: "image", src: Dashboard12 },
        {
          type: "text",
          value: "Click “Download” to download the selected capital flow, the file format is .xlsx",
        },
        { type: "image", src: Dashboard13 },
      ],
    },
    {
      id: "transactions-menu",
      text: "<b>Transactions Menu</b>",
      content: [
        {
          type: "text",
          value: "This menu displays details of each transaction.",
        },
        { type: "image", src: Dashboard14 },
        {
          type: "text",
          value: "Enter merchant ID in “Search by merchant order No.” to view the transaction details of the merchant.",
        },
        { type: "image", src: Dashboard15 },
        {
          type: "text",
          value: 'Click “Advanced Search”, select order status, transaction time, transaction type, payment method, transaction order number, transaction code and amount range.',
        },
        { type: "image", src: Dashboard16 },
        {
          type: "text",
          value: 'Click “Export” to export the query result, file format: xlsx. The following are exported fields in the file.',
        },
        { type: "image", src: Dashboard17 },
        { type: "image", src: Dashboard18 },
        { type: "image", src: Dashboard19 },
        { type: "image", src: Dashboard20 },
        { type: "image", src: Dashboard22 },
        {
          type: "text",
          value: 'Click the green button under Action for each transaction to view the transaction details.',
        },
        { type: "image", src: Dashboard2326 },
      ],
    },
    {
      id: "settlements-menu",
      text: "<b>Settlements Menu</b>",
      content: [
        {
          type: "text",
          value: "This menu generates settlement report according to the settlement cycle of merchants.",
        },
        { type: "image", src: Dashboard27 },
        {
          type: "text",
          value: 'Click “Download” under Operate for each settlement statement, download settlement details, the settlement file will be shown on the bottom left corner of the page.',
        },
        { type: "image", src: Dashboard28 },
        {
          type: "text",
          value: "The format of settlement file is .xlsx. The following are fields in the exported file.",
        },
        { type: "image", src: Dashboard29 },
        { type: "image", src: Dashboard30 },
      ]
    },
    {
      id: "account-details-menu",
      text: "<b>Account Details Menu</b>",
      content: [
        {
          type: "text",
          value: "This menu has 5 sections:",
        },
        {
          type: "text",
          value: "1. BUSINESS: Display basic information submitted during registration.",
        },
        { type: "image", src: Dashboard31 },
        { type: "image", src: Dashboard32 },
        {
          type: "text",
          value: "2. FINANCIAL: Display settlement account information.",
        },
        { type: "image", src: Dashboard33 },
        { type: "image", src: Dashboard34 },
        {
          type: "text",
          value: "3. API KEYS & WEB HOOK: API keys and Web Hook can be set in this menu.",
        },
        { type: "image", src: Dashboard35 },
        {
          type: "text",
          value: 'Click “update keys” after Pay in API Keys, then click “confirm”. The Secret key and Public Key below will be reset, then click “copy” to copy the new KEY',
        },
        { type: "image", src: Dashboard36 },
        {
          type: "text",
          value: 'Click “add” behind Pay Out RSA Public Key, fill in the box, then click “Send”, the register email will receive Verification Code, fill the code in the blank box, click “confirm” to successfully submit public key and wait for OPay team to review',
        },
        { type: "image", src: Dashboard37 },
        {
          type: "text",
          value: '4. SETTINGS: Select whether to receive email notifications',
        },
        { type: "image", src: Dashboard38 },
        { type: "image", src: Dashboard39 },
        {
          type: "text",
          value: '5. IP WHITELISTING: enter the whitelist IP, multiple IPs can be separated with comma. Payout enabling requires IP whitelist reporting',
        },
        { type: "image", src: Dashboard40 },
      ]
    },
    {
      id: "users-menu",
      text: "<b>Users Menu</b>",
      content: [
        {
          type: "text",
          value: "This menu will display user list, new user can be created.",
        },
        { type: "image", src: Dashboard41 },
        {
          type: "text",
          value: 'Click “New User” to create a new user, enter user email and choose role for this user, click “Create User”',
        },
        { type: "image", src: Dashboard42 },
      ]
    },
    {
      id: "roles-menu",
      text: "<b>Roles Menu</b>",
      content: [
        {
          type: "text",
          value: "This menu can display role list, and new role can be created.",
        },
        { type: "image", src: Dashboard43 },
        {
          type: "text",
          value: 'Click “New Role” to create new role, fill in the role name, select the menu for the role in the menu list, then click “Save Role”',
        },
        { type: "image", src: Dashboard4445 },
        {
          type: "text",
          value: '',
        },
        {
          type: "text",
          value: 'Alternatively, the below video illustrates how to add a user and assign any role to the user via the dashboard.',
        },
        {
          type: 'video',
        },
      ]
    },
    {
      id: "chargeback-menu",
      text: "<b>Chargeback Menu</b>",
      content: [
        {
          type: "text",
          value: "1. Click Chargeback menu on the left, this page displays the list of chargeback transactions that are pending processing or have been processed.",
        },
        { type: "image", src: Dashboard46 },
        {
          type: "text",
          value: '2. If there is chargeback transaction with status as “pending”, then it needs to be dealt with (the register email will receive the processing email). At this time, account balance will be frozen, the frozen amount: order transaction amount + chargeback service fee”',
        },
        { type: "image", src: Dashboard47 },
        {
          type: "text",
          value: '3. Click the green button under Operate for chargeback transactions pending processing to process this chargeback order',
        },
        { type: "image", src: Dashboard48 },
        {
          type: "text",
          value: '4. Process the chargeback order with “accept” or “reject” Accept: click “accepted” to accept this chargeback, the transaction amount will be returned to the card holder automatically Deduct transaction amount + chargeback service fee from merchant account',
        },
        { type: "image", src: Dashboard49 },
        {
          type: "text",
          value: '5. Reject: complaint process 5.1 Click “declined” and upload materials according to system prompt',
        },
        { type: "image", src: Dashboard50 },
        {
          type: "text",
          value: '5.2 enter decline reason, upload related transaction material, then click “declined”',
        },
        { type: "image", src: Dashboard51 },
        { type: "image", src: Dashboard52 },
        { type: "image", src: Dashboard53 },
        {
          type: "text",
          value: '5.3 the transaction status will be updated to “declined”',
        },
        { type: "image", src: Dashboard54 },
        {
          type: "text",
          value: '5.4 successful complaint, then transaction status will be updated to “Won” Unfreeze the merchant account, deduct chargeback service fee from merchant account',
        },
        { type: "image", src: Dashboard55 },
        {
          type: "text",
          value: '5.5 complaint failed, then the transaction status will be updated to “Lost” Deduct transaction amount + chargeback service fee from merchant account',
        },
        { type: "image", src: Dashboard56 },
      ]
    },
    {
      id: "payouts-menu",
      text: "<b>Payouts Menu</b>",
      content: [
        {
          type: "text",
          value: "Merchants can select whether payout transaction needs to be reviewed. Merchant admin have the permission of payout setting.",
        },
        { type: "image", src: Dashboard57 },
        { type: "image", src: Dashboard58 },
        {
          type: "text",
          value: 'Click “Create Payout” to create payout, can select payout to bank account or OPay wallet',
        },
        { type: "image", src: Dashboard59 },
        {
          type: "text",
          value: 'Click bank account or OPay wallet, fill in payout amount, and select single or bulk payout',
        },
        { type: "image", src: Dashboard60 },
        {
          type: "text",
          value: 'Select single payout, fill in the beneficiary account information and payout description',
        },
        { type: "image", src: Dashboard61 },
        {
          type: "text",
          value: 'Select bulk payout, download the bulk payout template, fill in payout information in line with the template, upload file and click confirm',
        },
        { type: "image", src: Dashboard62 },
        { type: "image", src: Dashboard63 },
      ]
    },
    {
      id: "single-payout-review-menu",
      text: "<b>Single Payout Review Menu</b>",
      content: [
        { type: "image", src: Dashboard64 },
        {
          type: "text",
          value: "OTP will be sent to the current operator email. Operator needs to check the email and enter OTP, click confirm to complete payout",
        },
        { type: "image", src: Dashboard65 },
        { type: "image", src: Dashboard66 },
      ]
    },
    {
      id: "bulk-payout-review-menu",
      text: "<b>Bulk Payout Review Menu</b>",
      content: [
        { type: "image", src: Dashboard67 },
        { type: "image", src: Dashboard68 },
      ]
    },
    {
      id: "withdraw-menu",
      text: "<b>Withdraw Menu</b>",
      content: [
        {
          type: "text",
          value: "Enter withdrawal amount and notes, click submit.",
        },
        { type: "image", src: Dashboard69 },
      ]
    },
    {
      id: "withdraw-transactions-menu",
      text: "<b>Withdraw Transactions Menu</b>",
      content: [
        {
          type: "text",
          value: "This menu displays the withdrawal records.",
        },
        { type: "image", src: Dashboard70 },
      ]
    },
  ];

  return (
    <section className="text-justify">
      <div className="p-4">
        <h1 className="text-2xl font-bold capitalize mb-4 scroll-mt-32" id="top">
          Merchant Dashboard User Guide
        </h1>
        <p className="mb-2">
          This document serves as a guide to help you navigate the dashboard. It outlines all necessary steps clearly and concisely. By following this guide, you will gain a comprehensive overview of the dashboard's features and functionality.
        </p>
      </div>

      <ul className="space-y-9 pt-2">
        {mdUserGuideNigeriaList.map((item, index) => (
          <li key={index} id={item.id || undefined} className="flex flex-col gap-5 scroll-mt-32">
            <div className="flex items-start gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0 mt-1">
                <circle cx="12" cy="12" r="12" fill="#26d99d" />
                <text x="12" y="18" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">
                  {index + 1}
                </text>
              </svg>

              <div className="leading-7">
                {item.text && (
                  <div dangerouslySetInnerHTML={{ __html: item.text }} />
                )}
              </div>
            </div>

            {item.content && (
              <div className="ml-9 flex flex-col gap-4">
                {item.content.map((block, i) => {
                  if (block.type === "text") {
                    return (
                      <p key={i} className="leading-6">
                        {block.value}
                      </p>
                    );
                  } else if (block.type === "image") {
                    return (
                      <img key={i} src={block.src} alt={`Item ${index + 1} - Image ${i + 1}`}
                        className="w-auto rounded-xl shadow" />
                    );
                  } else if (block.type === 'video') {
                    return (
                      <div key={i} className="flex flex-col items-start gap-2 w-full">
                        <video
                          width="100%"
                          height="600"
                          controls
                          src={addUserGuide}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-20" />
      <RightBar navLinks={introNavLinks} />
    </section>
  );
};

export default MDUserGuideNigeria;
