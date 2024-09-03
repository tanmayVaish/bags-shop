"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import InfoIcon from "@mui/icons-material/Info";

export default function Header() {
  const router = useRouter();

  const navLinks = {
    "/": {
      id: 1,
      name: "Home",
      path: "/",
    },
    "/about": {
      id: 2,
      name: "About Us",
      path: "/about",
    },
    "/products": {
      id: 3,
      name: "Our Products",
      path: "/products",
    },
    "/contact": {
      id: 4,
      name: "Contact Us",
      path: "/contact",
    },
  };

  const links = {
    "/": {
      id: 1,
      name: "Home",
      path: "/",
    },
    "/about": {
      id: 2,
      name: "About Us",
      path: "/about",
    },
    "/products": {
      id: 3,
      name: "Our Products",
      path: "/products",
    },
    "/contact": {
      id: 4,
      name: "Contact Us",
      path: "/contact",
    },
    "/bag_collection": {
      id: 5,
      name: "Bag Collection",
      path: "/products",
    },
    "/details": {
      id: 6,
      name: "Details",
      path: "/products",
    },
  };

  const handleLinkClick = (path) => {
    router.push(path);
  };

  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding onClick={() => handleLinkClick("/")}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => handleLinkClick("/about")}>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"About Us"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => handleLinkClick("/products")}>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingBagIcon />
            </ListItemIcon>
            <ListItemText primary={"Out Product"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => handleLinkClick("/contact")}>
          <ListItemButton>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary={"Contact Us"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  useEffect(() => {
    const path = window.location.pathname;
    setActive(links[path] ? links[path].path : null);
  }, []);

  return (
    // <div className="flex bg-primary px-20 py-10 justify-between sticky">
    <div
      className="flex bg-primary px-3 xs:pl-10 xs:pr-5 py-5 justify-between sticky"
      style={{ height: "80px" }}
    >
      <div>
        <Image
          src="/logo.svg"
          // width={315}
          // height={71}
          width={175}
          height={50}
          alt="logo"
          className="cursor-pointer"
        />
      </div>
      <div className="items-center gap-4 flex">
        <div className="gap-10 hidden sm:flex">
          {Object.entries(navLinks).map((link, i) => {
            if (link[1].path === active) {
              return (
                <div
                  key={i}
                  className="text-black cursor-pointer font-semibold underline underline-offset-4"
                  onClick={() => handleLinkClick(link[0])}
                >
                  {link[1].name}
                </div>
              );
            } else {
              return (
                <div
                  onClick={() => handleLinkClick(link[0])}
                  key={i}
                  className="text-text_secondary cursor-pointer"
                >
                  {link[1].name}
                </div>
              );
            }
          })}
        </div>
        <div className="cursor-pointer">
          <TextField
            id="input-with-icon-textfield"
            placeholder="Search here"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Image
                      src="/search.svg"
                      width={20}
                      height={20}
                      alt="search"
                    />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
          />
        </div>
        <div onClick={toggleDrawer(true)} className="cursor-pointer sm:hidden">
          <MenuIcon />
        </div>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
