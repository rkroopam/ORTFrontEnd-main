import { Divider, Drawer } from "@mui/material";
import DrawerContent from "./drawerContent";
import DrawerHeader from "./drawerHead";
import { drawerWidth } from "../../../config";
import { useSelector } from "react-redux";

const DrawerPage = () => {
  const open = useSelector((state: any) => state.menu.drawerOpen);

  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader />
        <Divider />
        <DrawerContent />
      </Drawer>
    </div>
  );
};

export default DrawerPage;
