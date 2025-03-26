import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
