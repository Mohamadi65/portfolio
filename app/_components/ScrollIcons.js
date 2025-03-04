import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiBootstrap,
  DiDatabase,
  DiPhp,
  DiLaravel,
  DiMysql,
  DiNodejsSmall,
  DiNpm,
  DiPostgresql,
  DiResponsive,
  DiTerminal,
  DiVisualstudio,
  DiGithubBadge,
  DiGit,
} from "react-icons/di";
import { RiNextjsLine , RiTailwindCssFill} from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3, IoLogoFigma } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiLivewire } from "react-icons/si";

const icons = [
  {
    icon: <TiHtml5 />,
    color: "",
  },

  {
    icon: <IoLogoCss3 />,
    color: "text-sky-500",
  },
  {
    icon: <DiResponsive />,
    color: "",
    size: "text-[40px]",
  },
  {
    icon: <DiJavascript1 />,
    color: "text-lime-300",
  },
  {
    icon: <DiReact />,
    color: "text-cyan-300",
  },
  {
    icon: <RiNextjsLine />,
    color: "text-white",
  },
  {
    icon: <DiBootstrap />,
    color: "text-sky-400",
  },
  {
    icon: <RiTailwindCssFill  />,
    color: "text-sky-400",
  },
  {
    icon: <FaSass />,
    color: "text-purple-500",
  },
  {
    icon: <DiDatabase />,
    color: "text-cyan-800",
  },
  {
    icon: <DiPhp />,
    color: "text-gray-300",
  },
  {
    icon: <DiLaravel />,
    color: "text-orange-600",
  },
  {
    icon: <SiLivewire />,
    color: "text-[#FF748B]",
  },
  {
    icon: <DiMysql />,
    color: "text-cyan-400",
  },
  {
    icon: <TbSql  />,
    color: "",
  },
  {
    icon: <DiNodejsSmall />,
    color: "text-green-400",
  },
  {
    icon: <DiNpm />,
    color: "text-orange-400",
  },
  {
    icon: <DiPostgresql />,
    color: "text-sky-400",
  },
  {
    icon: <DiTerminal />,
    color: "text-sky-200",
  },
  {
    icon: <DiVisualstudio />,
    color: "text-sky-400",
  },
  {
    icon: <DiGithubBadge />,
    color: "",
  },
  {
    icon: <DiGit />,
    color: "text-orange-600",
  },
  {
    icon: <IoLogoFigma  />,
    color: "text-purple-500",
  },
];

export default function ScrollIcons() {
  return (
    <div className="mt-8 w-full absolute left-0 overflow-hidden">
      <div className="icons flex min-w-fit  gap-[30px]  items-center whitespace-nowrap scroll-icons">
        {icons?.map((iconT, i) => (
          <span
            key={i}
            className={` ${
              iconT?.size ? `${iconT.size}` : "text-[30px] "
            }   ${iconT?.color} `}
          >
            {" "}
            {iconT.icon}
          </span>
        ))}
      </div>
    </div>
  );
}
