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

export function DrawerWithNavigation({ hamburgerColor }) {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <button onClick={openDrawer} className="absolute top-2 right-3">
        <i
          className={`text-${
            hamburgerColor || "white"
          } text-2xl fa-solid fa-burger`}
        ></i>
      </button>
      <Drawer placement="right" open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            EATIK BOY
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
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
                <i className="fa-solid fa-house-chimney"></i>
              </ListItemPrefix>
              Home
            </ListItem>
          </Link>
          <Link to="/about">
            <ListItem>
              <ListItemPrefix>
                <i className="fa-solid fa-circle-info"></i>
              </ListItemPrefix>
              About Us
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
                <i className="fa-solid fa-phone-volume"></i>
              </ListItemPrefix>
              Contact Us
            </ListItem>
          </Link>
        </List>
        <Link to="/order">
          <Button className="mt-3 ml-5 w-[87%]" size="lg">
            ORDER NOW
          </Button>
        </Link>
      </Drawer>
    </>
  );
}
