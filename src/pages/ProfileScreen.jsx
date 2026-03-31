import MainLayout from "../layout/MainLayout";

const ProfileScreen = () => {
  return (
    <MainLayout>
      <div className="header">Account Settings</div>

      <div className="card">
        <div>
          <img className="profile" src="Ellipse 114@2x.png" alt="profile" />
          <img className="profile-camera" src="Group 1585@2x.png" alt="" />
          <div className="profile-info">
            <p className="username">Marry Doe </p>
            <div className="email">Marry@gmail.com</div>
          </div>
        </div>

        <div className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfileScreen;
