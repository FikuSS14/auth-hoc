import { useState } from 'react';
import { LoginSimulatorProps, CurrentUser, UserRole } from '../types/user.types';

/**
 * Симулятор входа для тестирования HOC
 */
function LoginSimulator({ onLogin, onLogout, currentUser }: LoginSimulatorProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>('guest');
  
  const users: Record<UserRole, CurrentUser> = {
    admin: { id: '1', name: 'Администратор', roles: ['admin'] },
    moderator: { id: '2', name: 'Модератор', roles: ['moderator'] },
    user: { id: '3', name: 'Обычный пользователь', roles: ['user'] },
    guest: { id: '4', name: 'Гость', roles: ['guest'] }
  };
  
  const handleLogin = () => {
    onLogin(users[selectedRole]);
  };
  
  return (
    <div className="login-simulator">
      <h3>Симулятор входа</h3>
      {currentUser ? (
        <div>
          <p>Вы вошли как: <strong>{currentUser.name}</strong> (роль: {currentUser.roles.join(', ')})</p>
          <button onClick={onLogout} className="logout-btn">Выйти</button>
        </div>
      ) : (
        <div>
          <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value as UserRole)}>
            <option value="admin">Администратор</option>
            <option value="moderator">Модератор</option>
            <option value="user">Пользователь</option>
            <option value="guest">Гость</option>
          </select>
          <button onClick={handleLogin}>Войти</button>
        </div>
      )}
    </div>
  );
}

export default LoginSimulator;