import { UserContext }  from './context'
import { SidebarView, ChatView } from './views'
import { useLoaderData } from 'react-router-dom'

function App() {
    const {username} = useLoaderData()

    const providerValue = {
        username,
    }

    return (
        <UserContext.Provider value={providerValue}>
            <div className='h-screen w-screen flex'>
                <SidebarView />
                <ChatView />
            </div>
        </UserContext.Provider>
    );
}

export default App;
