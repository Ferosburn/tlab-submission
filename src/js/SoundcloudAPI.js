import { useState } from "react";
import "../css/SoundcloudAPI.css";
import SoundcloudWidget from "soundcloud-widget";

const SoundcloudAPI = () => {
  const [isMenu, setIsMenu] = useState(true);
  const [trackId, setTrackId] = useState("");
  const [playlistId, setPlaylistId] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [link, setLink] = useState("");
  const [srcIndex, setSrcIndex] = useState(0);
  const [isSubmitted, setSubmitted] = useState(false);
  const [hint, setHint] = useState();
  const [title, setTitle] = useState("Menu");
  const [volume, setVolume] = useState(100);
  const emptyIFrame = <iframe title="soundcloud-player"></iframe>;

  let player;

  const handleBack = () => {
    setIsMenu(true);
    setHint("");
    setTitle("Menu");
  };

  const handleByTrackId = () => {
    setIsMenu(false);
    setSubmitted(false);
    setSrcIndex(0);
    setHint(
      <div className="input-hint m11 n">
        put a valid track id into text input
        <br />
        for example:
        <br />
        <b>338912171</b>
        <br />
        or
        <br />
        <b>275797279</b>
      </div>
    );
    player = emptyIFrame;
    setTitle("Track ID");
  };

  const handleByPlaylistId = () => {
    setIsMenu(false);
    setSubmitted(false);
    setSrcIndex(1);
    setHint(
      <div className="input-hint m11 n">
        put a valid playlist id into text input
        <br />
        for example:
        <br />
        <b>1581678955</b>
        <br />
        or
        <br />
        <b>363471011</b>
      </div>
    );
    player = emptyIFrame;
    setTitle("Playlist ID");
  };

  const handleByProfileUrl = () => {
    setIsMenu(false);
    setSubmitted(false);
    setSrcIndex(2);
    setHint(
      <div className="input-hint m11 n">
        put a valid profile url into text input
        <br />
        for example:
        <br />
        <b>buntmusic</b> in https://soundcloud.com/<b>buntmusic</b>
        <br />
        or
        <br />
        <b>5-seconds-of-summer</b> in https://soundcloud.com/
        <b>5-seconds-of-summer</b>
      </div>
    );
    player = emptyIFrame;
    setTitle("Profile URL");
  };

  const handleBySoundcloudLink = () => {
    setIsMenu(false);
    setSubmitted(false);
    setSrcIndex(3);
    setHint(
      <div className="input-hint m11 n">
        put a valid soundcloud track, playlist, or profile link into text input
        <br />
        for example:
        <br />
        <b>https://soundcloud.com/cows-420/tiny-little-adiantum</b>
        <br />
        or
        <br />
        <b>soundcloud.com/buntmusic/younghearts</b>
        <br />
        or
        <br />
        <b>https://soundcloud.com/fc7ivwga007b/sets/miditation-music</b>
        <br />
        or
        <br />
        <b>http://soundcloud.com/buntmusic</b>
        <br />
        or
        <br />
        <b>
          soundcloud.com/buntmusic?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
        </b>
      </div>
    );
    player = emptyIFrame;
    setTitle("SoundCloud Link");
  };

  const src = [
    `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}`,
    `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${playlistId}`,
    `https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/${profileUrl}`,
    `https://w.soundcloud.com/player/?url=https%3A//${link}`,
  ];

  if (isSubmitted !== false) {
    player = (
      <iframe
        id="sc-widget"
        title="soundcloud-player"
        src={src[srcIndex]}
      ></iframe>
    );
  } else {
    player = emptyIFrame;
  }

  const handleSubmit = () => {
    setSubmitted(true);
    setIsMenu(true);
  };

  const handleInputChange = (e) => {
    switch (srcIndex) {
      case 0:
        setTrackId(e.target.value);
        break;
      case 1:
        setPlaylistId(e.target.value);
        break;
      case 2:
        setProfileUrl(e.target.value);
        break;
      case 3:
        let value = e.target.value;
        let newValue;
        if (value.includes("http://")) {
          newValue = value.replace("http://", "");
        } else if (value.includes("https://")) {
          newValue = value.replace("https://", "");
        } else {
          newValue = value;
        }
        setLink(newValue);
        break;
      default:
        break;
    }
  };

  const handleNext = () => {
    const scIframe = document.getElementById("sc-widget");
    if (scIframe !== undefined) {
      const scWidget = new SoundcloudWidget(scIframe);
      scWidget.next();
      scWidget.seekTo(0);
    }
  };

  const handlePrev = () => {
    const scIframe = document.getElementById("sc-widget");
    if (scIframe !== undefined) {
      const scWidget = new SoundcloudWidget(scIframe);
      scWidget.prev();
      scWidget.seekTo(0);
    }
  };

  const handleVolume = (e) => {
    const scIframe = document.getElementById("sc-widget");
    if (scIframe !== undefined) {
      const scWidget = new SoundcloudWidget(scIframe);
      setVolume(e.target.value);
      scWidget.setVolume(volume);
    }
  };

  const menuButtons = (
    <div className="menu-buttons">
      <button onClick={handleByTrackId}>play by track id</button>
      <button onClick={handleByPlaylistId}>play by playlist id</button>
      <button onClick={handleByProfileUrl}>play by profile url</button>
      <button onClick={handleBySoundcloudLink}>play by soundcloud link</button>
    </div>
  );

  const menuInput = (
    <div className="menu-input">
      <div className="input-wrapper">
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="text input"
        />
        <input onClick={handleSubmit} type="button" value="submit" />
      </div>
      {hint}
    </div>
  );

  let hidden = "hidden";
  let menuContent;
  if (isMenu) {
    menuContent = menuButtons;
    hidden = "hidden";
  } else {
    menuContent = menuInput;
    hidden = "";
  }

  return (
    <div className="soundcloud-player">
      <div className="soundcloud-header">
        <h1>SoundCloud Player</h1>
      </div>
      <div className="player-content">
        <div className="player">{player}</div>
        <div className="menu">
          <div className="menu-header">
            <img
              className={`back ${hidden}`}
              src="./img/ic_arrow_left.svg"
              alt="back"
              onClick={handleBack}
            />
            <h2>{title}</h2>
          </div>
          {menuContent}
        </div>
        <div className="control">
          <div className="control-header">
            <h2>Control</h2>
          </div>
          <div className="control-content">
            <div className="control-buttons">
              <button onClick={handlePrev}><img src="./img/ic_skip_back.svg" alt="prev" /></button>
              <button onClick={handleNext}><img src="./img/ic_skip_forward.svg" alt="next" /></button>
            </div>
            <div className="volume">
              <input
                onChange={handleVolume}
                type="range"
                max="100"
                min="0"
                step="10"
                value={volume}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundcloudAPI;
