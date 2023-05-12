// React Component!
// Follow <-> following
function FollowButton() {
  return React.createElement("div", {}, "Follow");
}

const domContainer = document.querySelector("#follow_button_container");
const root = ReactDOM.createRoot(domContainer); //첫번째 불러들임
root.render(React.createElement(FollowButton)); // 첫번째로 dom을 render하고 두번째 인자로는 followbutton
