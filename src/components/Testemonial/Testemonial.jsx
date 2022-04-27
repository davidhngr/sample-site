export default function Testemonial({avatar, name, role, message}) {
  return (
    <div className="testemonial">
      <div className="user">
        <img className="user-avatar" src={avatar} alt="entrepreneur" />
        <div className="user-information">
          <div className="user-name">{name}</div>
          <div className="user-role">{role}r</div>
        </div>
      </div>
      <div className="testemonial-message">
        {message}
      </div>
    </div>
  );
}
