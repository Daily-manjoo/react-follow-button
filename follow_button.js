// React Component!
// Follow <-> following
function FollowButton() {
  const [following, setFollowing] = React.useState(false);

  const commonBtnStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "12px",
    right: "16px",
    width: "100px",
    height: "36px",
    borderRadius: "9999px",
    fontWeight: "bold",
  };

  const followBtnStyle = {
    ...commonBtnStyle, //commonBtnStyle 객체를 스프레드해서 스타일 추가
    backgroundColor: "black",
    color: "white",
  };

  const followingBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "white",
    color: "black",
    border: "1px solid #cfd9de",
  };

  return React.createElement(
    "div",
    {
      onClick: () => setFollowing(!following),
      style: following ? followingBtnStyle : followBtnStyle,
    },
    following ? "following" : "Follow"
  );
}

const domContainer = document.querySelector("#follow_button_container");
const root = ReactDOM.createRoot(domContainer); //첫번째 불러들임
root.render(React.createElement(FollowButton)); // 첫번째로 dom을 render하고 두번째 인자로는 followbutton
