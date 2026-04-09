import { CurrentUser } from '../types/user.types';

/**
 * Пропсы для профиля пользователя
 */
interface UserProfileProps {
  currentUser: CurrentUser | null;
}

/**
 * Компонент профиля (доступен user и admin)
 */
function UserProfile({ currentUser }: UserProfileProps) {
  if (!currentUser) {
    return (
      <div className="user-profile">
        <p>Войдите в систему, чтобы увидеть профиль</p>
      </div>
    );
  }
  
  return (
    <div className="user-profile">
      <h2>Профиль пользователя</h2>
      <p><strong>Имя:</strong> {currentUser.name}</p>
      <p><strong>ID:</strong> {currentUser.id}</p>
      <p><strong>Роли:</strong> {currentUser.roles.join(', ')}</p>
    </div>
  );
}

export default UserProfile;