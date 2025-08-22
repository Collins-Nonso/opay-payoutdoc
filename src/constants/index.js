//file name: index.js

import * as FaIcons from "react-icons/fa6";
import * as IonIcons from "react-icons/io5";
import { NigFlag } from "../assets/images";


export const TopNavLinks = [
    { name: "NG", imgURL: NigFlag},
    { isLink: true, name: "Create Account", path: "https://merchant.opaycheckout.com/signup" },
]


export const SideNavLinks = [
    {
        title: "Getting Started",
        iconClosed: IonIcons.IoChevronForward,
        iconOpen: IonIcons.IoChevronDown,
        subNav: [
            { title: "Introduction", path: "/opay-payoutdoc/", iconURL: FaIcons.FaIndustry },
            { title: "Start Here", path: "/start-here", iconURL: FaIcons.FaHammer },
            { title: "Post Man", path: "/post-man", iconURL: FaIcons.FaPooStorm }
        ]
    },    
    { type: "divider" },
    {
        title: "Payout Integration Process v2.0",
        path: "/payout-integration-process",
    },
    { type: "divider" },
    {
        title: "API Description",
        iconClosed: IonIcons.IoChevronForward,
        iconOpen: IonIcons.IoChevronDown,
        subNav: [
            { title: "Create Order", path: "/create-order", iconURL: FaIcons.FaCreativeCommonsZero },
            { title: "Order Status Query", path: "/order-status-query-api", iconURL: FaIcons.FaStackOverflow },
            { title: "Order Notification Query", path: "/order-notification-api", iconURL: FaIcons.FaSoundcloud },
            { title: "Merchant Balance Query", path: "/merchant-balance-query-api", iconURL: FaIcons.FaShop },
            { title: "Bank Account Validate", path: "/bank-account-validate", iconURL: FaIcons.FaWallet },
            { title: "OPay Wallet Validate", path: "/opay-wallet-validate", iconURL: FaIcons.FaVialVirus },
            { title: "Betting Providers", path: "/betting-providers", iconURL: FaIcons.FaGamepad },
            { title: "Betting Customer Validate", path: "/betting-customer-validate", iconURL: FaIcons.FaDisplay },
            { title: "Supported Bank List", path: "/supported-bank-list", iconURL: FaIcons.FaPiggyBank }
        ]
    },
    { type: "divider" },
    { title: "How to Generate RSA key pair", path: "/how-to-generate-rsa-key-pair", },
    { type: "divider" },
    { title: "MD User Guide Nigeria", path: "/md-user-guide-nigeria", },
    { type: "divider" },
    { title: "Error Codes", path: "/error-codes", },
    { type: "divider" },
    { title: "Signature Sample", path: "/signature-sample", }
];
