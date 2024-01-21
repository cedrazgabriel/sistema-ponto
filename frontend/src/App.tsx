import { ThemeProvider } from "./app/contexts/ThemeContext"
import { Login } from "./components/pages/Login/Login"
import { ModeToggle } from "./components/ui/mode-toogle"


function App() {
  return (
    <ThemeProvider>
      <div className="flex items-center justify-center h-screen ">
      <ModeToggle />
      <Login />
    </div>
    </ThemeProvider>
    
  
  )
}

export default App
