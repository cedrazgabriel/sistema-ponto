import { ThemeProvider } from "./app/contexts/ThemeContext"
import { Login } from "./components/pages/Login/Login"
function App() {
  return (
    <ThemeProvider>
      <div className="flex items-center justify-center h-screen ">
      <Login />
    </div>
    </ThemeProvider>
    
  
  )
}

export default App
