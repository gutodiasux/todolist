import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import './styles/global.scss'
import { Toaster } from 'react-hot-toast';


export function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <TaskList />
    </>
  )
}