import { styled } from "@styled-system/jsx";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <styled.main
      backgroundColor="primary"
      height="100vh"
      margin="-70px -102px 0 -101px"
      padding="70px 102px 0 101px"
    >
      {children}
    </styled.main>
  );
};

export default Layout;
