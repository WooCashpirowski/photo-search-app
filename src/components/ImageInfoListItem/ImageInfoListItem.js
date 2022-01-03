import Wrapper from './ImageInfoListItem.style'

const ImageInfoListItem = ({ photo }) => {
  const formatDate = (date) => {
    const tempDate = date.split('T')[0]
    const day = tempDate.split('-')[2]
    const month = tempDate.split('-')[1]
    const year = tempDate.split('-')[0]

    return `${day}-${month}-${year}`
  }

  return (
    <Wrapper>
      <h3>{photo.alt_description ? photo.alt_description : 'No Title'}</h3>
      <h4>
        Photo by{' '}
        {photo.user.links.html ? (
          <a href={photo.user.links.html} target="_blank" rel="noReferrer">
            {photo.user.name}
          </a>
        ) : (
          <span>{photo.user.name}</span>
        )}
      </h4>
      <p className="description">{photo.description && photo.description}</p>
      <div className="imageInfoListItemBottom">
        <p>Published on {formatDate(photo.created_at)}</p>
        <a href={photo.links.html} target="_blank" rel="noReferrer">
          View on Unsplash
        </a>
      </div>
    </Wrapper>
  )
}

export default ImageInfoListItem
