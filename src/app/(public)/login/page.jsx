import AuthPages from '@/features/Auth/AuthPages';
import LoginForm from '@/features/Auth/Login/LoginForm';

export default function Login() {
  return <AuthPages formComponent={<LoginForm />} />;
}
