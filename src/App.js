import { useState } from 'react'
import Container from './components/Container'
import Card from './components/Card'
import UserForm from './components/UserForm'
import './App.css'

function App() {
    const [users, setUsers] = useState([])
    const submit = (user) => {
        setUsers([...users, user])
    }
    return (
        <div style={{ marginTop: '15%' }}>
            <Container>
                <Card>
                    <div style={{ padding: '20px' }}>
                        <UserForm submit={submit} />
                    </div>
                </Card>
                <Card>
                    <ul style={{ listStyle: 'none' }}>
                        {users.map((user) => (
                            <li
                                key={user.correo}
                            >{`${user.name} ${user.lastname}: ${user.correo}`}</li>
                        ))}
                    </ul>
                </Card>
            </Container>
        </div>
    )
}

export default App
