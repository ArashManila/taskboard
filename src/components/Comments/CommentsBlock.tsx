import { CommentsType } from "../../types/types";
import Comment from "./Comment";
// import data from "../../DataManagment/Data";

type CommentBlockProps={
  comments: {[key: string]: CommentsType},
  updateCommentsState:(arg:CommentsType)=>void,
  remove: (arg1:string,arg2:string)=>void
}

const CommentsBlock = ({remove,comments,updateCommentsState}:CommentBlockProps) => {

  return (
    <>
      {comments ? (
        Object.entries(comments).map(([key,value]) => (
          <Comment updateCommentsState={updateCommentsState} key={key} content={value} remove={remove}/>
        ))
      ) : (
        <h4>No comments</h4>
      )}
    </>
  );
};

export default CommentsBlock;
