import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { megaLinks } from "@/lib/links";
import Image from "next/image";
import banner3 from "@/public/shop/banner-3.png";

export function CategoriesMegaMenu() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="shadow-none">
          <p>All Categories</p>
        </MenubarTrigger>
        <MenubarContent>
          {megaLinks.map((link) => (
            <MenubarSub key={link.title}>
              <MenubarSubTrigger>{link.title}</MenubarSubTrigger>
              <MenubarSubContent>
                {link.children.map((child) => (
                  <MenubarSub key={child.title}>
                    <MenubarSubTrigger>{child.title}</MenubarSubTrigger>
                    <MenubarSubContent>
                      <div className="bg-white flex justify-between items-center mx-auto gap-3 p-3 w-[800px] h-auto rounded-sm">
                        <div className="w-1/2">
                          <h3>Featured Products</h3>
                        </div>
                        <div className="w-1/2 h-auto rounded-sm">
                          <Image
                            src={banner3}
                            alt="banner-3"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto%" }}
                          />
                        </div>
                      </div>
                    </MenubarSubContent>
                  </MenubarSub>
                ))}
              </MenubarSubContent>
            </MenubarSub>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
