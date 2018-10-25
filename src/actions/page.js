export function showLoading(type, bool) {
    return {
        type,
        isLoading: bool,
    };
}

export function showError(type, bool, err) {
    return {
        type,
        hasError: bool,
        error: err,
    };
}
