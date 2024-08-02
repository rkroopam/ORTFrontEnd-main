import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { get_AllTeachers } from "../../../api/services/user";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { selectUser } from "../../../store/reducers/authSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import StudentForm from "./studentForm";

const Teachers = () => {
  const [openAddTeacher, setOpenAddTeacher] = React.useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
  const handleOpen = () => setOpenAddTeacher(true);
  const token: any = useSelector((state: any) => state.auth.token);
  const user: any = useSelector((state: RootState) => selectUser(state));

  const { data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => get_AllTeachers(user, token),
  });

  const handleClose = () => {
    setIsEditing(false);
    setOpenAddTeacher(false);
    setSelectedTeacher(null); // Reset to null
  };
  // const handleDelete = async (id: string) => {
  //   try {
  //     // await delete_user(id);
  //     refetch();
  //     console.log("Item Deleted successfully");
  //   } catch (error) {
  //     console.error("Error deleting student:", error);
  //   }
  // };

  const handleEdit = (item: any) => {
    setOpenAddTeacher(true);
    setIsEditing(true);
    setSelectedTeacher(item);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <h2 className="text-xl font-medium">Teachers</h2>
        <Button variant="contained" onClick={handleOpen}>
          Add new
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sr. No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.items?.map((item: any, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>
                  {item.fName}
                  {item.lName}
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phoneNumber}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleEdit(item)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                    //  onClick={() => handleDelete(item._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StudentForm
        refetch={refetch}
        open={openAddTeacher}
        handleClose={handleClose}
        isEditing={isEditing}
        student={selectedTeacher}
      />
    </Box>
  );
};

export default Teachers;
