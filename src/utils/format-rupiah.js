export function formatNumber(number) {
  // jika propertii bukan tipe number
  if (isNaN(parseInt(number))) return "";

  return new Intl.NumberFormat("id-ID", {
    maximumSignificantDigits: 3,
    style: "currency",
    currency: "IDR",
  }).format(number);
}
