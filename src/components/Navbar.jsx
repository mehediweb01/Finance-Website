import {
  Navbar,
  NavbarItem,
  NavbarContent,
  NavbarBrand,
  Link,
  Button,
} from "@nextui-org/react";
import logo from "/logo.png";

const NavbarArea = () => {
  return (
    <Navbar position="static" isBordered>
      <NavbarBrand href="/" >
        <img src={logo} alt="Logo" />
      </NavbarBrand>
      <NavbarContent justify="end" className="sm:mr-0 mr-6">
        <NavbarItem>
          <Link>
            <Button
              variant="bordered"
              radius="full"
              className="bg-transparent border-primary text-primary font-bold leading-6 sm:text-base md:px-12 md:py-4 size-14 text-[12px]"
            >
              Contact
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarArea;
