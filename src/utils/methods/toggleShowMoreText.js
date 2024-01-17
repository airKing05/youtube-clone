export const toggleShowMoreText = (showState) => {
return (
    {
        'overflow': 'hidden',
        'display': `-webkit-box`,
        'WebkitLineClamp': `${showState ? 3 : 100}`,
        'WebkitBoxOrient': `vertical`
    }
)
}