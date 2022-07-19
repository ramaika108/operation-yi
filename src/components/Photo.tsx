import {FunctionComponent} from 'react';
import closeImg from '../images/dist/Close-menu.svg';
import {PhotoType} from '../types';

type Props = {
    photo:PhotoType
}

const Photo:FunctionComponent<Props> = ({photo}) => {
    const handleImageRemove = () => {
        console.log('remove photo with name: ', photo.name)
    }
    return(
        <div className="photo" key={photo.filepath}>
            <img src={photo.thumbpath} alt="Фотография" className="photo__img" />
            <p className="photo__name">{photo.name}</p>
            <p className="photo__date">11 июня 2018</p>
            <img className="photo__delete" src={closeImg} alt="Удалить" onClick={handleImageRemove} />
        </div>
    )

    }

export default Photo;
