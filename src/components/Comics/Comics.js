import { API_URL, URL_COMICS, IMG_STANDART_XLARGE, IMG_NOT_AVIABLE, URL_CHARACTESR } from '../../constants/api'
import { getDataApi } from '../../utils/getDataApi'
import { ROOT_INDEX } from '../../constants/root'

import Characters from '../Characters'
import Error from '../Error'

import * as classes from "./Comics.css";

class Comics {

  renderComics(data) {
    let htmlContent = '';

    data.forEach(({ id, title, thumbnail: { path, extension } }) => {

      if (path.lastIndexOf(IMG_NOT_AVIABLE) === -1) {
        const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTESR
        const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension

        htmlContent += `
          <li class="comics__item ${classes.border} ${classes.comics__item}" data-uri="${uri}">
            <span class="${classes.comics__name}">${title}</span>
            <img class="img-contain ${classes.comics__img}" src="${imgSrc}" />
          </li>
        `;
      }

    })

    const htmlWrapper = `
      <ul class="${classes.comics__container}">
        ${htmlContent}
      </ul>
    `

    ROOT_INDEX.innerHTML = htmlWrapper
  }

  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS)
    if (data) {
      this.renderComics(data)
    } else {
      Error.render()
    }
  }

  eventListener() {
    document.querySelectorAll('.comics__item').forEach(item => {
      const uri = item.getAttribute('data-uri')

      item.addEventListener('click', () => {
        Characters.render(uri)
      })
    })
  }
}

export default new Comics()