import userAcc from "../../assets/user-circle.png";
import UpdatePro from "../../assets/updatePro.png";
import logout from "../../assets/log-out.png";

const UserAccount = () => {
  const settings = [
    {
      icon: userAcc,
      label: "Account settings",
    },
    {
      icon: UpdatePro,
      label: "Upgrade to Pro",
    },
    {
      icon: logout,
      label: "Log out",
    },
  ];
  return (
    <div
      className="account-settings w-[280px] h-[186px] rounded-xl p-4 gap-[2px] flex flex-col  shadow-[0px_32px_48px_-8px_#0000001A,0px_0px_14px_-4px_#0000000D]
    backdrop-blur-[32px] mt-5 mx-6"
    >
      {settings.map((item, index) => (
        <div key={index} className="user-profile flex gap-5 p-3">
          <img src={item.icon} alt="" className="w-6 h-6" />
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default UserAccount;
