import Avatar from "@mui/material/Avatar";

export default function Stories() {
  let stories = [
    {
      url: "https://picsum.photos/10",
      user: "A"
    },
    {
      url: "https://picsum.photos/15",
      user: "A"
    },
    {
      url: "https://picsum.photos/11",
      user: "A"
    },
    {
      url: "https://picsum.photos/12",
      user: "A"
    },
    {
      url: "https://picsum.photos/13",
      user: "A"
    }
  ];

  return (
    <div className="stories">
      {stories.length > 0
        ? stories.map(story => (
            <Avatar src={story.url} alt={story.user} className="story" />
          ))
        : null}
    </div>
  );
}
