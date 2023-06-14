import React from "react"
import styles from './main_images.styles.css'
import {useNavigate} from "react-router";

function MainImages() {
    const navigate = useNavigate();

    const changeRoute = (url) => {
        if (url) {
            navigate(`/${url}`)
        }
        else {
            navigate('/')
        }
    }
    return (
      <div className={'main__images'}>
          <div className={'image-left'}>
          </div>
          <div className={'image-right'}>
              <span className={'image-right__text'}>
                  CARAMEL.STORE
              </span>
              <button className={'image-right__button'} onClick={() => changeRoute('shop')}>
                  Каталог
              </button>
          </div>
      </div>
    );
}

export default MainImages;
