import ReactPlayer from "react-player";
/* eslint-disable-next-line */

export function NewVideoPlayer(props) {
  return (
    <div className="video-player">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Oy6hk6Y7VHQ&t=6s"
        width={'100%'}
        height={200}
      />
    </div>
  );
}

export default NewVideoPlayer;
