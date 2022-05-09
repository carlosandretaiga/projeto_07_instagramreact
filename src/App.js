import Navbar from './Navbar'; 
import Sidebar from './Sidebar';
import MobileBackground from './MobileBackground';
import Stories from './Stories';
import Posts from './Posts';

export default function App () {
    return (
        <div>
            <Navbar /> 
            <div class="corpo">
                <div class="esquerda"> 
                <Stories /> 
                <Posts /> 
                </div> 

                <Sidebar />
            </div>
            <MobileBackground />
        </div>
    )
}