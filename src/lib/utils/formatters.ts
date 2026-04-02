/**
 * Format giá tiền theo định dạng Việt Nam
 * @example formatCurrency(19900000) → "19.900.000 đ"
 */
export function formatCurrency(amount: number): string {
  return amount.toLocaleString('vi-VN') + ' đ';
}

/**
 * Format số ngắn gọn
 * @example formatNumber(1500) → "1.500"
 */
export function formatNumber(value: number): string {
  return value.toLocaleString('vi-VN');
}

/**
 * Rút ngắn chuỗi nếu vượt quá maxLength
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

/**
 * Tạo slug từ tiếng Việt
 */
export function slugify(text: string): string {
  const from = 'àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ';
  const to   = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd';
  let str = text.toLowerCase();
  for (let i = 0; i < from.length; i++) {
    str = str.replace(new RegExp(from[i], 'g'), to[i]);
  }
  return str.replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').trim();
}
