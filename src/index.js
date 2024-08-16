import HelloUser from "./App";
import {GreetingBye,GreetingHRW} from "./App";
import { createRoot } from "react-dom/client";


const root = createRoot(document.getElementById("root"));




root.render(<>
<h1>All Greetings</h1> 
<HelloUser name="Rutuja"/>
<GreetingBye/>
<GreetingHRW/>
</>
)