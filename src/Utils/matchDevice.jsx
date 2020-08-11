import sizes from '../Constants/Constants.js';


export const isTablet = () => {
    const match = window.matchMedia( sizes.TABLET );

    if ( match.matches ) {
        return true;
    }

    return false
}

export const isMobile = () => {
    const tablet  = window.matchMedia( sizes.TABLET );
    const desktop = window.matchMedia( sizes.DESKTOP );

    if ( !tablet.matches && !desktop.matches) {
        return true;
    }

    return false
}