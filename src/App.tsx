import { useState } from 'react';
import './App.css';
import { withAuthorization } from './hoc/withAuthorization';
import AdminPanel from './components/AdminPanel';
import UserProfile from './components/UserProfile';
import LoginSimulator from './components/LoginSimulator';
import { CurrentUser } from './types/user.types';

// Создаём защищённые версии компонентов
const AdminPanelWithAuth = withAuthorization(AdminPanel, ['admin']);
const UserProfileWithAuth = withAuthorization(UserProfile, ['admin', 'user']);

function App() {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  
  const handleLogin = (user: CurrentUser) => {
    setCurrentUser(user);
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
  };
  
  return (
    <div className="app">
      <h1>HOC для контроля доступа</h1>
      <p className="subtitle">Компонент высшего порядка withAuthorization</p>
      
      <LoginSimulator 
        onLogin={handleLogin}
        onLogout={handleLogout}
        currentUser={currentUser}
      />
      
      <div className="components-grid">
        <div className="card">
          <AdminPanelWithAuth currentUser={currentUser} title="Секретная админ-панель" />
        </div>
        
        <div className="card">
          <UserProfileWithAuth currentUser={currentUser} />
        </div>
      </div>
      
      <div className="info">
        <h4>Как это работает:</h4>
        <ul>
          <li><strong>AdminPanel</strong> — доступен только с ролью <code>admin</code></li>
          <li><strong>UserProfile</strong> — доступен с ролями <code>admin</code> или <code>user</code></li>
          <li>HOC <code>withAuthorization</code> проверяет роли и показывает заглушку при отсутствии прав</li>
          <li>Типизация — строгая TypeScript, без <code>any</code></li>
        </ul>
      </div>
    </div>
  );
}

export default App;