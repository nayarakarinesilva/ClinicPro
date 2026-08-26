export const getAvatarInitial = (name) => {
  return name?.charAt(0).toUpperCase() ?? '';
};

export function formatCpf(cpf) {
  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}
