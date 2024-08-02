import styled from "@emotion/styled";
const DHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  height: "64px",
  justifyContent: "center",
}));
const DrawerHeader = () => {
  return <DHeader>ORT Dashboard</DHeader>;
};

export default DrawerHeader;
