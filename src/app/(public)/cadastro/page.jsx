import AuthPages from '@/features/Auth/AuthPages';
import RegisterForm from '@/features/Auth/Register/RegisterForm';

export default function Cadastro() {
  return <AuthPages formComponent={<RegisterForm />} />;
}
