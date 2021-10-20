import Avatar from "@mui/material/Avatar";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar alt={post.user.fullName} src={post.user.photoURL} />
        <h4>{post.user.username}</h4>
      </div>
      <div className="post__body">
        <img src={post.url} alt="Post" title="Click to buy" />
      </div>
      <div className="post__footer">
        <p className="post__caption">{post.caption}</p>
        <p className="post__caption">Rs. {post.price}</p>
      </div>
    </div>
  );
}
