import React, { useEffect, useState } from "react";
import "./LifeStyle.scss";
import Modal from "../Modal/Modal";

import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  useCreateLifeStyleMutation,
  useDeleteLifeStyleMutation,
  useEditPostMutation,
  useGetPostLifeStyleQuery,
  useGetSingleLifeStyleQuery,
} from "../../features/LifeStyle/lifeStyleSlice";

const LifeStyle = () => {
  const { data, isError, isLoading, isSuccess, error } =
    useGetPostLifeStyleQuery();

  const [
    deleteLifeStyle,
    {
      isError: deleted,
      isSuccess: deletedOkey,
      isLoading: isDeleteLoading,
      error: deleteError,
    },
  ] = useDeleteLifeStyleMutation();

  const [createLifeStyle] = useCreateLifeStyleMutation();
  const [
    editPost,
    {
      data: dataUpdated,
      isLoading: isLoadingUpdate,
      isSuccess: isSuccessUpdate,
      isError: isErrorUpdate,
      error: errorUpdate,
    },
  ] = useEditPostMutation();

  // all modal state
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  // all input feild
  const [input, setInput] = useState({
    photo: "",
    title: "",
    des: "",
  });

  const handleChangeInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const [indexData, setIndexData] = useState("");
  const {
    data: editData,
    isError: isErrorEdit,
    isLoading: isLoadingEdit,
    isSuccess: isSuccessEdit,
    error: errorEdit,
  } = useGetSingleLifeStyleQuery(indexData);

  // handle edit modal show
  const handleEdit = (id) => {
    setModalEdit(true);
    setIndexData(id);
  };

  /// edit input feild
  const [editInput, setEditInput] = useState({
    photo: "",
    title: "",
    des: "",
  });

  useEffect(() => {
    if (isSuccess) {
      setEditInput(editData);
    }
  }, [isSuccess, editData]);

  const handleChangeInpute = (e) => {
    setEditInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  let content = "";
  if (isLoading) {
    content = "Loading.....";
  }
  if (isSuccess) {
    content = data.map((data, index) => {
      let dess = data.des.split(" ").slice(0, 5).join(" ") + "......";
      let titles = data.title.split(" ").slice(0, 3).join(" ") + "....";

      return (
        <>
          <TableRow key={index}>
            <TableCell>{data.id}</TableCell>
            <TableCell>{titles}</TableCell>
            <TableCell>{dess}</TableCell>
            <TableCell>
              <Avatar
                alt="Remy Sharp"
                src={data.photo}
                sx={{ width: 40, height: 40 }}
              />
            </TableCell>
            <TableCell>
              <button onClick={() => deleteLifeStyle(data.id)}>Delete</button>
              <button onClick={() => handleEdit(data.id)}>Edit</button>
            </TableCell>
          </TableRow>
        </>
      );
    });
  }
  const hanldeSubmit = (e) => {
    e.preventDefault();
    createLifeStyle(input);
  };

  // update lifestyle

  const hanldeSubmitUpdate = (e) => {
    e.preventDefault();

    // console.log(editInput);
    editPost(editInput);
  };
  return (
    <>
      <div className="title">
        <span>Life Style Table</span>
        <button onClick={() => setModal(true)}>Create Post</button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{content}</TableBody>
        </Table>
      </TableContainer>
      {modal && (
        <Modal showHide={setModal}>
          <form onSubmit={hanldeSubmit}>
            <label htmlFor="">Photo</label>
            <input
              name="photo"
              value={input.photo}
              onChange={handleChangeInput}
              type="text"
            />
            <label htmlFor="">Title</label>
            <input
              name="title"
              value={input.title}
              onChange={handleChangeInput}
              type="text"
            />
            <label htmlFor="">Description</label>
            <input
              name="des"
              value={input.des}
              onChange={handleChangeInput}
              type="text"
            />
            <button type="submit">Submit</button>
          </form>
        </Modal>
      )}
      {modalEdit && (
        <Modal showHide={setModalEdit}>
          <form onSubmit={hanldeSubmitUpdate}>
            <label htmlFor="">Photo</label>
            <input
              name="photo"
              value={editInput.photo}
              onChange={handleChangeInpute}
              type="text"
            />
            <label htmlFor="">Title</label>
            <input
              name="title"
              value={editInput.title}
              onChange={handleChangeInpute}
              type="text"
            />
            <label htmlFor="">Description</label>
            <input
              name="des"
              value={editInput.des}
              onChange={handleChangeInpute}
              type="text"
            />
            <button type="submit">Submit</button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default LifeStyle;
