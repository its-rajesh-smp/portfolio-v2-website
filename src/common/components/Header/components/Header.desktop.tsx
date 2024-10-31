import { HeaderNavItems } from "../config/header.conf";
import HeaderBrandNameDesktop from "./UI/HeaderBrandName.desktop";
import HeaderNavItemDesktop from "./UI/HeaderNavItem.desktop";

function HeaderDesktop() {
  return (
    <header className="sticky h-16 flex justify-between items-center p-5  top-0 z-50 w-full border-b">
      <HeaderBrandNameDesktop />
      <div className="flex gap-5">
        {HeaderNavItems.map((item) => (
          <HeaderNavItemDesktop key={item.id} {...item} />
        ))}
      </div>
    </header>
  );
}

export default HeaderDesktop;
