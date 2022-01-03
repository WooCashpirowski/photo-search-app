import { useContext } from 'react'
import { FaThList, FaThLarge, FaStar } from 'react-icons/fa'
import { AppContext } from '../../context/context'
import ImageInfoListItem from '../ImageInfoListItem/ImageInfoListItem'
import { Container, Heading, ImagesWrapper } from './Results.styled'

const Results = ({ total, photos }) => {
  const { isList, setListView } = useContext(AppContext)

  const isOlderThanTwoWeeks = (date) => {
    const twoWeeks = 14 * 24 * 60 * 60000
    const today = new Date().getTime()
    return today - new Date(date).getTime() > twoWeeks
  }

  return (
    <Container>
      <Heading>
        <h2>{total} results found</h2>
        <div className="buttons">
          <button
            onClick={() => setListView(true)}
            className={isList ? '' : 'inactive'}
          >
            <FaThList />
          </button>
          <button
            onClick={() => setListView(false)}
            className={isList ? 'inactive' : ''}
          >
            <FaThLarge />
          </button>
        </div>
      </Heading>
      <ImagesWrapper className={isList ? 'list' : ''}>
        {photos.map((photo) => (
          <div className="imageWrapper" key={photo.id}>
            <div className="image">
              <img src={photo.urls.small} alt={photo.alt_description} />
            </div>
            {!isList ? (
              <div
                className={
                  !isOlderThanTwoWeeks(photo.created_at)
                    ? 'imageInfoGridItem flexReverse'
                    : 'imageInfoGridItem'
                }
              >
                {!isOlderThanTwoWeeks(photo.created_at) && <FaStar />}
                {!!photo.alt_description && (
                  <h5 className="imageTitle">{photo.alt_description}</h5>
                )}
              </div>
            ) : (
              <>
                {!isOlderThanTwoWeeks(photo.created_at) && <FaStar />}
                <ImageInfoListItem photo={photo} />
              </>
            )}
          </div>
        ))}
      </ImagesWrapper>
    </Container>
  )
}

export default Results
