export const POPULAR_ENTITY = {
    'SET_SELECTED_LANGUAGE': 'POPULAR_ENTITY.SET_SELECTED_LANGUAGE',
    'SET_SHOW_LOADER': 'POPULAR_ENTITY.SET_SHOW_LOADER',
    'SET_REPOS': 'POPULAR_ENTITY.SET_REPOS',
    'SET_ERROR': 'POPULAR_ENTITY.SET_ERROR'
}


export const setSelectedLanguage = (payload) => ({
    type: POPULAR_ENTITY.SET_SELECTED_LANGUAGE,
    payload
});

export const setShowLoader = (payload) => ({
    type: POPULAR_ENTITY.SET_SHOW_LOADER,
    payload
});

export const setRepos = (payload) => ({
    type: POPULAR_ENTITY.SET_REPOS,
    payload
});

export const setError = (payload) => ({
    type: POPULAR_ENTITY.SET_ERROR,
    payload
});