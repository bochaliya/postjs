function type(pgType) {
    if(pgType === 'uuid' || pgType === 'text') {
        return 'string';
    }
    else if(pgType === 'bigint') {
        return 'number';
    }
    else if(pgType === 'jsonb' || pgType === 'json') {
        return 'object';
    }
    else {
        throw new Error('uncompatable type');
    }
}