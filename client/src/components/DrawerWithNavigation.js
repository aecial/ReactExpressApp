import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";

export function DrawerWithNavigation({ hamburgerColor }) {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <HamburgerButton
        btnFunction={openDrawer}
        className="absolute top-2 right-3"
        variant={hamburgerColor}
      />
      <Drawer
        placement="right"
        open={open}
        onClose={closeDrawer}
        className="bg-black border-white border-l"
      >
        <div className="mb-2 flex items-center justify-between p-4 bg-gray-800 ">
          <Typography variant="h5" color="yellow">
            EATIK BOY
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          <Link to="/">
            <ListItem>
              <ListItemPrefix>
                <i className="fa-solid fa-house-chimney text-red-400"></i>
              </ListItemPrefix>
              <span className="text-red-400">Home</span>
            </ListItem>
          </Link>
          <Link to="/about">
            <ListItem>
              <ListItemPrefix>
                <i class="fa-solid fa-images text-red-400"></i>
              </ListItemPrefix>
              <span className="text-red-400">Gallery & Reviews</span>
              {/* <ListItemSuffix>
                  <Chip
                    value="5"
                    size="sm"
                    color="green"
                    className="rounded-full"
                  />
                </ListItemSuffix> */}
            </ListItem>
          </Link>

          <Link to="/contact">
            <ListItem>
              <ListItemPrefix>
                <i className="fa-solid fa-phone-volume text-red-400"></i>
              </ListItemPrefix>
              <span className="text-red-400">Contact Us</span>
            </ListItem>
          </Link>
        </List>
        <Link to="/order">
          <Button className="mt-3 ml-5 w-[87%]" size="lg" color="yellow">
            ORDER NOW
          </Button>
        </Link>
      </Drawer>
    </>
  );
}
