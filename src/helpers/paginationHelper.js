export const getPagination = (items, page, itemsPerPage) => {
  // Calcula quantas páginas serão necessárias
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Define onde começa e termina a lista da página atual
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Pega somente os pacientes que serão exibidos na página atual
  const paginatedItems = items.slice(start, end);
  
  return {
    paginatedItems,
    totalPages,
  };
};
