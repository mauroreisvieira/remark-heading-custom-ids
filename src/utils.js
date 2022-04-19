export function slugify(text, options = {}) {
    const separator = options.separator || '-';
    return text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036F]/g, '')
        .toLowerCase()
        .replace(/[^\s\w-]/g, '')
        .trim()
        .replace(/[\s-]+/g, separator);
}
