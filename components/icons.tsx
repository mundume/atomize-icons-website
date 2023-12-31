import {
  SelectNetworkEthereum,
  SelectNetworkGnosis,
  SelectNetworkOptimism,
  SelectToken1inch,
  SelectTokenAave,
  SelectTokenAda,
  SelectTokenArbitrum,
  SelectTokenBusd,
  SelectTokenDai,
  SelectTokenEth,
  SelectTokenLink,
  SelectTokenMatic,
  SelectTokenTel,
  SelectTokenUni,
  SelectTokenUsdc,
  SelectTokenUsdt,
  SelectTokenWbtc,
  SelectTokenWeth,
  SelectWalletBitski,
  SelectWalletCoinbase,
  SelectWalletMetamask,
  SelectWalletVenly,
  SelectWalletWalletConnect,
  About,
  Add,
  ArrowBottomLeft,
  Apps,
  ArrowBottomLeftSmall,
  ArrowBottomRight,
  ArrowBottomRightSmall,
  ArrowDoubleRightSmall,
  ArrowDown,
  ArrowLeft,
  ArrowLeftLg,
  ArrowRight,
  ArrowRightLg,
  ArrowTopLeft,
  ArrowTopLeftSmall,
  ArrowTopRight,
  ArrowTopRightSmall,
  ArrowUp,
  BalanceFill,
  BarGraph,
  Bitcoin,
  Camera,
  ChevronDown,
  ChevronDownSmall,
  ChevronLeft,
  ChevronLeftSmall,
  ChevronRight,
  ChevronRightSmall,
  ChevronUp,
  ChevronUpSmall,
  Close,
  Copy,
  Cross,
  Day,
  Download,
  EcosystemDAppsFill,
  Exclamation,
  EyeHide,
  EyeView,
  Filter,
  Gas,
  IconFail,
  IconSuccess,
  Info,
  Link,
  Lock,
  Menu,
  Minus,
  More,
  NewFill,
  Night,
  Notification,
  PieChart,
  Play,
  Plus,
  Redo,
  Refresh,
  Resizer,
  Search,
  Send,
  Settings,
  SizeMd,
  Stepper,
  SupportFill,
  SwapFill,
  Swap,
  SwapHor,
  SwapHorizontal,
  TokensQuickswap,
  TokensSwapr,
  TokensUniswap,
  TransactionsFill,
  Token,
  Tick,
  Undo,
  Unlock,
  User,
  Warning,
} from "atomize_icons";
import { toast } from "sonner";
import React from "react"

