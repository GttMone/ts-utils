type AvailableTypes = 'string' | 'number' | 'array' | 'string?' | 'number?' | 'array?';

export function validateFields(fields: any[], types: AvailableTypes[]): boolean {
    for (let index = 0; index < fields.length; index++) {
        const field = fields[index];
        const type = types[index];

        if (type.endsWith('?')) {
            if (!field) return true;
            return typeof field === type.split('?')[0];
        }

        if (!field || !type) return false;
        if (type === 'array') {
            if (!Array.isArray(field)) return false;
            continue;
        }
        if (typeof field !== type) return false;
        if (typeof field === 'string' && !field.trim()) return false;
    }
    return true;
};
