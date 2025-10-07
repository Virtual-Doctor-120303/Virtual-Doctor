"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LangSwitcher() {
  const pathname = usePathname(); // current path e.g. /en/about
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);
  const current = segments[0] && (segments[0] === "bn" ? "bn" : "en");

  const switchTo = (locale) => {
    const rest = segments.slice(1).join("/");
    const target = `/${locale}${rest ? "/" + rest : ""}`;
    router.push(target);
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn m-1">
        {current === "bn" ? "বাংলা" : "English"}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button onClick={() => switchTo("en")}>English</button>
        </li>
        <li>
          <button onClick={() => switchTo("bn")}>বাংলা</button>
        </li>
      </ul>
    </div>
  );
}