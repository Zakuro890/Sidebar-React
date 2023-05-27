import React from "react";
import RoofingIcon from "@mui/icons-material/Roofing";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ContentCutIcon from "@mui/icons-material/ContentCut";
export const SidebarData = [
  {
    title: "ホーム",
    icon: <RoofingIcon />,
    link: "/home",
  },
  {
    title: "急上昇",
    icon: <LocalFireDepartmentIcon />,
    link: "/up",
  },
  {
    title: "登録チャンネル",
    icon: <YouTubeIcon />,
    link: "/ch",
  },
  {
    title: "ライブラリ",
    icon: <VideoLibraryIcon />,
    link: "/library",
  },
  {
    title: "履歴",
    icon: <YouTubeIcon />,
    link: "/rireki",
  },
  {
    title: "自分の動画",
    icon: <OndemandVideoIcon />,
    link: "/video",
  },
  {
    title: "あとで見る",
    icon: <AvTimerIcon />,
    link: "/view",
  },
  {
    title: "自分のクリップ",
    icon: <ContentCutIcon />,
    link: "/clip",
  },
];
