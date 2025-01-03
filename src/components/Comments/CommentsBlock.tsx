import { useContext, useState } from "react";

import Modal from "../Modal/Modal";
import SetData from "../Forms/SetDataForm";

import deletion from "../../icons/delete.png";
import edit from "../../icons/edit.png";


const CommentsBlock = ({ columnIndex, cardIndex, comments }) => {

  const [activeCommentEdit, setActiveCommentEdit] = useState(false);
  const { lists, setLists } = useContext(BoardContext);

  const RemoveComment = (comment, ind1, ind2) => {
    let newList = structuredClone(lists);
    let newComment = newList[ind1].items[ind2].comments.filter(
      (i) => i.id !== comment.id
    );
    newList[ind1].items[ind2].comments = newComment;
    setLists(newList);
  };

  const EditComment = (e, ind1, ind2, ind3) => {
    let newList = structuredClone(lists);
    newList[ind1].items[ind2].comments[ind3].body = e;
    setLists(newList);
  };

  const Handle = (e) => {
    e.stopPropagation();
    setActiveCommentEdit(true);
  };

  const close = () => {
    setActiveCommentEdit(false);
  };

  return (
    <>
      {comments ? (
        comments.map((o, ind) => (
          <li key={ind} className="card__item-comments-item">
            <div className="card__item-comments-item-wrapper">
              <h4 className="card__item-comments-item-title">{o.user}</h4>
              <div className="card__item-comments-item-abilities-wrapper">
                <img
                  src={deletion}
                  alt=""
                  onClick={() => RemoveComment(o, columnIndex, cardIndex)}
                />
                <img src={edit} alt="" onClick={Handle} />
              </div>
            </div>
            <div className="card__item-comments-item-content">{o.body}</div>
            {activeCommentEdit && (
              <Modal
                active={activeCommentEdit}
                setActive={setActiveCommentEdit}
              >
                <SetData
                  prev={o.body}
                  close={close}
                  changeData={(e) =>
                    EditComment(e, columnIndex, cardIndex, ind)
                  }
                  placeholder="Enter your comment:"
                />
              </Modal>
            )}
          </li>
        ))
      ) : (
        <h4>No comments</h4>
      )}
    </>
  );
};

export default CommentsBlock;
