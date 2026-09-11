export const getAvatarInitial = (name) => {
  return name?.charAt(0).toUpperCase() ?? '';
};

export const formatCpf = (cpf) => {
  if (!cpf) return '';

  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

export const formatPhone = (phone) => {
  if (!phone) return '';
  const numbers = phone?.replace(/\D/g, '');

  if (numbers?.length === 10) {
    return numbers.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
  }

  if (numbers?.length === 11) {
    return numbers.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  }
  return phone;
};

