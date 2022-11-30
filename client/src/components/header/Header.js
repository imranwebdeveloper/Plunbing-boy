import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import Container from "../common/Container";
import AuthLink from "./AuthLink";
import Logo from "./Logo";
import { Nav } from "./Nav";
import UserProfile from "./UserProfile";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="py-3  shadow text-neutral-700 ">
      <Container CS="flex justify-between items-center md:gap-1 ">
        <Logo />
        <Nav />
        <AuthLink />
        {user && <UserProfile user={user} />}
      </Container>
    </header>
  );
};

export default Header;
