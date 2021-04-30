import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Swap",
    icon: "TradeIcon",
    href: "https://swap.easybake.finance/#/swap",
    // --------- If we want to have seperate 
    // items: [
    //   {
    //     label: "Swap",
    //     href: "https://swap.easybake.finance/#/swap",
    //   },
    //   {
    //     label: "Liquidity",
    //     href: "https://swap.easybake.finance/#/add/#/ETH",
    //   },
    // ],
  },
  {
    label: "Bakery",
    icon: "BakeryIcon",
    href: "/bakery",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://info.easybake.finance",
      },
      {
        label: "Tokens",
        href: "https://info.easybake.finance/tokens",
      },
      {
        label: "Pairs",
        href: "https://info.easybake.finance/pairs",
      },
      {
        label: "Accounts",
        href: "https://info.easybake.finance/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Vote",
        href: "https://snapshot.page/#/easybake.eth",
      },
      {
        label: "Github",
        href: "https://github.com/easybakeswap",
      },
      {
        label: "Docs",
        href: "https://docs.easybake.finance",
      },
      {
        label: "Blog",
        href: "https://medium.com/EasyBakeSwap",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "Announcements",
        href: "https://t.me/EasyBakeNews",
      },
      {
        label: "Community",
        href: "https://t.me/EasyBakeSwap",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/EasyBakeFinance",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
