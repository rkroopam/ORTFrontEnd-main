import React, { useState } from "react";
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
import { useQuery } from "@tanstack/react-query";
import { delete_user, get_AllStudent } from "../../../api/services/user";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import StudentForm from "../students/studentForm/index";
import { CustomLoader } from "../../../common";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { selectUser } from "../../../store/reducers/authSlice";

const Students = () => {
  const [openAddStudent, setOpenAddStudent] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<any>(null); // Changed to null instead of empty string
  const handleOpen = () => setOpenAddStudent(true);
  const handleClose = () => {
    setIsEditing(false);
    setOpenAddStudent(false);
    setSelectedStudent(null); // Reset to null
  };

  const token: any = useSelector((state: any) => state.auth.token);
  const user: any = useSelector((state: RootState) => selectUser(state));

  const { isPending, data, refetch } = useQuery({
    queryKey: ["student"],
    queryFn: () => get_AllStudent(user, token),
  });

  const handleDelete = async (id: string) => {
    try {
      await delete_user(id);
      refetch();
      console.log("Item Deleted successfully");
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleEdit = (item: any) => {
    setOpenAddStudent(true);
    setIsEditing(true);
    setSelectedStudent(item);
  };

  if (isPending) return <CustomLoader />;

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
        <h2 className="">Students</h2>
        <Button variant="contained" onClick={handleOpen}>
          Add new
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sr. No</TableCell>
              <TableCell>Student Name</TableCell>
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
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {item.firstName} {item.lastName} {/* Concatenate properly */}
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
                    <IconButton onClick={() => handleDelete(item._id)}>
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
        open={openAddStudent}
        handleClose={handleClose}
        isEditing={isEditing}
        student={selectedStudent}
      />
    </Box>
  );
};

export default Students;
