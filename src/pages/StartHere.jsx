import { useState, useEffect, useRef } from 'react';
import { NoteIconSVG } from "../assets/images/icons";
import RightBar from "../components/RightBar";
import { OPayLoginImg, OPayRegistrationImg, OPaySuccessImg, OPayDashboardImg, } from "../assets/images/account";
import { useTheme } from "../context/ThemeContext";

const AccordionItem = ({ title, id, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null);
  const { theme } = useTheme();

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={`mb-2 border-b ${theme === "dark" ? "dark border-slate-800" : "border-slate-200"}`}>
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
  { id: "account-registration-form", label: "Account Registration Form" },
];

const StartHere = () => {
  useEffect(() => {
    document.title = 'OPay Document | Start Here';
    return () => {
      document.title = 'OPay Document';
    };
  }, []);

  const { theme } = useTheme();

  const startHereList = [
    {
      text: 'Navigate to <a href="https://merchant.opaycheckout.com/login" class="text-[#26d99d]">OPay</a> where you will be directed to the merchant login screen.',
      images: [OPayLoginImg],
    },
    {
      text: 'Within the login screen, click on <a href="https://merchant.opaycheckout.com/signup" class="text-[#26d99d]">Sign Up</a> where you will be directed to the registration form.',
      images: [OPayRegistrationImg],
    },
    {
      text: 'Fill in the registration form information. The following table illustrates the information you need to have ready in hand.',
      table: `<table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>required</td>
              <td>First Name of The Merchant Account Holder.</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>required</td>
              <td>Last Name of The Merchant Account Holder.</td>
            </tr>
            <tr>
              <td>Business Name</td>
              <td>required</td>
              <td>Business Name of The Merchant.</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>required</td>
              <td>The Phone Number of The Merchant Account Holder. This number will be used for future communication with OPay.</td>
            </tr>
            <tr>
              <td>Email Address</td>
              <td>required</td>
              <td>Email Address of The Merchant Account Holder. This E-mail will be used for future communication with OPay.</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>required</td>
              <td>The password of your OPay account. It has a minimum of 8 characters. Make sure to use a strong password.</td>
            </tr>
            <tr>
              <td>Password Confirmation</td>
              <td>required</td>
              <td>The password confirmation for your OPay account. It has to match the selected password.</td>
            </tr>
            <tr>
              <td>Merchant Type</td>
              <td>required</td>
              <td>The type of the merchant business: Individual or Corporate Business.</td>
            </tr>
            <tr>
              <td>Average Monthly Collection</td>
              <td>required</td>
              <td>The average monthly volume of the Merchant business that will be collected through OPay.</td>
            </tr>
            <tr>
              <td>Service Type</td>
              <td>required</td>
              <td>Select the type of service you are looking to receive from OPay: Online , In Store POS, or Both.</td>
            </tr>
            <tr>
              <td>Country of Business</td>
              <td>required</td>
              <td>Select the country where your Business is located in Africa.</td>
            </tr>
            <tr>
              <td>Role</td>
              <td>required</td>
              <td>Tell us your role in the Business, CEO, Manager, CFO etc.</td>
            </tr>
            <tr>
              <td>How you heard about us</td>
              <td>required</td>
              <td>Select how you heard about OPay (social media, a friend, in the news etc).</td>
            </tr>
          </tbody>
        </table>`,
    },
    {
      text: 'Once you complete your registration form, click on Create Merchant Account. If everything went as expected, a success message will show up telling you that your account has been created. Click on Confirm and you will be directed to the login screen.',
      images: [OPaySuccessImg],
    },
    {
      text: 'Use the email and password you have just provided to log into your merchant dashboard.',
      images: [OPayDashboardImg],
    },
  ];


  return (
    <>
    <section className="text-justify">
      <div className="p-4">
        <h1 className="text-2xl font-bold capitalize mb-4 scroll-mt-32">Get Started with OPay</h1>

        <p className="mb-2">To get started as a merchant with OPay, first, you will need to set up your OPay merchant account. This guide will walk you through the steps you need to follow to set up your account and start making payments through our comprehensive gateway.</p>
      </div>

      <AccordionItem title="Account Registration Form" id="account-registration-form">
        <ul className="space-y-9 pt-2">
          {startHereList.map((item, index) => (
            <li key={index} className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0 mt-1">
                  <circle cx="12" cy="12" r="12" fill="#26d99d" />
                  <text x="12" y="18" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold"
                  >
                    {index + 1}
                  </text>
                </svg>

                <div className="leading-7" dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>

              {item.images?.length > 0 && (
                <div className="flex flex-wrap gap-4 ml-9">
                  {item.images.map((img, imgIdx) => (
                    <img key={imgIdx} src={img}
                      alt={`Item ${index + 1} - Image ${imgIdx + 1}`}
                      className="w-auto rounded-2xl shadow"
                    />
                  ))}
                </div>
              )}

              {item.table && (
                <div className={`[&_table]:w-full [&_table]:text-left [&_table]:border-collapse [&_tbody]:text-sm [&_thead]:bg-[#26d99d] [&_th]:py-2 [&_th]:px-2 [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_th]:text-[14px] [&_th]:uppercase ml-9 mt-2 overflow-x-auto [&_td]:text-[16px] [&_td]:py-4 [&_td]:border-b ${theme === "dark" ? "dark [&_td]:border-slate-800" : "[&_td]:border-slate-200"} [&_td]:text-left [&_td]:px-2 [&_tbody_td:nth-child(2)]:text-red-500 [&_tbody_td:nth-child(1)]:font-semibold`}>
                  <div
                    className="[&_table]:w-full"
                    dangerouslySetInnerHTML={{ __html: item.table }}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className='w-full border-l-5 border-[#26d99d] bg-[#effffa] dark:bg-[#effffa] dark:text-gray-900 rounded-lg p-5 py-8 m-auto mt-8'>
          <div className='flex m-auto gap-3 mb-3'>
            <img src={NoteIconSVG} alt="NoteIconSVG" srcset="" className='h-5' />
            <p className=' text-xl font-semibold leading-5'>Congratulations!</p>
          </div>
          <p>You have joined the OPay payment gateway family as a new merchant with a test account. You can start testing your account with the provided credentials. Next, you will need to contact the OPay team to get your account into production mode.</p>
        </div>
      </AccordionItem>

      <div className="mt-20" />
      <RightBar navLinks={introNavLinks} />
    </section>
    </>
  );
};

export default StartHere;
