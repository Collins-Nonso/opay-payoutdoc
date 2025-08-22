import { useState, useEffect } from 'react';
import RightBar from '../components/RightBar';
import { pHome, pRegister, pSignin, pDownload, pRequestMethod, pHeader, pRequestBody, pSuccess, } from '../assets/images/postman';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula, xt256 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const introNavLinks = [
  { id: 'postman-home', label: 'Step One' },
  { id: 'postman-register', label: 'Step Two' },
  { id: 'postman-signin', label: 'Step Three' },
  { id: 'postman-download', label: 'Step Four' },
  { id: 'postman-setup', label: 'Step Five' },
  { id: 'postman-video', label: 'Step Six' },
];

const PostMan = () => {
  useEffect(() => {
    document.title = 'OPay Document | Post Man';
    return () => {
      document.title = 'OPay Document';
    };
  }, []);

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const postManList = [
    {
      id: 'postman-home',
      text: '<b>Step One</b>',
      content: [
        {
          type: 'text',
          value:
            "Navigate to <a href='https://www.postman.com/' class='text-[#26d99d]'>Postman.com</a> which is the official home page of Postman to get started.",
        },
        { type: 'image', src: pHome },
      ],
    },
    {
      id: 'postman-register',
      text: '<b>Step Two</b>',
      content: [
        {
          type: 'text',
          value:
            "You need to create an account in order to use postman services. Navigate to the <a href='https://identity.getpostman.com/signup' class='text-[#26d99d]'>Create a free account</a> section.",
        },
        { type: 'image', src: pRegister },
        {
          type: 'text',
          value: 'Fill in the form correctly, verify you are not a robot and click on Create free account.',
        },
      ],
    },
    {
      id: 'postman-signin',
      text: '<b>Step Three</b>',
      content: [
        {
          type: 'text',
          value:
            'Login to post man with the information used to create an account, or login if you already registered an account.',
        },
        { type: 'image', src: pSignin },
      ],
    },
    {
      id: 'postman-download',
      text: '<b>Step Four</b>',
      content: [
        {
          type: 'text',
          value:
            "After creating an account, download the <a href='https://www.postman.com/downloads/' class='text-[#26d99d]'>Postman app</a> and install it in your machine.",
        },
        { type: 'image', src: pDownload },
      ],
    },
    {
      id: 'postman-setup',
      text: '<b>Step Five</b>',
      content: [
        {
          type: 'text',
          value:
            'Launch the postman app to setup your test environments. Set the endpoint url as specified and select your HTTP request method as POST.',
        },
        { type: 'image', src: pRequestMethod },
        {
          type: 'text',
          value: 'Set your Merchant ID as "Key" and the ID numbers as "Value" under the Header section.',
        },
        { type: 'image', src: pHeader },
        {
          type: 'text',
          value: 'Select "raw" and include all your request parameters in "JSON" format.',
        },
        { type: 'image', src: pRequestBody },
        {
          type: 'text',
          value: 'Here is a Request Parameter Sample:',
        },
        {
          type: 'codeBlock',
          value: `{
    "country": "NG",
    "merchantOrderNo": "opay-postman-test-1655980652251",
    "metaData": {  
        "accountNo": "2215381176",
        "accountName": "Nick",
        "accountBankCode": "057"
    },
    "amount": 900,
    "currency": "NGN",
    "payoutType": "BankTransfer",
    "notifyUrl": "https://your-callback-url",
    "language": "en",
    "remark": "the reason of this payment"
}`,
        },
        {
          type: 'text',
          value:
            'If all your setup is correct, simply hit the send button. Take note of the status code and response from the endpoint.',
        },
        { type: 'image', src: pSuccess },
      ],
    },
    {
      id: 'postman-video',
      text: '<b>Step Six</b>',
      content: [
        {
          type: 'text',
          value:
            'If you are still facing difficulty setting up postman, here is a quick video on how to navigate the process.',
        },
        {
          type: 'video',
        },
      ],
    },
  ];

  return (
    <section className="text-justify">
      <div className="p-4">
        <h1 className="text-2xl font-bold capitalize mb-4 scroll-mt-32" id="top">
          Post Man
        </h1>
        <p className="mb-2">Depending on your specific integration requirements and intended use cases, we recommend utilizing <b>Postman</b> as a reliable tool to thoroughly test all request parameters. This ensures that your API interactions perform as expected, whether your dashboard is operating in sandbox or production mode.</p>
        <p className="mb-2">Leveraging Postman will help you validate endpoints, inspect responses, and troubleshoot any integration issues early in the process. To assist you in getting started, we have prepared a concise step-by-step guide detailing how to get started with Postman.</p>
      </div>

      <ul className="space-y-9 pt-2">
        {postManList.map((item, index) => (
          <li
            key={item.id || index}
            id={item.id || undefined}
            className="flex flex-col gap-5 scroll-mt-32"
          >
            <div className="flex items-start gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0 mt-1">
                <circle cx="12" cy="12" r="12" fill="#26d99d" />
                <text
                  x="12"
                  y="18"
                  textAnchor="middle"
                  fontSize="16"
                  fill="white"
                  fontWeight="bold"
                >
                  {index + 1}
                </text>
              </svg>

              <div className="leading-7">
                {item.text && <div dangerouslySetInnerHTML={{ __html: item.text }} />}
              </div>
            </div>

            {item.content && (
              <div className="ml-9 flex flex-col gap-4">
                {item.content.map((block, i) => {
                  if (block.type === 'text') {
                    return (
                      <p
                        key={i}
                        className="leading-6"
                        dangerouslySetInnerHTML={{ __html: block.value }}
                      />
                    );
                  } else if (block.type === 'image') {
                    return (
                      <img
                        key={i}
                        src={block.src}
                        alt={`Item ${index + 1} - Image ${i + 1}`}
                        className="w-auto rounded-xl shadow"
                      />
                    );
                  } else if (block.type === 'codeBlock') {
                    return (
                      <div key={i} className="relative my-4">
                        <button
                          onClick={() => handleCopy(block.value, `${index}-${i}`)}
                          className="absolute top-2 right-2 text-xs bg-[#26d99d] text-white px-2 py-1 rounded hover:bg-[#1dc891] transition"
                        >
                          Copy
                        </button>

                        {copiedIndex === `${index}-${i}` && (
                          <div className="absolute top-[-1.8rem] right-2 bg-[#26d99d] text-white text-xs px-2 py-1 rounded shadow animate-fade-in-out">
                            Copied to clipboard
                          </div>
                        )}

                        <SyntaxHighlighter
                          language="JSON"
                          style={xt256}
                          customStyle={{ borderRadius: '0.5rem', paddingTop: '2.5rem' }}
                        >
                          {block.value}
                        </SyntaxHighlighter>
                      </div>
                    );
                  } else if (block.type === 'video') {
                    return (
                      <div key={i} className="flex flex-col items-start gap-2 w-full">
                        <iframe
                          width="100%"
                          height="600"
                          src="https://www.youtube.com/embed/oCEDjp3XMco?si=Rk2ygyt8RwFmrSWc"
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

export default PostMan;