export default function Icons() {
  const iconComponents = {
    SelectNetworkEthereum: SelectNetworkEthereum,
    About: About,
    Add: Add,
    ArrowBottomLeft: ArrowBottomLeft,
    Apps: Apps,
    ArrowBottomLeftSmall: ArrowBottomLeftSmall,
    SelectNetworkGnosis: SelectNetworkGnosis,
    SelectNetworkOptimism: SelectNetworkOptimism,
    SelectToken1inch: SelectToken1inch,
    SelectTokenAave: SelectTokenAave,
    SelectTokenAda: SelectTokenAda,
    SelectTokenArbitrum: SelectTokenArbitrum,
    SelectTokenBusd: SelectTokenBusd,
    SelectTokenDai: SelectTokenDai,
    SelectTokenEth: SelectTokenEth,
    SelectTokenLink: SelectTokenLink,
    SelectTokenMatic: SelectTokenMatic,
    SelectTokenTel: SelectTokenTel,
    SelectTokenUni: SelectTokenUni,
    SelectTokenUsdc: SelectTokenUsdc,
    SelectTokenUsdt: SelectTokenUsdt,
    SelectTokenWbtc: SelectTokenWbtc,
    SelectTokenWeth: SelectTokenWeth,
    SelectWalletBitski: SelectWalletBitski,
    SelectWalletCoinbase: SelectWalletCoinbase,
    SelectWalletMetamask: SelectWalletMetamask,
    SelectWalletVenly: SelectWalletVenly,
    SelectWalletWalletConnect: SelectWalletWalletConnect,
    ArrowBottomRight: ArrowBottomRight,
    ArrowBottomRightSmall: ArrowBottomRightSmall,
    ArrowDoubleRightSmall: ArrowDoubleRightSmall,
    ArrowDown: ArrowDown,
    ArrowLeft: ArrowLeft,
    ArrowLeftLg: ArrowLeftLg,
    ArrowRight: ArrowRight,
    ArrowRightLg: ArrowRightLg,
    ArrowTopLeft: ArrowTopLeft,
    ArrowTopLeftSmall: ArrowTopLeftSmall,
    ArrowTopRight: ArrowTopRight,
    ArrowTopRightSmall: ArrowTopRightSmall,
    ArrowUp: ArrowUp,
    BalanceFill: BalanceFill,
    BarGraph: BarGraph,
    Bitcoin: Bitcoin,
    Camera: Camera,
    ChevronDown: ChevronDown,
    ChevronDownSmall: ChevronDownSmall,
    ChevronLeft: ChevronLeft,
    ChevronLeftSmall: ChevronLeftSmall,
    ChevronRight: ChevronRight,
    ChevronRightSmall: ChevronRightSmall,
    ChevronUp: ChevronUp,
    ChevronUpSmall: ChevronUpSmall,
    Close: Close,
    Copy: Copy,
    Cross: Cross,
    Day: Day,
    Download: Download,
    EcosystemDAppsFill: EcosystemDAppsFill,
    Exclamation: Exclamation,
    EyeHide: EyeHide,
    EyeView: EyeView,
    Filter: Filter,
    Gas: Gas,
    IconFail: IconFail,
    IconSuccess: IconSuccess,
    Info: Info,
    Link: Link,
    Lock: Lock,
    Menu: Menu,
    Minus: Minus,
    More: More,
    NewFill: NewFill,
    Night: Night,
    Notification: Notification,
    PieChart: PieChart,
    Play: Play,
    Plus: Plus,
    Redo: Redo,
    Refresh: Refresh,
    Resizer: Resizer,
    Search: Search,
    Send: Send,
    Settings: Settings,
    SizeMd: SizeMd,
    Stepper: Stepper,
    SupportFill: SupportFill,
    SwapFill: SwapFill,
    Swap: Swap,
    SwapHor: SwapHor,
    SwapHorizontal: SwapHorizontal,
    TokensQuickswap: Token,
    TokensSwapr: TokensSwapr,
    TokensUniswap: TokensUniswap,
    TransactionsFill: TransactionsFill,
    Token: Token,
    Tick: Tick,
    Undo: Undo,
    Unlock: Unlock,
    User: User,
    Warning: Warning,
  };

  const iconNames = [
    "SelectNetworkEthereum",
    "SelectNetworkGnosis",
    "SelectNetworkOptimism",
    "SelectToken1inch",
    "SelectTokenAave",
    "SelectTokenAda",
    "SelectTokenArbitrum",
    "SelectTokenBusd",
    "SelectTokenDai",
    "SelectTokenEth",
    "SelectTokenLink",
    "SelectTokenMatic",
    "SelectTokenTel",
    "SelectTokenUni",
    "SelectTokenUsdc",
    "SelectTokenUsdt",
    "SelectTokenWbtc",
    "SelectTokenWeth",
    "SelectWalletBitski",
    "SelectWalletCoinbase",
    "SelectWalletMetamask",
    "SelectWalletVenly",

    "TokensSwapr",
    "TokensUniswap",
    "About",
    "Add",
    "ArrowBottomLeft",
    "Apps",
    "ArrowBottomLeftSmall",
    "ArrowBottomRight",
    "ArrowBottomRightSmall",
    "ArrowDoubleRightSmall",
    "ArrowDown",
    "ArrowLeft",
    "ArrowLeftLg",
    "ArrowRight",
    "ArrowRightLg",
    "ArrowTopLeft",
    "ArrowTopLeftSmall",
    "ArrowTopRight",
    "ArrowTopRightSmall",
    "ArrowUp",
    "BalanceFill",
    "BarGraph",
    "Bitcoin",
    "Camera",
    "ChevronDown",
    "ChevronDownSmall",
    "ChevronLeft",
    "ChevronLeftSmall",
    "ChevronRight",
    "ChevronRightSmall",
    "ChevronUp",
    "ChevronUpSmall",
    "Close",
    "Copy",
    "Cross",
    "Day",
    "Download",
    "EcosystemDAppsFill",
    "Exclamation",
    "EyeHide",
    "EyeView",
    "Filter",
    "Gas",
    "IconFail",
    "IconSuccess",
    "Info",
    "Link",
    "Lock",
    "Menu",
    "Minus",
    "More",
    "NewFill",
    "Night",
    "Notification",
    "PieChart",
    "Play",
    "Plus",
    "Redo",
    "Refresh",
    "Resizer",
    "Search",
    "Send",
    "Settings",
    "SizeMd",
    "Stepper",
    "SupportFill",
    "SwapFill",
    "Swap",
    "SwapHor",
    "SwapHorizontal",
    "TokensQuickswap",
    "TransactionsFill",
    "Token",
    "Tick",
    "Undo",
    "Unlock",
    "User",
    "Warning",
  ];

  const handleIconClick = (iconName: string) => {
    window.navigator.clipboard
      .writeText(iconName)
      .then(() => {
     toast.success(`copied ${iconName} to clipboard`)
        
      })
      .catch((error) => {
        console.error("Failed to copy to clipboard:", error);
      });
  };

  return (
    <div className="flex flex-wrap items-center gap-4 w-full justify-center ">
      {iconNames.map((iconName, index) => {
        const IconComponent = iconComponents[iconName];

        return (
         
          <div
            key={index}
            onClick={() => handleIconClick(iconName)}
            className=" items-center px-2 gap-4 rounded-md  flex flex-col  justify-around sm:w-[140px] w-[132px]   hover:border hover:scale-90 hover:transition hover:duration-200 py-2 border-transparent hover:shadow-xl "
          >
            {IconComponent && <IconComponent className="sm:scale-110" />}
            <small className="text-xs font-bold">{iconName}</small>
          </div>
        );
      })}
    </div>
  );
}
