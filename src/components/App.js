import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

const App = () => {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setImagePopupOpen(true);
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  }

  return (
    <div className="page__content">
      <Header/>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer/>

      <PopupWithForm
        title='Обновить аватар'
        name='update-avatar'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          id="avatar"
          placeholder="Ссылка на аватар"
          name="avatar"
          className="popup__input popup__input_avatar"
          required
          minLength="2"
        />
        <span className="popup__input-error avatar-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title='Редактировать профиль'
        name='edit-profile'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="profile-name"
          placeholder="Имя"
          name="name"
          className="popup__input popup__input_name"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error profile-name-error"></span>
        <input
          type="text"
          id="profile-profession"
          placeholder="Профессия"
          name="profession"
          className="popup__input popup__input_profession"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error profile-profession-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title='Новое место'
        name='add-card'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="gallery-name"
          placeholder="Название"
          name="description"
          className="popup__input popup__input_gallery"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__input-error gallery-name-error"></span>
        <input
          type="url"
          id="gallery-link"
          placeholder="Ссылка на картинку"
          name="link"
          className="popup__input popup__input_link"
          required
        />
        <span className="popup__input-error gallery-link-error"></span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;