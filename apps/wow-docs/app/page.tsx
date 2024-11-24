import { routePath } from "@constants/routePath";
import { redirect } from "next/navigation";

const Home = () => {
  return redirect(routePath.overview);
};

export default Home;
