import Post from "./Post";

export default function Posts() {
  let posts = [
    {
      id: 1,
      url: "https://picsum.photos/200/300",
      price: "23k",
      caption: "Life....",
      user: {
        fullName: "Sarah K",
        photoURL: "https://picsum.photos/50/50",
        username: "sar99"
      }
    },
    {
      id: 2,
      url: "https://picsum.photos/150/300",
      price: "15k",
      caption: "Paradise",
      user: {
        fullName: "Kelian S",
        photoURL: "https://picsum.photos/70/70",
        username: "kels"
      }
    },
    {
      id: 3,
      url: "https://picsum.photos/100/150",
      price: "35k",
      caption: "Nothing more...",
      user: {
        fullName: "Rock A",
        photoURL: "https://picsum.photos/20/30",
        username: "rockk"
      }
    }
  ];

  // let posts = [];
  return (
    <div className="posts">
      {posts.length > 0 ? (
        posts.map(post => <Post post={post} key={post.id} />)
      ) : (
        <div className="no__postError">No posts</div>
      )}
    </div>
  );
}
