import { AuthProvider } from "./app/contexts/AuthContext"
import { ThemeProvider } from "./app/contexts/ThemeContext"
import { Toaster } from "react-hot-toast"
import { Router } from "./router"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  },
})

function App() {
  return (
   <QueryClientProvider client={queryClient}>
     <AuthProvider>
       <ThemeProvider>
      <div className="flex items-center justify-center h-screen ">
      <Router />
      <Toaster />
    </div>
    </ThemeProvider>
    </AuthProvider>
    <ReactQueryDevtools />    
   </QueryClientProvider>
   
   
    
  
  )
}

export default App
