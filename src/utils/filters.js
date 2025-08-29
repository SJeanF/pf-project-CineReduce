export const latestFilter = (lista, n = 5) => {
  const hoje = new Date();

  return lista
    .slice()
    .filter((item) => new Date(item.release_date) <= hoje)
    .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
    .slice(0, n);
};

export const noteFilter = (lista, n = 5) =>
  lista
    .slice()
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, n);

export const budgetFilter = (lista, n = 5) =>
  lista
    .slice()
    .sort((a, b) => b.budget - a.budget)
    .slice(0, n);

export const revenueFilter = (lista, n = 5) =>
  lista
    .slice()
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, n);

export const lowerPriceFilter = (lista, n = 5) =>
  lista
    .slice()
    .sort((a, b) => a.price - b.price)
    .slice(0, n);
