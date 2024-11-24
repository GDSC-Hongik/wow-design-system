import { redirect } from "next/navigation";

import { routePath } from "@/constants/routePath";

const Home = () => {
  return redirect(routePath.overview);
};

export default Home;
