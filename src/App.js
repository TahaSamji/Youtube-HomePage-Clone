

import { Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
function App() {
  return (

    <div className="App">
      <NavBar/>
      <Stack direction={'row'} spacing={3} justifyContent={'space-between'}>
        <SideBar />
        <Feed />
      </Stack>
    </div>

  );
}

export default App;
