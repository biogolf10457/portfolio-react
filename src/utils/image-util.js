function getImageURL(name) {
    return new URL(`../../assets/skillsLogo/${name}`, import.meta.url).href
}

export {getImageURL}