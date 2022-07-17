import {FunctionComponent} from 'react';
import closeImg from '../images/dist/Close-menu.svg';
import {PhotoType} from '../types';


type Props = {
    photos:PhotoType[]
    authToken:string
}

const AttachedPohotos:FunctionComponent<Props> = ({photos, authToken}) => {
    return(
        <div className="main-block__info">
            <div className="info__title">
                <h3>ПРИЛОЖЕННЫЕ ФОТО</h3>
            </div>
            {photos.map(photo => (
                <div className="photo">
                    <img src={photo.thumbpath} alt="Фотография" className="photo__img" />
                    <p className="photo__name">{photo.name}</p>
                    <p className="photo__date">11 июня 2018</p>
                    <img className="photo__delete" src={closeImg} alt="Удалить" />
                </div>
            ))}
                <div className="button">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.9 8a.6.6 0 01.6-.6h11a.6.6 0 110 1.2h-11a.6.6 0 01-.6-.6z" fill="#82B284"/><path fillRule="evenodd" clipRule="evenodd" d="M8 1.9a.6.6 0 01.6.6v11a.6.6 0 11-1.2 0v-11a.6.6 0 01.6-.6z" fill="#82B284"/></svg>
                    <p>ДОБАВИТЬ ИЗОБРАЖЕНИЕ</p>
                </div>
        </div>
    )
}

export default AttachedPohotos;
