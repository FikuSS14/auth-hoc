import { CurrentUser } from '../types/user.types';

/**
 * Пропсы для админ-панели
 */
interface AdminPanelProps {
  currentUser: CurrentUser | null;
  title?: string;
}

/**
 * Компонент админ-панели (доступен только admin)
 */
function AdminPanel({ currentUser, title = 'Админ-панель' }: AdminPanelProps) {
  return (
    <div className="admin-panel">
      <h2>{title}</h2>
      <p>Добро пожаловать в админ-панель, {currentUser?.name}!</p>
      <div className="admin-actions">
        <button>Управление пользователями</button>
        <button>Настройки системы</button>
        <button>Просмотр логов</button>
      </div>
    </div>
  );
}

export default AdminPanel;