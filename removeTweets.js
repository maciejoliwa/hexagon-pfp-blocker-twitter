// This constant determines how often the script will be checking for hexagon profile pictures
const RUN_EVERY = 1500;
const PROFILE_PICTURE_CLASS = '.css-1dbjc4n.r-1wyvozj.r-u8s1d.r-1v2oles.r-desppf';
const HEXAGON_PROFILE_PICTURE_STYLE = 'clip-path: url("#hex-hw-shapeclip-clipconfig")'; 

const isNFTProfilePicture = element => {
    const styleAttribute = element.getAttribute('style') || '';

    if (!styleAttribute) {
        return false;
    }

    /*
    These hexagon profile pictures have one style property which value that can be seen
    in the HEXAGON_PROFILE_PICTURE_STYLE constant.
    If a profile picture contains such style, this functions will return true.
    */
    return styleAttribute.includes(HEXAGON_PROFILE_PICTURE_STYLE);
}

const getArticles = () => [...document.querySelectorAll('article')];
const getProfilePictures = article => [...article.querySelectorAll(PROFILE_PICTURE_CLASS)];

// This functions will filter any people who
const filterRespectableProfilePictures = (elements = []) => elements.filter(isNFTProfilePicture);

const run = () => {
    const articles = getArticles();
    articles.forEach(article => {
        const pfp = filterRespectableProfilePictures(getProfilePictures(article));
        pfp.forEach(() => {
            // Remove post of hexagon profile picture haver
            article.remove();
        });
    });
} 

setInterval(run, 1500);