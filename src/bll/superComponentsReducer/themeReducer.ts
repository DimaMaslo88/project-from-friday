type InitStateType = {
    themes: string
}
const initState = {
    themes: "some"
};

type GeneralType = ChangeThemeCType
export const themeReducer = (state = initState, action: GeneralType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, themes: action.themes};
        }
        default:
            return state;
    }
};

type ChangeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (themes: string) => {
    return {
        type: "CHANGE_THEME",
        themes
    } as const
};