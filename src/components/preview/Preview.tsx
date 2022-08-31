import Header from "../header/Header";
import './preview.scss';
import '../content.scss';
import Search from "./searchForm/Search";

const Preview = () => {
  return (
    <div className="preview">
      <Header />
      <div className="content">
        <div className="preview__wrapper">
          <h2 className="preview__title">Explore the beauty of the World</h2>
          <p className="preview__subtitle">Recieve personalized recommendations for countries, hotels, activities and more</p>
          <div id="planning-form" className="preview__search-form">
            <Search />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview